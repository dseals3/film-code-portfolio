export type MetaKey = "tech" | "tools";

export type ProjectMeta = Record<MetaKey, string[]>;

export type Project = {
  slug: string;
  title: string;
  description: string;
  roles: string[];

  meta?: Partial<ProjectMeta>;
};