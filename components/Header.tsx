import Image from "next/image";
import { redes } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/* Faixa tricolor da marca */}
      <div className="flex h-1.5">
        <span className="w-1/3 bg-magenta" />
        <span className="w-1/3 bg-lima" />
        <span className="w-1/3 bg-ciano" />
      </div>

      <div className="border-b-2 border-tinta bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#topo" className="flex items-center gap-3" aria-label="Roberta Roma 2222 — início">
            <Image
              src="/img/logo-marca.png"
              alt="Roberta Roma"
              width={1200}
              height={576}
              priority
              className="h-8 w-auto sm:h-9"
            />
            <span className="rounded-lg border-2 border-tinta bg-tinta px-2 py-0.5 text-lg font-black leading-none text-white aperta">
              2222
            </span>
          </a>

          <nav className="flex items-center gap-2">
            <a
              href={redes.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Roberta Roma"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-tinta text-tinta transition hover:-translate-y-0.5 hover:bg-magenta hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={redes.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Roberta Roma"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-tinta text-tinta transition hover:-translate-y-0.5 hover:bg-ciano hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={redes.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border-2 border-tinta bg-lima px-5 py-2.5 text-sm font-extrabold uppercase tracking-tight text-tinta shadow-bloco-sm transition hover:-translate-y-0.5 hover:shadow-bloco sm:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Entrar no canal
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
