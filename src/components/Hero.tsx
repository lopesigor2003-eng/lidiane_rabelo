import { Phone, Star, MessageSquare } from "lucide-react";
import { HERO_IMAGE, CONTACT_INFO } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
          {/* Trust Badge Indicator with Neumorphic pressed style */}
          <div className="self-center lg:self-start inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-gold btn-neo-pressed">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-brand-gold" />
              ))}
            </span>
            <a
              href="#testimonials"
              aria-label="Ver depoimentos das clientes"
              className="hover:underline text-brand-dark/90 ml-1 font-medium"
            >
              5 estrelas — +100 avaliações positivas
            </a>
          </div>

          {/* Main Title with serif family */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight">
            Lidiane Rabelo: <br />
            <span className="text-brand-gold">Psicóloga Clínica</span> para Mulheres
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-brand-dark/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Apoio, escuta e acolhimento em sua jornada de autoconhecimento,
            liberação emocional e bem-estar integral.
          </p>

          <p className="text-sm font-semibold text-brand-dark/70 uppercase tracking-widest">
            Criciúma / SC • Atendimentos Presenciais
          </p>

          {/* Interactive Call to Actions in Neumorphism */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a psicóloga no WhatsApp para agendar consulta"
              className="w-full sm:w-auto btn-neo-gold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold text-base transition-all"
            >
              <MessageSquare size={20} />
              <span>Agendar via WhatsApp</span>
            </a>

            <a
              href={CONTACT_INFO.phoneLink}
              aria-label="Ligar diretamente para a psicóloga Lidiane Rabelo"
              className="w-full sm:w-auto btn-neo-flat px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold text-base"
            >
              <Phone size={18} className="text-brand-gold" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>

          <div className="text-xs text-brand-dark/60 pt-2">
            * Atendimentos com sigilo profissional ético fundamentado pelas normas do CFP.
          </div>
        </div>

        {/* Hero Image Area in Neumorphic soft 3D extrude frame */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[450px] p-4 card-neo-flat flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-brand-card/30 border border-white/20">
              <img
                src={HERO_IMAGE}
                alt="Lidiane Rabelo, psicóloga clínica especializada no atendimento de mulheres"
                loading="eager"
                decoding="sync"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Soft decorative float tags */}
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-brand-card/90 backdrop-blur-sm rounded-xl text-xs font-semibold text-brand-dark shadow-md border border-white/40 btn-neo-flat">
              {CONTACT_INFO.crp}
            </div>
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-brand-card/90 backdrop-blur-sm rounded-xl text-xs font-semibold text-brand-dark shadow-md border border-white/40 btn-neo-flat">
              Terapia Reichiana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
