import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: [
        "+244 947 697 249",
        "+244 956 359 210", 
        "+244 922 901 038",
        "+244 929 912 442",
        "+244 925 701 382"
      ]
    },
    {
      icon: MapPin,
      title: "Localizações",
      details: [
        "Centro Monte das Oliveiras - Zango 1",
        "Centro Jordão - Cacuaco",
        "Centro Maanaim - Dande, Bengo"
      ]
    },
    {
      icon: Clock,
      title: "Horários de Funcionamento",
      details: [
        "Segunda: 09h30-12h30",
        "Quarta: 09h00-12h30", 
        "Sexta: 09h00-12h30",
        "Sábado: 14h30-16h00",
        "Domingo: 07h00-12h30"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em
              <span className="block text-church-blue">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para orar com você, orientá-lo e recebê-lo em nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-shadow smooth-transition hover:shadow-lg border-none">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="church-gradient rounded-full w-12 h-12 flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Contato Rápido:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    className="church-gradient text-white church-shadow smooth-transition hover:scale-105"
                    asChild
                  >
                    <a href="tel:+244947697249" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="smooth-transition hover:bg-church-blue/10 hover:text-church-blue"
                    asChild
                  >
                    <a href="https://wa.me/244947697249" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-shadow border-none">
                <CardHeader>
                  <CardTitle className="text-2xl text-church-blue">
                    Envie uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nome *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="smooth-transition focus:ring-church-blue"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Telefone
                      </label>
                      <Input 
                        placeholder="Seu número de telefone"
                        className="smooth-transition focus:ring-church-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="smooth-transition focus:ring-church-blue"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Assunto
                    </label>
                    <Input 
                      placeholder="Como podemos ajudá-lo?"
                      className="smooth-transition focus:ring-church-blue"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Escreva sua mensagem, pedido de oração ou dúvida..."
                      rows={5}
                      className="smooth-transition focus:ring-church-blue resize-none"
                    />
                  </div>

                  <Button 
                    className="w-full church-gradient text-white church-shadow smooth-transition hover:scale-105"
                    size="lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Responderemos sua mensagem o mais breve possível. 
                    Para emergências espirituais, ligue diretamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Nossas Localizações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-shadow smooth-transition hover:shadow-lg border-none">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-church-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Centro Monte das Oliveiras</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Zango 1, Paragem da Polícia, junto à Explanada Cassocola
                  </p>
                  <p className="text-sm font-medium text-church-blue">
                    📞 947 697 249 | 956 359 210
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow smooth-transition hover:shadow-lg border-none">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-church-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Centro Jordão</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Município de Cacuaco, Distrito Urbano do Pólo, Sector 9
                  </p>
                  <p className="text-sm font-medium text-church-blue">
                    📞 922 901 038 | 929 912 442
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow smooth-transition hover:shadow-lg border-none">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-church-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Centro Maanaim</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bº Kingombe, Município de Dande, Província do Bengo
                  </p>
                  <p className="text-sm font-medium text-church-blue">
                    📞 925 701 382
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;