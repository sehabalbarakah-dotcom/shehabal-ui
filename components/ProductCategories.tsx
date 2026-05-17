"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UtensilsCrossed,
  Wheat,
  Nut,
  Droplets,
} from "lucide-react";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Premium Rice",
    description:
      "A wide selection of premium rice varieties sourced directly from trusted growers — supplying hotels, restaurants, and catering companies across the UAE with consistent quality.",
    products: [
      "Jeerakasala Rice",
      "Palakkadan Matta Rice",
      "Parboiled Rice",
      "Basmati Rice (Sella/Steam)",
      "Idly Rice",
      "Ponni Rice",
      "Broken Rice",
      "Jaya Rice",
      "Kuruva Rice",
      "Sona Masoori Rice",
      "White Rice",
    ],
    image: "/rice.jpeg",
    href: "/services#rice",
    accent: "#0047AB",
  },
  {
    icon: Wheat,
    title: "Flours & Pulses",
    description:
      "An extensive range of flours and pulses for everyday cooking and industrial food preparation — from traditional rice powders to essential dals, all available in bulk.",
    products: [
      "Rice Powder",
      "Puttupodi",
      "Chakki Atta",
      "Basen Powder",
      "Corn Flour",
      "Wheat Flour",
      "Chana Dal",
      "Green Gram",
      "Moong Dal",
      "Toor Dal",
      "Masoor Dal",
      "Black/White Chick Peas",
    ],
    image: "/pulses.jpeg",
    href: "/services#flours",
    accent: "#C9A227",
  },
  {
    icon: Nut,
    title: "Exotic Spices",
    description:
      "Handpicked aromatic spices sourced from the finest growing regions — whole and ground varieties ideal for restaurants, catering operations, and food service businesses.",
    products: [
      "Black Pepper Powder",
      "Cloves",
      "Cardamom",
      "Cinnamon",
      "Coriander Powder",
      "Coriander Whole",
      "Chilli Powder",
      "Chilli Whole",
      "Turmeric Powder",
      "Turmeric Whole",
      "Fennel Seed",
      "Fenugreek Seed",
      "Fish Masala",
      "Garam Masala",
      "Ginger Powder",
      "Cumin Seed",
    ],
    image: "/spices.jpeg",
    href: "/services#spices",
    accent: "#0047AB",
  },
  {
    icon: Droplets,
    title: "Oils & Beverages",
    description:
      "Quality cooking oils and premium tea blends for hospitality and food service businesses — consistently supplied to hotels, cafes, and catering companies across the UAE.",
    products: [
      "Coconut Oil",
      "Vegetable Oil",
      "Sunflower Oil",
      "Karak Tea Blend",
    ],
    beverageGallery: [
      "/beverages/beverage-1.jpeg",
      "/beverages/beverage-2.jpeg",
      "/beverages/beverage-3.jpeg",
      "/beverages/beverage-4.jpeg",
    ],
    image: "/oil.jpeg",
    href: "/services#oils",
    accent: "#C9A227",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProductCategories() {
  return (
    <div className="space-y-10 lg:space-y-14">
      {categories.map((cat, idx) => {
        const isImageLeft = idx % 2 === 0;
        const Icon = cat.icon;
        const num = String(idx + 1).padStart(2, "0");
        const beverageGallery =
          "beverageGallery" in cat ? cat.beverageGallery : undefined;

        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/70 border border-gray-100"
          >
            {/* ── Image panel ── */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className={`relative min-h-[320px] lg:min-h-[520px] ${
                !isImageLeft ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* gradient overlay — stronger on the content side */}
              <div
                className={`absolute inset-0 ${
                  isImageLeft
                    ? "bg-gradient-to-r from-transparent via-transparent to-dark-bg/30"
                    : "bg-gradient-to-l from-transparent via-transparent to-dark-bg/30"
                } bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent`}
                style={{
                  background: isImageLeft
                    ? "linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.55) 100%)"
                    : "linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.55) 100%)",
                }}
              />

              {/* Category number watermark */}
              <div className="absolute top-5 left-6 text-white/20 font-black text-7xl leading-none select-none">
                {num}
              </div>

              {/* Icon badge */}
              <div
                className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2.5 rounded-2xl backdrop-blur-md border border-white/20"
                style={{ background: "rgba(10,22,40,0.55)" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${cat.accent}25` }}
                >
                  <Icon
                    size={16}
                    style={{
                      color: cat.accent === "#C9A227" ? "#C9A227" : "#fff",
                    }}
                  />
                </div>
                <span className="text-white text-sm font-semibold">
                  {cat.title}
                </span>
              </div>
            </motion.div>

            {/* ── Content panel ── */}
            <motion.div
              initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className={`bg-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden ${
                !isImageLeft ? "lg:order-1" : ""
              }`}
            >
              {/* Faint number watermark */}
              <div className="absolute top-4 right-6 text-gray-100 font-black text-8xl leading-none select-none pointer-events-none">
                {num}
              </div>

              {/* Label + count */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: cat.accent }}
                >
                  Category {num}
                </span>
                <span className="text-xs font-semibold text-text-muted bg-surface px-2.5 py-1 rounded-full border border-border">
                  {cat.products.length} products
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 leading-tight">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted leading-relaxed mb-8 text-sm lg:text-base max-w-md">
                {cat.description}
              </p>

              {/* Products grid */}
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`grid gap-2 mb-8 ${
                  cat.products.length > 6 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {cat.products.map((p) => (
                  <motion.div
                    key={p}
                    variants={itemVariants}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-surface border border-border hover:border-primary/30 hover:bg-primary-bg transition-all duration-200 group cursor-default"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                      style={{ backgroundColor: cat.accent }}
                    />
                    <span className="text-text-secondary text-sm font-medium group-hover:text-foreground transition-colors leading-tight">
                      {p}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {beverageGallery && beverageGallery.length > 0 ? (
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="mt-8 w-full max-w-2xl"
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase block mb-3"
                    style={{ color: cat.accent }}
                  >
                    Beverage range
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {beverageGallery.map((src, gi) => (
                      <motion.div
                        key={src}
                        variants={itemVariants}
                        className="relative aspect-square rounded-xl overflow-hidden bg-white ring-1 ring-gray-200"
                      >
                        <Image
                          src={src}
                          fill
                          alt={`Beverage product ${gi + 1}`}
                          sizes="(max-width:640px) 40vw,(max-width:1024px) 12vw, 180px"
                          className="object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
