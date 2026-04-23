import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroBanners } from "@/lib/data";

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroBanners.map((b) => (
            <div key={b.id} className="relative min-w-0 shrink-0 grow-0 basis-full">
              <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden sm:h-[70vh]">
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                  <div className="max-w-2xl animate-fade-in">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      {b.badge}
                    </span>
                    <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                      {b.title}
                    </h2>
                    <p className="mt-3 text-base text-white/85 sm:text-lg">{b.subtitle}</p>
                    <Link
                      to={b.href as "/book/$id"}
                      params={{ id: b.href.split("/").pop()! }}
                      className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
                    >
                      {b.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Previous"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-primary sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-primary sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-8 bg-primary" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
