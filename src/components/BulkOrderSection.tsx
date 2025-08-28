import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Users, Coffee, Calendar, Award, CheckCircle, Building } from "lucide-react";

const BulkOrderSection = () => {
  const bulkPackages = [
    {
      title: "Café Starter",
      quantity: "100-500 units",
      price: "₹15-12/unit",
      features: ["Custom Branding", "Quality Assurance", "7-day Delivery", "Basic Support"],
      icon: Coffee,
      popular: false,
      color: "eco"
    },
    {
      title: "Restaurant Pro",
      quantity: "500-2000 units",
      price: "₹12-10/unit",
      features: ["Premium Branding", "Quality Assurance", "5-day Delivery", "Priority Support", "Free Samples"],
      icon: Building,
      popular: true,
      color: "hero"
    },
    {
      title: "Event Enterprise",
      quantity: "2000+ units",
      price: "₹10-8/unit",
      features: ["Full Customization", "Quality Guarantee", "3-day Delivery", "24/7 Support", "Free Design", "Volume Discounts"],
      icon: Calendar,
      popular: false,
      color: "secondary"
    }
  ];

  return (
    <section id="bulk" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Users className="w-4 h-4 mr-2" />
            Bulk Orders (B2B)
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Partner with EcoKulhad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for cafes, restaurants, event organizers, and businesses looking to make a sustainable impact. Get custom branding and volume discounts.
          </p>
        </div>

        {/* Bulk Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {bulkPackages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary shadow-clay scale-105' : 'shadow-warm'} kulhad-hover`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-${pkg.color} flex items-center justify-center mb-4`}>
                  <pkg.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{pkg.title}</CardTitle>
                <p className="text-muted-foreground">{pkg.quantity}</p>
                <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-eco-green mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={pkg.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Get Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Quick Quote Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-clay bg-gradient-earth clay-texture">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Get Custom Quote</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input id="business-name" placeholder="Your business name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cafe">Café/Tea Shop</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="hotel">Hotel/Resort</SelectItem>
                        <SelectItem value="catering">Catering Service</SelectItem>
                        <SelectItem value="events">Event Management</SelectItem>
                        <SelectItem value="retail">Retail Store</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-500">100-500 units</SelectItem>
                        <SelectItem value="500-1000">500-1000 units</SelectItem>
                        <SelectItem value="1000-2000">1000-2000 units</SelectItem>
                        <SelectItem value="2000-5000">2000-5000 units</SelectItem>
                        <SelectItem value="5000+">5000+ units</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Required Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need them?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Within 1 week</SelectItem>
                        <SelectItem value="normal">2-3 weeks</SelectItem>
                        <SelectItem value="flexible">1 month or more</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Tell us about custom branding, specific designs, delivery requirements, or any other special needs..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button variant="hero" size="lg" className="px-12">
                Get Custom Quote
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderSection;