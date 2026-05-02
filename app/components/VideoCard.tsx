"use client";
import Link from "next/link";

type WorkItem = {
    slug: string;
    title: string;
    type: string;
    year: string;
    description: string;
    previewVideo: string;
    fullVideo: string;
};

export default function VideoCard({ item }: { item: WorkItem }) {
  return (
    <Link href={`/projects/${item.slug}`}>
        <div className="group relative bg-zinc-900 rounded-xl hover:bg-zinc-800 transition overflow-hidden">
            {/* VIDEO */}
            <div className="relative">
            <video
                className="w-full h-64 object-cover"
                src={item.previewVideo}
                muted
                loop
                playsInline
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
            />
            <div className="absolute top-4 right-4 z-10">
                <div className="px-3 py-1 text-sm text-gray-300 bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                View project →
                </div>
            </div>
            </div>

            {/* TEXT OVERLAY */}
            <div className="p-6 flex-col space-y-3">

            {/* TOP ROW (type + year separated properly) */}
            <div className="flex justify-between text-sm text-gray-400 uppercase">
                <span>{item.type}</span>
                <span>{item.year}</span>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold">
                {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
            </p>
            </div>
        </div>
    </Link>
  );
}