import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Cross, Users, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Cross,
      title: "Fé em Jesus Cristo",
      description: "Acreditamos em Jesus Cristo como nosso Senhor e Salvador",
      verse: "Atos 16:30-31"
    },
    {
      icon: Heart,
      title: "Amor e Comunhão",
      description: "Cultivamos o amor fraternal e a unidade na comunidade",
      verse: "1 João 4:7-8"
    },
    {
      icon: BookOpen,
      title: "Palavra de Deus",
      description: "Fundamentamos nossa fé nas Sagradas Escrituras",
      verse: "2 Timóteo 3:16"
    },
    {
      icon: Users,
      title: "Comunidade Unida",
      description: "Somos uma família unida em Cristo e propósito",
      verse: "Efésios 4:3"
    }
  ];

  const beliefs = [
    "Acredita em Jesus Cristo Atos 16:30-31",
    "Seguir Jesus Cristo Salmos 23:6",
    "Servir Jesus Cristo Josué 24:15"
  ];

  return (
    <section id="about" className="py-20 bg-church-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 text-church-blue">
              Nossa História
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Igreja Eterna Santificada
              <span className="block text-church-blue">Unida de Angola</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fundada aos 17 de outubro de 2018, reconhecida na República de Angola 
              através do decreto executivo nº85/24 de 29 de abril DR. 1ª série nº 79/4165
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="card-shadow smooth-transition hover:shadow-lg border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Nossa Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos uma comunidade de libertação evangélica e profética, dedicada a 
                  espalhar o amor de Cristo, fortalecer a fé dos fiéis e construir uma 
                  igreja unida na palavra de Deus. Nosso ministério profético visa 
                  orientar e edificar vidas através da palavra divina.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="card-shadow smooth-transition hover:shadow-lg hover:scale-105 border-none group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="church-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {value.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {value.verse}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Three Pillars */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              As 3 Lemas do Destino Profético
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {beliefs.map((belief, index) => (
                <Card 
                  key={index} 
                  className="accent-gradient card-shadow smooth-transition hover:shadow-lg hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-church-red">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white font-semibold text-lg">
                      {belief}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;