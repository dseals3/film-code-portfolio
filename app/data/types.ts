export type MetaKey = "tech" | "tools";

export type ProjectMeta = Record<MetaKey, string[]>;

export type Project = {
  slug: string;

  title: string;
  type: string;
  year: string;
  description: string;

  previewVideo: string;
  fullVideo: string;

  authorship?: string;
  roles: string[];

  meta?: Partial<ProjectMeta>;

  btsCount?: number;

  contributions?: string;

  challenges?: {
    title: string;
    subtitle: string;
    solution?: string;
  }[];

  devHighlights?: {
    title: string;
    description: string;
    code: string;
  }[];

  learnings?: string;

  featured: boolean;
};

export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "title"
  | "type"
  | "year"
  | "description"
  | "previewVideo"
>;