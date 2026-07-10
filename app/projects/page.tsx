import { work } from "../data/work";
import WorkGrid from "../components/WorkGrid"

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          All Work
        </h1>

        <p className="text-gray-400 mb-12">
          A complete archive of narrative, commercial, and development projects.
        </p>
        <WorkGrid
            projects={work.filter((item) => item.featured)}
        />
      </div>
    </main>
  );
}