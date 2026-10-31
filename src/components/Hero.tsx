import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      id="accueil"
      className="relative flex min-h-[520px] items-center bg-primary bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />
      <div className="relative mx-auto w-full  px-4 py-16">
        <p className="font-title text-sm uppercase text-primary md:text-base">{t("eyebrow")}</p>
        <h1 className="mt-1 text-4xl text-primary md:text-5xl">{t("title")}</h1>
        <p className="mt-2 font-title text-lg font-extrabold text-primary-alt md:text-xl">
          {t("tagline")}
        </p>
        <p className="mt-4 max-w-xl text-base font-semibold text-accent md:text-lg">{t("text")}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#groupe"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-alt"
          >
            {t("ctaDiscover")}
          </a>
          <a
            href="#contact"
            className="rounded-md border-2 border-accent bg-white/80 px-6 py-3 text-sm font-semibold text-primary hover:bg-accent"
          >
            {t("ctaPartner")}
          </a>
        </div>
      </div>
    </section>
  );
}
