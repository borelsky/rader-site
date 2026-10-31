import { useTranslations } from "next-intl";
import Counter from "./Counter";
import Image from "next/image";
// Noms repérés sur la maquette ; à remplacer par les logos (public/images/trust/)
const LOGOS = ["CAPEF", "PROPAC", "PLANOPAC"];
const icons:Record<string, string> = {CAPEF:"/images/capef.jpg",PROPAC:"/images/propac.jpg",PLANOPAC:"/images/panopac.png"};

  const loop = [...LOGOS, ...LOGOS];
type Stat = { value: number; label: string; image: string};

export default function StatsBar() {
  const t = useTranslations("Stats");
  const t1 = useTranslations("Trust");
  const items = t.raw("items") as Stat[];
  return (
    <section className=" py-8 ">
      <div className="lg:flex md:flex  sm:inline">
      <div className="grid grid-cols-2 gap-4 px-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
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
       <div className="overflow-hidden" aria-label={t1("title")}>
            <p className="mb-1 text-center font-title text-sm text-primary">{t1("title")}</p>
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
          </div>
      </div>
    </section>
  );
}
