import { getTranslations } from "next-intl/server";
import { getPartners, type PartnerCategory } from "@/lib/api";
import SectionTitle from "./SectionTitle";

type Group = { title: string; items: string[] };

// Même ordre que "groups" dans messages/*.json
const CATEGORIES: PartnerCategory[] = ["RADER_SA", "GLOBTOURNET_SA", "FINANCIAL", "INSTITUTIONAL"];

export default async function Partners() {
  const t = await getTranslations("Partners");
  const groups = t.raw("groups") as Group[];
  const api = await getPartners();

  return (
    <section id="partenaires" className="mx-auto  px-4 py-6 mb-[40px] bg-surface">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((g, i) => {
          const fromApi = (api ?? []).filter((p) => p.category === CATEGORIES[i]);
          const entries =
            fromApi.length > 0
              ? fromApi.map((p) => ({ name: p.name, logo: p.logoUrl, url: p.websiteUrl }))
              : g.items.map((name) => ({ name, logo: null, url: null }));

          return (
            <div key={g.title} className="rounded-2xl bg-surface p-6">
              <h3 className="mb-4 text-center text-sm text-primary">{g.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {entries.map((p) => {
                  const content = p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="max-h-10 object-contain" />
                  ) : (
                    p.name
                  );
                  const cls =
                    "flex h-16 items-center justify-center rounded-lg bg-white px-2 text-center text-xs font-semibold text-gray-600";
                  return p.url ? (
                    <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={cls}>
                      {content}
                    </a>
                  ) : (
                    <div key={p.name} className={cls}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <a
          href="#partenaires"
          className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-alt"
        >
          {t("all")}
        </a>
      </div>
    </section>
  );
}
