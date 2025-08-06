import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Calendar, Sparkles } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Calendar,
      number: "150+",
      label: "Weddings Planned",
      description: "Successfully executed events of all sizes"
    },
    {
      icon: Users,
      number: "300+",
      label: "Happy Couples",
      description: "Satisfied clients who trust our expertise"
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in wedding planning"
    },
    {
      icon: Sparkles,
      number: "5",
      label: "Years Experience",
      description: "Dedicated to creating perfect moments"
    }
  ];

  const values = [
    {
      title: "Personalized Approach",
      description: "Every wedding is unique, and we tailor our services to reflect your individual style and vision.",
      icon: Heart
    },
    {
      title: "Attention to Detail",
      description: "From grand gestures to tiny touches, we ensure every element contributes to your perfect day.",
      icon: Sparkles
    },
    {
      title: "Stress-Free Experience",
      description: "We handle the logistics so you can focus on enjoying your engagement and wedding celebration.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                About Eternal Moments
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafting Dreams Into Reality
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founded on the belief that every love story deserves a perfect celebration, Eternal Moments has been creating unforgettable wedding experiences for couples across the country.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced planners combines creativity, organization, and passion to transform your wedding vision into a flawless reality. From intimate gatherings to grand celebrations, we're dedicated to making your special day everything you've dreamed of and more.
              </p>
            </div>

            {/* Our Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Our Approach</h3>
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-romantic transition-all duration-300 border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="p-4 rounded-full bg-primary/10 inline-flex mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {achievement.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our passionate team of wedding professionals brings years of experience and creative vision to every celebration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Wedding Planner",
                experience: "8 years experience",
                specialty: "Luxury & destination weddings"
              },
              {
                name: "Emily Davis",
                role: "Design Coordinator",
                experience: "6 years experience", 
                specialty: "Floral design & styling"
              },
              {
                name: "Michael Chen",
                role: "Event Coordinator",
                experience: "5 years experience",
                specialty: "Logistics & day-of coordination"
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <div className="w-24 h-24 bg-gradient-romantic rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-elegant rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-primary animate-glow" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To create extraordinary wedding experiences that perfectly capture the essence of your love story. We believe that every couple deserves a celebration as unique and beautiful as their relationship, and we're committed to making that vision a reality through thoughtful planning, creative design, and flawless execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;