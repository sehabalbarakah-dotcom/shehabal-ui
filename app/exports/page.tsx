import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Truck,
  FileText,
  Package,
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Layers,
  CheckCircle,
  Anchor,
  BadgeCheck,
  Boxes,
  ChevronRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animate";

export const metadata: Metadata = {
  title: "Global Exports",
  description:
    "Sehab Albarakah connects the UAE to Africa — seamless sourcing and distribution of high-quality goods from Dubai to key markets across East, West, Central and Southern Africa.",
};

const regions = [
  {
    name: "East Africa",
    icon: "🌍",
    countries: ["Kenya", "Tanzania", "Ethiopia", "Uganda"],
    color: "#0047AB",
  },
  {
    name: "West Africa",
    icon: "🌍",
    countries: ["Liberia", "Nigeria", "Ghana", "Ivory Coast"],
    color: "#C9A227",
  },
  {
    name: "Central & Southern Africa",
    icon: "🌍",
    countries: ["DRC", "Angola", "Zambia"],
    color: "#0047AB",
  },
];

const productCategories = [
  {
    icon: Package,
    title: "Foodstuffs",
    description:
      "Grains, flour, pulses, spices, and branded FMCG products sourced from certified manufacturers and packed to international food safety standards.",
    items: ["Grains & Rice", "Flour & Pulses", "Spices & Masalas", "Branded FMCG"],
    image: "/rice.webp",
  },
  {
    icon: Boxes,
    title: "Consumer Goods",
    description:
      "Essential household items and consumer electronics — carefully selected, quality-verified, and shipped to meet demand in growing African markets.",
    items: ["Household Essentials", "Personal Care", "Consumer Electronics", "Cleaning Products"],
    image: "/shopping.webp",
  },
  {
    icon: Star,
    title: "Custom Sourcing",
    description:
      "Specific product procurement tailored to regional requirements — we source what your market needs, handle the logistics, and deliver to your door.",
    items: ["Regional Demand Sourcing", "Private Label Products", "Bulk Procurement", "Retail-Ready Packing"],
    image: "/warehouse2.jpeg",
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "All products meet international safety and quality standards. Every shipment is verified before dispatch.",
  },
  {
    icon: Anchor,
    title: "Logistics Expertise",
    description:
      "Full handling of sea and air freight — we manage the entire journey from Dubai to African ports, ensuring timely delivery.",
  },
  {
    icon: FileText,
    title: "Export Documentation",
    description:
      "We manage all necessary export permits, Certificates of Origin, customs clearances, and destination-country compliance paperwork.",
  },
  {
    icon: Layers,
    title: "Flexible Volume",
    description:
      "Capacity to handle both LCL (Less than Container Load) and full container shipments — scalable to your business size.",
  },
];

const whySources = [
  {
    icon: Globe,
    title: "UAE Strategic Hub",
    description:
      "We leverage Dubai's world-class logistics infrastructure to ensure faster transit times and seamless connections to African ports.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Ready",
    description:
      "All food items are packed and labeled according to the specific regulatory requirements of each destination country.",
  },
  {
    icon: Boxes,
    title: "Bulk & Retail Packaging",
    description:
      "Flexible packaging options — from bulk industrial bags to retail-ready branding and private label solutions.",
  },
  {
    icon: Truck,
    title: "End-to-End Service",
    description:
      "From sourcing and quality checks to freight forwarding and last-mile delivery — we handle every step of the supply chain.",
  },
];

