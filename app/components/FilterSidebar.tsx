import FilterCheckbox from "./FilterCheckbox";

export default function FilterSidebar() {
    const types = [
        "Narrative",
        "Commercial",
        "Music Video",
        "Youtube",
        "Vertical",
        "Software",
    ];
    const roles = [
        "Director",
        "Director of Photography",
        "1st Assistant Camera",
        "Gaffer",
        "Grip",
        "Editor",
        "Colorist",
        "Production Assistant"
    ];
    const tools = [
        "Sony Camera",
        "Blackmagic Camera",
        "Drone",
        "Custom Rig",
        "Davinci Resolve"
    ]
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

        <div className="border-t border-white/10 my-6" />
        <div className="">
            <h3 className="
                text-xs
                uppercase
                tracking-widest
                text-gray-500
                mb-3"
            >
                Work Type
            </h3>

            {types.map((type) => (
                <FilterCheckbox
                key={type}
                label={type}
                />
            ))}
        </div>
        <div className="border-t border-white/10 my-6" />
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
            {roles.map((role) => (
                <FilterCheckbox
                key={role}
                label={role}
                />
            ))}
      </div>
      <div className="border-t border-white/10 my-6" />
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

            {tools.map((tool) => (
                <FilterCheckbox
                key={tool}
                label={tool}
                />
            ))}
      </div>
        
    </aside>
  );
}