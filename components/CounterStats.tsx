"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate, useMotionValueEvent } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

function CounterItem({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(motionValue, "change", (v) => setDisplay(Math.floor(v)));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="text-primary-light text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export default function CounterStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat) => (
        <CounterItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
