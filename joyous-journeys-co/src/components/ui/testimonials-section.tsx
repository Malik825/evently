import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      wedding: "Garden Wedding, June 2024",
      rating: 5,
      text: "Eternal Moments made our dream wedding come true! Every detail was perfect, from the beautiful floral arrangements to the seamless timeline. Our guests are still talking about how magical everything was.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Emily & David Chen",
      wedding: "Destination Wedding, September 2024",
      rating: 5,
      text: "Planning a destination wedding felt overwhelming until we found this incredible team. They handled everything with such professionalism and creativity. Our Tuscany wedding was absolutely perfect!",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Jessica & Ryan Martinez",
      wedding: "Rustic Barn Wedding, May 2024",
      rating: 5,
      text: "From our first consultation to the last dance, everything exceeded our expectations. The attention to detail and personal touch made our rustic barn wedding feel so unique and special.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Amanda & James Wilson",
      wedding: "City Wedding, October 2024",
      rating: 5,
      text: "Working with Eternal Moments was the best decision we made for our wedding. They transformed our vision into reality while keeping everything within budget. Absolutely phenomenal service!",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Lauren & Christopher Brown",
      wedding: "Beach Wedding, August 2024",
      rating: 5,
      text: "Our beach wedding was everything we dreamed of and more. The team's creativity and organizational skills are unmatched. They made our special day stress-free and absolutely beautiful.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Olivia & Alexander Davis",
      wedding: "Vintage Glam Wedding, April 2024",
      rating: 5,
      text: "The vintage glam theme was executed flawlessly! Every detail from the art deco elements to the timing was perfect. Our guests said it was the most beautiful wedding they'd ever attended.",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Quote className="h-12 w-12 text-primary animate-float" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Love Stories & Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our happy couples about their wedding planning experience and the magical moments we created together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-romantic transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.wedding}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-elegant rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Your Love Story?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our family of happy couples and let us make your wedding dreams come true with the same attention to detail and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="p-6 text-center border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Weddings Planned</div>
              </Card>
              <Card className="p-6 text-center border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </Card>
              <Card className="p-6 text-center border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;