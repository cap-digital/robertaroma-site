import { redes } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

export default function DockSocial() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href={redes.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de Roberta Roma"
        className="grid h-11 w-11 place-items-center rounded-full border-2 border-tinta bg-white text-tinta shadow-bloco-sm transition hover:-translate-y-0.5 hover:bg-magenta hover:text-white"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>

      <a
        href={redes.facebook.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook de Roberta Roma"
        className="grid h-11 w-11 place-items-center rounded-full border-2 border-tinta bg-white text-tinta shadow-bloco-sm transition hover:-translate-y-0.5 hover:bg-ciano hover:text-white"
      >
        <FacebookIcon className="h-5 w-5" />
      </a>

      <a
        href={redes.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid h-14 w-14 place-items-center rounded-full border-2 border-tinta bg-lima text-tinta shadow-bloco transition hover:-translate-y-0.5"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-pulso rounded-full bg-lima/50"
        />
        <WhatsAppIcon className="h-7 w-7" />
        <span className="sr-only">{redes.whatsapp.rotulo}</span>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border-2 border-tinta bg-white px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-tight text-tinta opacity-0 shadow-bloco-sm transition group-hover:opacity-100 max-sm:hidden">
          {redes.whatsapp.rotulo}
        </span>
      </a>
    </div>
  );
}
