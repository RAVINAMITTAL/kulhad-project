import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Shop Kulhads", href: "#shop" },
      { name: "Bulk Orders", href: "#bulk" },
      { name: "Custom Branding", href: "#contact" },
      { name: "Gift Sets", href: "#shop" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Impact", href: "#impact" },
      { name: "Sustainability", href: "#about" },
      { name: "Careers", href: "#contact" },
    ],
    services: [
      { name: "Sell Waste", href: "#waste" },
      { name: "Partnership", href: "#contact" },
      { name: "Wholesale", href: "#bulk" },
      { name: "Consulting", href: "#contact" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#contact" },
      { name: "Shipping Info", href: "#contact" },
      { name: "Returns", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="bg-clay-dark text-cream">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-clay rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">EcoKulhad</h3>
                <p className="text-sm text-cream/70">Sustainable Tradition</p>
              </div>
            </div>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Transforming agricultural waste into beautiful, eco-friendly kulhads. Join us in creating a sustainable future, one sip at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-eco-green" />
                <span className="text-cream/80">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-eco-green" />
                <span className="text-cream/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-eco-green" />
                <span className="text-cream/80">info@ecokulhad.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cream/70 hover:text-eco-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cream/70 hover:text-eco-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cream/70 hover:text-eco-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cream/70 hover:text-eco-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-clay-brown/30 rounded-lg p-8 text-center">
            <h4 className="text-xl font-semibold mb-3">Stay Updated</h4>
            <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on sustainable products, environmental tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/10 border-cream/20 text-cream placeholder:text-cream/50"
              />
              <Button variant="eco" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-cream/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-cream/70">
              © 2024 EcoKulhad. All rights reserved.
            </p>
            <p className="text-xs text-cream/50 mt-1">
              Made with <Heart className="inline w-3 h-3 text-red-400 mx-1" /> for a sustainable future
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-cream/70">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center text-cream/70 hover:text-eco-green hover:bg-cream/20 transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-xs text-cream/50">
            <a href="#" className="hover:text-cream/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;