import { work } from "../data/work";
import WorkFilters from "../components/WorkFilters";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          All Work
        </h1>

        <p className="text-gray-400 mb-12">
          A complete archive of narrative, commercial, and development projects.
        </p>
        <WorkFilters projects={work} />
      </div>
    </main>
  );
}