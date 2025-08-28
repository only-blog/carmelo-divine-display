import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cross, Home, Users, Calendar, Phone, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import churchLogo from "@/assets/church-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#home", icon: Home },
    { name: "Sobre", href: "#about", icon: BookOpen },
    { name: "Programas", href: "#programs", icon: Calendar },
    { name: "Comunidade", href: "#community", icon: Users },
    { name: "Contato", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={churchLogo} 
              alt="Monte Carmelo" 
              className="h-10 w-10 animate-float"
            />
            <div>
              <h1 className="font-bold text-xl text-primary">Monte Carmelo</h1>
              <p className="text-xs text-muted-foreground">Igreja Evangélica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="smooth-transition hover:bg-church-blue/10 hover:text-church-blue"
                asChild
              >
                <a href={item.href} className="flex items-center space-x-1">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-64 pb-4" : "max-h-0"
        )}>
          <div className="space-y-2 pt-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="w-full justify-start smooth-transition hover:bg-church-blue/10 hover:text-church-blue"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <a href={item.href} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;