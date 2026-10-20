import React, { useState, useEffect } from 'react';
import { Send, Check, MessageSquare, Mail, Copy, CheckCheck, RefreshCw, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    projectType: preselectedService || 'Site Institucional',
    description: '',
    timeline: '',
    budget: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome.';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Informe seu e-mail ou número de WhatsApp.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Conte um pouco sobre o que você deseja criar.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Por favor, detalhe sua ideia em pelo menos 15 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const formattedMessage = `*Solicitação de Orçamento — Web Creation*
*Nome:* ${formData.name}
*Contato:* ${formData.contact}
*Tipo de Projeto:* ${formData.projectType}
${formData.timeline ? `*Prazo Desejado:* ${formData.timeline}\n` : ''}${formData.budget ? `*Estimativa de Orçamento:* ${formData.budget}\n` : ''}
*Descrição da Ideia:*
${formData.description}`;

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const whatsappDirectUrl = "https://api.whatsapp.com/send/?phone=5512992065569&text=Ol%C3%A1%21+Meu+nome+%C3%A9+______.+Tenho+um%28a%29+______+%28neg%C3%B3cio%2Fprofiss%C3%A3o%29+e+gostaria+de+um+or%C3%A7amento+para+um+site.+Minha+ideia%3A+______.&type=phone_number&app_absent=0";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=5512992065569&text=${encodeURIComponent(formattedMessage)}&type=phone_number&app_absent=0`;
  const mailtoUrl = `mailto:contato.webcreation@gmail.com?subject=${encodeURIComponent(
    `Orçamento Web Creation — ${formData.name} (${formData.projectType})`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  return (
    <section id="contato" className="py-24 border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
                <span>Contato</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Vamos Conversar</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 [text-wrap:balance]">
                Tem uma ideia em mente?
              </h2>

              <p className="text-base text-zinc-300 leading-relaxed mb-6">
                Conte um pouco sobre seu projeto. Vamos entender o que você precisa e definir como transformar a ideia em um site moderno, rápido e funcional.
              </p>

              {/* Direct WhatsApp Action Box */}
              <div className="p-5 rounded-2xl bg-[#0f1418] border border-emerald-500/20 mb-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wide">
                  <MessageSquare className="w-4 h-4" />
                  <span>Atendimento Direto via WhatsApp</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Se preferir, inicie uma conversa diretamente pelo WhatsApp sem precisar preencher o formulário:
                </p>
                <div className="pt-1">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chamar no WhatsApp: (12) 99206-5569</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/[0.06]">
                  <div className="text-xs font-mono text-zinc-400 mb-1">Como funciona o retorno:</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Você preenche o resumo da ideia, revisa as informações e escolhe se prefere continuar a conversa pelo WhatsApp ou por e-mail com a proposta formatada.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/[0.06]">
                  <div className="text-xs font-mono text-zinc-400 mb-1">Sem custos iniciais:</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    A primeira conversa para entender suas necessidades e apresentar o orçamento é totalmente gratuita e sem compromisso.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.06] text-xs text-zinc-400 font-mono flex items-center justify-between">
              <span>Web Creation · Luiz Miguel</span>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                +55 (12) 99206-5569
              </a>
            </div>
          </div>

          {/* Right Column: Form or Proposal Brief */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-2xl bg-[#0e0e15] border border-white/[0.08] shadow-xl space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <h3 className="text-lg font-bold text-white">Solicitar proposta de projeto</h3>
                  <span className="text-xs font-mono text-zinc-400">Campos com * são obrigatórios</span>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Seu nome completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Carlos Oliveira"
                    className={`w-full bg-[#14141f] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500/80 focus:border-rose-400' : 'border-white/[0.08] focus:border-purple-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <label htmlFor="contact" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    WhatsApp ou E-mail para contato *
                  </label>
                  <input
                    id="contact"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Ex: (11) 98765-4321 ou seuemail@empresa.com"
                    className={`w-full bg-[#14141f] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.contact ? 'border-rose-500/80 focus:border-rose-400' : 'border-white/[0.08] focus:border-purple-400'
                    }`}
                  />
                  {errors.contact && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Tipo de projeto desejado
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#14141f] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="Site Institucional">Site Institucional (Empresa ou Consultório)</option>
                    <option value="Landing Page">Landing Page (Foco em Vendas / Conversão)</option>
                    <option value="Catálogo Digital">Catálogo Digital (Produtos ou Serviços)</option>
                    <option value="Portfólio Profissional">Portfólio Profissional (Exibição de Trabalhos)</option>
                    <option value="Reformulação de Site">Reformulação de Site Existente</option>
                    <option value="Outro / Projeto Personalizado">Outro / Projeto Personalizado</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Descrição da ideia ou necessidade *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Conte sobre seu negócio, quais seções imagina no site e o que deseja facilitar para seus clientes..."
                    className={`w-full bg-[#14141f] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.description ? 'border-rose-500/80 focus:border-rose-400' : 'border-white/[0.08] focus:border-purple-400'
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Optional fields in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Previsão de prazo (opcional)
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="Ex: Próximo mês ou urgente"
                      className="w-full bg-[#14141f] border border-white/[0.08] rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Estimativa de investimento (opcional)
                    </label>
                    <input
                      id="budget"
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="Ex: R$ 800 - R$ 2.000"
                      className="w-full bg-[#14141f] border border-white/[0.08] rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-purple-400"
                  >
                    <span>Gerar solicitação de orçamento</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Formatted Proposal View */
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e15] border border-purple-500/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Solicitação pronta para envio!</h3>
                    <p className="text-xs text-zinc-400">
                      Sua mensagem foi formatada. Escolha o canal de sua preferência para iniciar nossa conversa:
                    </p>
                  </div>
                </div>

                {/* Formatted Message Preview */}
                <div className="p-4 rounded-xl bg-[#13131e] border border-white/[0.06] font-mono text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {formattedMessage}
                </div>

                {/* Channels Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enviar via WhatsApp</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar por E-mail</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copiado para a área de transferência!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar mensagem completa</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Editar dados</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
