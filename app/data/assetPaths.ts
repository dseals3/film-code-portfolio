export function projectImage(slug: string, file: string) {
  return `/projects/${slug}/${file}`;
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
        `bts-${String(i + 1)}.jpg`
      )
  );
}

export function projectPreview(
  slug: string,
  format: "mp4" | "webp"
) {
  return `/projects/${slug}/preview.${format}`;
}