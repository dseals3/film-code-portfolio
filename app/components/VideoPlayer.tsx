"use client";

import { useState, useEffect } from "react";
import { buildVideoUrl } from "@/lib/video";
type Props = {
  src: string;
  thumbnail: string;
};

export default function VideoPlayer({ src, thumbnail }: Props) {
  const [isTouch, setIsTouch] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

   useEffect(() => {
    setIsTouch(
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  }, []);

  return (
    <div className="aspect-video w-full max-w-5xl mx-auto mb-8 bg-zinc-900 rounded-xl overflow-hidden relative">

      {/* MOBILE: preload hidden iframe */}
      {isTouch && (
        <iframe
          src={buildVideoUrl(src).replace("autoplay=1", "autoplay=0")}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            showPlayer ? "opacity-100" : "opacity-0"
          }`}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}

      {/* DESKTOP: original behavior */}
      {!isTouch && showPlayer && (
        <iframe
          src={buildVideoUrl(src)}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}

      {/* Thumbnail Overlay */}
        <button
          onClick={() => setShowPlayer(true)}
          className={`
            absolute inset-0 z-10 flex items-center justify-center
            bg-zinc-900 group cursor-pointer
            transition-opacity duration-700 ease-out
            ${
              showPlayer
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }
          `}
        >
          <img
            src={thumbnail}
            className="
              w-full h-full object-cover
              opacity-80 group-hover:opacity-100
              scale-100 group-hover:scale-104
              transition-all duration-700 ease-out
            "
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="
                w-16 h-16 rounded-full bg-white/10 backdrop-blur-md 
                flex items-center justify-center 
                opacity-70 scale-85 border border-white/10
                group-hover:opacity-100 group-hover:scale-100 group-hover:border-white/20 
                transition-all duration-300 ease-out
              "
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
            </div>
          </div>
        </button>
    </div>
  );
}