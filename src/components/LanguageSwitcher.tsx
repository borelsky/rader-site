"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-[13px] font-semibold">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-current={l === locale}
          className={l === locale ? "text-primary underline hover:text-accent" : "text-gray-500 hover:text-accent"}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
