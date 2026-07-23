import { ScrollToContactBtn } from "./components/ScrolltoContactBtn";
import { ScrollToWorkBtn } from "./components/ScrolltoWorkBtn";
import WorkGrid from "./components/WorkGrid";
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

        <WorkGrid
          projects={work.filter((item) => item.featured)}
          columns={2}
          showDescription
          descriptionLines={3}
        />
        <p className="mt-10 text-center text-gray-500 text-sm">
          Selected work from recent film and digital projects.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white duration-200"
            >
              <span className="relative">
                View All Work
                {/* <span className="absolute -bottom-1 left-1/2 h-px w-[75%] -translate-x-1/2 origin-center scale-x-0 bg-neutral-500/30 transition-transform duration-200 group-hover:scale-x-100" /> */}
              </span>

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
          </Link>
        </div>
      </section>
      

      {/* ABOUT */}
      <section className="pt-24 pb-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-6 text-gray-300">
          I'm a filmmaker focused on cinematic storytelling, with an emphasis
          on mood, pacing, and visual clarity.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white duration-200"
            >
              <span className="relative">
                Read More
                {/* <span className="absolute -bottom-1 left-1/2 h-px w-[75%] -translate-x-1/2 origin-center scale-x-0 bg-neutral-500/30 transition-transform duration-200 group-hover:scale-x-100" /> */}
              </span>

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
