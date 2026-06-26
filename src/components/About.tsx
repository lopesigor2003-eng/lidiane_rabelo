import { Heart, Activity, Compass, Shield } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function About() {
  const therapyPillars = [
    {
      icon: <Activity className="text-brand-gold" size={24} />,
      title: "Respiração Integrativa",
      text: "Exercícios de respiração consciente projetados para restabelecer o fluxo natural do organismo e desatar nós musculares de estresse.",
    },
    {
      icon: <Compass className="text-brand-gold" size={24} />,
      title: "Actings Reichianos",
      text: "Movimentos neuromusculares expressivos que estimulam a liberação de reflexos emocionais reprimidos ao longo da vida.",
    },
    {
      icon: <Heart className="text-brand-gold" size={24} />,
      title: "Toques Terapêuticos",
      text: "Massagens corporais sensíveis com toques específicos que trabalham diretamente na musculatura couraçada para libertação da energia vital.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-brand-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Core Bio and Background */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex self-start items-center gap-2 text-sm font-semibold tracking-wider text-brand-gold uppercase">
              <span className="w-6 h-0.5 bg-brand-gold"></span>
              Psicologia e Corporalidade
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
              Sobre Lidiane Rabelo
            </h2>

            <article className="space-y-4 text-brand-dark/95 text-base leading-relaxed">
              <p className="font-medium text-lg text-brand-gold/90">
                Olá, seja muito bem-vinda. Meu nome é Lidiane Rabelo (CRP 12/15181).
              </p>
              
              <p>
                Sou psicóloga clínica e possuo formação especializada em{" "}
                <strong>Psicoterapia Corporal Reichiana</strong> pelo conceituado{" "}
                <strong>Instituto Hollon</strong>. Minha atuação baseia-se na compreensão profunda de que mente e corpo formam uma unidade integrada e indissolúvel.
              </p>

              <p>
                Na abordagem Reichiana, o ser humano é compreendido de maneira verdadeiramente holística. Isso significa que as nossas vivências, traumas e dores emocionais não ficam restritas apenas aos nossos pensamentos: elas se manifestam fisicamente no corpo em forma de tensões musculares crônicas — a chamada <strong>couraça neuromuscular</strong>.
              </p>

              <p>
                Por isso, além do acolhimento por meio da terapia falada tradicional, o processo clínico integra técnicas corporais dinâmicas: exercícios direcionados de respiração, movimentos expressivos (actings) e toques de massagem especializados. O objetivo é suavizar essas couraças corporais, ajudando a liberar de forma segura as emoções que foram reprimidas ao longo de sua história.
              </p>
            </article>

            {/* Sub-block: Espaço de Acolhimento */}
            <div className="card-neo-pressed p-6 sm:p-8 mt-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-card rounded-2xl shadow-inner border border-white/45 text-brand-gold flex-shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    Um Espaço de Acolhimento e Confiança
                  </h3>
                  <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
                    Meu consultório foi idealizado para ser um ambiente seguro, extremamente acolhedor e de absoluto sigilo profissional no coração de Criciúma. Sinta-se plenamente à vontade para entrar em contato, tirar suas dúvidas e dar o primeiro passo para agendar seu atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Pillars of somatic therapy in Neumorphic Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6 mt-6 lg:mt-0">
            <div className="card-neo-flat p-6 sm:p-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark text-center lg:text-left mb-6">
                Como Funciona a Terapia Corporal?
              </h3>
              
              <div className="space-y-6">
                {therapyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-brand-bg/40 border border-white/30 hover:shadow-inner transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-brand-card flex items-center justify-center shadow-md border border-white/50 text-brand-gold">
                      {pillar.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans font-semibold text-brand-dark text-sm sm:text-base">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10 text-center">
                <span className="text-xs font-sans tracking-wider text-brand-dark/60 block">
                  Para adolescentes e adultas • Atendimento individualizado
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
