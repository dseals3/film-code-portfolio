import { work } from "../../data/work";


import VideoPlayer from "@/app/components/VideoPlayer"
import ImageViewer from "@/app/components/ImageViewer";
import ProjectMeta from "@/app/components/ProjectMeta"
import BTSGallery from "@/app/components/BTSGallery"
import Footer from "@/app/components/Footer";

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
      {project.fullVideo ? (
        <VideoPlayer src={project.fullVideo} thumbnail={project.thumbnail} />
      ) : project.thumbnail ? (
        <ImageViewer src={project.thumbnail} alt={project.title} />
      ) : null}
      
      {/* INFO */}
      <div className="max-w-2xl mx-auto space-y-4">

        <div className="flex justify-between text-sm text-gray-400 uppercase">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>

        <p className="text-gray-400 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
        
        {project.authorship && (
            <p className="text-sm text-gray-500 mt-6 italic">
                {project.authorship}
            </p>
        )}

        {/* ROLES */}
        <div className="mt-6 mb-12 flex flex-wrap items-center gap-2">
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
        
        {/* Tools Used or Tech Stack */}
        <ProjectMeta meta={project.meta} />

        {/* Contributions */}
        {project.contributions && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
              My Contributions
            </h2>

            <p className="leading-relaxed text-gray-400">
              {project.contributions}
            </p>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
              Key Challenges
            </h2>

            {project.challenges.map((challenge, i) => (
              <div key={i} className="space-y-2 mb-10">
                <h3 className="text-lg font-medium mb-3">
                  {challenge.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {challenge.subtitle}
                </p>

                {challenge.solution && (
                  <div className="border-l border-white/10 pl-6">
                    <p className=" text-gray-400 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <p className="leading-relaxed text-gray-400">
              {/* {project.challenges} */}
            </p>
          </section>
        )}

        {/* What I Learned */}
        {project.learnings && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
              What I learned
            </h2>

            <p className="leading-relaxed text-gray-400">
              {project.learnings}
            </p>
          </section>
        )}

        {/* BEHIND THE SCENES PHOTOS */}    
        {project.btsImages && project.btsImages.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
              Behind the Scenes
            </h2>

            {/* GALLERY */}
            <BTSGallery images={project.btsImages} />
          </section>
        )}
      </div>
      <Footer /> 
    </main>
  );
}