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
            <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
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