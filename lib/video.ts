export function buildVideoUrl(src: string) {
  const url = new URL(src);

  url.searchParams.set("autoplay", "1");
  url.searchParams.set("mute", "0");
  url.searchParams.set("playsinline", "1");
  url.searchParams.set("rel", "0");

  return url.toString();
}