import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Calendar, Star, Compass, Camera, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-haarlem.jpg";
import groteKerkExterior from "@/assets/grote-kerk-exterior.jpg";
import groteKerkInterior from "@/assets/grote-kerk-interior.jpg";
import molenExterior from "@/assets/molen-de-adriaan-exterior.jpg";
import haarlemAerial from "@/assets/haarlem-aerial.jpg";
import museumGallery from "@/assets/museum-gallery.jpg";
import hofjeGarden from "@/assets/hofje-garden.jpg";
import windmillSunset from "@/assets/windmill-sunset.jpg";
import groteMarktLife from "@/assets/grote-markt-life.jpg";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Left Card Overlay */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image - Full bleed, no heavy dark overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
        </div>

        {/* Hero Card - Left side semi-transparent */}
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-xl bg-card/85 backdrop-blur-sm rounded-2xl p-10 md:p-14 shadow-elegant">
            <h1 
              id="hero-heading"
              className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Discover
              <span className="block text-primary italic mt-1">Haarlem</span>
            </h1>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
              Walk through 800 years of Dutch history in one unforgettable journey. 
              From majestic churches to hidden courtyards, every step reveals a story.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/schedule" aria-label="Book your walking tour">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Book Your Adventure
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/map" aria-label="View the walking route map">
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Explore Route
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
          <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center">
            <ChevronDown className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </section>

      {/* History Section - Rich Visual Storytelling */}
      <section className="relative py-32 bg-card overflow-hidden" aria-labelledby="history-heading">
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <header className="text-center mb-20">
            <p className="font-body text-base uppercase tracking-[0.3em] text-primary mb-4 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-primary/50" />
              Our Heritage
              <span className="w-12 h-px bg-primary/50" />
            </p>
            <h2 id="history-heading" className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              The History of <span className="text-primary italic">Haarlem</span>
            </h2>
          </header>

          {/* History Content with Route Line */}
          <div className="relative">
            {/* SVG Route Line */}
            <svg 
              className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 pointer-events-none hidden lg:block"
              viewBox="0 0 100 1600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M50,0 
                   C50,100 80,150 80,250
                   C80,350 20,400 20,500
                   C20,600 80,650 80,750
                   C80,850 20,900 20,1000
                   C20,1100 80,1150 80,1250
                   C80,1350 50,1400 50,1600"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="12 8"
                strokeLinecap="round"
                className="animate-dash"
              />
              <circle cx="50" cy="100" r="12" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="50" cy="100" r="6" fill="hsl(var(--card))" />
              <circle cx="50" cy="800" r="12" fill="hsl(var(--accent))" className="animate-pulse" />
              <circle cx="50" cy="800" r="6" fill="hsl(var(--card))" />
              <circle cx="50" cy="1500" r="12" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="50" cy="1500" r="6" fill="hsl(var(--card))" />
            </svg>

            {/* Century of Origins */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 relative">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Century of Origins</h3>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Founded in the <strong className="text-primary">10th century</strong>, Haarlem is one of the oldest cities in the Netherlands. 
                  Receiving its city rights in 1245, it became a vital center of commerce, art, and culture that would shape Dutch identity for centuries to come.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Just 20 kilometers west of Amsterdam, Haarlem has always stood as a proud rival—often surpassing the capital in cultural achievements during the <strong className="text-primary">Dutch Golden Age</strong>.
                </p>
              </div>
              <div className="relative group">
                <img 
                  src={haarlemAerial} 
                  alt="Aerial view of historic Haarlem city center" 
                  className="rounded-2xl shadow-hover w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                  <p className="font-display font-bold text-foreground">City Center</p>
                  <p className="font-body text-base text-muted-foreground">Grote Markt at Golden Hour</p>
                </div>
              </div>
            </div>

            {/* Golden Age Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 relative">
              <div className="order-2 lg:order-1 relative group">
                <img 
                  src={museumGallery} 
                  alt="Golden Age paintings in museum gallery" 
                  className="rounded-2xl shadow-hover w-full h-[450px] object-cover"
                />
                <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                  <p className="font-display font-bold text-foreground">Dutch Masters</p>
                  <p className="font-body text-base text-muted-foreground">Frans Hals & Contemporaries</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">The Golden Age</h3>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  The 17th century saw Haarlem flourish as Europe's artistic capital. Home to legendary painters <em className="text-primary">Frans Hals</em>, <em className="text-primary">Jacob van Ruisdael</em>, and <em className="text-primary">Adriaen van Ostade</em>, the Haarlem School of painting rivaled even Amsterdam in prestige.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  The city's economy thrived on textile production, earning the nickname <strong className="text-primary">"Linen City"</strong>. This was also the epicenter of history's first speculative bubble—the legendary <em>Tulip Mania</em> of 1637.
                </p>
              </div>
            </div>

            {/* Siege of Haarlem */}
            <div className="grid lg:grid-cols-2 gap-16 items-center relative">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground">The Siege of Haarlem</h3>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  The <strong className="text-primary">Siege of Haarlem</strong> during the Eighty Years' War remains a defining moment in Dutch history. For seven months, citizens heroically resisted Spanish forces in what became a symbol of Dutch determination for independence.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Though the city ultimately fell, this resistance inspired the nation and is still commemorated today as a testament to the indomitable Dutch spirit.
                </p>
              </div>
              <div className="relative group">
                <img 
                  src={groteMarktLife} 
                  alt="Vibrant Grote Markt market square in Haarlem" 
                  className="rounded-2xl shadow-hover w-full h-[450px] object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                  <p className="font-display font-bold text-foreground">Living Heritage</p>
                  <p className="font-body text-base text-muted-foreground">Market Day Tradition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Highlights - "What Awaits You" */}
      <section className="py-24 bg-charcoal" aria-labelledby="highlights-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <p className="font-body text-base uppercase tracking-[0.3em] text-gold mb-4">
              Visual Journey
            </p>
            <h2 id="highlights-heading" className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              What Awaits You
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hidden Courtyards */}
            <div className="group relative rounded-2xl overflow-hidden h-[400px]">
              <img src={hofjeGarden} alt="Secret hofje courtyard garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-gold" />
                  <span className="font-body text-base uppercase tracking-wider text-gold">Hidden Gems</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2">Secret Courtyards</h3>
                <p className="font-body text-cream/80 text-base">Discover 17th-century hofjes—peaceful gardens hidden behind ancient wooden gates</p>
              </div>
            </div>

            {/* Windmill */}
            <div className="group relative rounded-2xl overflow-hidden h-[400px]">
              <img src={windmillSunset} alt="De Adriaan windmill at sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-gold" />
                  <span className="font-body text-base uppercase tracking-wider text-gold">Iconic Landmark</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2">Molen de Adriaan</h3>
                <p className="font-body text-cream/80 text-base">Climb the iconic windmill for panoramic views over the historic Spaarne River</p>
              </div>
            </div>

            {/* Church Interior */}
            <div className="group relative rounded-2xl overflow-hidden h-[400px]">
              <img src={groteKerkInterior} alt="Grote Kerk cathedral interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="font-body text-base uppercase tracking-wider text-gold">Gothic Marvel</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2">Sacred Architecture</h3>
                <p className="font-body text-cream/80 text-base">Stand beneath soaring Gothic arches where Mozart once played the famous Müller organ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Quick Info */}
      <section className="py-20 bg-card" aria-labelledby="info-heading">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display font-bold text-2xl text-foreground">2.5 Hours</p>
              <p className="font-body text-sm text-muted-foreground">Tour Duration</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display font-bold text-2xl text-foreground">Max 12</p>
              <p className="font-body text-sm text-muted-foreground">Group Size</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display font-bold text-2xl text-foreground">Bavo Church</p>
              <p className="font-body text-sm text-muted-foreground">Start Point</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display font-bold text-2xl text-foreground">Thu - Sun</p>
              <p className="font-body text-sm text-muted-foreground">Available Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0">
          <img src={haarlemAerial} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/90 to-charcoal/80" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Your Adventure Awaits
            </p>
            <h2 id="cta-heading" className="font-display text-5xl md:text-6xl font-bold text-cream mb-6">
              Ready to <span className="text-gradient-gold italic">Explore</span>?
            </h2>
            <p className="font-body text-xl text-cream/90 mb-10 leading-relaxed">
              Book your walking tour today and discover why Haarlem has been captivating visitors for centuries. 
              Experience history come alive through our expert-guided tours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild className="group">
                <Link to="/schedule" aria-label="Reserve your spot on a walking tour">
                  Reserve Your Spot
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/map" aria-label="Explore the walking route">
                  View Route Map
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
