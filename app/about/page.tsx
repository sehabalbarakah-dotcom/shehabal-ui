import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Star,
  Handshake,
  Lightbulb,
  Eye,
  Target,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/Animate";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2017 in Dubai, Sehab Albarakah is a trusted supplier of premium rice, exotic spices, flours & pulses, and oils & beverages to over 1,000 businesses across the UAE.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct every transaction with transparency, honesty, and an unwavering commitment to ethical business practices.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "Every product we supply is carefully selected from verified manufacturers to ensure it meets or exceeds your expectations.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships based on trust, mutual benefit, and a deep understanding of our clients' operational needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously evolve our product offerings and processes to better serve the changing needs of modern businesses.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, honest communication, and no hidden surprises — because your trust is our most valuable asset.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description:
      "Your satisfaction drives everything we do. Our dedicated team is always available to ensure your needs are met, promptly.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "Company Founded",
    desc: "Sehab Albarakah was established in Dubai with a vision to become a leading wholesale supplier of premium rice, spices, and food essentials to UAE businesses.",
  },
  {
    year: "2018",
    title: "Expanded Product Range",
    desc: "Grew our portfolio to include flours & pulses and exotic spices, establishing direct supply partnerships with trusted producers in South Asia.",
  },
  {
    year: "2019",
    title: "100+ Clients Milestone",
    desc: "Reached 100 active business clients, serving hotels, catering companies, and restaurants across Dubai and the Northern Emirates.",
  },
  {
    year: "2021",
    title: "All 7 Emirates Covered",
    desc: "Extended our delivery network to cover all seven Emirates, ensuring reliable supply to clients across the entire UAE.",
  },
  {
    year: "2023",
    title: "500+ Clients Served",
    desc: "Surpassed 500 active clients — a proud milestone reflecting our commitment to quality, consistency, and genuine partnership.",
  },
  {
    year: "2025",
    title: "1,000+ Clients Served",
    desc: "Surpassed 1,000 active clients — cementing our position as one of Dubai's most trusted wholesale food suppliers.",
  },
];


