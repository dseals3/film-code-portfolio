"use client";

import { useState } from "react";

type Props = {
  images: string[];
};

export default function BTSGallery({ images }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <> 
      {/* GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            onClick={() => setSelected(src)}
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
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />
        </div>
      )}
    </>
  );
}
