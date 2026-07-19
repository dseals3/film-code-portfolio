"use client"

import { work } from "../data/work";
import WorkGrid from "../components/WorkGrid"
import FilterSidebar from "../components/FilterSidebar";
import MobileFilterWrapper from "../components/MobileFilterWrapper";
import { useState } from "react";

export default function WorksPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProjects =
  selectedTypes.length === 0
    ? work
    : work.filter((project) =>
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
    <main className="min-h-screen bg-black text-white p-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          All Work
        </h1>

        <p className="text-gray-400 mb-12">
          A complete archive of narrative, commercial, and development projects.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Filters */}
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
      </div>
    </main>
  );
}