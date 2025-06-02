
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useUser } from '@/contexts/UserContext';
import { Video, Shield, Clock } from 'lucide-react';

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
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900"></div>
      
      {/* Floating elements for depth */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
              Tenha acesso a um conteúdo <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">exclusivo</span> de vídeos
            </h1>
            
            {/* Modern benefits grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Vídeos Exclusivos</h3>
                  <p className="text-slate-400 text-sm">Acesso completo à biblioteca de conteúdos</p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Conteúdo Premium</h3>
                  <p className="text-slate-400 text-sm">Material de alta qualidade e curado</p>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-emerald-400/40">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Acesso Imediato</h3>
                  <p className="text-slate-400 text-sm">Liberação instantânea após cadastro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-light text-white">
                Libere seu acesso
              </CardTitle>
              <p className="text-slate-400 text-sm">
                Preencha os dados abaixo para começar
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-slate-300 font-light text-sm">Nome Completo</Label>
                  <Input
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 h-12 focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300 font-light text-sm">E-mail</Label>
                  <Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 h-12 focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300 font-light text-sm">WhatsApp</Label>
                  <Input
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 h-12 focus:border-cyan-400 transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white font-medium h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Acessar Agora
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  Seus dados estão protegidos e não serão compartilhados
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
