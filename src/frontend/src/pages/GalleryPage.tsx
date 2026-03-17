import { useFadeIn } from "@/hooks/useFadeIn";
import { X } from "lucide-react";
import { useState } from "react";

const GALLERY_ITEMS = [
  {
    src: "/assets/generated/hero-villa.dim_1600x900.jpg",
    alt: "Luxury Villa Exterior",
    category: "Exterior",
    title: "Villa Serenitá — Amalfi Coast",
  },
  {
    src: "/assets/generated/property-penthouse.dim_800x600.jpg",
    alt: "Penthouse Interior",
    category: "Interior",
    title: "One Hyde Park Penthouse — London",
  },
  {
    src: "/assets/generated/property-beachfront.dim_800x600.jpg",
    alt: "Beachfront Villa",
    category: "Exterior",
    title: "Villa Aquamarine — Turks & Caicos",
  },
  {
    src: "/assets/generated/property-estate.dim_800x600.jpg",
    alt: "Country Estate",
    category: "Exterior",
    title: "Château Bellevue — Bordeaux",
  },
  {
    src: "/assets/generated/property-chalet.dim_800x600.jpg",
    alt: "Alpine Chalet",
    category: "Exterior",
    title: "Chalet Mont Blanc — Megève",
  },
  {
    src: "/assets/generated/property-desert-villa.dim_800x600.jpg",
    alt: "Desert Villa",
    category: "Exterior",
    title: "Desert Rose Retreat — Palm Springs",
  },
  {
    src: "/assets/generated/gallery-bedroom.dim_800x600.jpg",
    alt: "Master Bedroom Suite",
    category: "Interior",
    title: "Master Suite — Villa Serenitá",
  },
  {
    src: "/assets/generated/gallery-kitchen.dim_800x600.jpg",
    alt: "Luxury Kitchen",
    category: "Interior",
    title: "Chef's Kitchen — The Hyde Park Penthouse",
  },
  {
    src: "/assets/generated/gallery-pool.dim_800x600.jpg",
    alt: "Infinity Pool",
    category: "Amenities",
    title: "Infinity Pool — Villa Aquamarine",
  },
];

const FILTERS = ["All", "Exterior", "Interior", "Amenities"];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useFadeIn<HTMLDivElement>();

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <main className="pt-20">
      {/* Hero */}
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
            Property Gallery
          </h1>
          <div className="gold-divider mx-auto mt-4" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-[oklch(0.22_0_0)] sticky top-20 z-40 bg-[oklch(0.1_0_0/0.97)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-0">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                data-ocid="gallery.filter.tab"
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-xs tracking-widest uppercase px-6 py-5 border-b-2 transition-all ${
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

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={gridRef}
            data-ocid="gallery.list"
            className="fade-in columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((item, i) => (
              <div
                key={item.src}
                data-ocid={`gallery.item.${i + 1}`}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full relative overflow-hidden p-0 border-0 bg-transparent cursor-pointer"
                  onClick={() => openLightbox(i)}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-display text-sm">
                        {item.title}
                      </p>
                      <p className="text-gold text-xs tracking-widest uppercase font-body mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <dialog
          data-ocid="gallery.lightbox_modal"
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 w-full h-full max-w-none max-h-none m-0 p-0 border-0"
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
          aria-label="Image lightbox"
        >
          <button
            type="button"
            data-ocid="gallery.lightbox_modal.close_button"
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="font-display text-white text-lg">
                {filtered[lightboxIndex]?.title}
              </p>
              <p className="text-gold text-xs tracking-widest uppercase font-body mt-1">
                {filtered[lightboxIndex]?.category}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}
