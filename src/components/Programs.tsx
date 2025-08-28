import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, MapPin, Users } from "lucide-react";

const Programs = () => {
  const weeklyPrograms = [
    {
      day: "Segunda-feira",
      time: "09h30-12h30",
      title: "Culto das Mulheres",
      description: "Reunião especial para mulheres em oração e comunhão",
      reference: "Lucas 8:1-3",
      color: "church-blue"
    },
    {
      day: "Quarta-feira", 
      time: "09h00-12h30",
      title: "Culto da Aliança do Ministério",
      description: "Milagre, Cura, Libertação, Profecia",
      reference: "1 João 3:8, João 5:7-8, Lucas 4:18-21",
      color: "church-red"
    },
    {
      day: "Sexta-feira",
      time: "09h00-12h30", 
      title: "Consulta Pastoral",
      description: "Aconselhamento e orientação espiritual",
      reference: "Gên 3:9 (Onde estás)",
      color: "church-gold"
    },
    {
      day: "Sábado",
      time: "14h30-16h00",
      title: "Culto da Juventude",
      description: "Evangelização, Visita, Ensaio dos Grupos Corais, Escola de Discipulado",
      reference: "Atos 2:17, Marcos 16:15-17, Lucas 15:1-2",
      color: "church-blue"
    },
    {
      day: "Domingo",
      time: "07h00-08h30 / 09h30-12h30",
      title: "Cultos Dominicais",
      description: "1º Culto: Escola Dominical | 2º Culto: Adoração e Louvor",
      reference: "Mateus 18:16-18, Salmos 150:1-6, João 4:20-24",
      color: "church-red"
    }
  ];

  const congregations = [
    {
      name: "Centro Monte das Oliveiras",
      location: "Zango 1, Paragem da Polícia, junto à Explanada Cassocola",
      contacts: ["947 697 249", "956 359 210"],
      leaders: ["Prophet Maior", "Profeta Gad Ministries"]
    },
    {
      name: "Centro Jordão", 
      location: "Município de Cacuaco, Distrito Urbano do Pólo, Sector 9, entrada da Duas Casa",
      contacts: ["922 901 038", "929 912 442"],
      leaders: ["Prophet Maior", "Ev. Doutor Paulo Vicente"]
    },
    {
      name: "Centro Maanaim",
      location: "Bº Kingombe, Município de Dande, Província do Bengo",
      contacts: ["925 701 382"],
      leaders: ["Prophet Maior", "Ancião José Pascoal"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 text-church-blue">
              Nossos Programas
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Programa do
              <span className="block text-church-blue">Culto Semanal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Venha participar dos nossos cultos semanais e fortaleça sua fé em comunidade
            </p>
          </div>

          {/* Weekly Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {weeklyPrograms.map((program, index) => (
              <Card 
                key={index} 
                className="card-shadow smooth-transition hover:shadow-lg hover:scale-105 border-none group overflow-hidden"
              >
                <div className={`h-2 bg-${program.color}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {program.day}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.time}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-church-blue smooth-transition">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="text-xs text-church-blue font-medium">
                    📖 {program.reference}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Congregations */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Nossas Congregações
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {congregations.map((congregation, index) => (
                <Card 
                  key={index} 
                  className="card-shadow smooth-transition hover:shadow-lg border-none"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-church-blue flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {congregation.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        📍 {congregation.location}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Liderança:
                      </h4>
                      <div className="space-y-1">
                        {congregation.leaders.map((leader, idx) => (
                          <Badge key={idx} variant="secondary" className="mr-1 mb-1">
                            {leader}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">📞 Contactos:</h4>
                      <div className="space-y-1">
                        {congregation.contacts.map((contact, idx) => (
                          <a 
                            key={idx}
                            href={`tel:+244${contact.replace(/\s/g, '')}`}
                            className="block text-church-blue hover:text-church-blue/80 smooth-transition text-sm font-medium"
                          >
                            +244 {contact}
                          </a>
                        ))}
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

export default Programs;