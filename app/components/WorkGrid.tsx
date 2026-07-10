import VideoCard from "./VideoCard";
import { work } from "@/app/data/work";

export default function WorkGrid() {
    <section id="selected-work" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto gap-6 ">
            {work
            .filter((item) => item.featured)
            .map((item) => (
                <VideoCard key={item.slug} item={item} />
            ))}
        </div>
        <p className="mt-12 text-center text-gray-500 text-sm">
            Selected work from recent film and digital projects.
        </p>
    </section>
}