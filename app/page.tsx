import VideoCard from "./components/VideoCard";
import { ScrollToContactBtn } from "./components/ScrolltoContactBtn";
import { ScrollToWorkBtn } from "./components/ScrolltoWorkBtn";
import Footer from "./components/Footer";
import { work } from "./data/work";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/code-prv.mp4" type="video/mp4" />
        </video>

        {/* Dim the video a bit */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Bottom Edge Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-64
            bg-gradient-to-b
            from-transparent
            to-black
          "
        />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Damian Seals
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            I focus on cinematic storytelling across narrative and commercial.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <ScrollToWorkBtn />
            <ScrollToContactBtn />
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
      <section className="pt-24 pb-12 px-6 max-w-3xl mx-auto text-center">
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
