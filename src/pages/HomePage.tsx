import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-haarlem.jpg";
import groteKerkExterior from "@/assets/grote-kerk-exterior.jpg";
import teylersExterior from "@/assets/teylers-exterior.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aerial view of historic Haarlem city center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="opacity-0 animate-fade-up font-body text-sm uppercase tracking-[0.3em] text-foreground/80">
              Discover the Heart of the Netherlands
            </p>
            <h1 className="opacity-0 animate-fade-up animation-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              A Stroll Through
              <span className="block italic text-primary">History</span>
            </h1>
            <p className="opacity-0 animate-fade-up animation-delay-200 font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Journey through centuries of Dutch heritage on our expertly guided walking tours of Haarlem. Experience the Golden Age, magnificent architecture, and hidden treasures.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/schedule">
                  Book Your Tour
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/map">
                  View Route Map
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* History of Haarlem Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4 animate-fade-up">
                Discover Our Heritage
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-fade-up animation-delay-100">
                The History of Haarlem
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none font-body text-foreground/90 space-y-6 animate-fade-up animation-delay-200">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Haarlem</strong>, the capital of North Holland, is one of the oldest and most historically significant cities in the Netherlands. Founded in the 10th century, the city received its official city rights in 1245, making it one of the earliest Dutch cities to achieve this status. Located just 20 kilometers west of Amsterdam, Haarlem has played a pivotal role in Dutch history, culture, and commerce for over a millennium.
              </p>

              <p className="text-lg leading-relaxed">
                During the <strong className="text-primary">Dutch Golden Age</strong> (17th century), Haarlem flourished as a center of art, culture, and industry. The city became home to renowned painters such as <em>Frans Hals</em>, <em>Jacob van Ruisdael</em>, and <em>Adriaen van Ostade</em>, whose works continue to influence art worldwide. The Haarlem School of painting established the city as one of the most important artistic centers in Europe, rivaling even Amsterdam in cultural prestige.
              </p>

              <p className="text-lg leading-relaxed">
                The city's economy thrived on <strong className="text-primary">textile production</strong>, particularly linen and silk weaving, which earned Haarlem the nickname "Linen City." The famous tulip trade also found its roots here, with Haarlem at the epicenter of the legendary <em>Tulip Mania</em> of 1637—history's first recorded speculative bubble. Today, the region still celebrates this legacy through the stunning tulip fields that bloom each spring.
              </p>

              <p className="text-lg leading-relaxed">
                Architecturally, Haarlem is a treasure trove of <strong className="text-primary">medieval and Renaissance buildings</strong>. The magnificent Grote Kerk (St. Bavo's Church), with its iconic tower visible from miles around, has stood watch over the Grote Markt since the 15th century. The Stadhuis (City Hall), originally a hunting lodge for the Counts of Holland, showcases centuries of architectural evolution. Hidden throughout the city are the famous <em>hofjes</em>—courtyard almshouses that provided housing for the elderly and poor, many of which remain remarkably preserved.
              </p>

              <p className="text-lg leading-relaxed">
                Haarlem also holds a significant place in <strong className="text-primary">scientific history</strong>. Teylers Museum, founded in 1778, is the oldest museum in the Netherlands and represents the Enlightenment ideals of knowledge and education. The city contributed to advances in printing, with Laurens Janszoon Coster traditionally credited as one of the inventors of printing with movable type, though this claim remains debated among historians.
              </p>

              <p className="text-lg leading-relaxed">
                The city's <strong className="text-primary">strategic importance</strong> was demonstrated during the Siege of Haarlem (1572-1573), when citizens heroically resisted Spanish forces for seven months during the Eighty Years' War. Though the city ultimately fell, this resistance became a symbol of Dutch determination for independence and is still commemorated today.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Haarlem seamlessly blends its <strong className="text-primary">rich historical heritage</strong> with modern Dutch life. The cobblestone streets, canal-side walks, and centuries-old buildings create an atmosphere that transports visitors back in time, while vibrant cafés, boutiques, and cultural venues ensure the city remains very much alive. Our walking tour takes you through these layers of history, from medieval alleyways to Golden Age masterpieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Locations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Featured Locations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Iconic Landmarks on Our Tour
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Grote Kerk */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="overflow-hidden rounded-xl shadow-card group">
              <img
                src={groteKerkExterior}
                alt="Grote Kerk St Bavo Church exterior"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <p className="font-body text-xs uppercase tracking-wider text-primary">
                Est. 1520
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Grote Kerk (St. Bavo's Church)
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                The magnificent Gothic cathedral that dominates Haarlem's skyline has been the spiritual heart of the city for over 500 years. Its soaring tower rises 78 meters above the Grote Markt, serving as a landmark visible from across the region. The church houses the world-famous Müller organ, once played by a young Mozart in 1766, and features stunning stained glass windows and medieval artwork.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Originally built as a Catholic church, St. Bavo's transitioned to Protestant worship during the Reformation. Today, it serves both as an active Protestant church and as a venue for concerts and exhibitions, continuing its centuries-long tradition of bringing the community together.
              </p>
              <Button variant="outline" asChild>
                <Link to="/grote-kerk">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Teylers Museum */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <p className="font-body text-xs uppercase tracking-wider text-primary">
                Est. 1778
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Teylers Museum
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                The oldest museum in the Netherlands, Teylers Museum is a monument to Enlightenment thinking and the pursuit of knowledge. Founded by wealthy silk merchant Pieter Teyler van der Hulst, the museum was created to promote art and science for the public good. Its stunning Oval Room, with original 18th-century display cabinets, remains virtually unchanged since it opened.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                The collection spans an remarkable range: from Rembrandt drawings and Michelangelo sketches to fossils, minerals, and historic scientific instruments. The museum represents the Enlightenment ideal that art, science, and education are interconnected paths to human progress—a philosophy that resonates to this day.
              </p>
              <Button variant="outline" asChild>
                <Link to="/teylers-museum">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-card group">
              <img
                src={teylersExterior}
                alt="Teylers Museum exterior"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Schedule Table */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tour Schedule
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              All tours depart from Bavo Church (Grote Kerk) on the Grote Markt. Reservation is mandatory.
            </p>
          </div>

          {/* Schedule Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl shadow-card overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left font-display font-semibold">Time</th>
                  <th className="px-4 py-4 text-left font-display font-semibold">Start Location</th>
                  <th className="px-4 py-4 text-center font-display font-semibold">English Tour</th>
                  <th className="px-4 py-4 text-center font-display font-semibold">Dutch Tour</th>
                  <th className="px-4 py-4 text-center font-display font-semibold">Chinese Tour</th>
                  <th className="px-4 py-4 text-center font-display font-semibold">Seats per Tour</th>
                  <th className="px-4 py-4 text-right font-display font-semibold">Price</th>
                  <th className="px-4 py-4 text-right font-display font-semibold">Family Ticket (4 max)</th>
                  <th className="px-4 py-4 text-center font-display font-semibold">Reservation</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {/* Thursday */}
                <tr className="bg-[hsl(60,40%,90%)] border-b border-border">
                  <td colSpan={9} className="px-4 py-3 font-display font-bold text-foreground">
                    Thursday — Guides: Hans (Dutch), Frederic (English)
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">10:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">13:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">16:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>

                {/* Friday */}
                <tr className="bg-[hsl(60,40%,90%)] border-b border-border">
                  <td colSpan={9} className="px-4 py-3 font-display font-bold text-foreground">
                    Friday — Guides: Hans (Dutch), William (English), Kim (Chinese)
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">10:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">13:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">16:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>

                {/* Saturday */}
                <tr className="bg-[hsl(60,40%,90%)] border-b border-border">
                  <td colSpan={9} className="px-4 py-3 font-display font-bold text-foreground">
                    Saturday — Guides: Williams (English), Kim (Chinese)
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">10:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">13:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">16:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>

                {/* Sunday */}
                <tr className="bg-[hsl(60,40%,90%)] border-b border-border">
                  <td colSpan={9} className="px-4 py-3 font-display font-bold text-foreground">
                    Sunday — Guides: Willem (Dutch), Frederic + William (English), Kim (Mandarin)
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">10:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">13:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">3</td>
                  <td className="px-4 py-3 text-center">3</td>
                  <td className="px-4 py-3 text-center">2</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">16:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">1</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center">12</td>
                  <td className="px-4 py-3 text-right">€17.50</td>
                  <td className="px-4 py-3 text-right">€60.00</td>
                  <td className="px-4 py-3 text-center text-primary font-medium">mandatory</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Remarks */}
          <div className="max-w-4xl mx-auto mt-8 bg-card rounded-xl p-6 shadow-card">
            <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Important Remarks</h4>
            <ul className="font-body text-muted-foreground space-y-2 list-disc list-inside">
              <li>Due to the nature of this walk, participants must be a minimum of 12 years old.</li>
              <li>No strollers are allowed on the tour.</li>
              <li>Groups will consist of 12 participants + 1 guide.</li>
              <li>Please arrive 10 minutes before your scheduled departure time.</li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="xl" asChild>
              <Link to="/schedule">
                View Full Schedule & Book
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Haarlem?
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your walking tour today and discover why Haarlem has been captivating visitors for centuries. Experience history come alive through our expert-guided tours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/schedule">
                Reserve Your Spot
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/map">
                Explore the Route
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
