import FilterCheckbox from "./FilterCheckbox";

export default function FilterSidebar() {
  return (
    <aside
        className="
            sticky top-24
            h-fit
            rounded-xl
            border border-white/10
            bg-white/[0.02]
            p-6
    ">
        <h2 className="text-lg font-semibold mb-4">
            Filters
        </h2>

        <div className="space-y-2">
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Work Type
            </h3>
            <div className="border-t border-white/10 my-6" />

            <FilterCheckbox label="Narrative" />
            <FilterCheckbox label="Commercial" />
            <FilterCheckbox label="Music Video" />
            <FilterCheckbox label="Youtube" />
            <FilterCheckbox label="Vertical" />
            <FilterCheckbox label="Software" />
        </div>
        <div>
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Role
            </h3>

            <FilterCheckbox label="Director" />
            <FilterCheckbox label="Director of Photography" />
            <FilterCheckbox label="1st Assistant Camera" />
            <FilterCheckbox label="Gaffer" />
            <FilterCheckbox label="Grip" />
            <FilterCheckbox label="Editor" />
            <FilterCheckbox label="Colorist" />
            <FilterCheckbox label="Production Assistant" />
      </div>
      <div>
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Tools Used
            </h3>

            <FilterCheckbox label="Sony Camera" />
            <FilterCheckbox label="Blackmagic Camera" />
            <FilterCheckbox label="Drone" />
            <FilterCheckbox label="Custom Rig" />
            <FilterCheckbox label="Davinci Resolve" />
      </div>
        
    </aside>
  );
}