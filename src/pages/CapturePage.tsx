
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useUser } from '@/contexts/UserContext';
import { Play, Star, Users } from 'lucide-react';

const CapturePage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const userData = {
      ...formData,
      isAdmin: false
    };

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    localStorage.setItem('users', JSON.stringify([...existingUsers, userData]));

    setUser(userData);

    toast({
      title: "Bem-vindo",
      description: "Acesso liberado"
    });

    navigate('/videos');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
              alt="Lon Systems"
              className="h-12 w-auto mr-3"
            />
            <h1 className="text-5xl font-light text-white tracking-wide">Lon Systems</h1>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
              Tenha acesso a um conteúdo <span className="text-cyan-400">exclusivo</span> de vídeos do evento
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Deixe seus dados e acesse agora mesmo uma biblioteca completa com os melhores momentos e apresentações. Conteúdo premium disponível apenas para participantes cadastrados.
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <div className="p-2 bg-cyan-500/20 rounded-full">
                  <Play className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Vídeos Exclusivos</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <span>Conteúdo Premium</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <div className="p-2 bg-purple-500/20 rounded-full">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="glass-card border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-light text-white">
                Acesse Agora
              </CardTitle>
              <p className="text-slate-400 text-sm">
                Preencha os dados abaixo para liberar seu acesso
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-slate-300 font-light">Nome Completo</Label>
                  <Input
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass border-slate-600 text-white placeholder:text-slate-400 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300 font-light">E-mail</Label>
                  <Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass border-slate-600 text-white placeholder:text-slate-400 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300 font-light">WhatsApp</Label>
                  <Input
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="glass border-slate-600 text-white placeholder:text-slate-400 h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white font-light h-14 text-lg"
                >
                  🚀 Acessar Conteúdo Exclusivo
                </Button>
                
                <p className="text-xs text-slate-400 text-center">
                  Seus dados estão seguros e não serão compartilhados
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CapturePage;
