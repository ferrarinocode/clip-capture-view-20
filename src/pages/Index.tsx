
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoIcon, Users, Settings, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-2xl">
              <VideoIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Plataforma de
            <span className="block text-blue-600">Vídeos Educacionais</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma moderna e intuitiva para gerenciar e assistir conteúdos educacionais de alta qualidade.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Public Access Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-green-100 rounded-xl mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Acesso Público</CardTitle>
              <CardDescription className="text-gray-600">
                Cadastre-se para ter acesso completo à biblioteca de vídeos
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/capture">
                <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200">
                  <Users className="w-4 h-4 mr-2" />
                  Fazer Cadastro
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Videos Library Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Biblioteca de Vídeos</CardTitle>
              <CardDescription className="text-gray-600">
                Explore todos os vídeos disponíveis com busca e filtros
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/videos">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Vídeos
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admin Panel Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-3 bg-purple-100 rounded-xl mb-4 group-hover:bg-purple-200 transition-colors">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Painel Admin</CardTitle>
              <CardDescription className="text-gray-600">
                Adicione novos vídeos à plataforma (apenas administradores)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/admin/add-video">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200">
                  <Settings className="w-4 h-4 mr-2" />
                  Adicionar Vídeo
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características da Plataforma</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <VideoIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Design Moderno</h3>
              <p className="text-gray-600">Interface clean e minimalista para melhor experiência</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">100% Responsivo</h3>
              <p className="text-gray-600">Funciona perfeitamente em desktop e dispositivos móveis</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Fácil Gerenciamento</h3>
              <p className="text-gray-600">Sistema intuitivo para adicionar e organizar conteúdos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
