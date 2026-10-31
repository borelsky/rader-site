import { useTranslations } from "next-intl";
import Image from "next/image";
// Noms repérés sur la maquette ; à remplacer par les logos (public/images/trust/)
const LOGOS = ["CAPEF", "PROPAC", "PLANOPAC"];
const icons:Record<string, string> = {CAPEF:"/images/capef.jpg",PROPAC:"/images/propac.jpg",PLANOPAC:"/images/panopac.png"}
export default function TrustLogos() {
  const t = useTranslations("Trust");
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-white py-6" aria-label={t("title")}>
      <p className="mb-4 text-center font-title text-sm text-primary">{t("title")}</p>
      <div className="flex w-max animate-marquee gap-6">
        {loop.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex w-auto  shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-semibold text-gray-600"
          >
           <Image
              src={icons[`${name}`]}
              alt={`${name}`}
              width={75}
              height={50}
            />
            {/*name*/}
          </div>
        ))}
      </div>
    </section>
  );
}
