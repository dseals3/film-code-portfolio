import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import { work } from "./data/work";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Damian Seals
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            I focus on cinematic storytelling across narrative and commercial.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="#selected-work"
              className="px-6 py-3 bg-white text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-zinc-200"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white rounded-full transition ease-in-out hover:scale-102 hover:bg-white/10 hover:backdrop-blur-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
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
      

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-6 text-gray-300">
          I'm a filmmaker focused on cinematic storytelling, with an emphasis
          on mood, pacing, and visual clarity.
        </p>

        <Link
            href="/about"
            className="inline-block mt-8 text-sm text-gray-400 hover:text-white transition"
          >
            Read More →
        </Link>
      </section>
      <Footer />
    </main>
  );
}
