import { useTranslations } from "next-intl";
import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
type Col = { title: string; links: string[] };

const HOTLINES = [
  { name: "Ayouba", tel: "655603958", display: "6 55 60 39 58" },
  { name: "Estelle", tel: "675314687", display: "6 75 31 46 87" },
  { name: "Janiver", tel: "677001436", display: "6 77 00 14 36" },
  { name: "Peter", tel: "670687599", display: "6 70 68 75 99" },
];
const socials = [
  { href: "https://facebook.com/rader-sa", icon: FaFacebook, label: "Facebook" },
  { href: "https://x.com/rader-sa", icon: FaXTwitter, label: "X" },
  { href: "https://youtube.com/rader-sa", icon: FaYoutube, label: "YouTube" },
  { href: "https://linkedin.com/in/rader-sa", icon: FaLinkedin, label: "LinkedIn" },
];
export default function Footer() {
  const t = useTranslations("Footer");
  const cols = t.raw("cols") as Col[];
  const Icon = FaWhatsapp;
  const Phone = FaPhone;
  const Evelope = FaEnvelope;
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto grid  gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <h3 className="mb-3 text-sm text-accent">{t("hotline")}</h3>
          <ul className="space-y-1 text-sm">
            {HOTLINES.map((h) => (
              <li key={h.name} >
               
                 <div className="flex">
                   {h.name} :{" "}
                  <Icon size={24} /> 
                
                  <a href={`https://wa.me/237${h.tel}`} className="hover:text-accent ">
                   {h.display}
                  </a>
                </div>
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
              <a href="tel:+237693887762" className="hover:text-accent flex">
                <Phone size={20} /> {" "} +237 693 88 77 62
              </a>{" "}
                 {" "}  {" "}  
              <a href="tel:+237674167635" className="hover:text-accent flex mt-2">
               <Phone size={20} /> {" "}  +237 674 16 76 35
              </a>
            </li>
            <li>
              <a href="mailto:info@groupe-rader.com" className="hover:text-accent flex mt-2">
                <Evelope size={20}/>{" "} info@groupe-rader.com
              </a>
            </li>
            <li>
              <a href="mailto:partenaires@groupe-rader.com" className="hover:text-accent flex mt-2">
               <Evelope size={20}/> {" "} partenaires@groupe-rader.com
              </a>
            </li>
            <li>{t("address")}</li>
          </ul>
          <h3 className="mb-2 mt-5 text-sm text-accent">{t("follow")}</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="hover:bg-accent">
                <Icon size={30}/>
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
