import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf, Sparkles } from "lucide-react";
import kulhadHeroBg from "@/assets/kulhad-hero-bg.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${kulhadHeroBg})`,
      filter: 'brightness(0.7)'
    }} />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-clay-dark/80 via-clay-brown/60 to-transparent" />

    {/* Floating Elements */}
    <div className="absolute top-20 left-10 opacity-30">
      <Leaf className="w-8 h-8 text-eco-green float" style={{
        animationDelay: '0s'
      }} />
    </div>
    <div className="absolute top-32 right-20 opacity-40">
      <Sparkles className="w-6 h-6 text-sage-green float" style={{
        animationDelay: '1s'
      }} />
    </div>
    <div className="absolute bottom-32 left-16 opacity-25">
      <div className="w-12 h-12 bg-clay-terracotta/30 rounded-full float" style={{
        animationDelay: '2s'
      }} />
    </div>

    {/* Steam Effect */}
    <div className="absolute top-1/3 right-1/4 steam opacity-60">
      <div className="w-2 h-20" />
    </div>
    <div className="absolute top-1/2 right-1/3 steam opacity-40" style={{
      animationDelay: '1.5s'
    }}>
      <div className="w-1 h-16" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-eco-green/20 backdrop-blur-sm border border-eco-green/30 rounded-full px-4 py-2 mb-6">
          <Leaf className="w-4 h-4 text-eco-green" />
          <span className="text-sm font-medium text-cream">100% Eco-Friendly</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
          Sustainable Kulhads for a{" "}

        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform agricultural waste into beautiful, aromatic kulhads. Join the revolution of sustainable living with our biodegradable clay cups that blend tradition with innovation.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-cream/20">
            <div className="text-2xl font-bold text-eco-green">10,000+</div>
            <div className="text-sm text-cream/80">Kulhads Sold</div>
          </div>
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-cream/20">
            <div className="text-2xl font-bold text-eco-green">500kg</div>
            <div className="text-sm text-cream/80">Waste Recycled</div>
          </div>
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-cream/20">
            <div className="text-2xl font-bold text-eco-green">50+</div>
            <div className="text-sm text-cream/80">Happy Partners</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="group">
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="earth" size="lg" className="group bg-cream/20 backdrop-blur-sm border-cream/30 text-cream hover:bg-cream/30">
            Partner With Us
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}

      </div>
    </div>
  </section>;
};
export default HeroSection;