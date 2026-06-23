import type { MetaKey } from "../data/types";

const metaLabels: Record<MetaKey, string> = {
    tech: "Tech Stack",
    tools: "Tools Used",
};
type Props = {
    meta?: Partial<Record<MetaKey, string[]>>;
};
export default function ProjectMeta({ meta }: Props) {
    const entries = Object.entries(meta ?? {}) as [MetaKey, string[]][];

    return (
        <>
        {entries.map(([key, items]) => (
          <section key={key}>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              {metaLabels[key]}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {items.map((tool) => (
                <span
                  key={tool}
                  className="
                    px-2.5 py-1
                    text-xs tracking-wide
                    rounded-md
                    bg-white/5
                    text-gray-400
                    hover:bg-white/10
                    cursor-pointer
                    hover:text-white
                    transition
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        ))}
        </>
    );
}