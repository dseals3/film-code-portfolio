"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export default function BTSGallery({ images }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const currentImage =
  selectedIndex !== null ? images[selectedIndex] : null;

    const close = () => setSelectedIndex(null);

    const goNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % images.length);
    };

    const goPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex(
            (selectedIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") {
            setSelectedIndex((prev) => (prev! + 1) % images.length);
            }

            if (e.key === "ArrowLeft") {
            setSelectedIndex((prev) =>
                (prev! - 1 + images.length) % images.length
            );
            }

            if (e.key === "Escape") {
            setSelectedIndex(null);
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        }, [selectedIndex, images.length]);
    return (
    <> 
      {/* GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            onClick={() => setSelectedIndex(index)}
            className="
                w-full rounded-lg cursor-pointer 
                break-inside-avoid mb-4
                transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:scale-[1.03] hover:brightness-110 hover:contrast-105
                hover:-translate-y-1"
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={close}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
            src={currentImage!}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />

            {/* LEFT BUTTON */}
            <button
            onClick={goPrev}
            className="
              absolute left-[-96px] top-1/2 -translate-y-1/2
              h-15 w-15
              rounded-full
              bg-zinc-900
              text-white text-3xl
              border border-white/20
              flex items-center justify-center
              hover:bg-black/80 hover:scale-110 hover:border-white/25
              cursor-pointer
              transition duration-200 ease-out
            "
            >
              <ChevronLeft size={28} />
            </button>

            {/* RIGHT BUTTON */}
            <button
            onClick={goNext}
            className="
              absolute right-[-96px] top-1/2 -translate-y-1/2
              h-15 w-15
              rounded-full
              bg-zinc-900
              text-white text-3xl
              border border-white/10
              flex items-center justify-center
              hover:bg-black/80 hover:scale-108 hover:border-white/25
              cursor-pointer
              transition duration-200 ease-out
            "
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
        )}
    </>
  );
}
