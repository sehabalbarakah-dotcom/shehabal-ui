import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Clock,
  Users,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animate";
import CounterStats from "@/components/CounterStats";
import ProductCategories from "@/components/ProductCategories";
import { label } from "framer-motion/client";

const stats = [
  { value: 9, suffix: "+", label: "Years Industry Leadership" },
  { value: 1000, suffix: "+", label: "Trusted Partners" },
  { value: 100, suffix: "+", label: "Product Ranges" },
  { value: 7, suffix: "/7", label: "UAE Emirates Network" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description:
      "Every product we supply is carefully selected from verified manufacturers and passes our strict quality standards before reaching you.",
  },
  {
    icon: Globe,
    title: "Competitive Pricing",
    description:
      "Our direct sourcing relationships and wholesale buying power means you always receive the best price without compromising quality.",
  },
  {
    icon: Clock,
    title: "Reliable & On-Time",
    description:
      "We understand your business depends on consistent supply. Our logistics team ensures timely deliveries, every single time.",
  },
  {
    icon: Users,
    title: "Exceptional Service",
    description:
      "Our dedicated team is here to assist you at every step — from product selection and order placement to delivery and after-sales support.",
  },
];

const sectors = [
  "Hotels & Hospitality",
  "Restaurants & Cafes",
  "Catering Companies",
  "Retail & Supermarkets",
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai Skyline"
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/65 to-dark-bg/85" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[0.25em] uppercase mb-6 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Dubai&apos;s Trusted Wholesale Supplier Since 2017
            </span>
          </FadeIn>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Quality Products,
              <br />
              <span className="text-accent">Reliable Supply</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-white/75 mb-3 max-w-2xl mx-auto leading-relaxed">
              <strong>Sehab Albarakah </strong>is a leading wholesale supplier
              specializing in the finest varieties of Rice, Grains, Authentic
              Spices, and Premium Nuts.
            </p>
            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              {" "}
              We provide consistent, high-volume supply chains for Restaurants
              and Trading companies across the UAE, ensuring your business never
              compromises on taste or quality. We do provide private labelling
              services to leading brands in UAE.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 text-base group"
              >
                View Our Products
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-300 text-base"
              >
                Get a Quote
              </Link>
            </div>
          </FadeUp>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-white text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={18} className="text-white" />
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CounterStats stats={stats} />
        </div>
      </section>

      {/* ── Product Categories ────────────────────── */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Our Product Range
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Comprehensive Solutions
              <br className="hidden sm:block" /> for Your Business
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Four core product categories supplying high-quality goods to
              businesses across the Emirates with consistency and competitive
              pricing.
            </p>
          </FadeUp>

          <ProductCategories />
        </div>
      </section>

      {/* ── About Teaser ──────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/warehouse2.jpeg"
                  alt="Sehab Albarakah Warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">2017</div>
                <div className="text-primary-light text-sm font-medium mt-0.5">
                  Est. in Dubai
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-accent/15 -z-10" />
            </SlideInLeft>

            <SlideInRight>
              <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Leading Supplier of Quality
                <span className="text-primary"> Essentials</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Sehab Albarakah is a trusted UAE-based trading and distribution
                company dedicated to delivering high-quality food products
                across the Emirates. Established in 2017 in Dubai, we have spent
                over 9 years perfecting the art of sourcing and distributing
                premium culinary essentials.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                From artisanal ingredients to bulk staples, we have built a
                reputation as a reliable partner for businesses of all sizes.
                Our portfolio features Premium foodstuffs, Specialty
                ingredients, and high-quality Nuts & Spices, all carefully
                sourced from reputable global manufacturers to ensure the
                highest standards of taste and safety.
              </p>

              

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300 group"
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────── */}
      <section className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              We Believe Success Is Built On
              <br className="hidden sm:block" />{" "}
              <span className="text-accent">Trust & Consistency</span>
            </h2>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="text-center p-8 rounded-2xl bg-dark-surface border border-white/8 hover:border-primary/40 hover:bg-white/4 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-primary-light group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          {/* stats row */}
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-14 pt-14 border-t border-white/10">
            {[
              {value:"98%", label:"Clients Satisfaction"},
              { value: "100+", label: "Verified Suppliers" },
              { value: "99%", label: "On Time Delivery" },
              {value:"24/7", label:"Customer Support"}
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {s.value}
                  </div>
                  <div className="text-text-muted text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Sectors We Serve ──────────────────────── */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <p className="text-text-muted text-sm font-bold tracking-widest uppercase">
              Trusted by businesses across the UAE
            </p>
          </FadeUp>
          <StaggerChildren className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {sectors.map((sector) => (
              <StaggerItem key={sector}>
                <div className="px-5 py-2.5 rounded-full border border-border text-text-muted font-medium text-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-default">
                  {sector}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
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
              Get in Touch Today
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Stock Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join over 1,000 businesses that trust Sehab Albarakah for a consistent, quality supply of premium foodstuffs, specialty ingredients and nuts & spices. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface transition-colors duration-300 shadow-xl group"
              >
                Get your special rate
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/12 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-colors duration-300"
              >
                Browse Products
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
