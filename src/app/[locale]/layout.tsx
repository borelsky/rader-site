import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getMessages } from 'next-intl/server';
import { routing } from "@/i18n/routing";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return { title: t("title"), description: t("description") };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  //if (!hasLocale(routing.locales, locale)) notFound();
  if (!routing.locales.includes(locale as any)) notFound();
   setRequestLocale(locale);
 // const messages = await getMessages();
  return (
    <html lang={locale} className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <NextIntlClientProvider >{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
