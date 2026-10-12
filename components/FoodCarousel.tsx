"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import * as Tabs from "@radix-ui/react-tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n";

type Category = (typeof profile.funFacts.favoriteFoods.categories)[number];

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function FoodPhoto({ name, fallback }: { name: string; fallback: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      src={failed ? fallback : `/images/food/items/${slugify(name)}.webp`}
      alt={name}
      fill
      sizes="(min-width: 640px) 22rem, 70vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}

const arrowClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-white text-sage-700 shadow-md transition-colors hover:bg-sage-100 disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12";

// One food at a time. Remounted per category (see `key` below), so its
// position resets to the first food without any effect-driven state.
function FoodSlider({ category }: { category: Category }) {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const [viewportRef, embla] = useEmblaCarousel({ align: "center", loop: false });
  const [current, setCurrent] = useState(0);
  const total = category.items.length;

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setCurrent(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const goTo = useCallback(
    (index: number) => embla?.scrollTo(index, !!reduced),
    [embla, reduced]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(current + 1);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 sm:gap-6">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label={t("food.prev")}
          className={arrowClass}
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={viewportRef}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("food.region", { label: category.label })}
          className="min-w-0 flex-1 cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <div className="flex">
            {category.items.map((item) => (
              <figure
                key={item}
                className="flex min-w-0 flex-[0_0_100%] flex-col items-center px-3 py-6"
              >
                <div className="relative aspect-square w-[min(100%,22rem)] overflow-hidden rounded-full bg-sage-200 shadow-[0_18px_40px_-12px_rgba(61,74,58,0.45)] ring-[6px] ring-white">
                  <FoodPhoto name={item} fallback={category.photo} />
                </div>
                <figcaption className="mt-6 text-center font-serif text-2xl font-bold text-sage-900">
                  {item}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1}
          aria-label={t("food.next")}
          className={arrowClass}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {category.items.map((item, i) => (
          <button
            key={item}
            onClick={() => goTo(i)}
            aria-label={t("food.goTo", { name: item })}
            aria-current={i === current ? "true" : undefined}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-6 bg-sage-700" : "w-2.5 bg-sage-300"
              }`}
            />
          </button>
        ))}
      </div>

      <p className="mt-1 text-center text-sm font-medium text-sage-700" aria-live="polite">
        {t("food.count", { n: current + 1, total })}
      </p>
    </div>
  );
}

export default function FoodCarousel() {
  const { t, profile: localized } = useI18n();
  const categories = localized.funFacts.favoriteFoods.categories;
  const [activeId, setActiveId] = useState(categories[0].id);
  const category = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <Tabs.Root value={activeId} onValueChange={setActiveId}>
      <div className="overflow-x-auto pb-1">
        <Tabs.List
          aria-label={t("food.categories")}
          className="mx-auto flex w-fit divide-x divide-sage-300 border border-sage-300 bg-white"
        >
          {categories.map((c) => (
            <Tabs.Trigger
              key={c.id}
              value={c.id}
              className="shrink-0 whitespace-nowrap px-4 py-3 text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-100 data-[state=active]:bg-sage-700 data-[state=active]:text-white sm:px-6"
            >
              {c.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      <Tabs.Content value={category.id} className="mt-8 outline-none">
        <motion.div
          key={category.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <FoodSlider key={category.id} category={category} />
        </motion.div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
