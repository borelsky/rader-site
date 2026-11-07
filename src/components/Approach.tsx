import { Lightbulb, Globe, Users, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

type Pillar = { title: string; text: string };
const ICONS: LucideIcon[] = [Lightbulb, Globe, Users];

export default function Approach() {
  const t = useTranslations("Approach");
  const pillars = t.raw("pillars") as Pillar[];
  return (
    <section id="approche" className="bg-surface py-6 mb-[40px]">
      <div className="mx-auto  px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <article key={p.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                {/*<Icon className="mx-auto h-10 w-10 text-primary" aria-hidden />*/}
                <p className="mx-auto h-20 w-20 text-primary">
                  <Image
                    src={p.imge}
                    alt=""
                    width={75}
                    height={50}
                  />
                </p>
                <h3 className="mt-3 text-lg text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.text}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#solutions"
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-alt"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
