import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

type Card = { name: string; text: string; cta: string; href: string };
const IMAGES = ["/images/program-agi.jpg", "/images/program-remudev.jpg"];

export default function Programs() {
  const t = useTranslations("Programs");
  const cards = t.raw("cards") as Card[];
  return (
    <section id="programmes" className="mx-auto  px-4 py-16">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((p, i) => (
          <article
            key={p.name}
            className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div
              className="hidden w-2/5 bg-surface bg-cover bg-center sm:block"
              style={{ backgroundImage: `url('${IMAGES[i]}')` }}
            />
            <div className="flex flex-1 flex-col justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-700">{p.text}</p>
              </div>
              <a
                href={p.href}
                className="self-start rounded-md bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-primary-alt"
              >
                {p.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
