export type MetaKey = "tech" | "tools";

export type ProjectMeta = Record<MetaKey, string[]>;

export type Project = {
  slug: string;

  title: string;
  type: string;
  year: string;
  description: string;

  thumbnail: string;
  previewVideo: string;
  fullVideo: string;

  authorship?: string;
  roles: string[];

  meta?: Partial<ProjectMeta>;

  btsImages: string[];

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

  featured: boolean;
};

export type WorkItem = {
    slug: string;
    title: string;
    type: string;
    year: string;
    description: string;
    previewVideo: string;
    fullVideo: string;
    roles: string[];
    meta?: Partial<ProjectMeta>;
};