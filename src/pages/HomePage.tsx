import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
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

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "2 Hour Tours",
                description: "Perfectly paced walks through Haarlem's most significant historical sites.",
              },
              {
                icon: Users,
                title: "Expert Guides",
                description: "Knowledgeable local historians bring each location's story to life.",
              },
              {
                icon: MapPin,
                title: "6 Iconic Stops",
                description: "From the Grote Kerk to hidden hofjes, discover Haarlem's treasures.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-lg bg-background shadow-card card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="font-body text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">
              Featured Locations
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Iconic Landmarks Await
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grote Kerk Card */}
            <Link
              to="/grote-kerk"
              className="group relative overflow-hidden rounded-xl shadow-card card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={groteKerkExterior}
                  alt="Grote Kerk St Bavo Church exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-body text-xs uppercase tracking-wider text-primary-foreground/70 mb-2">
                  Est. 1520
                </p>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-3">
                  Grote Kerk
                </h3>
                <p className="font-body text-primary-foreground/80 mb-4 line-clamp-2">
                  The magnificent Gothic church that dominates Haarlem's skyline, home to the famous Müller organ.
                </p>
                <span className="inline-flex items-center text-accent font-body text-sm font-medium">
                  Explore Location
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>

            {/* Teylers Museum Card */}
            <Link
              to="/teylers-museum"
              className="group relative overflow-hidden rounded-xl shadow-card card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={teylersExterior}
                  alt="Teylers Museum exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-body text-xs uppercase tracking-wider text-primary-foreground/70 mb-2">
                  Est. 1778
                </p>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-3">
                  Teylers Museum
                </h3>
                <p className="font-body text-primary-foreground/80 mb-4 line-clamp-2">
                  The oldest museum in the Netherlands, showcasing art, natural history, and scientific instruments.
                </p>
                <span className="inline-flex items-center text-accent font-body text-sm font-medium">
                  Explore Location
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
                Tour Schedule
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Available Daily
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Join us for an unforgettable journey through Haarlem's rich history. Our tours run multiple times daily, making it easy to find a time that works for you.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/schedule">
                  View Full Schedule
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", times: "10:00, 14:00" },
                  { day: "Saturday", times: "11:00" },
                  { day: "Sunday", times: "Closed" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-4 border-b border-primary-foreground/20 last:border-0"
                  >
                    <span className="font-display text-lg">{schedule.day}</span>
                    <span className="font-body text-primary-foreground/70">{schedule.times}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your walking tour today and discover why Haarlem has been captivating visitors for centuries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/schedule">
                Book a Tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
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
