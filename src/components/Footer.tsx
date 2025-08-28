import { Heart, Cross, Phone, MapPin, Mail } from "lucide-react";
import churchLogo from "@/assets/church-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={churchLogo} 
                alt="Monte Carmelo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="font-bold text-lg text-secondary">Monte Carmelo</h3>
                <p className="text-sm text-background/80">Igreja Evangélica</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Igreja Eterna Santificada Unida de Angola - Uma comunidade de fé, 
              amor e esperança em Jesus Cristo.
            </p>
            <div className="flex items-center text-background/80 text-sm">
              <Cross className="h-4 w-4 mr-2 text-secondary" />
              Fundada em 17 de outubro de 2018
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-secondary smooth-transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary smooth-transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#programs" className="text-background/80 hover:text-secondary smooth-transition">
                  Programas
                </a>
              </li>
              <li>
                <a href="#community" className="text-background/80 hover:text-secondary smooth-transition">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-secondary smooth-transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-secondary" />
                <div className="space-y-1">
                  <p className="text-background/80">+244 947 697 249</p>
                  <p className="text-background/80">+244 956 359 210</p>
                  <p className="text-background/80">+244 925 701 382</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <p className="text-background/80">
                  Múltiplas congregações em Angola
                </p>
              </div>
            </div>
          </div>

          {/* Ministry Schedule */}
          <div>
            <h4 className="font-semibold text-background mb-4">Horários</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-secondary">07h00-12h30</span>
              </div>
              <div className="flex justify-between">
                <span>Segunda:</span>
                <span className="text-secondary">09h30-12h30</span>
              </div>
              <div className="flex justify-between">
                <span>Quarta:</span>
                <span className="text-secondary">09h00-12h30</span>
              </div>
              <div className="flex justify-between">
                <span>Sexta:</span>
                <span className="text-secondary">09h00-12h30</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-secondary">14h30-16h00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-background/80 text-sm">
                © 2024 Monte Carmelo - Igreja Eterna Santificada Unida de Angola
              </p>
              <p className="text-background/60 text-xs mt-1">
                Decreto executivo nº85/24 de 29 de abril DR. 1ª série nº 79/4165
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-background/80 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-secondary fill-current" />
              <span>para a glória de Deus</span>
            </div>
          </div>
          
          {/* Scripture Verse */}
          <div className="text-center mt-6 p-4 bg-background/5 rounded-lg">
            <p className="text-secondary font-medium text-sm italic">
              "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles."
            </p>
            <p className="text-background/60 text-xs mt-1">Mateus 18:20</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;