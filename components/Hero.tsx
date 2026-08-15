import Image from "next/image";
import { redes, site } from "@/lib/site";
import { InstagramIcon, SetaIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white">
      {/* Blocos de cor ao fundo, ecoando as letras da logo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rotate-12 rounded-[4rem] bg-lima/20" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 -rotate-6 rounded-[3rem] bg-ciano/15" />
        <div className="absolute -right-16 top-1/4 h-80 w-80 rotate-6 rounded-[5rem] bg-magenta/10" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-0 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 lg:pt-16">
        {/* Coluna de texto */}
        <div className="animate-subir">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-magenta" />
            {site.cargo} · {site.uf}
          </p>

          <h1 className="mt-6">
            <span className="sr-only">
              {site.nome} — {site.cargo} pela {site.uf}, {site.numero}
            </span>
            <Image
              src="/img/logo-2222.png"
              alt=""
              width={1200}
              height={1003}
              priority
              className="h-auto w-full max-w-[19rem] sm:max-w-[23rem]"
            />
          </h1>

          <p className="mt-7 max-w-lg text-balance text-2xl font-black leading-[1.15] aperta sm:text-3xl">
            {site.slogan}
            <span className="text-magenta">.</span>
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-tinta/70">
            {site.chamada}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={redes.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-tinta bg-lima px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-tinta shadow-bloco transition hover:-translate-y-0.5 hover:bg-lima/90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {redes.whatsapp.rotulo}
              <SetaIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={redes.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-tinta bg-white px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-tinta shadow-bloco-sm transition hover:-translate-y-0.5 hover:bg-magenta hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
              {redes.instagram.handle}
            </a>
          </div>

          <a
            href="#cadastro"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold underline decoration-magenta decoration-2 underline-offset-4 transition hover:text-magenta"
          >
            Ver registro oficial no TSE
            <SetaIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>

        {/* Coluna da foto */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-x-4 bottom-0 top-10 rounded-t-[999px] bg-gradient-to-b from-magenta to-magenta/70"
          />
          <div
            aria-hidden
            className="absolute -right-2 top-16 hidden h-24 w-24 rotate-12 rounded-2xl border-2 border-tinta bg-ciano sm:block"
          />
          <div
            aria-hidden
            className="absolute -left-3 bottom-24 hidden h-16 w-16 -rotate-12 rounded-xl border-2 border-tinta bg-lima sm:block"
          />

          <Image
            src="/img/roberta-recorte.png"
            alt={`${site.nome}, ${site.cargo} pela ${site.uf}`}
            width={1066}
            height={1600}
            priority
            sizes="(max-width: 1024px) 90vw, 480px"
            className="relative h-auto w-full drop-shadow-2xl"
          />

          {/* Selo do número */}
          <div className="absolute bottom-8 left-0 -rotate-6 rounded-2xl border-2 border-tinta bg-white px-5 py-2 shadow-bloco sm:bottom-16">
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-tinta/60">
              {site.partido}
            </p>
            <p className="text-3xl font-black leading-none aperta">{site.numero}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
