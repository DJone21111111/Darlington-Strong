import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import groteKerkExterior from "@/assets/grote-kerk-exterior.jpg";
import groteKerkInterior from "@/assets/grote-kerk-interior.jpg";
import groteKerkHistoric from "@/assets/grote-kerk-historic.jpg";

export default function GroteKerkPage() {
  return (
    <article className="pt-36">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={groteKerkExterior}
          alt="Grote Kerk St Bavo Church exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-body text-foreground/70 hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3 animate-fade-up">
              Featured Location
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up animation-delay-100">
              Grote Kerk
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic animate-fade-up animation-delay-200">
              St. Bavokerk — The Heart of Haarlem
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "Grote Markt 22, Haarlem" },
              { icon: Calendar, label: "Built", value: "1370–1520" },
              { icon: Clock, label: "Open Daily", value: "10:00 – 17:00" },
              { icon: Users, label: "Style", value: "Gothic" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-display text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-bold mb-6">
                  A Monument to Haarlem's Golden Age
                </h2>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  Rising majestically above Haarlem's Grote Markt, the Grote Kerk, officially known as St. Bavokerk, stands as one of the most impressive Gothic churches in the Netherlands. This architectural masterpiece has been the spiritual and cultural heart of Haarlem for over five centuries, witnessing the city's transformation from a medieval trading hub to a center of Dutch Golden Age prosperity.
                </p>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  The church's construction began in 1370 and continued for nearly 150 years, with the distinctive tower completed in 1520. The building showcases the transition from Brabantine Gothic to a uniquely Dutch interpretation of the style, characterized by its soaring wooden vault spanning 25 meters high and intricate brick detailing.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={groteKerkInterior}
                      alt="Grote Kerk interior with magnificent pipe organ"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-sm text-muted-foreground">
                        The famous Müller organ, played by Mozart in 1766
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={groteKerkHistoric}
                      alt="Historic photograph of Grote Kerk"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-sm text-muted-foreground">
                        Historic view of the church, 19th century
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-card">
                  <img
                    src={groteKerkExterior}
                    alt="Grote Kerk exterior view"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-card">
                    <p className="font-body text-sm text-muted-foreground">
                      The imposing exterior dominates Haarlem's main square
                    </p>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Historical Significance</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    The Grote Kerk holds immense historical importance for both Haarlem and the Netherlands as a whole. Originally a Catholic church dedicated to St. Bavo, patron saint of Haarlem, it transitioned to Protestantism during the Reformation in 1578. This shift marked a turning point in the church's history, as much of its Catholic ornamentation was removed, though its architectural grandeur remained intact.
                  </p>
                  <p>
                    The church's most celebrated feature is the magnificent Christian Müller organ, installed in 1738. This baroque masterpiece contains 5,068 pipes and is considered one of the finest organs in the world. A young Wolfgang Amadeus Mozart played this very instrument during his visit in 1766, at the age of just ten years old.
                  </p>
                  <p>
                    Notable figures buried within the church include Frans Hals, Haarlem's most famous painter and master of the Dutch Golden Age portrait. The church floor contains approximately 1,500 gravestones, offering a poignant reminder of the generations who called Haarlem home.
                  </p>
                </div>
              </div>

              {/* Importance to Haarlem */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Importance to Haarlem</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    The Grote Kerk is not merely a building—it is the symbol of Haarlem itself. Its distinctive silhouette appears on the city's coat of arms and has been immortalized in countless paintings, including works by Pieter Saenredam and Gerrit Berckheyde. The church's tower, visible from nearly every point in the city, has served as a navigational landmark for travelers approaching Haarlem for centuries.
                  </p>
                  <p>
                    Today, the church serves both as an active Protestant parish and as a cultural venue hosting concerts, exhibitions, and events. Its exceptional acoustics make it a preferred location for classical music performances, particularly organ recitals that showcase the Müller organ's extraordinary capabilities.
                  </p>
                  <p>
                    As part of our walking tour, the Grote Kerk represents the spiritual and artistic zenith of Haarlem's heritage—a place where history, faith, and art converge in one of the Netherlands' most magnificent sacred spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Detailed Information Card */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display text-xl font-semibold mb-6 pb-4 border-b border-border">
                  Location Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Full Address
                    </dt>
                    <dd className="font-body text-foreground">
                      Grote Markt 22<br />
                      2011 RD Haarlem<br />
                      Netherlands
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Construction Period
                    </dt>
                    <dd className="font-body text-foreground">1370 – 1520 (150 years)</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Architectural Style
                    </dt>
                    <dd className="font-body text-foreground">Brabantine Gothic</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Original Purpose
                    </dt>
                    <dd className="font-body text-foreground">Catholic Parish Church</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Current Function
                    </dt>
                    <dd className="font-body text-foreground">Protestant Church & Cultural Venue</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Opening Hours
                    </dt>
                    <dd className="font-body text-foreground">
                      Mon-Sat: 10:00 – 17:00<br />
                      Sun: 12:00 – 17:00
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Fun Facts */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Did You Know?</h3>
                <ul className="space-y-3">
                  {[
                    "Mozart played the Müller organ here at age 10",
                    "The wooden vault spans 25 meters high",
                    "Frans Hals is buried in the church floor",
                    "The organ contains 5,068 pipes",
                    "The church appears on Haarlem's coat of arms",
                  ].map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-body text-sm text-foreground/80">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-3">
                  Visit on Our Tour
                </h3>
                <p className="font-body text-sm text-primary-foreground/80 mb-6">
                  Experience the Grote Kerk with our expert guides who bring its history to life.
                </p>
                <Button variant="gold" size="lg" className="w-full" asChild>
                  <Link to="/schedule">Book a Tour</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Find It on the Route</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Grote Kerk is stop #1 on our walking tour, located in the heart of Haarlem's historic center.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/map">
              View Complete Route Map
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
