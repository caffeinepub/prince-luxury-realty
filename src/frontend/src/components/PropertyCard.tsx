import type { Property } from "@/data/mockData";
import { getPropertyImage } from "@/data/mockData";
import { Link } from "@tanstack/react-router";
import { Bath, Bed, Maximize2 } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const image = getPropertyImage(property.propertyType, index);

  return (
    <article className="property-card group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span
          className="absolute top-4 left-4 font-body text-[10px] tracking-widest uppercase px-3 py-1.5"
          style={{ backgroundColor: "var(--gold)", color: "oklch(0.08 0 0)" }}
        >
          {property.propertyType}
        </span>
        {property.featured && (
          <span
            className="absolute top-4 right-4 font-body text-[10px] tracking-widest uppercase px-3 py-1.5 border"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-muted-foreground text-xs tracking-widest uppercase font-body mb-2">
          {property.location}
        </p>
        <h3 className="font-display text-xl text-foreground mb-3 leading-snug">
          {property.title}
        </h3>
        <p
          className="font-display text-2xl font-semibold mb-5"
          style={{ color: "var(--gold)" }}
        >
          {property.price}
        </p>

        <div
          className="flex items-center gap-5 py-4 border-t border-b mb-5"
          style={{ borderColor: "oklch(0.22 0 0)" }}
        >
          <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Bed size={14} />
            {property.beds.toString()} Beds
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Bath size={14} />
            {property.baths.toString()} Baths
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Maximize2 size={14} />
            {Number(property.sqft).toLocaleString()} sq ft
          </span>
        </div>

        <Link
          to="/properties"
          className="btn-outline-gold w-full block text-center text-xs"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
