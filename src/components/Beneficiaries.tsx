import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

type Card = { question: string; cta: string };

export default function Beneficiaries() {
  const t = useTranslations("Beneficiaries");
  const cards = t.raw("cards") as Card[];
  return (
    <section id="beneficiaires" className=" mt-3 mx-auto bg-surface py-16">
      <div className="mx-auto  px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <h3 className="mb-8 text-center text-xl text-primary">{t("who")}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((c, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
              <div
                className="h-36 bg-primary/20 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/benef-${i + 1}.jpg')` }}
              />
              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <p className="text-sm font-semibold text-gray-800">{c.question}</p>
                <a
                  href="#contact"
                  className="rounded-md bg-primary px-3 py-2 text-center text-[11px] font-semibold uppercase text-white hover:bg-primary-alt"
                >
                  {c.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
