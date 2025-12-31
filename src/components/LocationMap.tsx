import { MapPin } from "lucide-react";

interface LocationMapProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

const LocationMap = ({ name, address, lat, lng }: LocationMapProps) => {
  // OpenStreetMap embed URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.005}%2C${lat - 0.003}%2C${lng + 0.005}%2C${lat + 0.003}&layer=mapnik&marker=${lat}%2C${lng}`;
  const fullMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`;

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card shadow-lg">
      <div className="p-4 bg-muted/30 border-b border-border">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Find {name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{address}</p>
      </div>
      <div className="relative aspect-video w-full">
        <iframe
          src={mapUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${name}`}
        />
      </div>
      <div className="p-3 bg-muted/20 border-t border-border">
        <a
          href={fullMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          <MapPin className="h-4 w-4" />
          Open in OpenStreetMap →
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
