import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Calendar, 
  Users, 
  Euro, 
  Check, 
  MapPin, 
  Globe2, 
  ChevronRight,
  Ticket,
  Info,
  Languages,
  AlertTriangle,
  Navigation,
  Plus,
  ShoppingBag,
  Trash2,
  ChevronDown,
  X,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

type Language = "all" | "english" | "dutch" | "chinese";

interface TourSlot {
  time: string;
  english: number;
  dutch: number;
  chinese: number;
}

interface DaySchedule {
  day: string;
  dateLabel: string;
  slots: TourSlot[];
  guides: {
    dutch: string[];
    english: string[];
    chinese: string[];
  };
}

interface Reservation {
  id: string;
  day: string;
  time: string;
  language: string;
  ticketType: "individual" | "family";
  people: number;
  price: number;
}

const scheduleData: DaySchedule[] = [
  {
    day: "Thursday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", english: 1, dutch: 1, chinese: 0 },
      { time: "13:00", english: 1, dutch: 1, chinese: 0 },
      { time: "16:00", english: 1, dutch: 1, chinese: 0 },
    ],
    guides: {
      dutch: ["Jan-Willem"],
      english: ["Frederic"],
      chinese: [],
    },
  },
  {
    day: "Friday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", english: 1, dutch: 1, chinese: 0 },
      { time: "13:00", english: 1, dutch: 1, chinese: 1 },
      { time: "16:00", english: 1, dutch: 1, chinese: 0 },
    ],
    guides: {
      dutch: ["Annet"],
      english: ["Williams"],
      chinese: ["Kim"],
    },
  },
  {
    day: "Saturday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", english: 2, dutch: 2, chinese: 0 },
      { time: "13:00", english: 2, dutch: 2, chinese: 1 },
      { time: "16:00", english: 1, dutch: 1, chinese: 1 },
    ],
    guides: {
      dutch: ["Annet", "Jan-Willem"],
      english: ["Frederic", "William"],
      chinese: ["Kim"],
    },
  },
  {
    day: "Sunday",
    dateLabel: "Last weekend of July",
    slots: [
      { time: "10:00", english: 2, dutch: 2, chinese: 1 },
      { time: "13:00", english: 3, dutch: 3, chinese: 2 },
      { time: "16:00", english: 1, dutch: 1, chinese: 0 },
    ],
    guides: {
      dutch: ["Lisa", "Annet", "Jan-Willem"],
      english: ["Deirdre", "Frederic", "William"],
      chinese: ["Kim", "Susan"],
    },
  },
];

