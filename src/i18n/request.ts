import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import * as rootParams from 'next/root-params';
import { notFound } from 'next/navigation';

/*export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});*/


export default getRequestConfig(async ({ locale }) => {
  // Si la locale n'est pas fournie, nous la lisons depuis les paramètres de l'URL
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});