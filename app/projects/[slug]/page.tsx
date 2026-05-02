import { work } from "../../data/work";
import VideoPlayer from "../../components/VideoPlayer";

export async function generateStaticParams() {
  return work.map((item) => ({
    slug: item.slug,
  }));
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = work.find((item) => item.slug === slug);

    if (!project) {
        return <div className="p-10 text-white">Project not found</div>;
    }

    return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* VIDEO */}
      <VideoPlayer src={project.fullVideo} thumbnail={project.thumbnail} />

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
        
        {project.authorship && (
            <p className="text-sm text-gray-500 mt-6 italic">
                {project.authorship}
            </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.roles.map((role) => (
                <span key={role}
                    className="
                        px-2.5 py-1
                        text-xs tracking-wide
                        rounded-md
                        bg-white/5
                        text-gray-400
                        hover:bg-white/10
                        cursor-pointer
                        hover:text-white
                        transition"
                >
                    {role}
                </span>
            ))}
        </div>
      </div>
    </main>
  );
}