import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-card/30 border-t border-brand-card/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        
        {/* Column 1: Map Integration (takes 7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-brand-dark font-serif text-lg font-bold">
            <MapPin size={20} className="text-brand-gold" />
            <span>Como Chegar ao Consultório</span>
          </div>
          
          <p className="text-xs sm:text-sm text-brand-dark/75">
            Localizado no Edifício Centro Profissional, Sala 802, no bairro Pio Corrêa, Criciúma - SC. Ambiente central, de fácil acesso e com opções de estacionamento.
          </p>

          {/* Interactive Google Maps Frame with Neumorphic shadow */}
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-white/50 bg-brand-bg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4746653139364!2d-49.36706728492!3d-28.6748083824005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521828f398e2945%3A0x7e3d077d7df2fc6c!2sPsic%C3%B3loga%20Lidiane%20Rabelo!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório de Lidiane Rabelo no Google Maps"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Column 2: Quick Links & Summary info (takes 5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
          
          {/* Top section: Brand statement and hours */}
          <div className="space-y-4">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-brand-dark block">
              Psicóloga <span className="text-brand-gold">Lidiane Rabelo</span>
            </span>
            <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed">
              Atendimento psicoterapêutico especializado para mulheres sob a perspectiva da Psicoterapia Corporal Reichiana. Um trabalho que respeita a integridade física, mental e emocional de cada paciente.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-dark/80">
                <Clock size={16} className="text-brand-gold" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-dark/80">
                <Phone size={16} className="text-brand-gold" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-dark/80">
                <Mail size={16} className="text-brand-gold" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Center section: Secondary Links and Regulatory Note */}
          <div className="space-y-4 pt-6 lg:pt-0">
            {/* Regulatory compliance info */}
            <div className="p-3.5 rounded-xl bg-brand-bg/85 border border-white/40 text-[11px] leading-relaxed text-brand-dark/70">
              <strong>Conselho Federal de Psicologia:</strong> Atividade regulamentada sob as normas éticas do CFP. Inscrição do CRP: <strong>{CONTACT_INFO.crp}</strong>.
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-brand-dark/75">
              <a href="#about" className="hover:text-brand-gold transition-colors">Sobre</a>
              <a href="#services" className="hover:text-brand-gold transition-colors">Especialidades</a>
              <a href="#gallery" className="hover:text-brand-gold transition-colors">Consultório</a>
              <a href="#testimonials" className="hover:text-brand-gold transition-colors">Depoimentos</a>
              <a href="#contact" className="hover:text-brand-gold transition-colors">Contato</a>
              <span className="text-brand-dark/20">|</span>
              <a href="#privacy" className="hover:text-brand-gold transition-colors text-brand-dark/50">Privacidade</a>
              <a href="#terms" className="hover:text-brand-gold transition-colors text-brand-dark/50">Termos</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-xs text-brand-dark/65">
          © {currentYear} Psicóloga Lidiane Rabelo. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-brand-dark/45 font-sans tracking-widest uppercase">
          Estética Soft UI • Criciúma - Santa Catarina
        </p>
      </div>
    </footer>
  );
}
