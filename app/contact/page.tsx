import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { FadeUp, SlideInLeft, SlideInRight, StaggerChildren, StaggerItem } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sehab Albarakah — Dubai's leading wholesale trading company. We'd love to discuss how we can support your business.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "Dubai, UAE",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: "058 609 3789 / 058 609 3800",
    href: "tel:+971586093789",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 45 527 207",
    href: "tel:+971586093800",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sehabal.com",
    href: "mailto:info@sehabal.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM\nSun: Closed",
  },
];

const faqs = [
  {
    q: "What product ranges do you supply?",
    a: "We specialise in four core ranges: Foodstuffs (rice varieties, tea, cooking oils, dairy, and masalas), Specialty ingredients (exotic spices, flours & pulses, oils & beverages), Nuts & Spices (dry fruits, premium nuts, curry powders, chocolates, and olive oil), and Laundry Consumables (detergents, fabric softeners, hangers, guards, and packaging).",
  },
  {
    q: "What is your minimum order quantity?",
    a: "Minimum order quantities vary by product. We are flexible and cater to businesses of all sizes — from small restaurants to large hotel chains. Contact us to discuss your specific requirements.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We deliver across all seven Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. Same-day delivery is available within Dubai for qualifying orders.",
  },
  {
    q: "How quickly will I receive a quote?",
    a: "We respond to all quotation requests within 24 business hours. For urgent requirements, you can call us directly on 058 609 3789 / 058 609 3800 for an immediate response.",
  },
  {
    q: "Do you supply to small businesses?",
    a: "Absolutely. We serve businesses of all sizes — from single-outlet restaurants and small laundries to large hotel groups and supermarket chains. We tailor our pricing and delivery to suit your needs.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get in Touch"
        subtitle="Have a product requirement or want to become a regular client? Our team is ready to help — reach out and we'll get back to you within 24 hours."
        badge="Contact Us"
        imageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
        imageAlt="Dubai Business"
      />

      {/* ── Contact section ───────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left — info */}
            <SlideInLeft className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                  Reach Out
                </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Request a Quote or
                <span className="text-primary"> Place an Order</span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                Fill in the form and one of our product specialists will get
                back to you within 24 hours with pricing and availability.
              </p>
              </div>

              <div className="space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-surface transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-bg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                        <Icon
                          size={18}
                          className="text-primary group-hover:text-white transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* quick response badge */}
              <div className="flex items-center gap-3 p-4 bg-primary-bg rounded-xl border border-primary/20">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                <p className="text-sm text-primary font-medium">
                  Typically responds within 24 business hours
                </p>
              </div>
            </SlideInLeft>

            {/* Right — form */}
            <SlideInRight className="lg:col-span-3 bg-white rounded-2xl border border-border shadow-xl shadow-foreground/4 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="text-text-muted text-xs">
                    All fields marked * are required
                  </p>
                </div>
              </div>
              <ContactForm />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────── */}
      {/* <section className="py-0">
        <div className="relative h-80 md:h-96 bg-surface-alt overflow-hidden">
          Placeholder map with styled overlay
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,71,171,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,71,171,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <MapPin size={28} className="text-primary" />
              </div>
              <p className="text-foreground font-bold text-lg">
                Al Quoz Industrial Area 3
              </p>
              <p className="text-text-muted text-sm mt-1">Dubai, UAE</p>
            </div>
          </div>
          {[
            { top: "20%", left: "15%" },
            { top: "60%", left: "30%" },
            { top: "35%", left: "70%" },
            { top: "70%", left: "80%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={pos}
            />
          ))}
        </div>
      </section> */}

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <StaggerChildren className="space-y-4">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="bg-white rounded-xl p-7 border border-border hover:border-primary/25 hover:shadow-md transition-all duration-200">
                  <h3 className="font-bold text-foreground mb-3 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </main>
  );
}
