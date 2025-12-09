import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import teylersExterior from "@/assets/teylers-exterior.jpg";
import teylersInterior from "@/assets/teylers-interior.jpg";
import teylersHistoric from "@/assets/teylers-historic.jpg";

export default function TeylersMuseumPage() {
  return (
    <article className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={teylersExterior}
          alt="Teylers Museum exterior"
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
              Teylers Museum
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic animate-fade-up animation-delay-200">
              The Oldest Museum in the Netherlands
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "Spaarne 16, Haarlem" },
              { icon: Calendar, label: "Founded", value: "1778" },
              { icon: Clock, label: "Open", value: "Tue–Sun 10:00–17:00" },
              { icon: Users, label: "Style", value: "Neoclassical" },
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
                  A Temple of Enlightenment
                </h2>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  Teylers Museum stands as a remarkable time capsule of the Age of Enlightenment, preserving not only its extraordinary collections but the very atmosphere and presentation style of an 18th-century cabinet of curiosities. Founded in 1778 from the estate of wealthy silk merchant and banker Pieter Teyler van der Hulst, it represents the world's first purpose-built public museum and remains the oldest museum in the Netherlands.
                </p>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  The museum's Neoclassical architecture, designed by Leendert Viervant, reflects the rationalist ideals of the Enlightenment. Its centerpiece, the magnificent Oval Room completed in 1784, houses scientific instruments and fossil collections beneath a stunning dome of natural light—a design intended to encourage contemplation and the pursuit of knowledge.
                </p>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={teylersInterior}
                      alt="Teylers Museum Oval Room interior"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-sm text-muted-foreground">
                        The famous Oval Room with scientific collections
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-card">
                    <img
                      src={teylersHistoric}
                      alt="Historic photograph of Teylers Museum"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 bg-card">
                      <p className="font-body text-sm text-muted-foreground">
                        Historic view of the museum, 19th century
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-card">
                  <img
                    src={teylersExterior}
                    alt="Teylers Museum exterior view"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-card">
                    <p className="font-body text-sm text-muted-foreground">
                      The Neoclassical façade along the Spaarne River
                    </p>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Historical Significance</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    The museum owes its existence to the vision of Pieter Teyler van der Hulst (1702-1778), a prosperous Mennonite merchant whose will established the Teyler Foundation. Teyler's bequest was remarkably progressive: he directed that his wealth should be used to promote religion, art, and science for the benefit of the public. The resulting institution became a pioneering model for public museums worldwide.
                  </p>
                  <p>
                    The museum's collections span an astonishing range of human knowledge. The Fossil Room contains specimens that predated the scientific understanding of evolution, including the famous Mosasaurus skull that helped prove the existence of extinct species. The art collection includes works by Michelangelo, Raphael, and Rembrandt, while the scientific instruments represent centuries of human attempts to measure and understand the natural world.
                  </p>
                  <p>
                    Perhaps most remarkably, Teylers Museum has preserved not just its collections but its entire mode of presentation. The wooden display cases, handwritten labels, and ambient lighting remain largely unchanged from the 18th and 19th centuries, offering visitors a uniquely immersive experience of how knowledge was organized and presented during the Enlightenment.
                  </p>
                </div>
              </div>

              {/* Importance to Haarlem */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold">Importance to Haarlem</h3>
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    Teylers Museum represents Haarlem's significant contribution to the European Enlightenment. The city's wealthy merchant class, enriched by the textile trade, became important patrons of arts and sciences. Pieter Teyler's decision to establish a public institution for learning reflected this broader cultural movement and cemented Haarlem's reputation as a center of intellectual life.
                  </p>
                  <p>
                    The museum's location along the picturesque Spaarne River places it at the heart of Haarlem's historic waterfront. Its presence has attracted scholars, artists, and curious visitors for nearly 250 years, contributing to the city's ongoing identity as a destination for cultural tourism.
                  </p>
                  <p>
                    Today, Teylers Museum is recognized as a UNESCO candidate for World Heritage status, acknowledging its exceptional value as a preserved Enlightenment institution. For our walking tour, it offers an irreplaceable glimpse into the intellectual aspirations of Haarlem's golden age—a place where the pursuit of knowledge was elevated to an almost sacred endeavor.
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
                      Spaarne 16<br />
                      2011 CH Haarlem<br />
                      Netherlands
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Founded
                    </dt>
                    <dd className="font-body text-foreground">1778 (247 years ago)</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Architectural Style
                    </dt>
                    <dd className="font-body text-foreground">Neoclassical</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Original Purpose
                    </dt>
                    <dd className="font-body text-foreground">Public Museum & Learning Institution</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Current Function
                    </dt>
                    <dd className="font-body text-foreground">Museum of Art, Natural History & Science</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Opening Hours
                    </dt>
                    <dd className="font-body text-foreground">
                      Tue–Fri: 10:00 – 17:00<br />
                      Sat–Sun: 11:00 – 17:00<br />
                      Mon: Closed
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Fun Facts */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Did You Know?</h3>
                <ul className="space-y-3">
                  {[
                    "It's the oldest museum in the Netherlands",
                    "Houses drawings by Michelangelo and Rembrandt",
                    "Contains one of the world's largest electrostatic machines",
                    "The Oval Room uses only natural lighting",
                    "UNESCO World Heritage candidate site",
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
                  Discover the wonders of Teylers Museum with our knowledgeable guides.
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
            Teylers Museum is stop #4 on our walking tour, a short stroll from the Grote Markt along the scenic Spaarne River.
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
