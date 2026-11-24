import {
  type LucideIcon,
  Sprout,
  Utensils,
  Droplets,
  Tractor,
  Home,
  ShoppingCart,
  Globe,
  GraduationCap,
  Tv,
  Wifi,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

type Product = { name: string; text: string; href: string };

const AGI_ICONS: LucideIcon[] = [Sprout, Utensils, Droplets, Tractor, Home, ShoppingCart, Globe];
const REMUDEV_ICONS: LucideIcon[] = [GraduationCap, Tv, Wifi, Smartphone];

function Block({
  id,
  title,
  program,
  products,
  cover,
  icons,
  link,
  seeProducts,
}: {
  id: string;
  title: string;
  cover: string;
  program: string;
  products: Product[];
  icons: LucideIcon[];
  link: string;
  seeProducts: string;
}) {
  return (
    <div id={id} className="rounded-2xl bg-surface p-6 ">
      <div className="justify-center items-center mb-6">
        <h3 className="mb-6 text-center text-base text-primary md:text-lg">
          {title} <span className="text-accent">{program} <a href={link} className="text-primary hover:text-primary-alt">{link.split("//")[1]}</a></span>
        </h3>

        <Image className="mx-auto"
          src={cover}
          alt={cover}
          width={400}
          height={100}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p, i) => {
          const Icon = icons[i];
          return (
            <article
              key={p.name}
              className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <Icon className="h-7 w-7 text-accent" aria-hidden />
              <h4 className="text-sm text-primary">{p.name}</h4>
              <p className="flex-1 text-xs text-gray-600">{p.text}</p>
              <a href={p.href} className="text-xs font-semibold text-primary underline hover:text-accent">
                {seeProducts}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function Solutions() {
  const t = useTranslations("Solutions");
  return (
    <section id="solutions" className="mx-auto bg-surface  px-4 py-6 mb-[40px]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <div id="produits" className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <Block
          id="solutions-agi"
          title={t("blockTitle")}
          cover = {"/images/radersolutions.jpeg"}
          program={t("agiProgram")}
          products={t.raw("agi") as Product[]}
          icons={AGI_ICONS}
          link = {t("agilink")}
          seeProducts={t("seeProducts")}
        />
        <Block
          id="solutions-remudev"
          title={t("blockTitle")}
          cover = {"/images/globtournet.jpeg"}
          program={t("remudevProgram")}
          products={t.raw("remudev") as Product[]}
          icons={REMUDEV_ICONS}
          link ={t("remudevlink")}
          seeProducts={t("seeProducts")}
        />
      </div>
    </section>
  );
}
