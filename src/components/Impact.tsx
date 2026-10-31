import { Leaf, Users, TrendingUp, Landmark, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Counter from "./Counter";
import SectionTitle from "./SectionTitle";

type Result = { value: number; label: string };
const DOMAIN_ICONS: LucideIcon[] = [Leaf, Users, TrendingUp, Landmark];

// Couleurs officielles des 17 ODD
const ODD_COLORS = [
  "#E5243B", "#DDA63A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2",
  "#FCC30B", "#A21942", "#FD6925", "#DD1367", "#FD9D24", "#BF8B2E",
  "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A",
];

export default function Impact() {
  const t = useTranslations("Impact");
  const domains = t.raw("domains") as string[];
  const results = t.raw("results") as Result[];
  return (
    <section id="impact" className="mx-auto  px-4 py-16">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-base text-primary">{t("domainsTitle")}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {domains.map((label, i) => {
              const Icon = DOMAIN_ICONS[i];
              return (
                <div key={label} className="rounded-xl bg-surface p-4 text-center">
                  <Icon className="mx-auto h-7 w-7 text-primary" aria-hidden />
                  <p className="mt-1 text-xs font-semibold text-primary">{label}</p>
                </div>
              );
            })}
          </div>

          <h3 className="mb-4 mt-8 text-base text-primary">{t("resultsTitle")}</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-xl bg-primary p-4 text-center text-white">
                <p className="font-title text-xl">
                  <Counter to={r.value} />
                </p>
                <p className="mt-1 text-[11px]">{r.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#resultats"
            className="mt-6 inline-block rounded-md border-2 border-primary px-5 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white"
          >
            {t("seeResults")}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-base text-primary">{t("oddTitle")}</h3>
          <p className="mb-4 text-sm text-gray-700">{t("oddText")}</p>
          <div className="grid grid-cols-6 gap-2">
            {ODD_COLORS.map((c, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-md font-title text-sm text-white"
                style={{ backgroundColor: c }}
                title={`SDG / ODD ${i + 1}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <a
            href="#odd"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-primary-alt"
          >
            {t("oddCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
