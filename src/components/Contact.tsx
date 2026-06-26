import { useState, FormEvent, ChangeEvent } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (validationError) setValidationError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic verification
    if (!formData.nome.trim()) {
      setValidationError("Por favor, preencha o seu nome.");
      return;
    }
    if (!formData.email.trim() && !formData.telefone.trim()) {
      setValidationError("Por favor, forneça pelo menos um meio de contato (E-mail ou Telefone).");
      return;
    }
    if (!formData.mensagem.trim()) {
      setValidationError("Por favor, escreva sua mensagem ou dúvida.");
      return;
    }

    setFormStatus("submitting");

    // Simulate reliable API endpoint submission with timeout
    setTimeout(() => {
      setFormStatus("success");
      // Reset form on success
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    }, 1500);
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, url: CONTACT_INFO.instagram, label: "Visitar Instagram Oficial" },
    { icon: <Facebook size={18} />, url: CONTACT_INFO.facebook, label: "Visitar Facebook Profissional" },
    { icon: <Linkedin size={18} />, url: CONTACT_INFO.linkedin, label: "Conectar via LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-brand-gold uppercase">
            <span className="w-6 h-0.5 bg-brand-gold"></span>
            Vamos Conversar?
            <span className="w-6 h-0.5 bg-brand-gold"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            Entre em Contato
          </h2>
          <p className="text-brand-dark/75">
            Dê o primeiro passo para o seu processo de cura corporal e emocional. Utilize o formulário abaixo ou fale comigo diretamente pelo WhatsApp ou telefone.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Details Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="card-neo-flat p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
                Informações de Atendimento
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg shadow-sm flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-dark/60">
                      WhatsApp e Telefone
                    </h4>
                    <a
                      href={CONTACT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Iniciar conversa por WhatsApp no número (48) 99617-1745"
                      className="text-base sm:text-lg font-bold text-brand-dark hover:text-brand-gold transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <span className="text-xs text-brand-dark/50 block">
                      (Clique para falar diretamente via chat)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg shadow-sm flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-dark/60">
                      E-mail Profissional
                    </h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      aria-label={`Enviar e-mail para ${CONTACT_INFO.email}`}
                      className="text-base font-semibold text-brand-dark hover:text-brand-gold transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg shadow-sm flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-dark/60">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-sm sm:text-base font-medium text-brand-dark">
                      {CONTACT_INFO.hours}
                    </p>
                    <span className="text-xs text-brand-dark/60 block">
                      Atendimentos estritamente sob agendamento prévio.
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg shadow-sm flex items-center justify-center text-brand-gold flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-dark/60">
                      Localização do Consultório
                    </h4>
                    <p className="text-sm text-brand-dark/95 leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels with round Neumorphic links */}
              <div className="pt-6 border-t border-brand-dark/10">
                <h4 className="font-sans font-semibold text-xs uppercase tracking-wider text-brand-dark/60 mb-4 text-center lg:text-left">
                  Siga nas Redes Sociais
                </h4>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 rounded-xl btn-neo-flat flex items-center justify-center hover:text-brand-gold"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-neo-flat p-6 sm:p-8 md:p-10">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de contato">
                {/* Nome Field */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="nome" className="text-xs sm:text-sm font-semibold text-brand-dark/80">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    aria-label="Preencha seu nome completo"
                    placeholder="Como gostaria de ser chamada?"
                    value={formData.nome}
                    onChange={handleChange}
                    className="input-neo px-4 py-3 rounded-xl text-sm sm:text-base w-full"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-brand-dark/80">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      aria-label="Preencha seu endereço de e-mail"
                      placeholder="Ex: seuemail@dominio.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-neo px-4 py-3 rounded-xl text-sm sm:text-base w-full"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>

                  {/* Telefone */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="telefone" className="text-xs sm:text-sm font-semibold text-brand-dark/80">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      aria-label="Preencha seu telefone ou whatsapp"
                      placeholder="Ex: (48) 99999-9999"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="input-neo px-4 py-3 rounded-xl text-sm sm:text-base w-full"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                </div>

                {/* Mensagem Field */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="mensagem" className="text-xs sm:text-sm font-semibold text-brand-dark/80">
                    Sua Mensagem ou Dúvida *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    aria-label="Escreva sua mensagem ou dúvida"
                    rows={4}
                    placeholder="Fique à vontade para relatar brevemente o que busca ou tirar qualquer dúvida..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="input-neo px-4 py-3 rounded-xl text-sm sm:text-base w-full resize-none"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                </div>

                {/* Validation Error Alert */}
                {validationError && (
                  <div className="flex items-center gap-2 text-red-700 bg-red-100/80 p-3 rounded-xl border border-red-200/50 text-xs sm:text-sm">
                    <AlertCircle size={16} />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Success Message Alert */}
                {formStatus === "success" && (
                  <div className="flex items-start gap-3 text-emerald-800 bg-emerald-100/90 p-4 rounded-xl border border-emerald-200/50 text-xs sm:text-sm">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Mensagem enviada com sucesso!</p>
                      <p className="text-emerald-700/90">Agradeço seu contato. Retornarei em breve pelo seu WhatsApp ou e-mail.</p>
                    </div>
                  </div>
                )}

                {/* Button container */}
                <div className="pt-2">
                  <button
                    type="submit"
                    aria-label="Enviar formulário de contato"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    className={`w-full btn-neo-gold py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 text-base ${
                      (formStatus === "submitting" || formStatus === "success") && "opacity-70 pointer-events-none"
                    }`}
                  >
                    <Send size={18} />
                    <span>{formStatus === "submitting" ? "Enviando..." : formStatus === "success" ? "Enviado!" : "Enviar Mensagem"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
