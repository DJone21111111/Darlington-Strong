import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocationMap from "@/components/LocationMap";
import molenExterior from "@/assets/molen-de-adriaan-exterior.jpg";
import molenInterior from "@/assets/molen-de-adriaan-interior.jpg";
import molenHistoric from "@/assets/molen-de-adriaan-historic.jpg";

export default function MolenDeAdriaanPage() {
  return (
    <article className="pt-16 bg-[#F8F6F1]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={molenExterior}
          alt="Molen de Adriaan windmill on the Spaarne river"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-white/90 to-transparent">
          <div className="container mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-base font-body text-foreground/70 hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <p className="font-body text-base uppercase tracking-[0.2em] text-primary mb-3 animate-fade-up">
              Featured Location
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up animation-delay-100">
              Molen de Adriaan
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic animate-fade-up animation-delay-200">
              The Iconic Windmill of Haarlem
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "Papentorenvest 1A" },
              { icon: Calendar, label: "Built", value: "1779" },
              { icon: Clock, label: "Open", value: "Mon–Sat 13:00–17:00" },
              { icon: Users, label: "Type", value: "Tower Mill" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-base uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-display text-base font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-bold mb-6">
                  A Symbol of Dutch Heritage
                </h2>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  Standing proudly on the banks of the Spaarne river, Molen de Adriaan is one of Haarlem's most photographed landmarks. This magnificent tower mill has become an iconic symbol of the city, offering visitors a unique glimpse into the Netherlands' rich milling heritage and providing breathtaking panoramic views of Haarlem from its gallery.
                </p>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  Originally built in 1779, the mill was named after Adriaan de Boois, a wealthy merchant who commissioned its construction. Throughout its history, the windmill has served various purposes—grinding tobacco, chalk, and tanbark used in leather production. Today, it operates as a museum and continues to grind grain on windy days.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={molenInterior}
                      alt="Interior machinery of Molen de Adriaan"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-base text-muted-foreground">
                        Original wooden gears and milling machinery
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={molenHistoric}
                      alt="Historic photograph of Molen de Adriaan"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-base text-muted-foreground">
                        The windmill in its original form, early 20th century
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-card">
                  <img
                    src={molenExterior}
                    alt="Molen de Adriaan exterior view from the Spaarne"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-card">
                    <p className="font-body text-base text-muted-foreground">
                      The restored windmill overlooking the Spaarne river
                    </p>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Historical Significance</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    Molen de Adriaan has witnessed Haarlem's evolution over nearly 250 years. The mill played a vital role in the city's industrial economy, particularly during the 19th century when Haarlem was a center for various trades and manufacturing.
                  </p>
                  <p>
                    Tragedy struck on April 23, 1932, when a devastating fire destroyed the original windmill. For decades, only the stone base remained—a silent reminder of what had been lost. However, the people of Haarlem never forgot their beloved landmark.
                  </p>
                  <p>
                    In 1999, a dedicated foundation began raising funds to rebuild the mill. Through the tireless efforts of volunteers and generous donations from Haarlem residents and businesses, Molen de Adriaan was meticulously reconstructed using traditional methods. The restored mill was officially reopened in 2002, exactly 70 years after the fire.
                  </p>
                </div>
              </div>

              {/* Importance to Haarlem */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Importance to Haarlem</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    Molen de Adriaan represents more than just a historical structure—it embodies the Dutch spirit of perseverance and community. The successful reconstruction demonstrates Haarlem's commitment to preserving its cultural heritage for future generations.
                  </p>
                  <p>
                    Today, the windmill serves as both a museum and an educational center. Visitors can explore five floors of exhibits about the history of windmills in the Netherlands, watch the mill's mechanisms in action, and enjoy spectacular 360-degree views of Haarlem from the outdoor gallery.
                  </p>
                  <p>
                    The mill has become one of Haarlem's most popular attractions, drawing visitors from around the world who come to experience this quintessentially Dutch icon. Its silhouette against the Haarlem skyline remains one of the city's most recognizable and beloved images.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Location Map */}
              <LocationMap
                name="Molen de Adriaan"
                address="Papentorenvest 1A, 2011 AV Haarlem"
                lat={52.3821}
                lng={4.6419}
              />

              {/* Detailed Information Card */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display text-xl font-semibold mb-6 pb-4 border-b border-border">
                  Location Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Full Address
                    </dt>
                    <dd className="font-body text-foreground">
                      Papentorenvest 1A<br />
                      2011 AV Haarlem<br />
                      Netherlands
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Original Construction
                    </dt>
                    <dd className="font-body text-foreground">1779</dd>
                  </div>
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Reconstruction
                    </dt>
                    <dd className="font-body text-foreground">1999–2002</dd>
                  </div>
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Mill Type
                    </dt>
                    <dd className="font-body text-foreground">Tower Mill (Stellingmolen)</dd>
                  </div>
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Height
                    </dt>
                    <dd className="font-body text-foreground">Approximately 20 meters</dd>
                  </div>
                  <div>
                    <dt className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                      Opening Hours
                    </dt>
                    <dd className="font-body text-foreground">
                      Mon–Sat: 13:00 – 17:00<br />
                      Sun: 12:00 – 17:00<br />
                      (March – October)
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Fun Facts */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Did You Know?</h3>
                <ul className="space-y-3">
                  {[
                    "The mill was destroyed by fire in 1932",
                    "It took 3 years and €2 million to rebuild",
                    "The sails span over 26 meters across",
                    "It still grinds grain on windy days",
                    "5 floors of exhibits await visitors",
                  ].map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-base font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-body text-base text-foreground/80">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-3">
                  Visit on Our Tour
                </h3>
                <p className="font-body text-base text-primary-foreground/80 mb-6">
                  Experience Molen de Adriaan with our expert guides who share its remarkable story.
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
      <section className="py-16 bg-[#E8E2D9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Find It on the Route</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Molen de Adriaan is stop #7 on our walking tour, located along the scenic Spaarne river.
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
