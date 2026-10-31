"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
type NavItem = { label: string; href: string };

export default function Header() {
  const t = useTranslations("Header");
  const nav = t.raw("nav") as NavItem[];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex  items-center justify-between px-4 py-3">
        <Link href="/" className="font-title text-xl text-primary hover:text-accent">
          <Image
             src ={"/images/rader.png"}
             width={140}
             height={70}
             alt="RADER"
          />
          <span className=" block text-[13px] font-normal text-primary-alt ">{t("brand")}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-[13px] font-semibold text-gray-700 xl:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent  text-primary text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#beneficiaires"
            className="rounded-md bg-primary px-4 py-2 text-[13px] font-semibold text-white hover:bg-accent"
          >
            {t("beneficiaries")}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={t("menu")}
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-primary" />
        </button>
      </div>

      {open && (
        <nav className="border-t bg-white px-4 pb-4 xl:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#beneficiaires"
            className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
          >
            {t("beneficiaries")}
          </a>
          <div className="mt-3">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
