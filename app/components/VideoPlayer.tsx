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
    <div className="aspect-video w-full max-w-5xl mx-auto mb-8 bg-zinc-900 rounded-xl overflow-hidden relative">
      
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                flex items-center justify-center
                opacity-0 scale-85
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-300 ease-out
              "
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
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