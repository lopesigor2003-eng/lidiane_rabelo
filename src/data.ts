import { SpecialityItem, Testimonial, GalleryImage } from "./types";

export const HERO_IMAGE = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAER0sxDpi-G_e2PGNBJBmbg2PEuh64pNdWZoHCmZfacmsFugAbbzF-ORYw-7lzppU9yq1HLrm8Ngo7uI6LTZRAD-Vc7j9VVcgMrfwKc3LMU4h9crBdwYnevaepPounMkiZzFbU3c3xyWCQ4=w1000-h1500-k-no";

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF8QUn4n9AYeKxGNnYf6-7ZmASnF3mkWmHD_Fn-Nr3Fx4nnxta5RPoZIjhFj4CD_Nx-HPTdoi4PpVB_HHca-GYXBXZRb7FTpmbpa4ObeAT-eLinj-uNvi3UxZ8vZrlZKcfUm6B1Yiw5xB5o=w1000-h1000-k-no",
    alt: "Interior do consultório da Psicóloga Lidiane Rabelo - Recepção e poltronas confortáveis com luz suave"
  },
  {
    id: "g2",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGwmJ0t-_F_H9Nw1nh029-L0YWUlZzjQYBm4zipMg2p1XSrBPlfzTj7CRFieYfOEbhHT2UmU3Wm_hdkrPv_zkvosjjcnNMhw1MLOpmriqUP1KCVpaAz1qWFksinXqPMH1vhts=w1000-h1000-k-no",
    alt: "Interior do consultório da Psicóloga Lidiane Rabelo - Divã de atendimento e ambiente terapêutico acolhedor"
  },
  {
    id: "g3",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFnNv6EaN4zYrAgeACKqgiC3ulZvbewEKBRG9U1cHge5WUa-IyOx-0Qg0ONYRxalUaUnbYKV7c7sbSUa-spvlsMLrDcT9-svLxIBoehDpyp2RjtIa_OFYB0uke5NBhxPqSOwuTXzg=w1000-h1500-k-no",
    alt: "Interior do consultório da Psicóloga Lidiane Rabelo - Detalhes decorativos e iluminação aconchegante"
  },
  {
    id: "g4",
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAER0sxDpi-G_e2PGNBJBmbg2PEuh64pNdWZoHCmZfacmsFugAbbzF-ORYw-7lzppU9yq1HLrm8Ngo7uI6LTZRAD-Vc7j9VVcgMrfwKc3LMU4h9crBdwYnevaepPounMkiZzFbU3c3xyWCQ4=w1000-h1500-k-no",
    alt: "Interior do consultório da Psicóloga Lidiane Rabelo - Entrada, lavabo e espaço de acolhimento em Criciúma"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ariel Medeiros",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUsNZWYMeBgsjHms5qUNCMQ73tAEOVGRqDLxZtde2Jv0JWvlyxz2g=w100-h100-p-rp-mo-br100",
    text: "A Lidi é uma ótima profissional e uma pessoa maravilhosa! Agradeço o dia que começamos nossas sessões. É uma psicóloga humana que possuí um carinho muito grande pelos seus pacientes."
  },
  {
    id: "t2",
    name: "Vitor De Brida",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIIY-jq-cApOjEtFja6VpF-TiRgPoE3pGq7UicoXQjX2sVX6Q=w100-h100-p-rp-mo-br100",
    text: "A Lidi é uma pessoa única e cativante. Poder compartilhar com ela tudo aquilo que sempre guardei dentro de mim tem sido libertador. Apesar de estar apenas no início, já pude sentir uma grande diferença em minha vida. A forma como ela conduz as sessões torna o ambiente mais leve e prático para trabalhar o autoconhecimento e resolver os problemas mais profundos. Só tenho a te agradecer por tudo que fizestes e pelo que ainda está por vir!!"
  },
  {
    id: "t3",
    name: "Tamara Oliveira",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIYpEzk4tVvEpiG0vPZgaeobqkgSYUDioKRNKQwPpLxWERRnw=w100-h100-p-rp-mo-br100",
    text: "Quero te agradecer de coração por todo o cuidado, paciência e dedicação ao longo desse processo. Nossas conversas têm me ajudado a enxergar a vida — e a mim mesma — com mais gentileza e compreensão. Cada sessão é um espaço seguro onde posso ser quem sou, sem medo, e isso tem feito toda a diferença na minha caminhada. Sou muito grata por ter uma profissional tão sensível e humana ao meu lado nessa jornada.” 💛 Obrigada Lidiane ✨"
  }
];

export const SPECIALITIES: SpecialityItem[] = [
  // Acessibilidade
  { id: "a1", category: "access", label: "Assento com acessibilidade para pessoas em cadeira de rodas" },
  { id: "a2", category: "access", label: "Banheiro com acessibilidade para pessoas em cadeira de rodas" },
  { id: "a3", category: "access", label: "Entrada com acessibilidade para pessoas em cadeira de rodas" },
  { id: "a4", category: "access", label: "Estacionamento com acessibilidade para pessoas em cadeira de rodas" },
  { id: "a5", category: "access", label: "Aro de indução magnética" },

  // Da Empresa
  { id: "b1", category: "business", label: "Se identifica como uma empresa de empreendedoras" },
  { id: "b2", category: "business", label: "Empresa que acolhe a comunidade LGBTQ+" },
  { id: "b3", category: "business", label: "Espaço seguro para pessoas transgênero" },

  // Opções de Serviço
  { id: "s1", category: "options", label: "Serviços no local" },
  { id: "s2", category: "options", label: "Idiomas de atendimento: Português" },

  // Comodidades
  { id: "c1", category: "amenities", label: "Banheiro disponível no local" },

  // Planejamento
  { id: "p1", category: "planning", label: "Necessário fazer agendamento" },
  { id: "p2", category: "planning", label: "É recomendado marcar hora com antecedência" },

  // Estacionamento
  { id: "pk1", category: "parking", label: "Estacionamento coberto gratuito" },
  { id: "pk2", category: "parking", label: "Estacionamento coberto pago" },
  { id: "pk3", category: "parking", label: "Estacionamento descoberto gratuito" },
  { id: "pk4", category: "parking", label: "Estacionamento descoberto pago" },
  { id: "pk5", category: "parking", label: "Estacionamento gratuito na rua" },
  { id: "pk6", category: "parking", label: "Estacionamento no local" },
  { id: "pk7", category: "parking", label: "Estacionamento pago na rua" }
];

export const CONTACT_INFO = {
  phone: "(48) 99617-1745",
  phoneLink: "tel:+5548996171745",
  whatsappLink: "https://wa.me/5548996171745",
  email: "contato@lidianerabelo.com.br",
  hours: "Seg a Sex: 10:00 - 18:00",
  address: "Edifício Centro Profissional - R. Cel. Pedro Benedet, 488 - sala 802 - Pio Corrêa, Criciúma - SC, 88801-250",
  shortAddress: "Pio Corrêa, Criciúma - SC",
  crp: "CRP 12/15181",
  instagram: "https://www.instagram.com/alidianerabelo/",
  facebook: "https://www.facebook.com/psicolidianerabelo/",
  linkedin: "https://www.linkedin.com/in/lidiane-rabelo-de-oliveira-536b76101/"
};
