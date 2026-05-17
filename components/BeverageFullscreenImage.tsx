"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type BeverageFullscreenImageProps = {
  src: string;
  alt: string;
  wrapperClassName?: string;
  /** Passed to thumbnail `sizes` for responsive loading */
  thumbnailSizes?: string;
};

export default function BeverageFullscreenImage({
  src,
  alt,
  wrapperClassName = "",
  thumbnailSizes = "(max-width:640px) 45vw,(max-width:1024px) 22vw, 18vw",
}: BeverageFullscreenImageProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const overlay =
    mounted && open
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[10000] flex flex-col bg-black"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-black px-4 py-3">
              <p id={titleId} className="truncate text-sm font-semibold text-white/90">
                {alt}
              </p>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                aria-label="Close fullscreen"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg !bg-gray-200 text-white/90 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 p-3 sm:p-6">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View fullscreen: ${alt}`}
        className={`relative aspect-square w-full overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 cursor-zoom-in p-0 border-0 text-left hover:brightness-[0.97] transition-[filter] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${wrapperClassName}`}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={thumbnailSizes}
          className="object-contain pointer-events-none select-none"
        />
      </button>
      {overlay}
    </>
  );
}
