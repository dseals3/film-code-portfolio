import VideoCard from "./components/VideoCard";
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
            I build for the web - and I shoot for it.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {work
            .filter((item) => item.featured)
            .map((item) => (
              <VideoCard key={item.slug} item={item} />
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
        <p className="mt-4 text-gray-400">Damian Seals</p>
        <p className="text-gray-400">macadamianseals@gmail.com</p>
      </section>

    </main>
  );
}
