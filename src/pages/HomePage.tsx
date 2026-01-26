import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Calendar, Star, Compass, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-haarlem.jpg";
import groteKerkExterior from "@/assets/grote-kerk-exterior.jpg";
import groteKerkInterior from "@/assets/grote-kerk-interior.jpg";
import groteKerkHistoric from "@/assets/grote-kerk-historic.jpg";
import molenExterior from "@/assets/molen-de-adriaan-exterior.jpg";
import haarlemAerial from "@/assets/haarlem-aerial.jpg";
import museumGallery from "@/assets/museum-gallery.jpg";
import hofjeGarden from "@/assets/hofje-garden.jpg";
import windmillSunset from "@/assets/windmill-sunset.jpg";
import groteMarktLife from "@/assets/grote-markt-life.jpg";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Full Screen Immersive */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover scale-110"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-gold/20 rounded-full animate-float opacity-30" aria-hidden="true" />
        <div className="absolute bottom-1/3 right-16 w-32 h-32 border border-cream/10 rounded-full animate-float animation-delay-200 opacity-20" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="opacity-0 animate-fade-up flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-gold" />
              <p className="font-body text-base uppercase tracking-[0.4em] text-gold">
                Experience the Dutch Golden Age
              </p>
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <h1 
              id="hero-heading"
              className="opacity-0 animate-fade-up animation-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight"
            >
              Discover
              <span className="block text-gradient-gold italic mt-2">Haarlem</span>
            </h1>
            <p className="opacity-0 animate-fade-up animation-delay-200 font-body text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
              Walk through 800 years of Dutch history in one unforgettable journey. 
              From majestic churches to hidden courtyards, every step reveals a story.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/schedule" aria-label="Book your walking tour">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Book Your Adventure
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/map" aria-label="View the walking route map">
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Explore Route
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="opacity-0 animate-fade-up animation-delay-400 pt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gold">9</p>
                <p className="font-body text-base text-cream/70 uppercase tracking-wider">Historic Sites</p>
              </div>
              <div className="text-center border-x border-cream/20">
                <p className="font-display text-4xl font-bold text-gold">2.5</p>
                <p className="font-body text-base text-cream/70 uppercase tracking-wider">Hours Tour</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-gold">800+</p>
                <p className="font-body text-base text-cream/70 uppercase tracking-wider">Years History</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
          <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Banner - Immersive Visual Break */}
      <section className="relative py-4 bg-charcoal overflow-hidden">
        <div className="flex gap-4 animate-scroll-left">
          {[groteKerkExterior, molenExterior, museumGallery, hofjeGarden, windmillSunset, groteMarktLife, groteKerkInterior].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* History Section - Rich Visual Storytelling */}
      <section className="relative py-32 bg-card overflow-hidden" aria-labelledby="history-heading">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjRGNEYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        </div>

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

          {/* History Content with Images */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="relative">
                <span className="font-display text-9xl font-bold text-primary/10 absolute -top-8 -left-4">10</span>
                <h3 className="font-display text-2xl font-bold text-foreground relative z-10">Century of Origins</h3>
              </div>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Founded in the <strong className="text-primary">10th century</strong>, Haarlem is one of the oldest cities in the Netherlands. 
                Receiving its city rights in 1245, it became a vital center of commerce, art, and culture that would shape Dutch identity for centuries to come.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Just 20 kilometers west of Amsterdam, Haarlem has always stood as a proud rival—often surpassing the capital in cultural achievements during the <strong className="text-primary">Dutch Golden Age</strong>.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img 
                src={haarlemAerial} 
                alt="Aerial view of historic Haarlem city center" 
                className="relative rounded-2xl shadow-hover w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                <p className="font-display font-bold text-foreground">City Center</p>
                <p className="font-body text-base text-muted-foreground">Grote Markt at Golden Hour</p>
              </div>
            </div>
          </div>

          {/* Golden Age Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gold/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img 
                src={museumGallery} 
                alt="Golden Age paintings in museum gallery" 
                className="relative rounded-2xl shadow-hover w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                <p className="font-display font-bold text-foreground">Dutch Masters</p>
                <p className="font-body text-base text-muted-foreground">Frans Hals & Contemporaries</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="relative">
                <span className="font-display text-9xl font-bold text-accent/10 absolute -top-8 -left-4">17</span>
                <h3 className="font-display text-2xl font-bold text-foreground relative z-10">The Golden Age</h3>
              </div>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                The 17th century saw Haarlem flourish as Europe's artistic capital. Home to legendary painters <em className="text-primary">Frans Hals</em>, <em className="text-primary">Jacob van Ruisdael</em>, and <em className="text-primary">Adriaen van Ostade</em>, the Haarlem School of painting rivaled even Amsterdam in prestige.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                The city's economy thrived on textile production, earning the nickname <strong className="text-primary">"Linen City"</strong>. This was also the epicenter of history's first speculative bubble—the legendary <em>Tulip Mania</em> of 1637.
              </p>
            </div>
          </div>

          {/* Siege of Haarlem */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <span className="font-display text-9xl font-bold text-burgundy/10 absolute -top-8 -left-4">15</span>
                <h3 className="font-display text-2xl font-bold text-foreground relative z-10">The Siege of Haarlem (1572-73)</h3>
              </div>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                The <strong className="text-primary">Siege of Haarlem</strong> during the Eighty Years' War remains a defining moment in Dutch history. For seven months, citizens heroically resisted Spanish forces in what became a symbol of Dutch determination for independence.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Though the city ultimately fell, this resistance inspired the nation and is still commemorated today as a testament to the indomitable Dutch spirit.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-primary/20 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500" />
              <img 
                src={groteMarktLife} 
                alt="Vibrant Grote Markt market square in Haarlem" 
                className="relative rounded-2xl shadow-hover w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                <p className="font-display font-bold text-foreground">Living Heritage</p>
                <p className="font-body text-sm text-muted-foreground">Market Day Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Highlights Grid */}
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

      {/* Featured Locations - Immersive Cards */}
      <section className="py-32 bg-secondary" aria-labelledby="featured-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-20">
            <p className="font-body text-base uppercase tracking-[0.3em] text-primary mb-4 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-primary/50" />
              Must-See Destinations
              <span className="w-12 h-px bg-primary/50" />
            </p>
            <h2 id="featured-heading" className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Featured <span className="text-primary italic">Locations</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From medieval churches to world-class museums, each stop on our tour reveals centuries of Dutch heritage
            </p>
          </header>

          {/* Grote Kerk Feature */}
          <article className="relative mb-24 group">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-hover bg-card">
              {/* Single Image */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden">
                <img
                  src={groteKerkExterior}
                  alt="Grote Kerk St. Bavo Church exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-charcoal px-4 py-2 rounded-full font-display font-bold text-base">
                  Est. 1520
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-body text-base text-muted-foreground ml-2">Tour Highlight</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Grote Kerk (St. Bavo's Church)
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  The magnificent Gothic cathedral dominating Haarlem's skyline for over 500 years. Its 78-meter tower is visible across the region, and the church houses the world-famous Müller organ—once played by a young Mozart in 1766.
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    78m Tower Height
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Famous Müller Organ
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Gothic Architecture
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Frans Hals Tomb
                  </li>
                </ul>
                <Button variant="outline" size="lg" asChild className="w-fit group/btn">
                  <Link to="/grote-kerk" aria-label="Learn more about Grote Kerk">
                    Explore This Location
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>


          {/* Molen de Adriaan Feature */}
          <article className="relative group">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-hover bg-card">
              {/* Single Image */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden">
                <img
                  src={molenExterior}
                  alt="Molen de Adriaan windmill exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-charcoal px-4 py-2 rounded-full font-display font-bold text-base">
                  Est. 1779
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-body text-base text-muted-foreground ml-2">Iconic Landmark</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Molen de Adriaan
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  This iconic Dutch windmill stands proudly on the banks of the Spaarne River. Originally built in 1779, it was faithfully reconstructed in 2002 after a devastating fire, and now serves as a working museum showcasing traditional milling techniques.
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Built 1779
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Panoramic Views
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Working Museum
                  </li>
                  <li className="flex items-center gap-2 font-body text-base text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    Spaarne River
                  </li>
                </ul>
                <Button variant="outline" size="lg" asChild className="w-fit group/btn">
                  <Link to="/molen-de-adriaan" aria-label="Learn more about Molen de Adriaan">
                    Explore This Location
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* All 9 Venues Preview */}
      <section className="py-24 bg-background" aria-labelledby="venues-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Complete Walking Route
            </p>
            <h2 id="venues-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              9 Remarkable <span className="text-primary italic">Venues</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Each stop tells a unique chapter of Haarlem's rich 800-year story
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { num: 1, name: "Grote Kerk", desc: "15th-century Gothic cathedral", link: "/grote-kerk" },
              { num: 2, name: "Grote Markt", desc: "Historic market square since medieval times" },
              { num: 3, name: "De Hallen", desc: "Frans Hals Museum in 17th-century almshouses" },
              { num: 4, name: "Proveniershof", desc: "Beautiful hidden courtyard garden" },
              { num: 5, name: "Jopenkerk", desc: "Brewery in a converted 15th-century church", badge: "Break" },
              { num: 6, name: "Waalse Kerk", desc: "16th-century French Reformed church" },
              { num: 7, name: "Molen de Adriaan", desc: "Iconic windmill on the Spaarne River" },
              { num: 8, name: "Amsterdamse Poort", desc: "Last remaining medieval city gate" },
              { num: 9, name: "Hof van Bakenes", desc: "Oldest hofje in Haarlem, founded 1395" },
            ].map((venue) => (
              <div key={venue.num} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform">
                    {venue.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-foreground">{venue.name}</h3>
                      {venue.badge && (
                        <span className="bg-gold/20 text-gold-foreground px-2 py-0.5 rounded text-xs font-body font-semibold">
                          {venue.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-muted-foreground text-sm mt-1">{venue.desc}</p>
                    {venue.link && (
                      <Link to={venue.link} className="font-body text-primary text-sm mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/map" aria-label="View the complete walking route map">
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                View Interactive Route Map
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Quick Info */}
      <section className="py-20 bg-secondary" aria-labelledby="info-heading">
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
              <p className="font-display font-bold text-2xl text-foreground">Grote Kerk</p>
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
