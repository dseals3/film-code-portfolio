import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white px-6 pt-24">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                About
            </h1>

            <p className="mt-3 text-gray-400 text-sm uppercase tracking-widest">
                Filmmaker · Visual Storyteller
            </p>
        </div>
        {/* IMAGE + TEXT BLOCK */}
        <div className="max-w-3xl mx-auto w-full mt-12 flex flex-col md:flex-row items-start gap-8">

            {/* IMAGE */}
            <div className="md:w-1/3 flex-shrink-0">
                <div className="aspect-square rounded-full bg-zinc-900 overflow-hidden">
                    <img
                    src="/images/headshot-square.jpeg"
                    className="w-full h-full object-cover"
                    alt="Portrait"
                    />
                </div>
            </div>

            {/* TEXT */}
            <div className="md:w-2/3 space-y-6 text-gray-300 leading-relaxed">
                <p>
                    I’m a filmmaker focused on cinematic storytelling, with an emphasis on mood, pacing, and visual clarity.
                </p>

                <p>
                    I’m interested in how structure and emotion interact within a frame, and how simple ideas can be shaped into visually intentional work.
                </p>
            </div>
        </div>

        <div className="flex-1" />

        <Footer />
    </main>
  );
}