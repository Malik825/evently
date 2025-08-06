import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Palette, 
  Users, 
  Camera, 
  MapPin, 
  Utensils,
  Flower,
  Clock
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Full Wedding Planning",
      description: "Complete planning from concept to execution, ensuring every detail is perfect for your special day.",
      features: ["Timeline management", "Vendor coordination", "Budget planning", "Day-of coordination"]
    },
    {
      icon: Palette,
      title: "Design & Styling",
      description: "Create a cohesive aesthetic that reflects your personality and love story.",
      features: ["Color scheme selection", "Decor planning", "Floral design", "Table styling"]
    },
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Find the perfect location that matches your vision and budget requirements.",
      features: ["Venue scouting", "Site visits", "Contract negotiation", "Layout planning"]
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "Handle all guest-related logistics with care and attention to detail.",
      features: ["RSVP tracking", "Seating arrangements", "Guest communications", "Special accommodations"]
    },
    {
      icon: Utensils,
      title: "Catering Coordination",
      description: "Curate exceptional dining experiences that delight you and your guests.",
      features: ["Menu planning", "Tastings", "Dietary accommodations", "Service coordination"]
    },
    {
      icon: Clock,
      title: "Day-of Coordination",
      description: "Ensure your wedding day runs smoothly while you focus on celebrating.",
      features: ["Timeline execution", "Vendor management", "Problem solving", "Guest assistance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Flower className="h-12 w-12 text-primary animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Wedding Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive wedding planning services tailored to your unique vision and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-romantic transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-romantic hover:shadow-romantic transition-all duration-300 text-lg px-8 py-6"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;