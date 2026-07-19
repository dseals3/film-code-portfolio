import FilterCheckbox from "./FilterCheckbox";
import FilterSection from "./FilterSection";

type FilterSidebarProps = {
  filters: {
    types: string[];
    roles: string[];
    tools: string[];
  };

  toggleFilter: (
    category: "types" | "roles" | "tools",
    value: string
  ) => void;
};

export default function FilterSidebar({
    filters,
    toggleFilter,
}: FilterSidebarProps) {
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
            lg:sticky lg:top-24
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
        <FilterSection title="Work Type">
            {types.map((type) => (
                <FilterCheckbox
                    key={type}
                    label={type}
                    checked={filters.types.includes(type)}
                    onChange={() => toggleFilter("types", type)}
                />
            ))}
        </FilterSection>
        <div className="border-t border-white/10 my-6" />
        <FilterSection title="Roles">
            {roles.map((role) => (
                <FilterCheckbox
                key={role}
                label={role}
                checked={filters.roles.includes(role)}
                onChange={() => toggleFilter("roles", role)}
                />
            ))}
        </FilterSection>
        <div className="border-t border-white/10 my-6" />
        <FilterSection title="Tools Used">
            {tools.map((tool) => (
                <FilterCheckbox
                key={tool}
                label={tool}
                checked={filters.tools.includes(tool)}
                onChange={() => toggleFilter("tools", tool)}
                />
            ))}
        </FilterSection>
        
    </aside>
  );
}