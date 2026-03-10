import { Link } from "react-router-dom";
import { MapPin, Navigation, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const routeStops = [
  {
    number: 1,
    name: "Church of St. Bavo",
    description: "Gothic masterpiece with famous Müller organ",
    duration: "20 min",
    link: "/grote-kerk",
  },
  {
    number: 2,
    name: "Grote Markt",
    description: "Historic main square and heart of Haarlem",
    duration: "10 min",
    link: null,
  },
  {
    number: 3,
    name: "De Hallen",
    description: "Contemporary art museum in historic building",
    duration: "15 min",
    link: null,
  },
  {
    number: 4,
    name: "Proveniershof",
    description: "Beautiful 17th-century almshouse courtyard",
    duration: "10 min",
    link: null,
  },
  {
    number: 5,
    name: "Jopenkerk",
    description: "Historic church turned craft brewery — refreshment break",
    duration: "15 min (break)",
    link: null,
    isBreak: true,
  },
  {
    number: 6,
    name: "Waalse Kerk",
    description: "Charming Walloon church with rich history",
    duration: "10 min",
    link: null,
  },
  {
    number: 7,
    name: "Molen de Adriaan",
    description: "Iconic windmill with panoramic city views",
    duration: "15 min",
    link: null,
  },
  {
    number: 8,
    name: "Amsterdamse Poort",
    description: "Medieval city gate and fortification",
    duration: "10 min",
    link: null,
  },
  {
    number: 9,
    name: "Hof van Bakenes",
    description: "One of Haarlem's oldest hofjes from 1395",
    duration: "10 min",
    link: null,
  },
];

export default function MapPage() {
  return (
    <div className="pt-28 bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-base uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 animate-fade-up">
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
                <div className="aspect-[4/3] relative bg-gradient-to-br from-secondary via-card to-secondary overflow-hidden">
                  {/* Map Illustration */}
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background texture */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(38 20% 80%)" strokeWidth="0.5" opacity="0.5"/>
                      </pattern>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(350 45% 35%)" />
                        <stop offset="100%" stopColor="hsl(350 45% 25%)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <rect width="800" height="600" fill="hsl(38 25% 92%)" />
                    <rect width="800" height="600" fill="url(#grid)" />
                    
                    {/* Spaarne River */}
                    <path
                      d="M720 0 Q680 150 700 300 Q720 450 680 600"
                      fill="none"
                      stroke="hsl(200 50% 70%)"
                      strokeWidth="40"
                      opacity="0.4"
                    />
                    <path
                      d="M720 0 Q680 150 700 300 Q720 450 680 600"
                      fill="none"
                      stroke="hsl(200 60% 80%)"
                      strokeWidth="20"
                      opacity="0.6"
                    />
                    
                    {/* Walking Route - smooth curved path through all 9 stops */}
                    <path
                      d="M120 120 
                         C150 120 180 180 200 200
                         L280 200
                         C320 200 340 240 340 280
                         L340 320
                         C340 360 380 380 420 380
                         L480 380
                         C520 380 540 340 540 300
                         L540 260
                         C540 220 580 200 620 200
                         L650 200
                         C680 200 680 260 650 300
                         L620 340
                         C580 380 520 420 480 460
                         L400 520"
                      stroke="url(#routeGradient)"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                    
                    {/* Animated route overlay */}
                    <path
                      d="M120 120 
                         C150 120 180 180 200 200
                         L280 200
                         C320 200 340 240 340 280
                         L340 320
                         C340 360 380 380 420 380
                         L480 380
                         C520 380 540 340 540 300
                         L540 260
                         C540 220 580 200 620 200
                         L650 200
                         C680 200 680 260 650 300
                         L620 340
                         C580 380 520 420 480 460
                         L400 520"
                      stroke="hsl(42 70% 55%)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="10 20"
                      opacity="0.8"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="60" dur="2s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Stop Markers with labels */}
                    {[
                      { x: 120, y: 120, num: 1, name: "St. Bavo", isStart: true },
                      { x: 200, y: 200, num: 2, name: "Grote Markt" },
                      { x: 340, y: 280, num: 3, name: "De Hallen" },
                      { x: 340, y: 340, num: 4, name: "Proveniershof" },
                      { x: 480, y: 380, num: 5, name: "Jopenkerk", isBreak: true },
                      { x: 540, y: 260, num: 6, name: "Waalse Kerk" },
                      { x: 650, y: 200, num: 7, name: "De Adriaan" },
                      { x: 600, y: 360, num: 8, name: "Amst. Poort" },
                      { x: 400, y: 520, num: 9, name: "Hof v. Bakenes", isEnd: true },
                    ].map((stop) => (
                      <g key={stop.num}>
                        {/* Outer glow for special stops */}
                        {(stop.isStart || stop.isBreak || stop.isEnd) && (
                          <circle
                            cx={stop.x}
                            cy={stop.y}
                            r="28"
                            fill={stop.isBreak ? "hsl(42 70% 50%)" : stop.isStart ? "hsl(142 50% 45%)" : "hsl(350 45% 30%)"}
                            opacity="0.2"
                          >
                            <animate attributeName="r" values="28;34;28" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.2;0.1;0.2" dur="2s" repeatCount="indefinite" />
                          </circle>
                        )}
                        
                        {/* Main marker */}
                        <circle
                          cx={stop.x}
                          cy={stop.y}
                          r="18"
                          fill={stop.isBreak ? "hsl(42 70% 50%)" : stop.isStart ? "hsl(142 50% 45%)" : "hsl(350 45% 30%)"}
                          stroke="hsl(38 35% 98%)"
                          strokeWidth="3"
                          filter="url(#glow)"
                        />
                        
                        {/* Number */}
                        <text
                          x={stop.x}
                          y={stop.y + 5}
                          textAnchor="middle"
                          fill="hsl(38 35% 98%)"
                          fontSize="13"
                          fontWeight="bold"
                          fontFamily="serif"
                        >
                          {stop.num}
                        </text>
                        
                        {/* Label */}
                        <rect
                          x={stop.x - 35}
                          y={stop.y + 22}
                          width="70"
                          height="18"
                          rx="4"
                          fill="hsl(38 35% 98%)"
                          opacity="0.95"
                        />
                        <text
                          x={stop.x}
                          y={stop.y + 35}
                          textAnchor="middle"
                          fill="hsl(30 10% 20%)"
                          fontSize="9"
                          fontWeight="600"
                          fontFamily="system-ui"
                        >
                          {stop.name}
                        </text>
                        
                        {/* Special badges */}
                        {stop.isStart && (
                          <g>
                            <rect x={stop.x + 18} y={stop.y - 28} width="36" height="14" rx="7" fill="hsl(142 50% 45%)" />
                            <text x={stop.x + 36} y={stop.y - 18} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">START</text>
                          </g>
                        )}
                        {stop.isBreak && (
                          <g>
                            <rect x={stop.x + 18} y={stop.y - 28} width="38" height="14" rx="7" fill="hsl(42 70% 50%)" />
                            <text x={stop.x + 37} y={stop.y - 18} textAnchor="middle" fill="hsl(30 10% 15%)" fontSize="8" fontWeight="bold">BREAK</text>
                          </g>
                        )}
                        {stop.isEnd && (
                          <g>
                            <rect x={stop.x + 18} y={stop.y - 28} width="32" height="14" rx="7" fill="hsl(350 45% 30%)" />
                            <text x={stop.x + 34} y={stop.y - 18} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">END</text>
                          </g>
                        )}
                      </g>
                    ))}
                    
                    {/* Legend */}
                    <g>
                      <rect x="20" y="480" width="180" height="100" rx="12" fill="hsl(38 35% 98%)" stroke="hsl(38 20% 85%)" strokeWidth="1" />
                      
                      <circle cx="45" cy="510" r="8" fill="hsl(142 50% 45%)" />
                      <text x="60" y="514" fontSize="11" fill="hsl(30 10% 20%)" fontFamily="system-ui" fontWeight="500">Start Point</text>
                      
                      <circle cx="45" cy="535" r="8" fill="hsl(42 70% 50%)" />
                      <text x="60" y="539" fontSize="11" fill="hsl(30 10% 20%)" fontFamily="system-ui" fontWeight="500">Break (15 min)</text>
                      
                      <circle cx="45" cy="560" r="8" fill="hsl(350 45% 30%)" />
                      <text x="60" y="564" fontSize="11" fill="hsl(30 10% 20%)" fontFamily="system-ui" fontWeight="500">Tour Stop / End</text>
                    </g>
                  </svg>
                </div>
                
                {/* Map Info */}
                <div className="p-6 bg-card">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-primary" />
                        <span className="font-body text-base">
                          <strong>9 venues</strong> to visit
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-body text-base">
                          <strong>2.5 hours</strong> (incl. 15-min break)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      <span className="font-body text-base text-muted-foreground">
                        Start: Grote Markt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Stops List - Compact scrollable */}
            <div className="lg:max-h-[600px] lg:overflow-y-auto lg:pr-2 scrollbar-thin">
              <h2 className="font-display text-2xl font-bold mb-4 sticky top-0 bg-background py-2 z-10">Tour Stops</h2>
              
              <div className="space-y-2">
                {routeStops.map((stop, index) => (
                  <div
                    key={stop.number}
                    className={`relative flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-card hover:shadow-elegant ${
                      stop.isBreak ? 'bg-accent/10 border border-accent/30' : 'bg-card/50'
                    }`}
                  >
                    {/* Stop Number */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                      stop.isBreak 
                        ? 'bg-accent text-accent-foreground' 
                        : stop.number === 1 
                          ? 'bg-green-600 text-white'
                          : stop.number === 9
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary text-primary-foreground'
                    }`}>
                      {stop.number}
                    </div>
                    
                    {/* Stop Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-semibold truncate">{stop.name}</h3>
                        {stop.isBreak && (
                          <span className="flex-shrink-0 text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">
                            Break
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-muted-foreground truncate">
                        {stop.description}
                      </p>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex-shrink-0 text-right">
                      <p className="font-body text-sm text-primary font-medium">
                        {stop.duration}
                      </p>
                    </div>
                    
                    {/* Link arrow */}
                    {stop.link && (
                      <Link
                        to={stop.link}
                        className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Quick info below stops */}
              <div className="mt-4 p-4 bg-secondary rounded-xl">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total duration</span>
                  <span className="font-semibold">2.5 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Includes</span>
                  <span className="font-semibold">15-min break + 1 drink</span>
                </div>
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
                <p className="font-body text-base text-muted-foreground">{item.description}</p>
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
