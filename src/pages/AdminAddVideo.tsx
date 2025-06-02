
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AdminAddVideo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    videoUrl: '',
    title: '',
    description: ''
  });

  const getYoutubeThumbnail = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 
      ? `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`
      : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.videoUrl || !formData.title || !formData.description) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const newVideo = {
      id: Date.now().toString(),
      ...formData,
      theme: 'Geral',
      thumbnail: getYoutubeThumbnail(formData.videoUrl),
      createdAt: new Date()
    };

    const existingVideos = JSON.parse(localStorage.getItem('videos') || '[]');
    localStorage.setItem('videos', JSON.stringify([...existingVideos, newVideo]));

    toast({
      title: "Sucesso",
      description: "Vídeo adicionado"
    });

    navigate('/videos');
  };

  return (
    <div className="min-h-screen relative p-6">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="glass-card border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-light text-white">Adicionar Vídeo</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-slate-300 font-light">Link do Vídeo</Label>
                <Input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="glass border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300 font-light">Título</Label>
                <Input
                  placeholder="Digite o título do vídeo"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="glass border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-300 font-light">Descrição</Label>
                <Textarea
                  placeholder="Descreva o conteúdo do vídeo"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="glass border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 text-white font-light h-12"
              >
                Adicionar Vídeo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAddVideo;
