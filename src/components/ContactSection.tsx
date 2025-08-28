import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Workshop",
      details: ["123 Eco Industrial Area", "Green Valley, Mumbai 400001", "Maharashtra, India"],
      color: "eco-green"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat: 9AM-7PM"],
      color: "clay-terracotta"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["orders@ecokulhad.com", "info@ecokulhad.com", "support@ecokulhad.com"],
      color: "sage-green"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      color: "forest-green"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#", color: "bg-pink-500" },
    { icon: Facebook, name: "Facebook", url: "#", color: "bg-blue-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "bg-blue-400" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "bg-blue-700" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact EcoKulhad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make the switch to sustainable kulhads? We're here to help with orders, partnerships, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="kulhad-hover shadow-warm bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-${info.color.includes('-') ? 'clay' : 'eco'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-clay bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bulk-order">Bulk Order (B2B)</SelectItem>
                        <SelectItem value="retail-purchase">Retail Purchase</SelectItem>
                        <SelectItem value="waste-supply">Sell Agricultural Waste</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="press-media">Press & Media</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization (Optional)</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief subject of your inquiry" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry, requirements, quantity needed, timeline, or any specific questions you have..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for updates on new products and sustainability tips
                  </Label>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <Card className="shadow-clay overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Visit Our Workshop</h4>
                  <p className="text-muted-foreground">123 Eco Industrial Area, Green Valley, Mumbai</p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <Card className="inline-block shadow-clay bg-gradient-earth max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out our frequently asked questions or reach out to our support team for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">
                  View FAQ
                </Button>
                <Button variant="outline">
                  Live Chat Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;