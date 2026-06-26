import { CheckCircle2 } from "lucide-react";

export default function Services() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      </div>
    </section>
  );
}
