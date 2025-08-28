import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Recycle, Upload, Truck, DollarSign, Leaf, Users, MapPin } from "lucide-react";

const WastePortalSection = () => {
  const wasteTypes = [
    {
      name: "Rice Husk",
      price: "₹8-12/kg",
      icon: "🌾",
      demand: "High"
    },
    {
      name: "Wheat Husk",
      price: "₹6-10/kg", 
      icon: "🌾",
      demand: "Medium"
    },
    {
      name: "Bagasse",
      price: "₹10-15/kg",
      icon: "🎋",
      demand: "High"
    },
    {
      name: "Cotton Stalks",
      price: "₹5-8/kg",
      icon: "🌱",
      demand: "Low"
    }
  ];

  return (
    <section id="waste" className="py-20 bg-gradient-to-b from-eco-green/5 to-sage-green/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-eco-green text-accent-foreground">
            <Recycle className="w-4 h-4 mr-2" />
            Waste to Resource Portal
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sell Your Agricultural Waste
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with us to turn your agricultural waste into sustainable kulhads. Perfect for farmers, small businesses, and households looking to monetize waste materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Waste Types & Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What We Accept</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {wasteTypes.map((waste, index) => (
                <Card key={index} className="kulhad-hover shadow-warm bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-2xl">{waste.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{waste.name}</h4>
                        <p className="text-sm text-muted-foreground">Current Price</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{waste.price}</span>
                      <Badge 
                        variant={waste.demand === 'High' ? 'default' : waste.demand === 'Medium' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {waste.demand} Demand
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <Card className="shadow-clay bg-gradient-eco text-accent-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Why Sell to Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-accent-foreground/80" />
                  <span>Free pickup for bulk quantities (min 100kg)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-accent-foreground/80" />
                  <span>Competitive market rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-accent-foreground/80" />
                  <span>Contribute to environmental sustainability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-accent-foreground/80" />
                  <span>Join our network of 500+ suppliers</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-clay">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Connect With Us</CardTitle>
                <p className="text-muted-foreground">Fill out the form below to start selling your waste materials</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="supplier-name">Full Name</Label>
                    <Input id="supplier-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="supplier-phone">Phone Number</Label>
                    <Input id="supplier-phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="supplier-email">Email Address</Label>
                  <Input id="supplier-email" type="email" placeholder="your@email.com" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="waste-type">Waste Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rice-husk">Rice Husk</SelectItem>
                        <SelectItem value="wheat-husk">Wheat Husk</SelectItem>
                        <SelectItem value="bagasse">Bagasse</SelectItem>
                        <SelectItem value="cotton-stalks">Cotton Stalks</SelectItem>
                        <SelectItem value="mixed">Mixed Agricultural Waste</SelectItem>
                        <SelectItem value="other">Other (specify below)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Available Quantity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100">50-100 kg</SelectItem>
                        <SelectItem value="100-500">100-500 kg</SelectItem>
                        <SelectItem value="500-1000">500-1000 kg</SelectItem>
                        <SelectItem value="1000+">1000+ kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="location" placeholder="City, State" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="supplier-details">Additional Details</Label>
                  <Textarea 
                    id="supplier-details" 
                    placeholder="Tell us more about your waste materials, frequency of availability, storage conditions, etc."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                  <Upload className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Upload Photos (Optional)</p>
                    <p className="text-xs text-muted-foreground">Photos of your waste materials help us provide better quotes</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="eco" className="w-full" size="lg">
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Process Steps */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Submit Form", desc: "Fill out the supplier application form" },
              { step: "2", title: "Quality Check", desc: "Our team evaluates your waste materials" },
              { step: "3", title: "Price Quote", desc: "Receive competitive pricing within 24hrs" },
              { step: "4", title: "Pickup & Payment", desc: "We collect materials and process payment" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-clay rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WastePortalSection;