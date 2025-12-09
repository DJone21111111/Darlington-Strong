import { Link } from "react-router-dom";
import { MapPin, Navigation, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routeStops = [
  {
    number: 1,
    name: "Grote Kerk",
    description: "Gothic masterpiece with famous Müller organ",
    duration: "20 min",
    link: "/grote-kerk",
  },
  {
    number: 2,
    name: "Stadhuis",
    description: "Historic City Hall dating from the 17th century",
    duration: "10 min",
    link: null,
  },
  {
    number: 3,
    name: "Frans Hals Museum",
    description: "Home to Dutch Golden Age masterpieces",
    duration: "15 min",
    link: null,
  },
  {
    number: 4,
    name: "Teylers Museum",
    description: "The oldest museum in the Netherlands",
    duration: "25 min",
    link: "/teylers-museum",
  },
  {
    number: 5,
    name: "Hofje van Bakenes",
    description: "Charming hidden courtyard from 1395",
    duration: "10 min",
    link: null,
  },
  {
    number: 6,
    name: "Amsterdamse Poort",
    description: "Medieval city gate and fortification",
    duration: "15 min",
    link: null,
  },
];

export default function MapPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 animate-fade-up">
            Explore the Route
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            Walking Tour Map
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Follow our carefully curated route through Haarlem's most significant historical landmarks.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Interactive Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="aspect-[4/3] relative bg-secondary">
                  {/* Map Illustration */}
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <rect width="800" height="600" fill="hsl(38 25% 88%)" />
                    
                    {/* Water/Canal */}
                    <path
                      d="M0 300 Q200 280 400 320 Q600 360 800 340 L800 400 Q600 420 400 380 Q200 340 0 360 Z"
                      fill="hsl(200 40% 75%)"
                      opacity="0.5"
                    />
                    
                    {/* Streets */}
                    <path d="M100 200 L700 200" stroke="hsl(38 20% 85%)" strokeWidth="30" />
                    <path d="M200 100 L200 500" stroke="hsl(38 20% 85%)" strokeWidth="30" />
                    <path d="M400 150 L400 450" stroke="hsl(38 20% 85%)" strokeWidth="30" />
                    <path d="M600 100 L600 500" stroke="hsl(38 20% 85%)" strokeWidth="30" />
                    <path d="M100 400 L700 400" stroke="hsl(38 20% 85%)" strokeWidth="30" />
                    
                    {/* Walking Route */}
                    <path
                      d="M200 200 L400 200 L400 300 L600 300 L600 400 L400 400 L400 450"
                      stroke="hsl(350 45% 30%)"
                      strokeWidth="6"
                      strokeDasharray="12 6"
                      fill="none"
                      className="animate-pulse"
                    />
                    
                    {/* Direction Arrows */}
                    <polygon points="400,195 410,200 400,205" fill="hsl(350 45% 30%)" />
                    <polygon points="405,300 400,310 395,300" fill="hsl(350 45% 30%)" />
                    <polygon points="600,305 610,310 600,315" fill="hsl(350 45% 30%)" />
                    
                    {/* Stop Markers */}
                    {[
                      { x: 200, y: 200, num: 1 },
                      { x: 300, y: 200, num: 2 },
                      { x: 400, y: 250, num: 3 },
                      { x: 500, y: 300, num: 4 },
                      { x: 600, y: 350, num: 5 },
                      { x: 400, y: 450, num: 6 },
                    ].map((stop) => (
                      <g key={stop.num}>
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="20"
                          fill="hsl(350 45% 30%)"
                          stroke="hsl(38 35% 96%)"
                          strokeWidth="3"
                        />
                        <text
                          x={stop.x}
                          y={stop.y + 5}
                          textAnchor="middle"
                          fill="hsl(38 35% 96%)"
                          fontSize="14"
                          fontWeight="bold"
                          fontFamily="serif"
                        >
                          {stop.num}
                        </text>
                      </g>
                    ))}
                    
                    {/* Current Location Marker */}
                    <g>
                      <circle cx="200" cy="200" r="30" fill="hsl(42 70% 50%)" opacity="0.3">
                        <animate attributeName="r" values="30;40;30" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="200" r="10" fill="hsl(42 70% 50%)" />
                    </g>
                    
                    {/* Legend */}
                    <rect x="580" y="480" width="200" height="100" rx="8" fill="hsl(38 35% 96%)" stroke="hsl(38 20% 85%)" />
                    <circle cx="610" cy="510" r="8" fill="hsl(350 45% 30%)" />
                    <text x="630" y="515" fontSize="12" fill="hsl(30 10% 15%)" fontFamily="sans-serif">Tour Stop</text>
                    <circle cx="610" cy="540" r="8" fill="hsl(42 70% 50%)" />
                    <text x="630" y="545" fontSize="12" fill="hsl(30 10% 15%)" fontFamily="sans-serif">You Are Here</text>
                    <line x1="600" y1="565" x2="650" y2="565" stroke="hsl(350 45% 30%)" strokeWidth="3" strokeDasharray="6 3" />
                    <text x="660" y="570" fontSize="12" fill="hsl(30 10% 15%)" fontFamily="sans-serif">Route</text>
                  </svg>
                </div>
                
                {/* Map Info */}
                <div className="p-6 bg-card">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-primary" />
                        <span className="font-body text-sm">
                          <strong>2.5 km</strong> total distance
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-body text-sm">
                          <strong>2 hours</strong> duration
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <span className="font-body text-sm text-muted-foreground">
                        Start: Grote Markt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Stops List */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold">Tour Stops</h2>
              
              <div className="space-y-4">
                {routeStops.map((stop, index) => (
                  <div
                    key={stop.number}
                    className="relative pl-12"
                  >
                    {/* Connector Line */}
                    {index !== routeStops.length - 1 && (
                      <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-border" />
                    )}
                    
                    {/* Stop Number */}
                    <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                      {stop.number}
                    </div>
                    
                    {/* Stop Content */}
                    <div className="bg-card rounded-lg p-4 shadow-elegant">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-lg font-semibold">{stop.name}</h3>
                          <p className="font-body text-sm text-muted-foreground mt-1">
                            {stop.description}
                          </p>
                          <p className="font-body text-xs text-primary mt-2">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {stop.duration}
                          </p>
                        </div>
                        {stop.link && (
                          <Link
                            to={stop.link}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Walking Directions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Walking Directions</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Follow the route at your own pace or join one of our guided tours for expert commentary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Start at Grote Markt",
                description: "Begin your journey at Haarlem's main square, in front of the magnificent Grote Kerk.",
              },
              {
                step: "2",
                title: "Follow the Route",
                description: "Walk the 2.5km route through cobblestone streets, past hidden hofjes and along scenic canals.",
              },
              {
                step: "3",
                title: "End at Amsterdamse Poort",
                description: "Conclude your tour at the medieval city gate, a reminder of Haarlem's fortified past.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Walk Through History?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a guided tour with our expert local historians, or download our self-guided audio tour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/schedule">
                Book a Guided Tour
              </Link>
            </Button>
            <Button variant="outline" size="xl">
              Download Audio Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
