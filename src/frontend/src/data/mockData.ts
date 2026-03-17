export interface Property {
  id: bigint;
  title: string;
  price: string;
  location: string;
  beds: bigint;
  baths: bigint;
  sqft: bigint;
  description: string;
  propertyType: string;
  featured: boolean;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: BigInt(1),
    title: "Villa Serenità",
    price: "$12,500,000",
    location: "Amalfi Coast, Italy",
    beds: BigInt(6),
    baths: BigInt(7),
    sqft: BigInt(8200),
    description:
      "An extraordinary cliffside villa commanding panoramic views of the Tyrrhenian Sea. This masterpiece of Italian craftsmanship features hand-painted frescoes, a private vineyard, and a 50-meter infinity pool.",
    propertyType: "Villa",
    featured: true,
  },
  {
    id: BigInt(2),
    title: "The Penthouse at One Hyde Park",
    price: "$28,000,000",
    location: "Knightsbridge, London",
    beds: BigInt(5),
    baths: BigInt(6),
    sqft: BigInt(6500),
    description:
      "Set within London's most coveted residential address, this meticulously appointed penthouse offers sweeping views across Hyde Park. Featuring bespoke finishes and 24-hour concierge.",
    propertyType: "Penthouse",
    featured: true,
  },
  {
    id: BigInt(3),
    title: "Château Bellevue",
    price: "$45,000,000",
    location: "Bordeaux, France",
    beds: BigInt(12),
    baths: BigInt(10),
    sqft: BigInt(18500),
    description:
      "A historic 18th-century château surrounded by world-renowned vineyards. Extensively restored with meticulous attention to period detail while incorporating the finest modern amenities.",
    propertyType: "Estate",
    featured: true,
  },
  {
    id: BigInt(4),
    title: "Chalet Mont Blanc",
    price: "$8,750,000",
    location: "Megève, French Alps",
    beds: BigInt(7),
    baths: BigInt(8),
    sqft: BigInt(9200),
    description:
      "An architectural triumph in the heart of the French Alps. This contemporary chalet seamlessly blends indigenous stone and reclaimed timber with Scandinavian minimalism.",
    propertyType: "Chalet",
    featured: false,
  },
  {
    id: BigInt(5),
    title: "Desert Rose Retreat",
    price: "$6,200,000",
    location: "Palm Springs, California",
    beds: BigInt(5),
    baths: BigInt(5),
    sqft: BigInt(6800),
    description:
      "A striking desert modernist compound framed by the San Jacinto Mountains. Features an outdoor entertaining pavilion, negative-edge pool, and world-class art collection spaces.",
    propertyType: "Villa",
    featured: false,
  },
  {
    id: BigInt(6),
    title: "Villa Aquamarine",
    price: "$19,500,000",
    location: "Turks & Caicos Islands",
    beds: BigInt(8),
    baths: BigInt(9),
    sqft: BigInt(11000),
    description:
      "Positioned directly on Grace Bay — one of the world's most celebrated beaches. This luminous Caribbean sanctuary features a private marina, spa pavilion, and curated tropical gardens.",
    propertyType: "Estate",
    featured: true,
  },
];

export const getFeaturedProperties = (): Property[] =>
  MOCK_PROPERTIES.filter((p) => p.featured);

export const getPropertyImage = (propertyType: string, index = 0): string => {
  const map: Record<string, string> = {
    Villa: "/assets/generated/hero-villa.dim_1600x900.jpg",
    Penthouse: "/assets/generated/property-penthouse.dim_800x600.jpg",
    Estate:
      index % 2 === 0
        ? "/assets/generated/property-estate.dim_800x600.jpg"
        : "/assets/generated/property-beachfront.dim_800x600.jpg",
    Chalet: "/assets/generated/property-chalet.dim_800x600.jpg",
  };
  return (
    map[propertyType] ??
    "/assets/generated/property-desert-villa.dim_800x600.jpg"
  );
};
