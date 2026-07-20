"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ProjectCardData } from "../data/types";

type VideoCardProps = {
  project: ProjectCardData;
  showDescription?: boolean;
  descriptionLines?: number;
}

export default function VideoCard({
    project,
    showDescription = true,
    descriptionLines = 3,
}: VideoCardProps) {
    const isVertical = project.type === "Vertical";
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
            },
            {
            threshold: 0.25,
            }
        );

        observer.observe(video);

        return () => observer.disconnect();
        }, []);
        const lineClampClass = {
            2: "line-clamp-2",
            3: "line-clamp-3"
        };
    return (
    
    <Link href={`/projects/${project.slug}`}
        className="group block relative bg-zinc-900 rounded-xl hover:bg-zinc-800 transition overflow-hidden self-start"
        >
            
            {/* VIDEO WRAPPER */}
            <div className={`relative w-full overflow-hidden
                ${isVertical ? "aspect-[9/16]" : "aspect-video"
            }`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={project.previewVideo || undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            {/* Hover CTA */}
            <div className="absolute top-4 right-4 z-10">
                <div className="px-3 py-1 text-sm text-gray-300 bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                    View project →
                </div>
            </div>

            {/* VERTICAL OVERLAY ONLY */}
            {isVertical && (
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="flex justify-between text-xs text-gray-300 uppercase mb-2">
                        <span>{project.type}</span>
                        <span>{project.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                        {project.title}
                    </h3>
                    {showDescription && (
                        <p className={`text-sm text-gray-300 ${lineClampClass[descriptionLines as 2 | 3]}`}>
                            {project.description}
                        </p>
                    )}
                </div>
            )}
        </div>

        {/* TEXT OVERLAY */}
        {!isVertical && (
            <div className="p-5 space-y-3">
                <div className="flex justify-between text-xs text-gray-400 uppercase">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                    {project.title}
                </h3>
                {showDescription && (
                    <p className={`text-sm text-gray-400 ${lineClampClass[descriptionLines as 2 | 3]}`}>
                        {project.description}
                    </p>
                )}
            </div>
        )}
    </Link>
  );
}