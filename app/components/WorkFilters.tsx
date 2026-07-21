"use client"

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import MobileFilterWrapper from "./MobileFilterWrapper";
import WorkGrid from "./WorkGrid";
import type { Project, ProjectCardData } from "../data/types";
import { toolFilters } from "../data/filterOptions";

type WorkFiltersProps = {
  projects: Project[];
};

export default function WorkFilters({ projects }: WorkFiltersProps) {
    const [filters, setFilters] = useState({
        types: [] as string[],
        roles: [] as string[],
        tools: [] as string[],
    });

    function toggleFilter(
        category: "types" | "roles" | "tools",
        value: string
        ) {
        setFilters((prev) => ({
            ...prev,
            [category]: prev[category].includes(value)
            ? prev[category].filter((item) => item !== value)
            : [...prev[category], value],
        }));
    }

    const filteredProjects = projects.filter((project) => {
        const matchesType =
            filters.types.length === 0 ||
            filters.types.includes(project.type);

        const matchesRole =
            filters.roles.length === 0 ||
            project.roles?.some((role) =>
            filters.roles.includes(role)
            );

        const matchesTool =
          filters.tools.length === 0 ||
          project.meta?.tools?.some((tool) =>
            filters.tools.some((filter) =>
              toolFilters[filter].includes(tool)
            )
          );
        

        return matchesType && matchesRole && matchesTool;
    });

    const cardProjects: ProjectCardData[] = filteredProjects.map((project) => ({
      slug: project.slug,
      title: project.title,
      type: project.type,
      year: project.year,
      description: project.description,
      previewVideo: project.previewVideo,
    }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
      <MobileFilterWrapper>
        <FilterSidebar
          filters={filters}
          toggleFilter={toggleFilter}
        />
      </MobileFilterWrapper>

      <WorkGrid
        projects={cardProjects}
        columns={3}
        showDescription
        descriptionLines={2}
      />
    </div>
  );
}