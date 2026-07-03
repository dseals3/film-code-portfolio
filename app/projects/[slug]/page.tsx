import { work } from "../../data/work";

import VideoPlayer from "@/app/components/VideoPlayer"
import ImageViewer from "@/app/components/ImageViewer";
import ProjectMeta from "@/app/components/ProjectMeta"
import SectionHeading from "@/app/components/SectionHeading";
import CodeBlock from "@/app/components/CodeBlock";
import BTSGallery from "@/app/components/BTSGallery"
import Footer from "@/app/components/Footer";
import { Section } from "lucide-react";

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

        <div className="flex justify-between text-sm text-gray-400 uppercase mb-4">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <h1 className="text-[2.1rem] font-bold mb-6">
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
          <section className="mt-16">
            <SectionHeading>My Contributions</SectionHeading>

            <p className="leading-relaxed text-gray-400">
              {project.contributions}
            </p>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-white/15">
              Key Challenges
            </h2>

            {project.challenges.map((challenge, i) => (
              <div key={i} className="space-y-2 mb-10">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">
                  {challenge.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {challenge.subtitle}
                </p>

                {challenge.solution && (
                  <div className="border-l border-white/12 pl-6">
                    <p className=" text-gray-400 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Development Highlights */}
        {project.devHighlights && project.devHighlights.length > 0 && (
          <section className="mt-16">
            <SectionHeading>Development Highlights</SectionHeading>

            {project.devHighlights.map((highlight) => (
              <div key={highlight.title} 
                className="
                  mb-6
                  rounded-xl
                  border border-white/6
                  p-6
                  bg-white/[0.02]
                "
              >
              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                {highlight.title}
              </h3>

                <p className="text-gray-400 text-md leading-relaxed mb-4">
                  {highlight.description}
                </p>

                {highlight.code && (
                  <div className="border-l border-white/12 pl-6">
                    <CodeBlock code={highlight.code} />
                  </div>
                )}
              </div>
            ))}

          </section>
        )}

        {/* What I Learned */}
        {project.learnings && (
          <section className="mt-16">
            <SectionHeading>What I learned</SectionHeading>

            <p className="leading-relaxed text-gray-400">
              {project.learnings}
            </p>
          </section>
        )}

        {/* BEHIND THE SCENES PHOTOS */}    
        {project.btsImages && project.btsImages.length > 0 && (
          <section className="mt-16">
            <SectionHeading>Behind the Scenes</SectionHeading>

            {/* GALLERY */}
            <BTSGallery images={project.btsImages} />
          </section>
        )}
      </div>
      <Footer /> 
    </main>
  );
}