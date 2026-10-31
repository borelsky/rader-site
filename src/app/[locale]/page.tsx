import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrustLogos from "@/components/TrustLogos";
import About from "@/components/About";
import Beneficiaries from "@/components/Beneficiaries";
import Programs from "@/components/Programs";
import Solutions from "@/components/Solutions";
import Financing from "@/components/Financing";
import Approach from "@/components/Approach";
import Impact from "@/components/Impact";
import News from "@/components/News";
import Partners from "@/components/Partners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
       { /*<TrustLogos />*/}
        <About />
        <Beneficiaries />
        <Programs />
        <Solutions />
        <Financing />
        <Approach />
        <Impact />
        <News />
        <Partners />
       {/*<ContactSection />*/}
      </main>
      <Footer />
    </>
  );
}
