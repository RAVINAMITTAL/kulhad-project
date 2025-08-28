import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import kulhadCollection from "@/assets/kulhad-collection.jpg";

const ShopSection = () => {
  const products = [
    {
      id: 1,
      name: "Classic Kulhad Set",
      price: "₹299",
      originalPrice: "₹399",
      rating: 4.8,
      reviews: 124,
      image: kulhadCollection,
      tag: "Best Seller",
      features: ["Set of 6", "Traditional Design", "Eco-Friendly"]
    },
    {
      id: 2,
      name: "Premium Decorative Kulhads",
      price: "₹449",
      originalPrice: "₹599",
      rating: 4.9,
      reviews: 89,
      image: kulhadCollection,
      tag: "Premium",
      features: ["Hand-Crafted", "Artistic Patterns", "Gift-Ready"]
    },
    {
      id: 3,
      name: "Bulk Party Pack",
      price: "₹899",
      originalPrice: "₹1199",
      rating: 4.7,
      reviews: 67,
      image: kulhadCollection,
      tag: "Value Pack",
      features: ["Set of 20", "Event Ready", "Cost Effective"]
    },
    {
      id: 4,
      name: "Mini Kulhad Collection",
      price: "₹199",
      originalPrice: "₹249",
      rating: 4.6,
      reviews: 156,
      image: kulhadCollection,
      tag: "Compact",
      features: ["Space Saving", "Quick Serve", "Portable"]
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-earth clay-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Authentic Kulhads
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted collection of eco-friendly kulhads, perfect for tea lovers and environmentally conscious consumers.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group kulhad-hover bg-background/80 backdrop-blur-sm border-border shadow-warm overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.tag}
                  </Badge>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col space-y-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </CardTitle>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  <Badge variant="secondary" className="text-xs">
                    SAVE {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                  </Badge>
                </div>

                <div className="space-y-1">
                  {product.features.map((feature, index) => (
                    <div key={index} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-eco-green rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button variant="kulhad" className="w-full group">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;