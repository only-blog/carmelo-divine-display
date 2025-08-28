import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";
import churchHero from "@/assets/church-hero.jpg";
import churchLogo from "@/assets/church-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${churchHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={churchLogo} 
              alt="Monte Carmelo" 
              className="h-24 w-24 animate-float church-shadow rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Monte
            <span className="block text-secondary animate-pulse-glow">Carmelo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
            Igreja Eterna Santificada Unida de Angola
          </p>
          <p className="text-lg text-white/80 mb-8">
            Ministério Profético • Comunidade de Libertação Evangélica
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="church-gradient text-white font-semibold px-8 py-4 text-lg church-shadow smooth-transition hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Programas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white backdrop-blur-sm smooth-transition hover:bg-white/20 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Entrar em Contato
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 smooth-transition hover:bg-white/20">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="font-medium">Cultos Semanais</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Segunda a Domingo</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 smooth-transition hover:bg-white/20">
              <div className="flex items-center justify-center space-x-2 text-white">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-medium">Múltiplas Congregações</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Angola</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 smooth-transition hover:bg-white/20">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="font-medium">Sempre Aberto</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Para oração</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;