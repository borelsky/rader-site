import { CreditCard, ShieldCheck, Handshake, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Offer = { title: string; text: string };
type Step = { title: string; text: string; cta?: string; href?: string };

const OFFER_ICONS: LucideIcon[] = [CreditCard, ShieldCheck, Handshake];

export default function Financing() {
  const t = useTranslations("Financing");
  const offers = t.raw("offers") as Offer[];
  const steps = t.raw("steps") as Step[];

  return (
    <>
      <section id="financement" className="bg-primary py-16 text-white">
        <div className="mx-auto grid  gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl uppercase md:text-3xl">{t("title")}</h2>
            <p className="mt-4 leading-relaxed text-white/90">{t("text")}</p>
            <a
              href="#financement-offres"
              className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-accent"
            >
              {t("cta")}
            </a>
          </div>
          <div id="financement-offres" className="grid gap-4 sm:grid-cols-3">
            {offers.map((o, i) => {
              const Icon = OFFER_ICONS[i];
              return (
                <article key={o.title} className="rounded-xl bg-white p-5 text-center text-gray-800">
                  <Icon className="mx-auto h-9 w-9 text-primary" aria-hidden />
                  <h3 className="mt-2 text-sm text-accent">{o.title}</h3>
                  <p className="mt-2 text-xs">{o.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto  px-4 py-16">
        <h3 className="mb-10 text-center text-lg text-primary md:text-xl">{t("stepsTitle")}</h3>
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-title text-xl text-white ring-4 ring-accent">
                {i + 1}
              </span>
              <h4 className="text-base text-primary">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.text}</p>
              {s.cta && (
                <a
                  href={s.href}
                  className="mt-auto rounded-md bg-primary px-3 py-2 text-[11px] font-semibold text-white hover:bg-primary-alt"
                >
                  {s.cta}
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
