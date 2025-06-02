
const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1ff3596d-8e93-4799-8645-6f69d3dbd8d1.png" 
              alt="Lon Systems"
              className="h-8 w-auto"
            />
            <span className="text-white font-light text-lg">Lon Systems</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Desenvolvido por <span className="text-white font-medium">Lon Systems</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
