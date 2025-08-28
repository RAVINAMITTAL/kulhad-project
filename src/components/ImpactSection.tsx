import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TreePine, Recycle, Users, Award, TrendingUp } from "lucide-react";

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    kulhadsSold: 0,
    wasteRecycled: 0,
    co2Saved: 0,
    partnersJoined: 0
  });

  const targetValues = {
    kulhadsSold: 25000,
    wasteRecycled: 1250, // in kg
    co2Saved: 5.5, // in tons
    partnersJoined: 150
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const incrementCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          kulhadsSold: Math.floor(targetValues.kulhadsSold * progress),
          wasteRecycled: Math.floor(targetValues.wasteRecycled * progress),
          co2Saved: Math.floor(targetValues.co2Saved * progress * 10) / 10,
          partnersJoined: Math.floor(targetValues.partnersJoined * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, interval);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          incrementCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('impact-counters');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    {
      icon: Leaf,
      value: counters.kulhadsSold.toLocaleString(),
      label: "Kulhads Sold",
      subtitle: "Replacing plastic cups",
      color: "eco-green"
    },
    {
      icon: Recycle,
      value: `${counters.wasteRecycled}kg`,
      label: "Waste Recycled",
      subtitle: "Agricultural waste reused",
      color: "sage-green"
    },
    {
      icon: TreePine,
      value: `${counters.co2Saved}T`,
      label: "CO₂ Saved",
      subtitle: "Carbon footprint reduced",
      color: "forest-green"
    },
    {
      icon: Users,
      value: counters.partnersJoined.toString(),
      label: "Partners Joined",
      subtitle: "Businesses going green",
      color: "clay-terracotta"
    }
  ];

  const achievements = [
    {
      title: "Eco Innovation Award 2024",
      organization: "Green Business Council",
      icon: Award,
      description: "Recognized for outstanding contribution to sustainable packaging"
    },
    {
      title: "Best Startup - Sustainability",
      organization: "State Environmental Board",
      icon: TrendingUp,
      description: "Leading the way in eco-friendly product innovation"
    }
  ];

  const milestones = [
    {
      date: "2024",
      title: "25,000 Kulhads Milestone",
      description: "Crossed 25,000 kulhads sold, preventing thousands of plastic cups from polluting the environment"
    },
    {
      date: "2024",
      title: "150 Business Partners",
      description: "Partnered with 150+ cafes, restaurants, and event organizers across the region"
    },
    {
      date: "2023",
      title: "First Ton of Waste Recycled",
      description: "Successfully recycled our first ton of agricultural waste into beautiful kulhads"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-eco-green/5 via-sage-green/5 to-forest-green/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-eco-green text-accent-foreground">
            <TreePine className="w-4 h-4 mr-2" />
            Our Environmental Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Making a Real Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every kulhad represents a step towards a more sustainable future. Here's the positive impact we've created together.
          </p>
        </div>

        {/* Impact Counters */}
        <div id="impact-counters" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="kulhad-hover shadow-warm bg-background/80 backdrop-blur-sm border-border">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-${stat.color.includes('-') ? 'clay' : 'eco'} rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow`}>
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Environmental Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-warm bg-destructive/10 border-destructive/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">Plastic Cups</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-destructive">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3" />
                    <span className="text-sm">Takes 450+ years to decompose</span>
                  </div>
                  <div className="flex items-center text-destructive">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3" />
                    <span className="text-sm">Releases harmful chemicals</span>
                  </div>
                  <div className="flex items-center text-destructive">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3" />
                    <span className="text-sm">Contributes to ocean pollution</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-warm bg-yellow-100/50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">Paper Cups</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-yellow-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    <span className="text-sm">Requires plastic lining</span>
                  </div>
                  <div className="flex items-center text-yellow-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    <span className="text-sm">Energy-intensive production</span>
                  </div>
                  <div className="flex items-center text-yellow-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    <span className="text-sm">Limited recyclability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-clay bg-gradient-eco text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-4">EcoKulhads</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3" />
                    <span className="text-sm">Biodegrades in 30-45 days</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3" />
                    <span className="text-sm">Made from agricultural waste</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mr-3" />
                    <span className="text-sm">Enhances beverage taste</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Recognition & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="kulhad-hover shadow-clay bg-gradient-earth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-clay rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Journey Milestones
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-clay" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                    <div className="ml-12">
                      <Card className="kulhad-hover shadow-warm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant="secondary">{milestone.date}</Badge>
                            <h4 className="text-lg font-semibold text-foreground">
                              {milestone.title}
                            </h4>
                          </div>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;