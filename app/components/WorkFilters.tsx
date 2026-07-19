"use client"

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import MobileFilterWrapper from "./MobileFilterWrapper";
import WorkGrid from "./WorkGrid";
import type { WorkItem } from "../data/types";

type WorkFiltersProps = {
  projects: WorkItem[];
};

export default function WorkFilters({ projects }: WorkFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProjects =
    selectedTypes.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTypes.includes(project.type)
        );

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
      <MobileFilterWrapper>
        <FilterSidebar
          selectedTypes={selectedTypes}
          toggleType={toggleType}
        />
      </MobileFilterWrapper>

      <WorkGrid
        projects={filteredProjects}
        columns={3}
        showDescription
        descriptionLines={2}
      />
    </div>
  );
}