import { Leaf, Users, TrendingUp, Landmark, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Counter from "./Counter";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
type Result = { value: number; label: string };
const DOMAIN_ICONS: LucideIcon[] = [Leaf, Users, TrendingUp, Landmark];

// Couleurs officielles des 17 ODD
const ODD_COLORS = [
  "#E5243B", "#DDA63A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2",
  "#FCC30B", "#A21942", "#FD6925", "#DD1367", "#FD9D24", "#BF8B2E",
  "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A",
];

// stat bar declaration
const LOGOS = ["CAPEF", "PROPAC", "PLANOPAC"];
const icons:Record<string, string> = {CAPEF:"/images/capef.jpg",PROPAC:"/images/propac.jpg",PLANOPAC:"/images/panopac.png"};
const loop = [...LOGOS, ...LOGOS];
type Stat = { value: number; label: string; image: string};

export default function Impact() {
  const t = useTranslations("Impact");
  const tstat = useTranslations("Stats");
  const domains = t.raw("domains") as string[];
  const results = t.raw("results") as Result[];
 const items = tstat.raw("items") as Stat[];
  return (
    <section id="impact" className="mx-auto  px-4 bg-surface py-6 mb-[40px]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
         <div className="grid grid-cols-2 gap-4 px-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-3 mb-[40px]">
              {items.map((s) => (
                
                <div key={s.label} className="text-center flex mx-auto">
                  <p>
                        <Image 
                          src={s.image}
                          alt=""
                          width={75}
                          height={50}
                        />
                  </p>
                  <div className="flex-col mt-4">
                  <p className="font-title text-3xl text-primary mt-1">
      
                      <Counter to={s.value} />
      
                  </p>
                  <p className="mt-1 ml-1 text-sm  font-title text-accent">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
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