const sectors = [
  { label: "Hotels & Hospitality", desc: "Supplying premium rice, spices, and food essentials to leading hotel chains across the UAE." },
  { label: "Restaurants & Cafes", desc: "Providing quality rice, exotic spices, oils, and flours to food service businesses." },
  { label: "Catering Companies", desc: "Bulk supply of premium rice, flours, pulses, and spices for large-scale catering operations." },
  { label: "Retail & Supermarkets", desc: "Wholesale supply of spices, flours, rice varieties, and packaged food goods for retail." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Sehab Albarakah"
        subtitle="Established in 2017 in Dubai — a trusted UAE-based trading and distribution company delivering quality essentials to businesses across the Emirates for over 9 years."
        badge="Our Story"
        imageSrc="/about.webp"
        imageAlt="Dubai Business District"
      />

      {/* ── Company Story ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Your Trusted Trading Partner
                <span className="text-primary"> in the UAE</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-5 text-lg">
                Established in 2017 in Dubai, Sehab Albarakah is a leading
                UAE-based trading and distribution company dedicated to
                delivering high-quality food products across the
                Emirates.
              </p>
              <p className="text-text-muted leading-relaxed mb-5">
                For nearly a decade, we have built a reputation as a trusted
                supplier to businesses of all sizes — including hotels,
                restaurants, catering companies, and retail outlets.
              </p>
              <p className="text-text-muted leading-relaxed">
                Our comprehensive portfolio features premium rice varieties,
                flours &amp; pulses, exotic spices, and quality oils &amp; beverages,
                all carefully sourced from reliable global manufacturers and
                delivered with consistency and care.
              </p>
            </SlideInLeft>

            <SlideInRight className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/warehouse2.jpeg"
                  alt="Sehab Albarakah Warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-dark-bg rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">9+</div>
                <div className="text-sm font-semibold mt-0.5 opacity-80">
                  Years Serving UAE
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScaleIn>
              <div className="bg-white rounded-2xl p-10 border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Target className="text-white" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-text-muted leading-relaxed">
                  To be the most reliable wholesale supplier in the UAE —
                  providing businesses with consistent access to high-quality
                  premium rice, exotic spices, flours &amp; pulses, and essential
                  oils &amp; beverages at competitive prices, backed by exceptional
                  service and on-time delivery.
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.1}>
              <div className="bg-primary rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Eye className="text-white" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To be the supplier of choice for every hotel, restaurant,
                  laundry, and catering company in the UAE — a name synonymous
                  with quality, reliability, and genuine partnership for
                  businesses of all sizes.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Our Core Values
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              These principles guide every decision we make and every
              relationship we build.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary-bg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-primary group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Sectors We Serve ──────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Businesses That Rely On Us
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              We are proud to supply a wide range of industries across the UAE
              with the essential products they need to operate at their best.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <StaggerItem key={sector.label}>
                <div className="bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                    <h3 className="font-bold text-foreground">{sector.label}</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed pl-5">
                    {sector.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────── */}
      <section className="py-24 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Milestones That Define Us
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/20 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.07}>
                  <div
                    className={`relative flex gap-8 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-dark-bg z-10" />
                    <div
                      className={`ml-12 md:ml-0 md:w-[46%] ${
                        i % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:ml-auto"
                      }`}
                    >
                      <div className="bg-dark-surface rounded-xl p-6 border border-white/8 hover:border-primary/30 transition-colors">
                        <span className="text-accent text-sm font-bold">
                          {item.year}
                        </span>
                        <h3 className="text-white font-bold mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founders Message ──────────────────────── */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* background accent blobs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent/6 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              From Our Founders
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A Message to Our Partners
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative bg-surface rounded-3xl border border-border p-10 md:p-14 shadow-sm">

              {/* decorative large quote mark */}
              <div className="absolute -top-6 left-10 md:left-14">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M0 18V11.28C0 8.41333 0.653333 6.02667 1.96 4.12C3.29333 2.18667 5.26667 0.773333 7.88 0L9.32 2.52C7.85333 3.05333 6.74667 3.85333 6 4.92C5.28 5.98667 4.92 7.28 4.92 8.8H9.32V18H0ZM12.68 18V11.28C12.68 8.41333 13.3333 6.02667 14.64 4.12C15.9733 2.18667 17.9467 0.773333 20.56 0L22 2.52C20.5333 3.05333 19.4267 3.85333 18.68 4.92C17.96 5.98667 17.6 7.28 17.6 8.8H22V18H12.68Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* message paragraphs */}
              <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
                <p>
                  When we founded Sehab Albarakah in 2017, we had a simple but
                  powerful belief: that businesses across the UAE deserve a
                  supplier they can truly rely on — one that delivers quality
                  consistently, keeps its promises, and builds genuine
                  long-term partnerships.
                </p>
                <p>
                  What began as a focused effort to bring the finest rice,
                  spices, and food essentials to UAE businesses has grown into
                  a trusted wholesale network serving hotels, restaurants,
                  catering companies, and retailers across all seven Emirates.
                  Through every order and every delivery, that original
                  commitment has never wavered.
                </p>
                <p>
                  As we continue to grow — extending our reach from the UAE
                  into African markets and expanding our product range — we
                  remain guided by the same values that started this journey:
                  integrity, quality, and a genuine care for every business
                  that places its trust in us.
                </p>
                <p className="font-semibold text-foreground">
                  Thank you for being part of the Sehab Albarakah story. We
                  look forward to growing together.
                </p>
              </div>

              {/* attribution */}
              <div className="mt-10 pt-8 border-t border-border flex items-center gap-4">
                <div className="h-0.5 w-8 bg-accent" />
                <p className="text-accent font-bold text-sm tracking-wide uppercase">
                  The Founders, Sehab Albarakah
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Ready to Partner With Us?
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Join over 1,000 businesses across the UAE that trust Sehab
              Albarakah for their daily supply needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors duration-300 group"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
