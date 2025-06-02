
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Play, ArrowLeft } from 'lucide-react';
import { Video } from '@/types/Video';
import VideoModal from '@/components/VideoModal';
import { useNavigate } from 'react-router-dom';

const VideosPage = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('videos') || '[]');
    setVideos(storedVideos);
    setFilteredVideos(storedVideos);
  }, []);

  useEffect(() => {
    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.theme.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
  }, [searchTerm, videos]);

  const getVideoEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 
      ? `https://www.youtube.com/embed/${match[2]}`
      : '';
  };

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <h1 className="text-4xl font-light text-white mb-8">Biblioteca</h1>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Buscar vídeos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-slate-400 text-lg">
              {searchTerm ? 'Nenhum vídeo encontrado.' : 'Nenhum vídeo disponível.'}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id} 
                className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-xl overflow-hidden"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-light text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                    {video.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-slate-600 text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    Ver mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

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
