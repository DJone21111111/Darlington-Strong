import { Link } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  Users, 
  Check, 
  MapPin, 
  ChevronRight,
  Ticket,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TourSlot {
  time: string;
  groups: number;
}

interface DaySchedule {
  day: string;
  dateLabel: string;
  slots: TourSlot[];
  guides: string[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Thursday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", groups: 1 },
      { time: "13:00", groups: 1 },
      { time: "16:00", groups: 1 },
    ],
    guides: ["Frederic"],
  },
  {
    day: "Friday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", groups: 1 },
      { time: "13:00", groups: 1 },
      { time: "16:00", groups: 1 },
    ],
    guides: ["Williams"],
  },
  {
    day: "Saturday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", groups: 2 },
      { time: "13:00", groups: 2 },
      { time: "16:00", groups: 1 },
    ],
    guides: ["Frederic", "William"],
  },
  {
    day: "Sunday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", groups: 2 },
      { time: "13:00", groups: 3 },
      { time: "16:00", groups: 1 },
    ],
    guides: ["Deirdre", "Frederic", "William"],
  },
];

const tourFeatures = [
  "Expert local guide",
  "9 historic venues",
  "2.5-hour walking tour",
  "Small groups (max 12)",
  "Refreshment break at Jopenkerk",
  "One drink included per person",
  "Minimum age: 12 years",
  "No strollers allowed",
];

export default function SchedulePage() {
  return (
    <div className="pt-36">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="font-body text-base uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 animate-fade-up">
            Last Weekend of July
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            Tour Schedule
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Choose your preferred time slot. All tours start at Bavo Church on the Grote Markt.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Clock, label: "Duration", value: "2.5 Hours", detail: "Per tour" },
              { icon: Users, label: "Group Size", value: "Max 12", detail: "Per guide" },
              { icon: Ticket, label: "From", value: "€17.50", detail: "Per person" },
              { icon: MapPin, label: "Start Point", value: "Bavo Church", detail: "Grote Markt" },
            ].map((item) => (
              <div 
                key={item.label} 
                className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-display text-xl font-bold">{item.value}</p>
                <p className="font-body text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Festival Schedule
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Four days of walking tours through Haarlem's historic center. Each tour accommodates up to 12 participants.
            </p>
          </div>

          {/* Day Cards */}
          <div className="grid gap-8">
            {scheduleData.map((day, dayIndex) => (
              <div 
                key={day.day}
                className="bg-card rounded-2xl shadow-card overflow-hidden border border-border animate-fade-up"
                style={{ animationDelay: `${dayIndex * 100}ms` }}
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{day.day}</h3>
                      <p className="font-body text-primary-foreground/70 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {day.dateLabel}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        Guides: {day.guides.join(", ")}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {day.slots.map((slot) => (
                      <div
                        key={slot.time}
                        className="relative rounded-xl border-2 p-5 transition-all border-primary/20 bg-primary/5 hover:border-primary/40 hover:shadow-md cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="font-display text-2xl font-bold">{slot.time}</span>
                          </div>
                          <Badge variant="outline" className="font-body">
                            {slot.groups} {slot.groups === 1 ? "tour" : "tours"}
                          </Badge>
                        </div>
                        
                        {/* Tour availability */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-200">
                            <span className="font-body text-sm flex items-center gap-2">
                              <span>🇬🇧</span> English
                            </span>
                            <span className="font-display font-semibold">{slot.groups} group{slot.groups > 1 ? "s" : ""}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              12 seats per tour
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-base uppercase tracking-[0.2em] text-primary mb-4">
              Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Reservation is mandatory for all tours. Secure your spot today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Individual Ticket */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Individual Ticket</h3>
                  <p className="font-body text-sm text-muted-foreground">Per person</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">€17.50</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>2.5-hour guided tour</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>One drink at Jopenkerk</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>9 historic venues</span>
                </li>
              </ul>
              <Button variant="outline" size="lg" className="w-full">
                Reserve Now
              </Button>
            </div>

            {/* Family Ticket */}
            <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">Best Value</Badge>
              </div>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Family Ticket</h3>
                  <p className="font-body text-sm text-muted-foreground">Up to 4 persons</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">€60.00</span>
                <span className="text-muted-foreground text-sm ml-2">save €10</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Up to 4 family members</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Drinks for everyone</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Best value for families</span>
                </li>
              </ul>
              <Button variant="hero" size="lg" className="w-full">
                Reserve Family Ticket
              </Button>
            </div>
          </div>

          {/* Important Note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex items-start gap-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold mb-1">Reservation Required</p>
                <p className="font-body text-sm text-muted-foreground">
                  All tours require advance reservation. Walk-ins are not accepted to ensure the best experience for all participants. Please arrive 10 minutes before your scheduled tour time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-base uppercase tracking-[0.2em] text-primary mb-4">
                What's Included
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Everything You Need for a Perfect Tour
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Our walking tours are designed to provide an immersive and educational experience. All tours are led by passionate local historians who bring Haarlem's rich heritage to life.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tourFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </span>
                    <span className="font-body text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meeting Point Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Meeting Point</h3>
                  <p className="font-body text-sm text-muted-foreground">Where all tours begin</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-xl p-6 mb-6">
                <p className="font-display text-lg font-semibold mb-2">Bavo Church (St. Bavokerk)</p>
                <p className="font-body text-muted-foreground mb-4">
                  Grote Markt, 2011 RD Haarlem
                </p>
                <p className="font-body text-sm text-primary">
                  Look for the giant flag marking the exact starting location
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/map">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Map
                  </Link>
                </Button>
                <p className="font-body text-sm text-center text-muted-foreground">
                  Please arrive 10 minutes before departure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
