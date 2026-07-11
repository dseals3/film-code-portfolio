import { work } from "../data/work";
import WorkGrid from "../components/WorkGrid"

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
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Filters */}
          <aside>
            Filters go here
          </aside>
          <WorkGrid
              projects={work}
              columns={3}
              showDescription
              descriptionLines={2}
          />
        </div>
      </div>
    </main>
  );
}