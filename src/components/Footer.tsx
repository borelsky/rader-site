import { useTranslations } from "next-intl";

type Col = { title: string; links: string[] };

const HOTLINES = [
  { name: "Ayouba", tel: "655603958", display: "6 55 60 39 58" },
  { name: "Estelle", tel: "675314687", display: "6 75 31 46 87" },
  { name: "Janiver", tel: "677001436", display: "6 77 00 14 36" },
  { name: "Peter", tel: "670687599", display: "6 70 68 75 99" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const cols = t.raw("cols") as Col[];

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto grid  gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <h3 className="mb-3 text-sm text-accent">{t("hotline")}</h3>
          <ul className="space-y-1 text-sm">
            {HOTLINES.map((h) => (
              <li key={h.name}>
                {h.name} :{" "}
                <a href={`https://wa.me/237${h.tel}`} className="hover:text-accent">
                  {h.display}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mb-2 mt-5 text-sm text-accent">{t("ecommerce")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://www.radergreen.com" className="hover:text-accent">
                www.radergreen.com
              </a>
            </li>
            <li>
              <a href="https://www.globtournet.com" className="hover:text-accent">
                www.globtournet.com
              </a>
            </li>
          </ul>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="mb-3 text-sm text-accent">{c.title}</h3>
            <ul className="space-y-1 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-sm text-accent">{t("contactTitle")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="tel:+237693887762" className="hover:text-accent">
                +237 693 88 77 62
              </a>{" "}
              /{" "}
              <a href="tel:+237674167635" className="hover:text-accent">
                674 16 76 35
              </a>
            </li>
            <li>
              <a href="mailto:info@groupe-rader.com" className="hover:text-accent">
                info@groupe-rader.com
              </a>
            </li>
            <li>{t("address")}</li>
          </ul>
          <h3 className="mb-2 mt-5 text-sm text-accent">{t("follow")}</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Facebook", "X", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" aria-label={s} className="hover:text-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs">
          <span>{t("rights")}</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-accent">{t("legal")}</a>
            <a href="#" className="hover:text-accent">{t("privacy")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
