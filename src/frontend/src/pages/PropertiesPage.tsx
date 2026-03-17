import { PropertyCard } from "@/components/PropertyCard";
import { MOCK_PROPERTIES } from "@/data/mockData";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useState } from "react";

const FILTERS = ["All", "Villa", "Penthouse", "Estate", "Chalet"];

export function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const listRef = useFadeIn<HTMLDivElement>();

  const filtered =
    activeFilter === "All"
      ? MOCK_PROPERTIES
      : MOCK_PROPERTIES.filter((p) => p.propertyType === activeFilter);

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.08 0 0), oklch(0.14 0 0))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.72 0.12 78 / 0.03) 0, oklch(0.72 0.12 78 / 0.03) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 text-center">
          <p className="section-label mb-4">Explore</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground">
            Our Collection
          </h1>
          <div className="gold-divider mx-auto mt-4" />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-[oklch(0.22_0_0)] sticky top-20 z-40 bg-[oklch(0.1_0_0/0.97)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                data-ocid="properties.filter.tab"
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-xs tracking-widest uppercase px-6 py-5 border-b-2 transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "border-gold text-gold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={listRef}
            data-ocid="properties.list"
            className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length === 0 ? (
              <div className="col-span-3 text-center py-20">
                <p className="text-muted-foreground font-body">
                  No properties found in this category.
                </p>
              </div>
            ) : (
              filtered.map((property, i) => (
                <div
                  key={property.id.toString()}
                  data-ocid={`properties.item.${i + 1}`}
                >
                  <PropertyCard property={property} index={i} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
