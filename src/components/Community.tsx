import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Hand, Users, Star } from "lucide-react";
import communityWorship from "@/assets/community-worship.jpg";

const Community = () => {
  const ministries = [
    {
      icon: Heart,
      title: "Ministério de Oração",
      description: "Intercessão e oração pelos membros da igreja e comunidade",
      activities: ["Vigílias de oração", "Intercessão pastoral", "Grupos de oração"]
    },
    {
      icon: Hand,
      title: "Ministério de Cura",
      description: "Ministração através da imposição de mãos e oração pela cura",
      activities: ["Cura divina", "Libertação espiritual", "Milagres"]
    },
    {
      icon: Users,
      title: "Ministério Jovem",
      description: "Evangelização e discipulado da juventude",
      activities: ["Evangelização", "Ensaio coral", "Escola dominical"]
    },
    {
      icon: Star,
      title: "Ministério Profético",
      description: "Revelação e orientação através da palavra profética",
      activities: ["Profecias", "Visões", "Direção espiritual"]
    }
  ];

  const testimonials = [
    {
      name: "Maria dos Santos",
      testimony: "Encontrei paz e propósito na minha vida através dos cultos. A comunidade me acolheu com muito amor.",
      congregation: "Centro Monte das Oliveiras"
    },
    {
      name: "João Baptista", 
      testimony: "As orações e ministrações me trouxeram cura física e espiritual. Sou grato a Deus por esta igreja.",
      congregation: "Centro Jordão"
    },
    {
      name: "Ana Fernandes",
      testimony: "O ministério jovem transformou a vida dos meus filhos. Eles encontraram amigos e cresceram na fé.",
      congregation: "Centro Maanaim"
    }
  ];

  return (
    <section id="community" className="py-20 bg-church-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 text-church-blue">
              Nossa Comunidade
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Uma Família
              <span className="block text-church-blue">Unida em Cristo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos mais que uma congregação, somos uma família que caminha junta na fé
            </p>
          </div>

          {/* Community Image & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <img 
                src={communityWorship} 
                alt="Comunidade em adoração"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Comunidade de Libertação Evangélica e Profético
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa comunidade é formada por pessoas de diferentes idades e origens, 
                unidas pelo amor de Cristo. Aqui você encontrará acolhimento, crescimento 
                espiritual e oportunidades para servir ao Reino de Deus.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Participamos ativamente da vida uns dos outros, celebramos juntos, 
                oramos uns pelos outros e crescemos em fé e comunhão.
              </p>
              <Button className="church-gradient text-white church-shadow">
                Faça Parte da Nossa Família
              </Button>
            </div>
          </div>

          {/* Ministries */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos Ministérios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ministries.map((ministry, index) => (
                <Card 
                  key={index} 
                  className="card-shadow smooth-transition hover:shadow-lg hover:scale-105 border-none group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="church-gradient rounded-full w-12 h-12 flex items-center justify-center group-hover:animate-pulse-glow">
                        <ministry.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-church-blue smooth-transition">
                          {ministry.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                          {ministry.description}
                        </p>
                        <div className="space-y-1">
                          {ministry.activities.map((activity, idx) => (
                            <Badge key={idx} variant="outline" className="mr-1 text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Testemunhos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="card-shadow smooth-transition hover:shadow-lg border-none"
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-church-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-church-blue" />
                      </div>
                      <blockquote className="text-muted-foreground italic mb-4 text-sm leading-relaxed">
                        "{testimonial.testimony}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {testimonial.congregation}
                        </Badge>
                      </div>
                    </div>
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

export default Community;