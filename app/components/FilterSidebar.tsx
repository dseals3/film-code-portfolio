export default function FilterSidebar() {
  return (
    <aside>
      <h2 className="text-lg font-semibold mb-4">
        Filters
      </h2>

      <div>
        <h3>Type</h3>

        <label>
          <input type="checkbox"/>
          Narrative
        </label>

      </div>

    </aside>
  );
}