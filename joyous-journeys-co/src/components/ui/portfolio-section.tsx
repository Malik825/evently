import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink } from "lucide-react";
import ceremonyImage from "@/assets/ceremony-setup.jpg";
import receptionImage from "@/assets/reception-setup.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Garden Romance Wedding",
      image: ceremonyImage,
      category: "Outdoor Ceremony",
      description: "An intimate garden wedding with lush florals and natural elegance.",
      tags: ["Garden", "Romantic", "Outdoor", "Floral"]
    },
    {
      id: 2,
      title: "Elegant Reception Design",
      image: receptionImage,
      category: "Reception Design",
      description: "Sophisticated table settings with gold accents and crystal details.",
      tags: ["Elegant", "Gold", "Crystal", "Luxury"]
    },
    {
      id: 3,
      title: "Rustic Barn Celebration",
      image: ceremonyImage,
      category: "Rustic Wedding",
      description: "Charming barn wedding with string lights and natural wood elements.",
      tags: ["Rustic", "Barn", "String Lights", "Natural"]
    },
    {
      id: 4,
      title: "Modern City Wedding",
      image: receptionImage,
      category: "Modern Wedding",
      description: "Sleek urban wedding with contemporary design and city views.",
      tags: ["Modern", "Urban", "Contemporary", "City"]
    },
    {
      id: 5,
      title: "Beach Destination Wedding",
      image: ceremonyImage,
      category: "Destination Wedding",
      description: "Breathtaking oceanfront ceremony with tropical florals and sunset views.",
      tags: ["Beach", "Destination", "Tropical", "Sunset"]
    },
    {
      id: 6,
      title: "Vintage Glam Reception",
      image: receptionImage,
      category: "Vintage Wedding",
      description: "Art deco inspired reception with vintage details and glamorous touches.",
      tags: ["Vintage", "Glam", "Art Deco", "Classic"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Wedding Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our recent weddings and celebrations, each uniquely crafted to tell a beautiful love story through thoughtful design and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="w-full bg-white/90 hover:bg-white transition-colors duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {item.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;