import VideoCard from "./VideoCard";
import type { ProjectCardData } from "@/app/data/types";

type WorkGridProps = {
    projects: ProjectCardData[];
    columns?: 2 | 3 | 4;
    showDescription?: boolean;
    descriptionLines?: number;
}

export default function WorkGrid({projects, columns = 2, showDescription, descriptionLines}: WorkGridProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
    };
    return (
        <div className={`
            grid grid-cols-1
            ${gridCols[columns]}
            max-w-6xl mx-auto gap-6`}>
            {projects.map((project) => (
                <VideoCard
                    key={project.slug}
                    project={project}
                    showDescription={showDescription}
                    descriptionLines={descriptionLines}
                />
            ))}
        </div>
    );
}