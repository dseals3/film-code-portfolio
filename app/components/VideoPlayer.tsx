"use client";

import { useState } from "react";
import { buildVideoUrl } from "@/lib/video";
type Props = {
  src: string;
  thumbnail: string;
};

export default function VideoPlayer({ src, thumbnail }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-video w-full max-w-4xl mx-auto mb-8 bg-zinc-900 rounded-xl overflow-hidden relative">
      
      {/* Thumbnail / placeholder */}
      {!isLoaded && (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center bg-zinc-900 group"
        >
          <img
            src={thumbnail}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
          />

          {/* Play button overlay */}
          <div className="absolute">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[7px] border-y-transparent ml-1" />
            </div>
          </div>
        </button>
      )}

      {/* iframe only loads after click */}
      {isLoaded && (
        <iframe
          src={buildVideoUrl(src)}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        
        />
      )}
    </div>
  );
}