export default function ExportsPage() {
  return (
    <main>
      <PageHero
        title="Global Exports"
        subtitle="Connecting UAE to Africa — seamless sourcing and distribution of high-quality goods, ensuring reliable supply chains from our hub in Dubai to key African markets."
        badge="International Trade"
        imageSrc="/exports.webp"
        imageAlt="Dubai port cargo operations"
      />

      {/* ── Quick Stats ───────────────────────────── */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
            {[
              { value: "3", label: "African Regions" },
              { value: "11+", label: "Countries Served" },
              { value: "FCL & LCL", label: "Shipment Options" },
              { value: "Dubai", label: "Export Hub" },
            ].map((s) => (
              <div key={s.label} className="text-center md:px-8">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {s.value}
                </div>
                <div className="text-primary-light text-xs font-semibold uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connecting UAE to Africa ──────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Connecting UAE to
                <span className="text-primary"> Africa</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                We specialise in the seamless sourcing and distribution of
                high-quality goods, ensuring reliable supply chains from our
                hub in Dubai to various African markets.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                With Dubai&apos;s strategic position as a global trade gateway,
                we connect African importers and distributors with the finest
                products — handling everything from procurement and quality
                checks to freight, documentation, and delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300 group text-sm"
                >
                  Start a Conversation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#reach"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                >
                  Our Reach
                  <ChevronRight size={15} />
                </a>
              </div>
            </SlideInLeft>

            <SlideInRight className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/container.webp"
                  alt="Container ship export"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-accent flex-shrink-0" />
                      <p className="text-white text-sm font-medium">
                        Operational hub at Jebel Ali Port — UAE&apos;s gateway to Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -top-5 -right-5 bg-accent text-dark-bg rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
                <div className="font-black text-2xl">11+</div>
                <div className="text-xs font-bold opacity-80">Countries</div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Our Reach ─────────────────────────────── */}
      <section id="reach" className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Our Reach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Serving Key Regions
              <br className="hidden sm:block" />
              <span className="text-primary"> Across Africa</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              We have established robust logistics networks spanning the African
              continent — with reliable partners on the ground in each region.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <StaggerItem key={region.name}>
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  {/* icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: `${region.color}15` }}
                    >
                      <MapPin size={20} style={{ color: region.color }} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold tracking-[0.18em] uppercase mb-0.5"
                        style={{ color: region.color }}
                      >
                        Active Region
                      </p>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {region.name}
                      </h3>
                    </div>
                  </div>

                  {/* accent line */}
                  <div
                    className="h-0.5 w-10 mb-6 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: region.color }}
                  />

                  {/* country tags */}
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full border"
                        style={{
                          color: region.color,
                          borderColor: `${region.color}30`,
                          backgroundColor: `${region.color}08`,
                        }}
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Export Product Categories ─────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              What We Export
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Export Product Categories
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              A diverse range of premium products tailored to the demand of
              each African market — sourced, verified, and shipped from Dubai.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <StaggerItem key={cat.title}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 h-full flex flex-col group">
                    {/* image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                          <Icon size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                    {/* content */}
                    <div className="p-7 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-5">
                        {cat.description}
                      </p>
                      <ul className="space-y-2 mt-auto">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                            <CheckCircle size={13} className="text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Export Capabilities ───────────────────── */}
      <section className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              End-to-End Export
              <span className="text-accent"> Excellence</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              From quality checks in Dubai to customs clearance at the
              destination — we manage every step so you don&apos;t have to.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title}>
                  <div className="p-8 rounded-2xl bg-dark-surface border border-white/8 hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-300 group h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-all duration-300">
                      <Icon
                        size={24}
                        className="text-primary-light group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="text-white font-bold text-base mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Why Source With Us ────────────────────── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Why Source
                <span className="text-primary"> With Us?</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-10">
                We combine Dubai&apos;s world-class trade infrastructure with deep
                knowledge of African import markets — delivering a service that
                is fast, compliant, and tailored to your needs.
              </p>
              <div className="space-y-5">
                {whySources.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 mt-0.5">
                        <Icon
                          size={18}
                          className="text-primary group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SlideInLeft>

            <SlideInRight className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/why-choose-us.webp"
                  alt="Dubai logistics hub"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>
              {/* stat badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-border hidden sm:block">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-text-muted text-xs font-semibold mt-0.5 max-w-[100px] leading-tight">
                  Compliance Guaranteed
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Distribution Networks Callout ─────────── */}
      <section className="bg-dark-bg relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {/* background pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* glow orbs */}
        <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            {/* top label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Star size={13} className="text-accent" />
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                Exclusive Advantage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Distribution Networks of{" "}
              <span className="text-accent">Major Brands</span> in the UAE
            </h2>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              As an authorised distribution partner for leading global brands
              operating in the UAE, we give African importers direct access to
              internationally recognised products — with full brand compliance,
              original packaging, and competitive pricing.
            </p>

            {/* feature pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {[
                "Original Brand Packaging",
                "Authorised Distribution",
                "Competitive FOB Pricing",
                "Certified Quality",
                "Private Label Options",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/8 border border-white/12 text-white/70 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark-bg font-bold rounded-xl hover:opacity-90 transition-opacity duration-300 group shadow-xl shadow-accent/20 text-base"
            >
              Enquire About Brand Distribution
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-5 px-4 py-2 bg-white/15 rounded-full">
              Let&apos;s Trade Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Source from
              <br className="hidden sm:block" /> the UAE?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you need a single container or a long-term supply
              agreement, our team is ready to build the right solution for your
              African market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface transition-colors duration-300 group shadow-xl"
              >
                Get an Export Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+97145001234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/12 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-colors duration-300"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
