import { useTranslations } from "next-intl";

type LinkItem = { label: string; href: string };

export default function About() {
  const t = useTranslations("About");
  const links = t.raw("links") as LinkItem[];
  return (
    <section id="groupe" className=" bg-surface mx-auto  px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr_1fr] lg:items-center">
        <div
          className="h-64 rounded-xl bg-surface bg-cover bg-center lg:h-80"
          style={{ backgroundImage: "url('/images/about.jpeg')" }}
          role="img"
          aria-label={t("imageAlt")}
        />
        <div>
          <h2 className="text-2xl text-primary md:text-3xl">{t("title")}</h2>
          <p className="mt-1 font-title text-lg font-extrabold text-accent">{t("subtitle")}</p>
          <p className="mt-4 leading-relaxed text-gray-700">{t("text")}</p>
          <a
            href="#histoire"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-alt"
          >
            {t("cta")}
          </a>
        </div>
        <ul className="space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex items-center justify-between rounded-lg bg-surface px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                {l.label} <span aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
