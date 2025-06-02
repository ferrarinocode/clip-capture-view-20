
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Settings, Play } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-12">
              <img 
                src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
                alt="Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Public Access Card */}
            <Card className="bg-white/5 backdrop-blur-xl group hover:scale-105 transition-all duration-500 border border-white/10 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/50">
              <CardContent className="p-10 text-center">
                <div className="mx-auto p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-8 w-fit shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6">Acesso</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  Acesse a biblioteca completa de vídeos
                </p>
                <Link to="/capture">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 border-0 text-white font-medium h-12 shadow-lg hover:shadow-xl transition-all duration-300">
                    Entrar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Videos Library Card */}
            <Card className="bg-white/5 backdrop-blur-xl group hover:scale-105 transition-all duration-500 border border-white/10 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50">
              <CardContent className="p-10 text-center">
                <div className="mx-auto p-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-8 w-fit shadow-lg">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6">Vídeos</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  Explore nossa biblioteca de conteúdos
                </p>
                <Link to="/videos">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 text-white font-medium h-12 shadow-lg hover:shadow-xl transition-all duration-300">
                    Biblioteca
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Admin Panel Card */}
            <Card className="bg-white/5 backdrop-blur-xl group hover:scale-105 transition-all duration-500 border border-white/10 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50">
              <CardContent className="p-10 text-center">
                <div className="mx-auto p-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl mb-8 w-fit shadow-lg">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6">Admin</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                  Gerencie vídeos e conteúdos
                </p>
                <Link to="/admin/add-video">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 border-0 text-white font-medium h-12 shadow-lg hover:shadow-xl transition-all duration-300">
                    Adicionar
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
