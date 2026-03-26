import { PropertyCard } from "@/components/PropertyCard";
import { getFeaturedProperties } from "@/data/mockData";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Play, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Luxury Properties" },
  { value: "15+", label: "Years Experience" },
  { value: "$2B+", label: "in Sales" },
  { value: "500+", label: "Happy Clients" },
];

const features = [
  {
    title: "Exclusive Portfolio",
    description:
      "Access to the world's most coveted properties — privately listed estates, ultra-luxury villas, and trophy penthouses unavailable on the open market.",
    numeral: "I",
  },
  {
    title: "Bespoke Service",
    description:
      "Every client receives a dedicated advisor who understands your lifestyle, preferences, and investment objectives. Your time is our most valued resource.",
    numeral: "II",
  },
  {
    title: "Global Network",
    description:
      "Through our exclusive network of over 40 international offices, we connect discerning buyers with extraordinary properties across five continents.",
    numeral: "III",
  },
];

const testimonials = [
  {
    name: "James Harrington",
    title: "Tech Entrepreneur",
    quote:
      "Prince Luxury Realty exceeded every expectation. Their knowledge of the ultra-prime market and attention to detail is unmatched. They found us our dream home in Monaco within three weeks.",
  },
  {
    name: "Alexandra von Steiner",
    title: "Investment Banker",
    quote:
      "The discretion, professionalism, and global reach of Prince Luxury Realty is truly exceptional. The team handled our portfolio acquisition with remarkable efficiency and insight.",
  },
  {
    name: "Prince Khalid Al-Rashid",
    title: "Real Estate Investor",
    quote:
      "I have worked with luxury brokers on four continents. None compare to the refined service and exclusive access that Prince Luxury Realty provides. They are in a class of their own.",
  },
];

export function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const statsRef = useFadeIn<HTMLDivElement>();
  const featuredRef = useFadeIn<HTMLDivElement>();
  const featuresRef = useFadeIn<HTMLDivElement>();
  const testimonialsRef = useFadeIn<HTMLDivElement>();

  return (
    <main>
      <section
        data-ocid="home.hero_section"
        className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-villa.dim_1600x900.jpg"
            alt="Luxury villa"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.08 0 0 / 0.6), oklch(0.08 0 0 / 0.8))",
            }}
          />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <p className="section-label mb-6">Prince Luxury Realty</p>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
            Extraordinary Homes
            <br />
            <span style={{ color: "var(--gold)" }}>
              for Extraordinary Lives
            </span>
          </h1>
          <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's most refined luxury properties, curated for the most
            discerning clientele. We don't simply sell homes — we connect you
            with your legacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/properties"
              data-ocid="home.view_properties_button"
              className="btn-gold text-xs"
            >
              View Properties
            </Link>
            {/* Cinematic Tour CTA */}
            <Link
              to="/cinematic"
              data-ocid="home.cinematic_button"
              className="flex items-center gap-3 px-6 py-3 border text-xs font-body uppercase tracking-widest transition-all duration-300 hover:bg-white/10"
              style={{
                borderColor: "rgba(201,168,76,0.6)",
                color: "#C9A84C",
                letterSpacing: "0.15em",
              }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid #C9A84C" }}
              >
                <Play size={12} className="ml-0.5" fill="#C9A84C" />
              </span>
              Watch Cinematic Tour
            </Link>
            <Link
              to="/contact"
              data-ocid="home.contact_button"
              className="btn-outline-gold text-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      <section className="bg-[oklch(0.12_0_0)] border-y border-[oklch(0.22_0_0)]">
        <div
          ref={statsRef}
          className="fade-in max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-4xl font-semibold mb-2"
                style={{ color: "var(--gold)" }}
              >
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.featured_section"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div ref={featuredRef} className="fade-in">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Handpicked Selection</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Featured Residences
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, i) => (
              <PropertyCard
                key={property.id.toString()}
                property={property}
                index={i}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties" className="btn-outline-gold text-xs">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.12_0_0)] border-y border-[oklch(0.22_0_0)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={featuresRef} className="fade-in">
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our Distinction</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Why Choose Prince Luxury Realty
              </h2>
              <div className="gold-divider mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-8 border border-[oklch(0.22_0_0)] hover:border-gold transition-colors duration-300"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-6 flex items-center justify-center border"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <span
                      className="font-display text-base"
                      style={{ color: "var(--gold)" }}
                    >
                      {feature.numeral}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic tour teaser banner */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "oklch(0.08 0 0)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/scene5-infinity-pool-sunset.dim_1920x1080.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <p className="section-label mb-4">Immersive Experience</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Take a Cinematic Tour
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Experience our finest properties through a curated cinematic
            journey. Seven breathtaking scenes, crafted to inspire.
          </p>
          <Link
            to="/cinematic"
            data-ocid="home.cinematic_banner_button"
            className="inline-flex items-center gap-3 px-8 py-4 border text-xs font-body uppercase tracking-widest transition-all duration-300 hover:bg-gold/10"
            style={{
              borderColor: "#C9A84C",
              color: "#C9A84C",
              letterSpacing: "0.2em",
            }}
          >
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ border: "1px solid #C9A84C" }}
            >
              <Play size={14} className="ml-0.5" fill="#C9A84C" />
            </span>
            Begin Cinematic Tour
          </Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={testimonialsRef} className="fade-in">
            <div className="text-center mb-16">
              <p className="section-label mb-4">Client Voices</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                What Our Clients Say
              </h2>
              <div className="gold-divider mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-8 border border-[oklch(0.22_0_0)] bg-[oklch(0.12_0_0)]"
                >
                  <div className="flex gap-1 mb-4">
                    <Star
                      size={14}
                      fill="currentColor"
                      style={{ color: "var(--gold)" }}
                    />
                    <Star
                      size={14}
                      fill="currentColor"
                      style={{ color: "var(--gold)" }}
                    />
                    <Star
                      size={14}
                      fill="currentColor"
                      style={{ color: "var(--gold)" }}
                    />
                    <Star
                      size={14}
                      fill="currentColor"
                      style={{ color: "var(--gold)" }}
                    />
                    <Star
                      size={14}
                      fill="currentColor"
                      style={{ color: "var(--gold)" }}
                    />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed font-body italic mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-display text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase font-body mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
