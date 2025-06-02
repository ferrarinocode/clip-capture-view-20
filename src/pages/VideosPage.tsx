
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Play, ArrowLeft, Loader2 } from 'lucide-react';
import { Video } from '@/types/Video';
import VideoModal from '@/components/VideoModal';
import { useNavigate } from 'react-router-dom';
import { useVideos } from '@/hooks/useVideos';
import Footer from '@/components/Footer';

const VideosPage = () => {
  const navigate = useNavigate();
  const { videos, loading } = useVideos();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.theme.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getVideoEmbedUrl = (url: string) => {
    // YouTube
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
    }

    // Vimeo
    const vimeoRegExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return '';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
          <p className="text-white">Carregando vídeos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Modern Header */}
      <header className="bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10 flex items-center gap-2 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-white mb-4 tracking-tight">Biblioteca de Vídeos</h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Explore nossa coleção completa de conteúdos exclusivos
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Buscar vídeos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/10">
                <Play className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                <div className="text-slate-300 text-xl mb-2">
                  {searchTerm ? 'Nenhum vídeo encontrado' : 'Nenhum vídeo disponível'}
                </div>
                <p className="text-slate-500 text-sm">
                  {searchTerm ? 'Tente buscar por outros termos' : 'Aguarde novos conteúdos'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className="bg-white/5 backdrop-blur-sm group hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10 shadow-xl overflow-hidden hover:shadow-2xl hover:border-cyan-400/50"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || '/placeholder.svg'}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-white/20 text-slate-300 hover:bg-cyan-500/20 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
                    >
                      Assistir
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          embedUrl={getVideoEmbedUrl(selectedVideo.videoUrl)}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default VideosPage;
