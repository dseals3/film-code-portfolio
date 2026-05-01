"use client";
import { work } from "./data/work";
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
            I build build for the web - and I shoot for it.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black rounded-full">
              View Work
            </button>

            <button className="px-6 py-3 border border-white rounded-full">
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {work.map((item, i) => (
            <div key={i} className="group relative bg-zinc-900 rounded-xl hover:bg-zinc-800 transition overflow-hidden">
              {/* VIDEO */}
              <div className="relative">
                <video
                  className="w-full h-64 object-cover"
                  src={item.video}
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
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-6 text-gray-300">
          I work across filmmaking and web development, exploring how narrative,
          motion, and interaction can come together in the browser.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center border-t border-zinc-800">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">macadamianseals@gmail.com</p>
      </section>

    </main>
  );
}
