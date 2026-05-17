import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  Wheat,
  Nut,
  Droplets,
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Check,
  Package,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animate";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Sehab Albarakah's full product range — premium rice, flours & pulses, exotic spices, and oils & beverages — supplied wholesale to businesses across the UAE.",
};

const categories = [
  {
    id: "rice",
    icon: UtensilsCrossed,
    title: "Premium Rice",
    tagline: "Finest Varieties, Every Grain",
    description:
      "Premium rice varieties sourced directly from trusted growers in South Asia — from aromatic Jeerakasala to everyday parboiled rice, covering every culinary need for hotels, restaurants, and catering companies.",
    image:
      "/rice.jpeg",
    subcategories: [
      {
        title: "Kerala Specialty Rice",
        products: ["Jeerakasala Rice", "Palakkadan Matta Rice", "Idly Rice", "Kuruva Rice"],
      },
      {
        title: "All-Purpose Rice",
        products: ["Parboiled Rice", "Ponni Rice", "Broken Rice", "Jaya Rice", "White Rice"],
      },
      {
        title: "Premium & Long Grain",
        products: ["Basmati Rice (Sella/Steam)", "Sona Masoori Rice"],
      },
    ],
    accentColor: "#0047AB",
  },
  {
    id: "flours",
    icon: Wheat,
    title: "Flours & Pulses",
    tagline: "From Field to Your Kitchen",
    description:
      "From traditional rice powders and puttu flour to essential dals and legumes — available in bulk for restaurants, bakeries, and large-scale catering operations across the UAE.",
    image:
      "/pulses.jpeg",
    subcategories: [
      {
        title: "Flours & Powders",
        products: ["Rice Powder", "Puttupodi", "Chakki Atta", "Basen Powder", "Corn Flour", "Wheat Flour"],
      },
      {
        title: "Pulses & Dals",
        products: ["Chana Dal", "Green Gram", "Moong Dal", "Toor Dal", "Masoor Dal", "Black/White Chick Peas"],
      },
    ],
    accentColor: "#C9A227",
  },
  {
    id: "spices",
    icon: Nut,
    title: "Exotic Spices",
    tagline: "Authentic Flavours, Superior Quality",
    description:
      "Handpicked from the finest spice-growing regions — whole and ground varieties for hotel chains, restaurant groups, and large catering operations across the UAE.",
    image:
      "/spices.jpeg",
    subcategories: [
      {
        title: "Ground Spices",
        products: ["Black Pepper Powder", "Coriander Powder", "Chilli Powder", "Turmeric Powder", "Ginger Powder"],
      },
      {
        title: "Whole Spices",
        products: ["Cloves", "Cardamom", "Cinnamon", "Coriander Whole", "Chilli Whole", "Turmeric Whole", "Fennel Seed", "Fenugreek Seed", "Cumin Seed"],
      },
      {
        title: "Masala Blends",
        products: ["Fish Masala", "Garam Masala","Chicken Masala",
          "Meat Masala",
          "Red Chilli Powder",
          "Kashmiri Chilli Powder",
          "Turmeric Powder",
          "Coriander Powder",
          "Black Pepper Powder",
          "Cumin Powder",
          "Shawarma Masala",
          "Arabic Masala",
          "Garlic Powder",
          "Tandoor Masala"],
      },
    ],
    accentColor: "#0047AB",
  },
  {
    id: "oils",
    icon: Droplets,
    title: "Oils & Beverages",
    tagline: "Pure & Consistent, Every Batch",
    description:
      "High-quality cooking oils and premium tea blends for the hospitality industry — reliably sourced and consistently delivered to hotels, cafes, and catering companies across all seven Emirates.",
    image:
      "/oil.jpeg",
    subcategories: [
      {
        title: "Cooking Oils",
        products: ["Coconut Oil", "Vegetable Oil", "Sunflower Oil"],
      },
      {
        title: "Beverages",
        products: ["Kala Khatta", "Kacha Aam", "Rose", "Water Melon"],
        productImages: [
          "beverage-1.jpeg",
          "beverage-2.jpeg",
          "beverage-3.jpeg",
          "beverage-4.jpeg",
        ],
      },
    ],
    accentColor: "#C9A227",
  },
];

