import { MOCK_PROPERTIES } from "@/data/mockData";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyInterest: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useFadeIn<HTMLDivElement>();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        propertyInterest: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

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
          <p className="section-label mb-4">We're Here</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground">
            Get In Touch
          </h1>
          <div className="gold-divider mx-auto mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={formRef}
            className="fade-in grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Left: Contact Info */}
            <div>
              <p className="section-label mb-6">Contact Information</p>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-10">
                Whether you are seeking your first luxury residence or expanding
                a distinguished portfolio, our principals are prepared to give
                your search the bespoke attention it deserves. We respond to all
                inquiries within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border mt-0.5"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <MapPin size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-body">
                      1 Luxury Avenue, Suite 100
                    </p>
                    <p className="text-muted-foreground text-sm font-body">
                      New York, NY 10001, United States
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <Phone size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="text-foreground text-sm font-body">
                    +1 (212) 555-0100
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <Mail size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <a
                    href="mailto:inquiries@princeluxuryrealty.com"
                    className="text-foreground text-sm font-body hover:text-gold transition-colors"
                  >
                    inquiries@princeluxuryrealty.com
                  </a>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="flex items-center gap-3 px-6 py-3.5 text-white text-xs tracking-widest uppercase font-body transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.2 145)" }}
                >
                  <svg
                    role="img"
                    aria-label="WhatsApp"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="https://instagram.com/princeluxuryrealty"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.instagram_button"
                  className="flex items-center gap-3 px-6 py-3.5 text-white text-xs tracking-widest uppercase font-body btn-outline-gold"
                >
                  <Instagram size={16} />
                  Follow on Instagram
                </a>
              </div>

              {/* Map placeholder */}
              <div
                className="relative h-48 border border-[oklch(0.22_0_0)] flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.12 0 0), oklch(0.16 0 0))",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, oklch(0.22 0 0) 0, oklch(0.22 0 0) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, oklch(0.22 0 0) 0, oklch(0.22 0 0) 1px, transparent 1px, transparent 40px)",
                  }}
                />
                <div className="relative z-10 text-center">
                  <MapPin
                    size={24}
                    style={{ color: "var(--gold)" }}
                    className="mx-auto mb-2"
                  />
                  <p className="text-foreground text-sm font-body">
                    1 Luxury Avenue, Suite 100
                  </p>
                  <p className="text-muted-foreground text-xs font-body">
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div>
              <p className="section-label mb-6">Inquiry Form</p>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Submit Your Inquiry
              </h2>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-6 p-6 border"
                  style={{
                    borderColor: "var(--gold)",
                    background: "oklch(0.72 0.12 78 / 0.08)",
                  }}
                >
                  <p
                    className="font-display text-xl mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    Inquiry Received
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    Thank you for your inquiry. A member of our team will be in
                    touch within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="mb-6 p-6 border border-destructive bg-destructive/10"
                >
                  <p className="text-destructive font-display">
                    Submission Failed
                  </p>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    We apologize for the inconvenience. Please try again or
                    contact us directly.
                  </p>
                </div>
              )}

              <form
                data-ocid="contact.form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2"
                  >
                    Full Name <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    data-ocid="contact.name_input"
                    className="w-full bg-[oklch(0.14_0_0)] border border-[oklch(0.25_0_0)] focus:border-gold text-foreground font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2"
                    >
                      Email <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      data-ocid="contact.email_input"
                      className="w-full bg-[oklch(0.14_0_0)] border border-[oklch(0.25_0_0)] focus:border-gold text-foreground font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (212) 555-0000"
                      data-ocid="contact.phone_input"
                      className="w-full bg-[oklch(0.14_0_0)] border border-[oklch(0.25_0_0)] focus:border-gold text-foreground font-body text-sm px-4 py-3.5 outline-none transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-property"
                    className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2"
                  >
                    Property of Interest
                  </label>
                  <select
                    id="contact-property"
                    name="propertyInterest"
                    value={form.propertyInterest}
                    onChange={handleChange}
                    data-ocid="contact.property_select"
                    className="w-full bg-[oklch(0.14_0_0)] border border-[oklch(0.25_0_0)] focus:border-gold text-foreground font-body text-sm px-4 py-3.5 outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a property...</option>
                    {MOCK_PROPERTIES.map((p) => (
                      <option key={p.id.toString()} value={p.title}>
                        {p.title} — {p.location}
                      </option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2"
                  >
                    Message <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your requirements, timeline, and any specific preferences..."
                    data-ocid="contact.message_textarea"
                    className="w-full bg-[oklch(0.14_0_0)] border border-[oklch(0.25_0_0)] focus:border-gold text-foreground font-body text-sm px-4 py-3.5 outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-ocid="contact.submit_button"
                  className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        role="img"
                        aria-label="Loading"
                      >
                        <title>Loading</title>
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
