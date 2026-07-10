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

  devHighlights?: {
    title: string;
    description: string;
    code: string;
  }[];
};

export type WorkItem = {
    slug: string;
    title: string;
    type: string;
    year: string;
    description: string;
    previewVideo: string;
    fullVideo: string;
};