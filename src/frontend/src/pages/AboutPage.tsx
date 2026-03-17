import { useFadeIn } from "@/hooks/useFadeIn";

const values = [
  {
    title: "Integrity",
    description:
      "Every transaction is conducted with complete transparency and unwavering ethical standards. Our clients trust us with their most significant investments, and we honor that trust absolutely.",
  },
  {
    title: "Excellence",
    description:
      "We pursue perfection in every detail — from initial consultation to the moment you receive the keys. Our standard is not merely high; it is the highest attainable.",
  },
  {
    title: "Discretion",
    description:
      "Privacy is paramount for our clients. We operate with complete confidentiality, protecting the interests and identities of all parties with absolute professionalism.",
  },
];

const team = [
  {
    name: "Edward Montague",
    title: "Founder & Managing Director",
    bio: "With over two decades at the apex of luxury real estate, Edward has facilitated some of the most significant private property transactions in Europe and the Americas. His unparalleled market intelligence and personal network define the Prince standard.",
  },
  {
    name: "Sophia Valentin",
    title: "Head of International Acquisitions",
    bio: "Fluent in four languages and deeply conversant with the luxury markets of Paris, Monaco, Dubai, and Singapore, Sophia brings a rare global perspective to every client mandate. Her negotiation expertise has secured transformative deals for our most distinguished clients.",
  },
  {
    name: "Alexander Chen",
    title: "Director of Investment Advisory",
    bio: "A former Goldman Sachs investment strategist, Alexander applies rigorous financial analysis to luxury property investment. He guides clients through portfolio diversification, return optimization, and emerging market opportunities with precision.",
  },
];

export function AboutPage() {
  const storyRef = useFadeIn<HTMLDivElement>();
  const valuesRef = useFadeIn<HTMLDivElement>();
  const teamRef = useFadeIn<HTMLDivElement>();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-80 md:h-[500px] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/about-team.dim_1200x600.jpg"
            alt="Prince Luxury Realty team"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.08 0 0 / 0.9) 40%, transparent 100%)",
            }}
          />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-20">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-tight">
            About Prince
            <br />
            <span style={{ color: "var(--gold)" }}>Luxury Realty</span>
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={storyRef}
            className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="section-label mb-4">Founded in 2009</p>
              <h2 className="font-display text-4xl text-foreground mb-6">
                A Legacy of Luxury
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Prince Luxury Realty was founded with a singular, uncompromising
                vision: to redefine the luxury real estate experience for
                high-net-worth individuals worldwide. From our inception, we
                refused to accept the transactional, impersonal nature of
                conventional property sales.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Over fifteen years, we have built an unrivalled portfolio of the
                world's most extraordinary properties — from Côte d'Azur villas
                to Manhattan sky palaces, from Alpine chalets to Caribbean
                island estates. Each property we represent meets our exacting
                standards of architectural distinction, privacy, and investment
                value.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Today, Prince Luxury Realty serves a distinguished clientele of
                entrepreneurs, industry leaders, royalty, and cultural icons —
                for whom a home is not merely an address, but an expression of
                an exceptional life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years in Luxury Market" },
                { value: "$2B+", label: "Total Sales Volume" },
                { value: "500+", label: "Clients Served" },
                { value: "40+", label: "Global Offices" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 border border-[oklch(0.22_0_0)] text-center"
                >
                  <p
                    className="font-display text-3xl font-semibold mb-2"
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
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-[oklch(0.12_0_0)] border-y border-[oklch(0.22_0_0)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={valuesRef} className="fade-in">
            <div className="text-center mb-16">
              <p className="section-label mb-4">What We Stand For</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Our Values
              </h2>
              <div className="gold-divider mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="p-10 border border-[oklch(0.22_0_0)] hover:border-gold transition-colors duration-300"
                >
                  <p
                    className="font-display text-5xl mb-6"
                    style={{ color: "var(--gold)" }}
                  >
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={teamRef} className="fade-in">
            <div className="text-center mb-16">
              <p className="section-label mb-4">The Principals</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Our Leadership Team
              </h2>
              <div className="gold-divider mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border border-[oklch(0.22_0_0)] p-8 hover:border-gold transition-colors duration-300"
                >
                  <div
                    className="w-16 h-16 mb-6 flex items-center justify-center border"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <span
                      className="font-display text-xl"
                      style={{ color: "var(--gold)" }}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="text-xs tracking-widest uppercase font-body mb-5"
                    style={{ color: "var(--gold)" }}
                  >
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section
        className="py-16 border-t border-[oklch(0.22_0_0)]"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.12 0 0), oklch(0.16 0 0), oklch(0.12 0 0))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="section-label mb-2">Recognition</p>
              <h3 className="font-display text-2xl text-foreground">
                Industry Awards & Recognition
              </h3>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-10">
              {[
                "Best Luxury Agency 2024",
                "Forbes Top 50 Brokers",
                "Robb Report Excellence Award",
                "Wall Street Journal Top Producer",
              ].map((award) => (
                <div key={award} className="text-center">
                  <div
                    className="w-px h-8 mx-auto mb-3"
                    style={{ backgroundColor: "var(--gold)" }}
                  />
                  <p className="text-muted-foreground text-xs tracking-wide font-body">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
