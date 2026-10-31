import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const t = useTranslations("Contact");
  return (
    <section id="contact-form" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <ContactForm />
      </div>
    </section>
  );
}
