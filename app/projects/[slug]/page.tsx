import { work } from "../../data/work";

export default async function ProjectPage({ params }: any) {
    const { slug } = await params;
    const project = work.find((item) => item.slug === slug);

    console.log("slug from url:", params.slug);
    console.log("all slugs:", work.map(w => w.slug));
    if (!project) {
        return <div className="p-10 text-white">Project not found</div>;
    }

    return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* VIDEO */}
      <div className="aspect-video w-full max-w-4xl mx-auto mb-8">
        <iframe
          src={project.fullVideo}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* INFO */}
      <div className="max-w-2xl mx-auto space-y-4">

        <div className="flex justify-between text-sm text-gray-400 uppercase">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>

        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

      </div>

    </main>
  );
}