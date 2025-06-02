
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { VideoIcon, Users, Settings, Play } from 'lucide-react';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
                alt="Lon Systems"
                className="h-16 w-auto mr-4"
              />
              <h1 className="text-6xl font-light text-white tracking-wide">
                Lon Systems
              </h1>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Public Access Card */}
            <Card className="glass-card group hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 w-fit">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Acesso</h3>
                <Link to="/capture">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 border-0 text-white font-light">
                    Entrar
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Videos Library Card */}
            <Card className="glass-card group hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 w-fit">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Vídeos</h3>
                <Link to="/videos">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 border-0 text-white font-light">
                    Biblioteca
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Admin Panel Card */}
            <Card className="glass-card group hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto p-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl mb-6 w-fit">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-white mb-4">Admin</h3>
                <Link to="/admin/add-video">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 border-0 text-white font-light">
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