const howToOrder = [
  {
    step: "01",
    title: "Contact Our Team",
    desc: "Reach out by phone, email, or via our contact form with your requirements and quantities.",
  },
  {
    step: "02",
    title: "Receive a Quote",
    desc: "We'll send you a detailed quotation with product specs, pricing, and delivery timeline within 24 hours.",
  },
  {
    step: "03",
    title: "Confirm Your Order",
    desc: "Once you approve the quote, confirm your order and we'll begin processing immediately.",
  },
  {
    step: "04",
    title: "Fast Delivery",
    desc: "Your order is packed and delivered directly to your premises, on time, every time.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="Our Products"
        subtitle="Four premium product ranges supplied wholesale to businesses across all seven Emirates — consistent quality, competitive pricing, reliable delivery."
        badge="What We Supply"
        imageSrc="/service.webp"
        imageAlt="Wholesale products"
      />

      {/* ── Sticky Category Nav ───────────────────── */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-hide">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-text-muted hover:text-primary hover:bg-primary-bg transition-all whitespace-nowrap flex-shrink-0 group"
                >
                  <span className="text-[10px] font-bold tabular-nums text-accent/60 group-hover:text-accent transition-colors">
                    0{i + 1}
                  </span>
                  <Icon size={14} />
                  <span>{cat.title}</span>
                </a>
              );
            })}
            <div className="ml-auto flex-shrink-0 pl-4 border-l border-border">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                <Phone size={13} />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Category Sections ─────────────── */}
      {categories.map((cat, i) => {
        const Icon = cat.icon;
        const isImageLeft = i % 2 === 0;
        const totalProducts = cat.subcategories.reduce(
          (sum, sub) => sum + sub.products.length,
          0
        );
        const num = String(i + 1).padStart(2, "0");
        const sectionBg = i % 2 === 0 ? "bg-white" : "bg-surface";

        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`${sectionBg} py-20 md:py-28`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* ── Category header: split image + info ── */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">

                {/* Image side */}
                {isImageLeft ? (
                  <SlideInLeft className="relative min-h-[280px] lg:min-h-[380px]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* subtle edge fade toward content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-bg/20" />
                    {/* bottom label */}
                    <div className="absolute bottom-5 left-5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg/60 backdrop-blur-md border border-white/15">
                        <Package size={12} className="text-accent" />
                        <span className="text-white/80 text-xs font-semibold">
                          {totalProducts} products
                        </span>
                      </div>
                    </div>
                  </SlideInLeft>
                ) : (
                  <SlideInRight className="relative min-h-[280px] lg:min-h-[380px] lg:order-2">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark-bg/20" />
                    <div className="absolute bottom-5 right-5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-bg/60 backdrop-blur-md border border-white/15">
                        <Package size={12} className="text-accent" />
                        <span className="text-white/80 text-xs font-semibold">
                          {totalProducts} products
                        </span>
                      </div>
                    </div>
                  </SlideInRight>
                )}

                {/* Info side */}
                {isImageLeft ? (
                  <SlideInRight
                    className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center"
                  >
                    <CategoryInfo
                      num={num}
                      Icon={Icon}
                      cat={cat}
                      accentColor={cat.accentColor}
                    />
                  </SlideInRight>
                ) : (
                  <SlideInLeft
                    className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center lg:order-1"
                  >
                    <CategoryInfo
                      num={num}
                      Icon={Icon}
                      cat={cat}
                      accentColor={cat.accentColor}
                    />
                  </SlideInLeft>
                )}
              </div>

              {/* ── Subcategory product cards ── */}
              <StaggerChildren
                className={`grid gap-5 ${
                  cat.id === "oils"
                    ? "grid-cols-1 lg:grid-cols-3"
                    : cat.subcategories.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {cat.subcategories.map((sub, subIdx) => {
                  const images =
                    "productImages" in sub && Array.isArray(sub.productImages)
                      ? sub.productImages
                      : undefined;
                  const spanClass =
                    cat.id === "oils"
                      ? subIdx === 0
                        ? "lg:col-span-1"
                        : "lg:col-span-2"
                      : "";

                  return (
                    <StaggerItem key={sub.title} className={spanClass}>
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 h-full flex flex-col group">
                        {/* accent bar */}
                        <div
                          className="w-8 h-0.5 mb-6 group-hover:w-14 transition-all duration-300"
                          style={{ backgroundColor: cat.accentColor }}
                        />
                        {/* subcategory label */}
                        <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-muted mb-5">
                          {sub.title}
                        </h4>
                        {/* product list */}
                        <ul className="space-y-2.5 flex-1">
                          {sub.products.map((product) => (
                            <li key={product} className="flex items-center gap-3 group/item">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity"
                                style={{ backgroundColor: cat.accentColor }}
                              />
                              <span className="text-sm text-text-secondary leading-tight group-hover/item:text-foreground transition-colors duration-200">
                                {product}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {images && images.length > 0 ? (
                          <div className="mt-6 space-y-3">
                            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted">
                              Beverage range
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5">
                              {images.map((file, imgIdx) => {
                                const productLabel =
                                  sub.products[imgIdx] ?? `Image ${imgIdx + 1}`;
                                const src =
                                  file.startsWith("/")
                                    ? file
                                    : `/beverages/${file}`;
                                return (
                                  <div
                                    key={file}
                                    className="relative aspect-square rounded-xl overflow-hidden bg-white ring-1 ring-gray-200"
                                  >
                                    <Image
                                      src={src}
                                      alt={`${sub.title}: ${productLabel}`}
                                      fill
                                      sizes="(max-width:640px) 45vw,(max-width:1024px) 22vw, 18vw"
                                      className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : null}
                        {/* card footer */}
                        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-xs text-text-muted">
                            {sub.products.length}{" "}
                            {sub.products.length === 1 ? "product" : "products"}
                          </span>
                          <ShieldCheck size={14} className="text-primary/30" />
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>

              {/* Enquire row */}
              <FadeUp
                delay={0.2}
                className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
              >
                <p className="text-text-muted text-sm">
                  Need a custom quote or have a bulk requirement?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 font-semibold rounded-xl text-white text-sm transition-all duration-300 group hover:opacity-90 hover:shadow-lg flex-shrink-0"
                  style={{ backgroundColor: cat.accentColor }}
                >
                  Enquire About {cat.title}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </FadeUp>
            </div>

            {/* divider between sections */}
            {i < categories.length - 1 && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            )}
          </section>
        );
      })}

      {/* ── How to Order ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
              Simple & Fast
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              How to Place an Order
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Ordering from Sehab Albarakah is straightforward — from first
              contact to doorstep delivery.
            </p>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />
            {howToOrder.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative text-center p-8 rounded-2xl bg-dark-surface border border-white/8 hover:border-primary/40 hover:bg-white/[0.03] transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-300">
                    <span className="text-accent font-black text-lg group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Delivery Info ─────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4">
                Delivery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Fast, Reliable Delivery
                <span className="text-primary"> Across the UAE</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                We maintain a consistent supply chain and our own delivery fleet
                to ensure your orders arrive on time — whether you&apos;re in Dubai,
                Sharjah, Abu Dhabi, or beyond.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "All 7 Emirates Covered",
                  "Same-Day in Dubai",
                  "Flexible Order Quantities",
                  "Reliable Repeat Delivery",
                  "Competitive Pricing",
                  "Dedicated Account Manager",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </SlideInLeft>

            <SlideInRight className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                  alt="Delivery and logistics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Truck size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium leading-relaxed">
                          &quot;Timely and reliable — Sehab Albarakah never lets us
                          down on delivery.&quot;
                        </p>
                        <p className="text-accent text-xs font-semibold mt-2">
                          — Operations Manager, Dubai Hotel Group
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
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
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-5 px-4 py-2 bg-white/15 rounded-full">
              Ready to Order?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Build Your Supply Chain
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Contact our team today for a custom quote. We&apos;ll respond within
              24 hours with pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface transition-colors duration-300 group shadow-xl"
              >
                Get a Quote
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

/* ── Extracted to avoid repetition in JSX ── */
function CategoryInfo({
  num,
  Icon,
  cat,
  accentColor,
}: {
  num: string;
  Icon: React.ElementType;
  cat: { title: string; tagline: string; description: string };
  accentColor: string;
}) {
  return (
    <>
      {/* counter + icon */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: accentColor }}
        >
          {num} / 04
        </span>
        <div className="h-px w-8 bg-border" />
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}18` }}
        >
          <Icon size={17} style={{ color: accentColor }} />
        </div>
      </div>

      {/* title */}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
        {cat.title}
      </h2>

      {/* tagline */}
      <p
        className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
        style={{ color: accentColor }}
      >
        {cat.tagline}
      </p>

      {/* description */}
      <p className="text-text-muted leading-relaxed text-sm md:text-base">
        {cat.description}
      </p>
    </>
  );
}
