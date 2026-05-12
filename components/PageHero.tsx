import Image from "next/image";
import { FadeUp, FadeIn } from "./Animate";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex items-end min-h-[58vh] pb-20 overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/65 to-dark-bg/85" />
      {/* decorative line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {badge && (
          <FadeIn>
            <span className="inline-block text-accent text-xs font-bold tracking-[0.22em] uppercase mb-4 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full border border-white/20">
              {badge}
            </span>
          </FadeIn>
        )}
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
        </FadeUp>
        {subtitle && (
          <FadeUp delay={0.1}>
            <p className="text-white/70 text-lg mt-4 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
