import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Heart, Award, ArrowRight, CheckCircle } from "lucide-react";
import ecoProcess from "@/assets/eco-process.jpg";

const AboutSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Biodegradable",
      description: "Decomposes naturally within 30-45 days, leaving zero environmental impact."
    },
    {
      icon: Heart,
      title: "Aromatic Experience", 
      description: "Natural clay aroma enhances the taste and fragrance of your beverages."
    },
    {
      icon: Recycle,
      title: "Made from Waste",
      description: "Transforms agricultural waste into beautiful, functional products."
    },
    {
      icon: Award,
      title: "Cost Effective",
      description: "Affordable alternative to plastic and paper cups with premium feel."
    }
  ];

  const processSteps = [
    {
      step: "Collection",
      description: "We collect agricultural waste like rice husk, wheat husk, and bagasse from local farmers",
      icon: "🌾"
    },
    {
      step: "Processing", 
      description: "Waste materials are cleaned, processed, and mixed with natural clay",
      icon: "⚙️"
    },
    {
      step: "Molding",
      description: "The mixture is shaped into kulhads using traditional pottery techniques",
      icon: "🏺"
    },
    {
      step: "Firing",
      description: "Kulhads are fired in eco-friendly kilns to achieve perfect strength and finish",
      icon: "🔥"
    },
    {
      step: "Quality Check",
      description: "Each kulhad undergoes quality inspection before packaging",
      icon: "✅"
    },
    {
      step: "Ready to Serve",
      description: "Packaged kulhads are ready to enhance your beverage experience",
      icon: "🍵"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background clay-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <Heart className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Waste to Wonder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we transform agricultural waste into beautiful, eco-friendly kulhads that preserve tradition while protecting our planet.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Reviving Tradition with Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EcoKulhad, we believe in the power of tradition combined with modern sustainability. Our journey began with a simple observation: millions of tons of agricultural waste are burned every year, contributing to pollution, while plastic cups continue to harm our environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We saw an opportunity to solve both problems by reviving the ancient art of kulhad making, but with a modern twist. By incorporating agricultural waste into traditional clay, we create products that are not only beautiful and functional but also contribute to a circular economy.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="hero">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                Watch Process Video
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={ecoProcess} 
              alt="Eco-friendly kulhad making process"
              className="rounded-lg shadow-clay w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clay-dark/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose EcoKulhads?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="kulhad-hover shadow-warm bg-background/80 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-clay rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            How We Make Our Kulhads
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-clay md:left-1/2 md:transform md:-translate-x-0.5" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Circle */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="kulhad-hover shadow-warm">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-2xl">{step.icon}</div>
                          <h4 className="text-xl font-semibold text-foreground">{step.step}</h4>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-clay bg-gradient-earth max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join the Sustainable Revolution
              </h3>
              <p className="text-muted-foreground mb-6">
                Every kulhad you choose makes a difference. Help us reduce plastic waste and support sustainable agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Shop Kulhads
                </Button>
                <Button variant="eco" size="lg">
                  Become a Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;