/**
 * Fonte única de conteúdo do site.
 * Edite aqui — os componentes só consomem estes dados.
 */

export const site = {
  nome: "Roberta Roma",
  cargo: "Deputada Federal",
  uf: "Bahia",
  partido: "Partido Liberal — PL",
  numero: "2222",
  slogan: "Construindo uma Bahia de oportunidades para todos",
  chamada:
    "Administradora, deputada federal pela Bahia e presidente do PL Mulher. Eleita em 2022 com mais de 160 mil votos — a primeira parlamentar votada nos 417 municípios do estado.",
  url: "https://robertaroma.com.br",
} as const;

/** Dados do registro de candidatura — DivulgaCand / TSE. */
export const cadastro = {
  nome: "ROBERTA ROMA",
  cpf: "946.046.905-10",
  cargoUf: "Deputado Federal — Bahia / BR",
  partido: "Partido Liberal — PL",
  cnpj: "68.237.986/0001-51",
  numero: "2222",
  eleicao: "Eleições Gerais 2026",
  status: "Concorrendo",
  situacoes: [
    {
      rotulo: "Situação da Candidatura",
      valor: "Deferido",
      ajuda:
        "O pedido de registro da candidatura foi analisado e aprovado pela Justiça Eleitoral.",
    },
    {
      rotulo: "Situação Partido / Federação / Coligação",
      valor: "Deferido",
      ajuda:
        "O demonstrativo de regularidade dos atos partidários foi aprovado pela Justiça Eleitoral.",
    },
  ],
  fonte:
    "https://divulgacandcontas.tse.jus.br/divulga/#/candidato/NORDESTE/BA/20322002026/50002532910/2026/BA",
} as const;

/** Marcadores de atuação parlamentar (Câmara dos Deputados / mandato 2023–2027). */
export const bandeiras = [
  { titulo: "Agronegócio", detalhe: "Comissão de Agricultura e Pecuária" },
  { titulo: "Mulher na política", detalhe: "Presidente do PL Mulher" },
  { titulo: "Turismo", detalhe: "Comissão de Turismo" },
  { titulo: "Energia renovável", detalhe: "Comissão de Minas e Energia" },
] as const;

export const redes = {
  whatsapp: {
    rotulo: "Canal no WhatsApp",
    href: "https://whatsapp.com/channel/0029VbD8PI8002TEetLVc200",
  },
  instagram: {
    rotulo: "Instagram",
    handle: "@robertaroma.ba",
    href: "https://www.instagram.com/robertaroma.ba/",
  },
  facebook: {
    rotulo: "Facebook",
    handle: "/robertaroma.ba",
    href: "https://www.facebook.com/robertaroma.ba/",
  },
} as const;
