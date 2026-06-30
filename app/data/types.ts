export type MetaKey = "tech" | "tools";

export type ProjectMeta = Record<MetaKey, string[]>;

export type Project = {
  slug: string;
  title: string;
  description: string;
  roles: string[];

  meta?: Partial<ProjectMeta>;

  challenges?: {
    title: string;
    description: string;
    takeaway?: string;
  }[];

  developmentHighlights?: {
    title: string;
    description: string;
    code: string;
  }[];
};