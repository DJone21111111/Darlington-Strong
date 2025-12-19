import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-haarlem.jpg";
import groteKerkExterior from "@/assets/grote-kerk-exterior.jpg";
import teylersExterior from "@/assets/teylers-exterior.jpg";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - WCAG AA compliant with dark overlay for text readability */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image with proper contrast overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
            role="presentation"
          />
          {/* Dark overlay ensuring WCAG AA 4.5:1 contrast ratio for text */}
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/40" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="opacity-0 animate-fade-up font-body text-sm uppercase tracking-[0.3em] text-cream">
              Discover the Heart of the Netherlands
            </p>
            <h1 
              id="hero-heading"
              className="opacity-0 animate-fade-up animation-delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight"
            >
              A Stroll Through
              <span className="block italic text-gold">History</span>
            </h1>
            <p className="opacity-0 animate-fade-up animation-delay-200 font-body text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
              Journey through centuries of Dutch heritage on our expertly guided walking tours of Haarlem. 
              Experience the Golden Age, magnificent architecture, and hidden treasures of this historic city.
            </p>
            <div className="opacity-0 animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/schedule" aria-label="Book your walking tour">
                  Book Your Tour
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/map" aria-label="View the walking route map">
                  View Route Map
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
          <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* History of Haarlem Section */}
      <section className="py-24 bg-card" aria-labelledby="history-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
                Discover Our Heritage
              </p>
              <h2 id="history-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                The History of Haarlem
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" aria-hidden="true" />
            </header>

            <article className="prose prose-lg max-w-none font-body text-foreground/90 space-y-6">
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
                Haarlem also holds a significant place in <strong className="text-primary">Dutch independence history</strong>. The Siege of Haarlem (1572-1573) during the Eighty Years' War saw citizens heroically resist Spanish forces for seven months. Though the city ultimately fell, this resistance became a symbol of Dutch determination for independence and is still commemorated today.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Venues to Visit Section */}
      <section className="py-24 bg-background" aria-labelledby="venues-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Our Walking Route
            </p>
            <h2 id="venues-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Venues to Visit
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Discover 9 remarkable locations that tell the story of Haarlem's rich heritage, from medieval churches to historic windmills.
            </p>
          </header>

          {/* Venues List - Scrollable */}
          <div className="max-w-5xl mx-auto">
            <div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
              <ol className="space-y-6" role="list" aria-label="Tour venues in order">
                {/* Venue 1: Church of St. Bavo */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    1
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Church of St. Bavo (Grote Kerk)
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed mb-3">
                      The magnificent Gothic cathedral dominating Haarlem's skyline since the 15th century. Its 78-meter tower is visible from across the region, and the church houses the world-famous Müller organ, once played by a young Mozart in 1766. The interior features stunning medieval artwork, intricate stained glass windows, and the tombs of notable Haarlem citizens including painter Frans Hals.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/grote-kerk" aria-label="Learn more about Church of St. Bavo">
                        Learn More <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>

              {/* Venue 2: Grote Markt */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    2
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Grote Markt (Great Market Square)
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      The vibrant heart of Haarlem since medieval times, surrounded by historic buildings including the Stadhuis (City Hall) dating from the 14th century. Originally a hunting lodge for the Counts of Holland, the square has hosted markets, festivals, and public gatherings for over 700 years. Today it remains the social and commercial center of the city, with cafés, restaurants, and the famous Saturday market.
                    </p>
                  </div>
                </div>
              </li>

                {/* Venue 3: De Hallen */}
                <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                      3
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                        De Hallen (Frans Hals Museum)
                      </h3>
                      <p className="font-body text-foreground/80 leading-relaxed">
                        A cultural complex housed in historic 17th-century buildings that once served as almshouses. The Vleeshal (Meat Hall) and Verweyhal now host contemporary art exhibitions, while the main Frans Hals Museum displays masterpieces from the Dutch Golden Age. The museum collection includes works by Frans Hals himself, known for his lively and expressive portraits that revolutionized Dutch painting.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Venue 4: Proveniershof */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    4
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Proveniershof
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      One of Haarlem's most beautiful hidden hofjes (courtyard gardens), founded in 1707. These peaceful enclosed gardens were originally built as charitable housing for elderly men and women. The Proveniershof features a stunning inner garden with centuries-old trees, traditional Dutch architecture, and an atmosphere of serene tranquility that transports visitors back to the 18th century.
                    </p>
                  </div>
                </div>
              </li>

              {/* Venue 5: Jopenkerk (Break Location) */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-gold text-charcoal rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    5
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                        Jopenkerk
                      </h3>
                      <span className="bg-gold/20 text-gold-foreground px-2 py-1 rounded text-xs font-body font-semibold">
                        Break Location
                      </span>
                    </div>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      A stunning 15th-century church transformed into a brewery and grand café, representing Haarlem's innovative spirit. The Jacobskerk (St. James Church) was deconsecrated and beautifully restored to house the Jopen Brewery, which revives historic Haarlem beer recipes dating back to the 16th century. Here, tour participants can enjoy traditional Dutch refreshments beneath Gothic arches and stained glass windows.
                    </p>
                  </div>
                </div>
              </li>

              {/* Venue 6: Waalse Kerk Haarlem */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    6
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Waalse Kerk Haarlem (Walloon Church)
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      A historic French Reformed church dating from the 16th century, originally built for the Walloon (French-speaking Protestant) refugees who fled religious persecution in the Spanish Netherlands. The church represents Haarlem's long tradition of religious tolerance and its role as a haven for persecuted communities. The intimate interior features beautiful woodwork and serves as a reminder of the diverse communities that shaped Dutch culture.
                    </p>
                  </div>
                </div>
              </li>

              {/* Venue 7: Molen de Adriaan */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    7
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Molen de Adriaan (De Adriaan Windmill)
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      An iconic Dutch windmill standing proudly on the banks of the River Spaarne since 1779. Originally built for grinding tobacco and later used for cement production, the mill was destroyed by fire in 1932 and lovingly reconstructed in 2002. Today it serves as a museum where visitors can learn about traditional Dutch milling techniques and enjoy panoramic views of Haarlem from its gallery.
                    </p>
                  </div>
                </div>
              </li>

              {/* Venue 8: Amsterdamse Poort */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    8
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Amsterdamse Poort (Amsterdam Gate)
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      The last remaining medieval city gate of Haarlem, dating from the late 14th century (circa 1355). This impressive fortification once controlled access to the city from the Amsterdam road and played a crucial defensive role during the Siege of Haarlem. The twin-towered gate is one of the oldest city gates in the Netherlands and stands as a powerful reminder of Haarlem's medieval past and its strategic importance.
                    </p>
                  </div>
                </div>
              </li>

              {/* Venue 9: Hof van Bakenes */}
              <li className="bg-card rounded-xl p-6 shadow-card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display font-bold text-lg" aria-hidden="true">
                    9
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                      Hof van Bakenes
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">
                      The oldest hofje in Haarlem, founded in 1395 and remarkably still functioning today. This tranquil courtyard provides housing for elderly women and represents over six centuries of continuous charitable care. The beautifully preserved medieval buildings surround a peaceful garden, offering a glimpse into the Dutch tradition of community support that predates modern social welfare systems.
                    </p>
                  </div>
                </div>
              </li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/map" aria-label="View the complete walking route map">
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                View Complete Route Map
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Locations Detail Section */}
      <section className="py-24 bg-secondary" aria-labelledby="featured-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Featured Locations
            </p>
            <h2 id="featured-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Key Destinations
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" aria-hidden="true" />
          </header>

          {/* Grote Kerk */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="overflow-hidden rounded-xl shadow-card group">
              <img
                src={groteKerkExterior}
                alt="Exterior view of Grote Kerk St. Bavo Church showing the Gothic architecture and 78-meter tower"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <p className="font-body text-xs uppercase tracking-wider text-primary">
                Est. 1520
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Grote Kerk (St. Bavo's Church)
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                The magnificent Gothic cathedral that dominates Haarlem's skyline has been the spiritual heart of the city for over 500 years. Its soaring tower rises 78 meters above the Grote Markt, serving as a landmark visible from across the region. The church houses the world-famous Müller organ, once played by a young Mozart in 1766.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Originally built as a Catholic church, St. Bavo's transitioned to Protestant worship during the Reformation. Today, it serves both as an active Protestant church and as a venue for concerts and exhibitions.
              </p>
              <Button variant="outline" asChild>
                <Link to="/grote-kerk" aria-label="Learn more about Grote Kerk St. Bavo Church">
                  Discover More
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </article>

          {/* Teylers Museum */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <p className="font-body text-xs uppercase tracking-wider text-primary">
                Est. 1778
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Teylers Museum
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                The oldest museum in the Netherlands, Teylers Museum is a monument to Enlightenment thinking and the pursuit of knowledge. Founded by wealthy silk merchant Pieter Teyler van der Hulst, the museum was created to promote art and science for the public good.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                The collection spans an remarkable range: from Rembrandt drawings and Michelangelo sketches to fossils, minerals, and historic scientific instruments. Its stunning Oval Room, with original 18th-century display cabinets, remains virtually unchanged since it opened.
              </p>
              <Button variant="outline" asChild>
                <Link to="/teylers-museum" aria-label="Learn more about Teylers Museum">
                  Discover More
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-card group">
              <img
                src={teylersExterior}
                alt="Exterior view of Teylers Museum showing the historic 18th-century building facade"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </article>
        </div>
      </section>

      {/* Tour Schedule Section */}
      <section className="py-24 bg-card" aria-labelledby="schedule-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Plan Your Visit
            </p>
            <h2 id="schedule-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tour Schedule
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              All tours depart from Bavo Church (Grote Kerk) on the Grote Markt. Reservation is mandatory.
            </p>
          </header>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-background rounded-lg p-6 text-center shadow-elegant">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
              <p className="font-display font-bold text-lg text-foreground">Duration</p>
              <p className="font-body text-muted-foreground">2.5 hours</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center shadow-elegant">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
              <p className="font-display font-bold text-lg text-foreground">Group Size</p>
              <p className="font-body text-muted-foreground">Max 12 people</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center shadow-elegant">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
              <p className="font-display font-bold text-lg text-foreground">Start Point</p>
              <p className="font-body text-muted-foreground">Grote Kerk</p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center shadow-elegant">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" aria-hidden="true" />
              <p className="font-display font-bold text-lg text-foreground">Days</p>
              <p className="font-body text-muted-foreground">Thu - Sun</p>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-background rounded-xl shadow-card overflow-hidden" role="table" aria-label="Weekly tour schedule">
              <caption className="sr-only">Walking tour schedule with times, languages, and pricing</caption>
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="px-4 py-4 text-left font-display font-semibold">Time</th>
                  <th scope="col" className="px-4 py-4 text-left font-display font-semibold">Start Location</th>
                  <th scope="col" className="px-4 py-4 text-center font-display font-semibold">English</th>
                  <th scope="col" className="px-4 py-4 text-center font-display font-semibold">Dutch</th>
                  <th scope="col" className="px-4 py-4 text-center font-display font-semibold">Chinese</th>
                  <th scope="col" className="px-4 py-4 text-center font-display font-semibold">Seats</th>
                  <th scope="col" className="px-4 py-4 text-right font-display font-semibold">Price</th>
                  <th scope="col" className="px-4 py-4 text-right font-display font-semibold">Family (4 max)</th>
                  <th scope="col" className="px-4 py-4 text-center font-display font-semibold">Reservation</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {/* Thursday */}
                <tr className="bg-muted border-b border-border">
                  <th colSpan={9} scope="colgroup" className="px-4 py-3 font-display font-bold text-foreground text-left">
                    Thursday — Guides: Hans (Dutch), Frederic (English)
                  </th>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">10:00</td>
                  <td className="px-4 py-3">Bavo Church</td>
                  <td className="px-4 py-3 text-center"><span aria-label="1 English tour available">1</span></td>
                  <td className="px-4 py-3 text-center"><span aria-label="1 Dutch tour available">1</span></td>
                  <td className="px-4 py-3 text-center"><span aria-label="No Chinese tour available">—</span></td>
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
                <tr className="bg-muted border-b border-border">
                  <th colSpan={9} scope="colgroup" className="px-4 py-3 font-display font-bold text-foreground text-left">
                    Friday — Guides: Hans (Dutch), William (English), Kim (Chinese)
                  </th>
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
                <tr className="bg-muted border-b border-border">
                  <th colSpan={9} scope="colgroup" className="px-4 py-3 font-display font-bold text-foreground text-left">
                    Saturday — Guides: Williams (English), Kim (Chinese)
                  </th>
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
                <tr className="bg-muted border-b border-border">
                  <th colSpan={9} scope="colgroup" className="px-4 py-3 font-display font-bold text-foreground text-left">
                    Sunday — Guides: Willem (Dutch), Frederic + William (English), Kim (Mandarin)
                  </th>
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
          <aside className="max-w-4xl mx-auto mt-8 bg-background rounded-xl p-6 shadow-card" aria-labelledby="remarks-heading">
            <h3 id="remarks-heading" className="font-display text-lg font-semibold mb-3 text-foreground">Important Remarks</h3>
            <ul className="font-body text-muted-foreground space-y-2 list-disc list-inside">
              <li>Due to the nature of this walk, participants must be a minimum of 12 years old.</li>
              <li>No strollers are allowed on the tour.</li>
              <li>Groups will consist of 12 participants + 1 guide.</li>
              <li>Please arrive 10 minutes before your scheduled departure time.</li>
              <li>Tours run in all weather conditions; please dress appropriately.</li>
            </ul>
          </aside>

          <div className="text-center mt-10">
            <Button variant="hero" size="xl" asChild>
              <Link to="/schedule" aria-label="View full schedule and book your tour">
                View Full Schedule & Book
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 text-center">
          <h2 id="cta-heading" className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Haarlem?
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your walking tour today and discover why Haarlem has been captivating visitors for centuries. 
            Experience history come alive through our expert-guided tours visiting 9 remarkable locations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/schedule" aria-label="Reserve your spot on a walking tour">
                Reserve Your Spot
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/map" aria-label="Explore the walking route">
                Explore the Route
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
