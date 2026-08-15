import Image from "next/image";
import { bandeiras, cadastro, redes, site } from "@/lib/site";
import { SeloIcon, SetaIcon, WhatsAppIcon } from "./Icons";

/** Cores dos marcadores das bandeiras, alternadas sobre o ciano. */
const ACENTOS = ["#E51A6E", "#A5C614", "#0B0B0C", "#E51A6E"];

function Linha({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-tinta/10 py-2.5 last:border-0">
      <dt className="text-[0.7rem] font-extrabold uppercase tracking-widest text-tinta/50">
        {rotulo}
      </dt>
      <dd className="text-sm font-bold tabular-nums">{valor}</dd>
    </div>
  );
}

export default function Cadastro() {
  return (
    <section id="cadastro" className="relative overflow-hidden bg-ciano text-white">
      <div aria-hidden className="flex h-1.5">
        <span className="w-1/3 bg-magenta" />
        <span className="w-1/3 bg-white" />
        <span className="w-1/3 bg-lima" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16 lg:py-24">
        {/* Cartão do registro */}
        <div className="self-start rounded-3xl border-2 border-tinta bg-white p-6 text-tinta shadow-[10px_10px_0_0_#E51A6E] sm:p-7">
          <div className="flex items-center gap-2 text-magenta">
            <SeloIcon className="h-5 w-5" />
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em]">
              Registro de candidatura
            </p>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="relative shrink-0 overflow-hidden rounded-2xl border-2 border-tinta">
              <Image
                src="/img/roberta-oficial.png"
                alt={`Foto oficial de ${site.nome}`}
                width={933}
                height={1400}
                sizes="112px"
                className="h-32 w-24 object-cover object-top"
              />
              <span className="absolute inset-x-0 bottom-0 bg-magenta py-1 text-center text-[0.6rem] font-extrabold uppercase tracking-wider text-white">
                {cadastro.status}
              </span>
            </div>
            <div>
              <p className="text-2xl font-black leading-none aperta">{cadastro.nome}</p>
              <p className="mt-2 text-sm font-semibold text-tinta/70">{cadastro.cargoUf}</p>
              <p className="text-sm font-semibold text-tinta/70">{cadastro.partido}</p>
              <p className="mt-2 text-4xl font-black leading-none aperta">{cadastro.numero}</p>
            </div>
          </div>

          <dl className="mt-6">
            <Linha rotulo="CPF" valor={cadastro.cpf} />
            <Linha rotulo="CNPJ de campanha" valor={cadastro.cnpj} />
            <Linha rotulo="Eleição" valor={cadastro.eleicao} />
          </dl>

          <div className="mt-5 space-y-2.5">
            {cadastro.situacoes.map((s) => (
              <div key={s.rotulo} className="rounded-xl bg-tinta px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-black leading-none">{s.valor}</p>
                  <span className="group relative inline-flex">
                    <button
                      type="button"
                      aria-label={`O que significa: ${s.rotulo}`}
                      className="grid h-5 w-5 place-items-center rounded-full border border-white/60 text-[0.65rem] font-bold text-white/80 transition hover:border-lima hover:text-lima"
                    >
                      ?
                    </button>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg border-2 border-tinta bg-white p-2.5 text-xs font-medium leading-snug text-tinta opacity-0 shadow-bloco-sm transition group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      {s.ajuda}
                    </span>
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-white/60">{s.rotulo}</p>
              </div>
            ))}
          </div>

          <a
            href={cadastro.fonte}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-tinta/60 underline decoration-dotted underline-offset-4 transition hover:text-magenta"
          >
            Fonte: DivulgaCandContas — TSE
            <SetaIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mandato + chamada final */}
        <div>
          <h2 className="text-4xl font-black leading-[1.05] aperta sm:text-5xl">
            Mandato de porta
            <br />
            <span className="contorno-claro">aberta na Bahia</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
            Administradora formada pela UNIFACS, {site.nome} está no primeiro mandato como{" "}
            {site.cargo.toLowerCase()}, iniciado em 1º de fevereiro de 2023. Preside o PL Mulher e
            atua nas comissões de Agricultura, Turismo, Minas e Energia e Meio Ambiente.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bandeiras.map((b, i) => (
              <li
                key={b.titulo}
                className="rounded-2xl border-2 border-white/40 bg-white/15 p-4 transition hover:border-white hover:bg-white/25"
              >
                <span
                  className="block h-1.5 w-10 rounded-full"
                  style={{ background: ACENTOS[i % ACENTOS.length] }}
                />
                <p className="mt-3 text-lg font-black leading-tight aperta">{b.titulo}</p>
                <p className="mt-1 text-sm text-white/80">{b.detalhe}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl border-2 border-tinta bg-lima p-6 text-tinta shadow-bloco sm:p-7">
            <p className="text-xl font-black leading-tight aperta sm:text-2xl">
              Acompanhe o mandato de perto no canal do WhatsApp.
            </p>
            <p className="mt-2 text-sm font-medium text-tinta/75">
              Agenda, projetos e prestação de contas direto no seu celular. Canal só de leitura —
              seu número não fica visível.
            </p>
            <a
              href={redes.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2.5 rounded-full border-2 border-tinta bg-tinta px-6 py-3.5 text-sm font-extrabold uppercase tracking-tight text-white transition hover:-translate-y-0.5 hover:bg-magenta hover:border-magenta"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Seguir o canal
              <SetaIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
