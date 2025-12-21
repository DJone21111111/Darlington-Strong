import { Link } from "react-router-dom";
import { Clock, Calendar, Users, Euro, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const scheduleData = [
  {
    day: "Thursday",
    date: "July 24",
    slots: [
      { time: "10:00 - 12:00", available: true },
      { time: "14:00 - 16:00", available: true },
      { time: "18:00 - 20:00", available: true },
    ],
  },
  {
    day: "Friday",
    date: "July 25",
    slots: [
      { time: "10:00 - 12:00", available: true },
      { time: "14:00 - 16:00", available: true },
      { time: "18:00 - 20:00", available: true },
    ],
  },
  {
    day: "Saturday",
    date: "July 26",
    slots: [
      { time: "10:00 - 12:00", available: true },
      { time: "13:00 - 15:00", available: true },
      { time: "16:00 - 18:00", available: true },
    ],
  },
  {
    day: "Sunday",
    date: "July 27",
    slots: [
      { time: "10:00 - 12:00", available: true },
      { time: "14:00 - 16:00", available: true },
    ],
  },
];

const tourFeatures = [
  "Expert local guide",
  "6 historic locations",
  "2-hour walking tour",
  "Small groups (max 15)",
  "All ages welcome",
  "Rain or shine",
];

export default function SchedulePage() {
  return (
    <div className="pt-36">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-base uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 animate-fade-up">
            Plan Your Visit
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            Tour Schedule
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Join us for an unforgettable journey through Haarlem's rich history. Choose from multiple daily departures.
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "Duration", value: "2 Hours" },
              { icon: Users, label: "Group Size", value: "Max 15" },
              { icon: Euro, label: "Price", value: "€15 / person" },
              { icon: Calendar, label: "Festival Dates", value: "July 24-27" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-body text-base uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-display text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Festival Schedule
              </h2>
              <p className="font-body text-muted-foreground">
                The Festival runs Thursday through Sunday in July. All tours depart from the Grote Markt.
              </p>
            </div>

            {/* Schedule Grid */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 grid grid-cols-4 gap-4">
                <div className="font-display font-semibold">Day</div>
                <div className="font-display font-semibold">Date</div>
                <div className="font-display font-semibold col-span-2">Available Time Slots</div>
              </div>

              {/* Schedule Rows */}
              {scheduleData.map((day, index) => (
                <div
                  key={day.day}
                  className={`p-4 grid grid-cols-4 gap-4 items-center ${
                    index !== scheduleData.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="font-display font-semibold">{day.day}</div>
                  <div className="font-body text-muted-foreground">{day.date}</div>
                  <div className="col-span-2">
                    <div className="flex flex-wrap gap-3">
                      {day.slots.map((slot) => (
                        <span
                          key={slot.time}
                          className={`inline-flex items-center px-4 py-2 rounded-lg font-body text-base ${
                            slot.available
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground line-through"
                          }`}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {slot.time}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-primary/20" />
                <span className="font-body text-base text-muted-foreground">Available Slots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-16 md:py-24 bg-secondary">
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

            {/* Booking Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold mb-6">Book Your Tour</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="font-body text-muted-foreground">Adult (12+)</span>
                  <span className="font-display text-xl font-bold">€15.00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="font-body text-muted-foreground">Child (4-11)</span>
                  <span className="font-display text-xl font-bold">€8.00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="font-body text-muted-foreground">Under 4</span>
                  <span className="font-display text-xl font-bold text-accent">Free</span>
                </div>

                <div className="pt-4">
                  <Button variant="hero" size="xl" className="w-full">
                    Reserve Your Spot
                  </Button>
                  <p className="font-body text-base text-muted-foreground text-center mt-4">
                    No payment required now. Pay on arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Point */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-base uppercase tracking-[0.2em] text-primary mb-4">
            Meeting Point
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Where to Find Us
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            All tours begin at the Grote Markt, Haarlem's main square, in front of the Grote Kerk. Look for our guide holding a burgundy umbrella.
          </p>
          <div className="bg-card rounded-xl p-8 shadow-card max-w-md mx-auto">
            <p className="font-display text-lg font-semibold mb-2">Grote Markt</p>
            <p className="font-body text-muted-foreground mb-4">
              2011 RD Haarlem, Netherlands
            </p>
            <p className="font-body text-base text-primary">
              Please arrive 10 minutes before departure
            </p>
          </div>
          
          <div className="mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/map">View on Map</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
