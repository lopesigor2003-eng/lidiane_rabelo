import { useState } from "react";
import {
  Accessibility,
  Building2,
  CalendarDays,
  Car,
  HeartHandshake,
  CheckCircle2,
  Users,
} from "lucide-react";
import { SPECIALITIES } from "../data";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tudo", icon: <Users size={16} /> },
    { id: "access", label: "Acessibilidade", icon: <Accessibility size={16} /> },
    { id: "business", label: "Inclusão & Diversidade", icon: <HeartHandshake size={16} /> },
    { id: "parking", label: "Estacionamento", icon: <Car size={16} /> },
    { id: "planning", label: "Agendamento", icon: <CalendarDays size={16} /> },
  ];

  // Group specialities dynamically
  const filteredSpecialities = SPECIALITIES.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "access" && item.category === "access") return true;
    if (activeCategory === "business" && item.category === "business") return true;
    if (activeCategory === "parking" && item.category === "parking") return true;
    if (activeCategory === "planning" && item.category === "planning") return true;
    return false;
  });

  const clinicalScopes = [
    {
      title: "Autoestima & Autoconfiança",
      desc: "Trabalho terapêutico focado em restabelecer a segurança interna, o autocuidado e a superação da autocrítica prejudicial para mulheres.",
    },
    {
      title: "Transtornos de Ansiedade",
      desc: "Apoio clínico no manejo do estresse, síndrome do pânico e crises de ansiedade generalizada com suporte corporal somático.",
    },
    {
      title: "Depressão & Vitalidade",
      desc: "Processo focado na ressignificação do sofrimento mental, reganho da força expressiva e reativação da alegria de viver.",
    },
    {
      title: "Sexualidade & Ciclos Femininos",
      desc: "Espaço sigiloso e livre de julgamentos para tratar dores emocionais relacionadas ao prazer, sexualidade e identidade feminina.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-brand-gold uppercase justify-center">
            <span className="w-6 h-0.5 bg-brand-gold"></span>
            Abordagem e Cuidado
            <span className="w-6 h-0.5 bg-brand-gold"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            Especialidades e Abordagem Terapêutica
          </h2>
          
          <article className="text-brand-dark/90 leading-relaxed text-base sm:text-lg">
            A profissional realiza um atendimento que tem como objetivo melhorar a qualidade de vida das pessoas, de forma altamente ética, humana e comprometida. Atende adolescentes e adultas, trabalhando de forma focada com questões relacionadas a autoestima, ansiedade, depressão, sexualidade, entre outros.
          </article>
        </div>

        {/* Clinical focus grid with Neumorphic elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {clinicalScopes.map((scope, idx) => (
            <div
              key={idx}
              className="card-neo-flat p-6 sm:p-8 hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-card shadow-md flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/50 group-hover:scale-105 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark mb-2">
                    {scope.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed">
                    {scope.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities, Accessibility, Infrastructure Block */}
        <div className="card-neo-flat p-6 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
              Infraestrutura & Comodidades do Consultório
            </h3>
            <p className="text-sm text-brand-dark/70">
              Certificação de acessibilidade e acolhimento para proporcionar a melhor experiência presencial possível.
            </p>
          </div>

          {/* Filtering buttons with Neumorphic flat/pressed states */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-label={`Filtrar comodidades por ${cat.label}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                  activeCategory === cat.id
                    ? "btn-neo-pressed text-brand-gold border-brand-gold/30"
                    : "btn-neo-flat text-brand-dark/80"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Display grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSpecialities.map((item) => {
              // Custom category icons
              let icon = <CheckCircle2 size={16} className="text-brand-gold" />;
              if (item.category === "access") icon = <Accessibility size={16} className="text-brand-gold" />;
              if (item.category === "business") icon = <HeartHandshake size={16} className="text-brand-gold" />;
              if (item.category === "parking") icon = <Car size={16} className="text-brand-gold" />;
              if (item.category === "planning") icon = <CalendarDays size={16} className="text-brand-gold" />;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-brand-card/45 border border-white/30 hover:bg-brand-card transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-bg shadow-sm flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-xs sm:text-sm text-brand-dark/85 font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Quick Info Row */}
          <div className="mt-8 pt-6 border-t border-brand-dark/10 flex flex-wrap justify-around gap-6 text-center">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark/70">
              <Building2 size={16} className="text-brand-gold" />
              <span>Sala Comercial Climatizada e com Lavabo Privativo</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-dark/70">
              <CalendarDays size={16} className="text-brand-gold" />
              <span>Agendamento Prévio Necessário</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
