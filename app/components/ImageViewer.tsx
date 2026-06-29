import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    caption?: string;
}

export default function ImageViewer({
    src,
    alt,
    caption,

}: Props) {
    return (
        <figure className="my-8">
            <div className="
                w-full max-w-5xl mx-auto mb-8
                p-2
                bg-zinc-800/80
                border border-white/20
                rounded-xl
                overflow-hidden
                shadow-[0_0_20px_rgba(255,255,255,0.35),0_0_60px_rgba(255,255,255,0.15)]">
                <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto rounded-lg border border-white/5"
                    priority
                />
            </div>

            {caption && (
                <figcaption className="mt-3 text-sm text-gray-400">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}