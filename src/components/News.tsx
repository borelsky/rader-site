import { getLocale, getTranslations } from "next-intl/server";
import { getNews } from "@/lib/api";
import SectionTitle from "./SectionTitle";

type Fallback = { title: string; date: string };

export default async function News() {
  const t = await getTranslations("News");
  const locale = await getLocale();
  const fallback = t.raw("items") as Fallback[];
  const api = await getNews(locale, 3);

  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });
  const items =
    api && api.length > 0
      ? api.map((n) => ({
          title: n.title,
          summary: n.summary,
          date: fmt.format(new Date(n.publishedAt)),
          image: n.imageUrl,
        }))
      : fallback.map((f) => ({ title: f.title, summary: t("summary"), date: f.date, image: null }));

  return (
    <section id="actualites" className="bg-primary py-16">
      <div className="mx-auto  px-4">
        <SectionTitle light title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((n, i) => (
            <article key={`${n.title}-${i}`} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div
                className="h-40 bg-surface bg-cover bg-center"
                style={{ backgroundImage: `url('${n.image ?? `/images/news-${i + 1}.jpg`}')` }}
              />
              <div className="p-5">
                <h3 className="text-base text-primary">{n.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{n.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{n.date}</span>
                  <a href="#" className="font-semibold text-primary hover:text-accent">
                    {t("readMore")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#actualites"
            className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent-alt"
          >
            {t("all")}
          </a>
        </div>
      </div>
    </section>
  );
}