const tourLocations = [
  {
    number: 1,
    name: "Bavo Church",
    description: "Gothic architecture & historic organ",
    icon: "⛪",
    type: "start"
  },
  {
    number: 2,
    name: "Grote Markt",
    description: "Historic market square",
    icon: "🏛️",
    type: "landmark"
  },
  {
    number: 3,
    name: "Corrie ten Boom House",
    description: "WWII hiding place",
    icon: "🏠",
    type: "landmark"
  },
  {
    number: 4,
    name: "Hofje van Bakenes",
    description: "Oldest almshouse courtyard",
    icon: "🌿",
    type: "landmark"
  },
  {
    number: 5,
    name: "Teylers Museum",
    description: "Oldest museum in Netherlands",
    icon: "🏛️",
    type: "landmark"
  },
  {
    number: 6,
    name: "Spaarne River",
    description: "Scenic waterfront walk",
    icon: "🌊",
    type: "landmark"
  },
  {
    number: 7,
    name: "Amsterdamse Poort",
    description: "Medieval city gate",
    icon: "🏰",
    type: "landmark"
  },
  {
    number: 8,
    name: "Jopenkerk",
    description: "Brewery in church - drink break!",
    icon: "🍺",
    type: "break"
  },
  {
    number: 9,
    name: "Proveniershof",
    description: "Beautiful hidden courtyard",
    icon: "🌸",
    type: "end"
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

const languageConfig = {
  english: { label: "English", flag: "🇬🇧", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  dutch: { label: "Nederlands", flag: "🇳🇱", color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  chinese: { label: "中文", flag: "🇨🇳", color: "bg-red-500/10 text-red-600 border-red-200" },
};

export default function SchedulePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const [personalProgram, setPersonalProgram] = useState<Reservation[]>([]);
  const [showProgram, setShowProgram] = useState(false);
  
  // Booking form state
  const [bookingDay, setBookingDay] = useState<string>("Saturday");
  const [bookingTime, setBookingTime] = useState<string>("13:00");
  const [bookingLanguage, setBookingLanguage] = useState<string>("english");
  const [bookingPeople, setBookingPeople] = useState<number>(4);
  const [ticketType, setTicketType] = useState<"individual" | "family">("family");

  const calculatePrice = () => {
    if (ticketType === "family") {
      return 60.00;
    }
    return bookingPeople * 17.50;
  };

  const addToProgram = () => {
    const newReservation: Reservation = {
      id: `${Date.now()}`,
      day: bookingDay,
      time: bookingTime,
      language: bookingLanguage,
      ticketType,
      people: bookingPeople,
      price: calculatePrice(),
    };
    
    setPersonalProgram([...personalProgram, newReservation]);
    setShowProgram(true);
    toast.success("Reservation added to your personal program!", {
      description: `${bookingDay} at ${bookingTime} - ${languageConfig[bookingLanguage as keyof typeof languageConfig].label} tour`,
    });
  };

  const removeFromProgram = (id: string) => {
    setPersonalProgram(personalProgram.filter(r => r.id !== id));
    toast.info("Reservation removed from your program");
  };

  const getTotalPrice = () => {
    return personalProgram.reduce((sum, r) => sum + r.price, 0);
  };

  const getToursForSlot = (slot: TourSlot, language: Language) => {
    if (language === "all") {
      return slot.english + slot.dutch + slot.chinese;
    }
    return slot[language];
  };

  const hasToursInLanguage = (slot: TourSlot, language: Language) => {
    if (language === "all") return true;
    return slot[language] > 0;
  };

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
            A Stroll Through History
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Step back in time and discover Haarlem's rich heritage through our guided walking tours
          </p>
        </div>
      </section>

      {/* Personal Program Floating Button */}
      <button
        onClick={() => setShowProgram(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
      >
        <ShoppingBag className="w-6 h-6" />
        {personalProgram.length > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full text-sm font-bold flex items-center justify-center">
            {personalProgram.length}
          </span>
        )}
      </button>

      {/* Personal Program Drawer */}
      {showProgram && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setShowProgram(false)} />
          <div className="relative w-full max-w-md bg-card shadow-2xl h-full overflow-y-auto animate-slide-in-right">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">My Personal Program</h2>
                  <p className="font-body text-sm text-muted-foreground">
                    {personalProgram.length} reservation{personalProgram.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowProgram(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {personalProgram.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="font-display text-lg font-semibold mb-2">Your program is empty</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Book a tour below to add it to your personal program
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {personalProgram.map((reservation) => (
                    <div 
                      key={reservation.id}
                      className="bg-secondary/50 rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-display font-bold text-lg">{reservation.day}</p>
                          <p className="font-body text-sm text-muted-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {reservation.time}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromProgram(reservation.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {languageConfig[reservation.language as keyof typeof languageConfig].flag}{" "}
                            {languageConfig[reservation.language as keyof typeof languageConfig].label}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            {reservation.people} {reservation.people === 1 ? "person" : "people"}
                          </Badge>
                        </div>
                        <span className="font-display font-bold text-primary">
                          €{reservation.price.toFixed(2)}
                        </span>
                      </div>
                      {reservation.ticketType === "family" && (
                        <Badge className="mt-2 bg-accent/10 text-accent-foreground border-accent/20">
                          Family Ticket - Best Value!
                        </Badge>
                      )}
                    </div>
                  ))}
                  
                  <div className="border-t border-border pt-4 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-body text-muted-foreground">Total</span>
                      <span className="font-display text-2xl font-bold">€{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button variant="hero" size="lg" className="w-full">
                      Complete Booking
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tour Route Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-base uppercase tracking-[0.2em] text-primary mb-4">
              Tour Route
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              9 Historic Locations You'll Visit
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Explore the hidden gems and iconic landmarks of Haarlem on this 2.5-hour walking adventure
            </p>
          </div>

          {/* Interactive Route Map */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />
            
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
              {tourLocations.map((location, index) => (
                <div 
                  key={location.number}
                  className={`relative animate-fade-up ${
                    index % 3 === 1 ? "md:mt-12" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-card rounded-2xl p-6 shadow-card border-2 transition-all hover:shadow-hover hover:-translate-y-1 ${
                    location.type === "start" ? "border-green-400 bg-green-50/50 dark:bg-green-950/20" :
                    location.type === "break" ? "border-amber-400 bg-amber-50/50 dark:bg-amber-950/20" :
                    location.type === "end" ? "border-primary bg-primary/5" :
                    "border-border"
                  }`}>
                    {/* Number Badge */}
                    <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shadow-md ${
                      location.type === "start" ? "bg-green-500 text-white" :
                      location.type === "break" ? "bg-amber-500 text-white" :
                      location.type === "end" ? "bg-primary text-primary-foreground" :
                      "bg-card border-2 border-primary text-primary"
                    }`}>
                      {location.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-3 text-center">
                      {location.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display text-lg font-bold text-center mb-1">
                      {location.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground text-center">
                      {location.description}
                    </p>
                    
                    {/* Type Label */}
                    {location.type === "start" && (
                      <Badge className="mt-3 mx-auto flex w-fit bg-green-500 text-white">
                        <Navigation className="w-3 h-3 mr-1" />
                        Start Here
                      </Badge>
                    )}
                    {location.type === "break" && (
                      <Badge className="mt-3 mx-auto flex w-fit bg-amber-500 text-white">
                        🍺 Drink Break
                      </Badge>
                    )}
                    {location.type === "end" && (
                      <Badge className="mt-3 mx-auto flex w-fit bg-primary text-primary-foreground">
                        <Check className="w-3 h-3 mr-1" />
                        Tour Ends
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="font-body text-base uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
              Book Your Tour
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Reserve Your Spot
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
              Select your preferred date, time, and language to begin your journey through history
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card text-foreground rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Booking Form */}
              <div className="p-8 md:p-10 space-y-6">
                <div>
                  <label className="font-display text-sm font-semibold mb-3 block flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Select Day
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                      <button
                        key={day}
                        onClick={() => setBookingDay(day)}
                        className={`px-4 py-3 rounded-xl font-body text-sm transition-all ${
                          bookingDay === day
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-display text-sm font-semibold mb-3 block flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["10:00", "13:00", "16:00"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingTime(time)}
                        className={`px-4 py-3 rounded-xl font-display font-bold transition-all ${
                          bookingTime === time
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-display text-sm font-semibold mb-3 block flex items-center gap-2">
                    <Languages className="w-4 h-4 text-primary" />
                    Select Language
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(languageConfig) as (keyof typeof languageConfig)[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setBookingLanguage(lang)}
                        className={`px-4 py-3 rounded-xl font-body text-sm transition-all flex items-center justify-center gap-2 ${
                          bookingLanguage === lang
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        <span>{languageConfig[lang].flag}</span>
                        <span className="hidden sm:inline">{languageConfig[lang].label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-display text-sm font-semibold mb-3 block flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Number of People
                  </label>
                  <div className="flex items-center gap-4 bg-secondary rounded-xl p-2">
                    <button
                      onClick={() => setBookingPeople(Math.max(1, bookingPeople - 1))}
                      className="w-10 h-10 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-display text-2xl font-bold">
                      {bookingPeople}
                    </span>
                    <button
                      onClick={() => setBookingPeople(Math.min(12, bookingPeople + 1))}
                      className="w-10 h-10 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="bg-secondary/50 p-8 md:p-10 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-6">Choose Ticket Type</h3>
                
                <div className="space-y-3 flex-1">
                  {/* Individual Option */}
                  <button
                    onClick={() => setTicketType("individual")}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      ticketType === "individual"
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold">Individual Tickets</span>
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        ticketType === "individual" ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}>
                        {ticketType === "individual" && <Check className="w-3 h-3 text-primary-foreground" />}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      €17.50 per person × {bookingPeople} = <span className="font-bold text-foreground">€{(17.50 * bookingPeople).toFixed(2)}</span>
                    </p>
                  </button>

                  {/* Family Option */}
                  <button
                    onClick={() => setTicketType("family")}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all relative ${
                      ticketType === "family"
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <Badge className="absolute -top-2 right-4 bg-accent text-accent-foreground text-xs">
                      Best Value!
                    </Badge>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold">Family Ticket</span>
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        ticketType === "family" ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}>
                        {ticketType === "family" && <Check className="w-3 h-3 text-primary-foreground" />}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      Up to 4 people = <span className="font-bold text-foreground">€60.00</span>
                      {bookingPeople <= 4 && (
                        <span className="text-green-600 ml-2">
                          (Save €{((17.50 * bookingPeople) - 60).toFixed(2)}!)
                        </span>
                      )}
                    </p>
                  </button>
                </div>

                {/* Summary */}
                <div className="border-t border-border pt-6 mt-6">
                  <div className="bg-card rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-muted-foreground">Your Selection</span>
                      <Badge variant="outline">{bookingDay}, {bookingTime}</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-muted-foreground">Language</span>
                      <span className="font-body text-sm">
                        {languageConfig[bookingLanguage as keyof typeof languageConfig].flag}{" "}
                        {languageConfig[bookingLanguage as keyof typeof languageConfig].label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">People</span>
                      <span className="font-body text-sm">{bookingPeople} {bookingPeople === 1 ? "person" : "people"}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-lg font-bold">Total Price</span>
                    <span className="font-display text-3xl font-bold text-primary">
                      €{calculatePrice().toFixed(2)}
                    </span>
                  </div>
                  
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={addToProgram}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add to My Program
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Selector */}
      <section className="py-8 bg-card border-b border-border sticky top-24 z-30 backdrop-blur-lg bg-card/95">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Languages className="w-5 h-5" />
              <span className="font-body text-sm uppercase tracking-wider">Filter schedule by language:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedLanguage === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage("all")}
                className="rounded-full"
              >
                <Globe2 className="w-4 h-4 mr-2" />
                All Languages
              </Button>
              {(Object.keys(languageConfig) as (keyof typeof languageConfig)[]).map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLanguage === lang ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage(lang)}
                  className="rounded-full"
                >
                  <span className="mr-2">{languageConfig[lang].flag}</span>
                  {languageConfig[lang].label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Clock, label: "Duration", value: "2.5 Hours", detail: "Per tour" },
              { icon: Users, label: "Group Size", value: "Max 12", detail: "Per guide" },
              { icon: Euro, label: "From", value: "€17.50", detail: "Per person" },
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
              Four days of walking tours through Haarlem's historic center. Each tour accommodates up to 12 participants with multilingual guides.
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
                      {day.guides.english.length > 0 && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          🇬🇧 {day.guides.english.join(", ")}
                        </Badge>
                      )}
                      {day.guides.dutch.length > 0 && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          🇳🇱 {day.guides.dutch.join(", ")}
                        </Badge>
                      )}
                      {day.guides.chinese.length > 0 && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          🇨🇳 {day.guides.chinese.join(", ")}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {day.slots.map((slot) => {
                      const showSlot = hasToursInLanguage(slot, selectedLanguage);
                      if (!showSlot && selectedLanguage !== "all") return null;
                      
                      return (
                        <div
                          key={slot.time}
                          className={`relative rounded-xl border-2 p-5 transition-all ${
                            showSlot 
                              ? "border-primary/20 bg-primary/5 hover:border-primary/40 hover:shadow-md cursor-pointer" 
                              : "border-border bg-muted/30 opacity-50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-primary" />
                              <span className="font-display text-2xl font-bold">{slot.time}</span>
                            </div>
                            <Badge variant="outline" className="font-body">
                              {getToursForSlot(slot, selectedLanguage)} tours
                            </Badge>
                          </div>
                          
                          {/* Language availability */}
                          <div className="space-y-2">
                            {slot.english > 0 && (selectedLanguage === "all" || selectedLanguage === "english") && (
                              <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${languageConfig.english.color} border`}>
                                <span className="font-body text-sm flex items-center gap-2">
                                  <span>🇬🇧</span> English
                                </span>
                                <span className="font-display font-semibold">{slot.english} group{slot.english > 1 ? "s" : ""}</span>
                              </div>
                            )}
                            {slot.dutch > 0 && (selectedLanguage === "all" || selectedLanguage === "dutch") && (
                              <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${languageConfig.dutch.color} border`}>
                                <span className="font-body text-sm flex items-center gap-2">
                                  <span>🇳🇱</span> Nederlands
                                </span>
                                <span className="font-display font-semibold">{slot.dutch} group{slot.dutch > 1 ? "s" : ""}</span>
                              </div>
                            )}
                            {slot.chinese > 0 && (selectedLanguage === "all" || selectedLanguage === "chinese") && (
                              <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${languageConfig.chinese.color} border`}>
                                <span className="font-body text-sm flex items-center gap-2">
                                  <span>🇨🇳</span> 中文
                                </span>
                                <span className="font-display font-semibold">{slot.chinese} group{slot.chinese > 1 ? "s" : ""}</span>
                              </div>
                            )}
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
                      );
                    })}
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
              <Button variant="outline" size="lg" className="w-full" onClick={() => {
                setTicketType("individual");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
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
              <Button variant="hero" size="lg" className="w-full" onClick={() => {
                setTicketType("family");
                setBookingPeople(4);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
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

      {/* Remarks Section */}
      <section className="py-16 md:py-24 bg-amber-50 dark:bg-amber-950/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-amber-100 dark:bg-amber-900/30 rounded-2xl p-8 border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-amber-900 dark:text-amber-100">
                  Remarks
                </h3>
              </div>
              <p className="font-body text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                Due to the nature of this walk, participants must be a minimum of <span className="font-semibold">12 years old</span> and <span className="font-semibold">no strollers</span> are allowed. Groups will consist of <span className="font-semibold">12 participants + 1 guide</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
