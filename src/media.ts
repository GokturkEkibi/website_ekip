// Büyük medya dosyaları Cloudflare R2'de tutulur (Workers asset limiti: 25 MiB).
// URL'yi build ortam değişkeniyle ayarla: VITE_BACKGROUND_VIDEO_URL
export const BACKGROUND_VIDEO_URL: string =
  (import.meta as any).env?.VITE_BACKGROUND_VIDEO_URL ||
  'https://pub-c9cf385d3fcf4bae91cafd3e1120af33.r2.dev/background-4.mp4';
