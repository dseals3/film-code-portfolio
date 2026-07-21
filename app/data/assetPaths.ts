export function projectImage(slug: string, file: string) {
  return `/images/projects/${slug}/${file}`;
}

export function projectThumbnail(slug: string) {
  return projectImage(slug, "thumbnail.jpg");
}

export function projectBTS(
  slug: string,
  count: number
) {
  return Array.from(
    { length: count },
    (_, i) =>
      projectImage(
        slug,
        `bts-${String(i + 1).padStart(2, "0")}.jpg`
      )
  );
}