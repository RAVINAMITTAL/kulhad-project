import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star, Coffee, Building, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Tea Vendor",
      business: "Chai Point Express",
      avatar: "RK",
      rating: 5,
      content: "Since switching to EcoKulhads, my customers love the authentic taste it brings to their tea. The aroma from the clay enhances the entire experience. Plus, I feel good about reducing plastic waste!",
      category: "vendor",
      location: "Mumbai"
    },
    {
      name: "Priya Sharma", 
      role: "Café Owner",
      business: "Green Leaf Café",
      avatar: "PS",
      rating: 5,
      content: "Our customers absolutely love drinking from these kulhads! It has become our signature touch. The eco-friendly aspect aligns perfectly with our café's values, and it's a great conversation starter.",
      category: "cafe",
      location: "Bangalore"
    },
    {
      name: "Amit Patel",
      role: "Event Manager",
      business: "Premium Events Co.",
      avatar: "AP",
      rating: 5,
      content: "We use EcoKulhads for all our corporate events and weddings. Clients are impressed by the sustainable approach, and the bulk ordering process is seamless. Quality is consistently excellent!",
      category: "events",
      location: "Delhi"
    },
    {
      name: "Meera Joshi",
      role: "Environmental Activist",
      business: "Green Future NGO",
      avatar: "MJ",
      rating: 5,
      content: "Finally, a practical solution to plastic waste! These kulhads prove that traditional wisdom combined with modern innovation can solve today's environmental challenges. We promote them in all our campaigns.",
      category: "eco",
      location: "Pune"
    },
    {
      name: "Suresh Reddy",
      role: "Restaurant Owner", 
      business: "Spice Garden Restaurant",
      avatar: "SR",
      rating: 4,
      content: "The kulhads add an authentic touch to our Indian cuisine experience. Customers often compliment the traditional feel, and we've seen increased customer satisfaction since we started using them.",
      category: "restaurant",
      location: "Hyderabad"
    },
    {
      name: "Kavita Singh",
      role: "Corporate Buyer",
      business: "TechCorp Solutions",
      avatar: "KS",
      rating: 5,
      content: "We ordered 500 kulhads for our annual conference. The custom branding looked fantastic, delivery was on time, and the quality exceeded our expectations. Will definitely order again!",
      category: "corporate",
      location: "Gurgaon"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vendor':
      case 'cafe':
        return Coffee;
      case 'restaurant':
      case 'corporate':
        return Building;
      case 'events':
        return Users;
      default:
        return Quote;
    }
  };

  const getCategoryBadge = (category: string) => {
    const badges = {
      vendor: { label: "Tea Vendor", color: "bg-clay-terracotta" },
      cafe: { label: "Café", color: "bg-eco-green" },
      restaurant: { label: "Restaurant", color: "bg-sage-green" },
      events: { label: "Events", color: "bg-forest-green" },
      eco: { label: "Eco Warrior", color: "bg-primary" },
      corporate: { label: "Corporate", color: "bg-secondary" }
    };
    
    return badges[category as keyof typeof badges] || { label: "Customer", color: "bg-muted" };
  };

  return (
    <section className="py-20 bg-background clay-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <Quote className="w-4 h-4 mr-2" />
            Customer Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From tea vendors to corporate events, discover how EcoKulhads are making a difference across different businesses and communities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const CategoryIcon = getCategoryIcon(testimonial.category);
            const categoryBadge = getCategoryBadge(testimonial.category);
            
            return (
              <Card key={index} className="kulhad-hover shadow-warm bg-background/80 backdrop-blur-sm border-border h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-clay text-primary-foreground font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.business}</p>
                      </div>
                    </div>
                    <CategoryIcon className="w-5 h-5 text-muted-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({testimonial.rating}.0)</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow mb-4">
                    <Quote className="w-6 h-6 text-muted-foreground mb-2 opacity-50" />
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Badge className={`${categoryBadge.color} text-primary-foreground text-xs`}>
                      {categoryBadge.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">📍 {testimonial.location}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-warm bg-gradient-eco text-accent-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="shadow-warm bg-gradient-clay text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </CardContent>
          </Card>
          <Card className="shadow-warm bg-gradient-earth text-muted-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm">Business Partners</div>
            </CardContent>
          </Card>
          <Card className="shadow-warm bg-secondary text-secondary-foreground">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm">Would Recommend</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;