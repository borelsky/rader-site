const BASE = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export type NewsItem = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string | null;
  publishedAt: string;
};

export type PartnerCategory = "RADER_SA" | "GLOBTOURNET_SA" | "FINANCIAL" | "INSTITUTIONAL";

export type PartnerItem = {
  name: string;
  category: PartnerCategory;
  logoUrl: string | null;
  websiteUrl: string | null;
};

// Renvoie null si l'API est indisponible : les composants retombent alors sur les textes de messages/*.json
async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export const getNews = (lang: string, limit = 3) =>
  get<NewsItem[]>(`/api/news?lang=${encodeURIComponent(lang)}&limit=${limit}`);

export const getPartners = () => get<PartnerItem[]>("/api/partners");
