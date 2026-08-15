import Image from "next/image";
import { cadastro, redes, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

const links = [
  { ...redes.whatsapp, Icone: WhatsAppIcon, cor: "hover:bg-lima" },
  { ...redes.instagram, Icone: InstagramIcon, cor: "hover:bg-magenta hover:text-white" },
  { ...redes.facebook, Icone: FacebookIcon, cor: "hover:bg-ciano hover:text-white" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-tinta bg-white text-tinta">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-12 sm:pb-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/img/logo-2222.png"
            alt={`${site.nome} ${site.numero}`}
            width={1200}
            height={1003}
            sizes="176px"
            className="h-auto w-40"
          />

          <ul className="flex flex-wrap gap-3">
            {links.map(({ rotulo, href, Icone, cor }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-tinta px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 ${cor}`}
                >
                  <Icone className="h-4.5 w-4.5" />
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-1.5 border-t border-tinta/15 pt-6 text-xs leading-relaxed text-tinta/55">
          <p>
            {cadastro.nome} — {cadastro.cargoUf} — {cadastro.partido} — {cadastro.numero}
          </p>
          <p>CNPJ da campanha: {cadastro.cnpj}</p>
          <p>
            Dados de registro conforme o sistema DivulgaCandContas do Tribunal Superior Eleitoral.
          </p>
          <p className="pt-2">
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
