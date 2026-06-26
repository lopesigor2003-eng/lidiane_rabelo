import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-brand-gold uppercase">
            <span className="w-6 h-0.5 bg-brand-gold"></span>
            Histórias Reais de Transformação
            <span className="w-6 h-0.5 bg-brand-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            O que minhas clientes dizem
          </h2>
          <p className="text-brand-dark/75">
            Relatos espontâneos de mulheres (e homens em acolhimento somático) que encontraram no consultório presencial em Criciúma um porto seguro para a cura e autodescoberta.
          </p>
        </div>

        {/* Testimonials Grid Layout with beautiful Neumorphic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((test) => (
            <article
              key={test.id}
              className="card-neo-flat p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neo-flat-hover group"
            >
              {/* Decorative Quotation Mark */}
              <div className="absolute top-4 right-6 text-brand-dark/5 group-hover:text-brand-gold/10 transition-colors duration-300">
                <Quote size={56} className="fill-current" />
              </div>

              {/* Main Content */}
              <div className="space-y-4 relative z-10">
                {/* 5 Stars indicator */}
                <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-brand-dark/85 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* User Bio and Profile */}
              <div className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center gap-4 relative z-10">
                {/* Avatar with Neumorphism border */}
                <div className="w-12 h-12 rounded-full p-0.5 bg-brand-card shadow-inner border border-white/55 flex items-center justify-center">
                  <img
                    src={test.avatar}
                    alt={`Foto de perfil de ${test.name}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-brand-dark">
                    {test.name}
                  </h4>
                  <span className="text-xs text-brand-dark/60 block">
                    Cliente Atendida • Criciúma
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Maps ratings trust info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-brand-card/40 border border-white/40">
            <span className="text-sm text-brand-dark/75 font-medium">
              Avaliações reais extraídas diretamente de nossa página comercial no Google Maps.
            </span>
            <a
              href="https://www.google.com.br/maps/place/Psic%C3%B3loga+Lidiane+Rabelo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver mais depoimentos reais no perfil do Google Maps"
              className="text-xs sm:text-sm font-bold text-brand-gold hover:underline"
            >
              Ver perfil comercial no Google Maps →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
