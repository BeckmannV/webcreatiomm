import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#14141c] border border-purple-500/30 flex items-center justify-center text-xs font-mono font-semibold text-purple-300">
                WC
              </span>
              <span className="text-white font-bold tracking-tight text-base">
                Web Creation
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Desenvolvimento de sites modernos, autorais e funcionais para negócios, profissionais autônomos e projetos independentes.
            </p>

            <div className="text-xs text-zinc-400 font-mono space-y-1">
              <div>São Paulo, SP · Brasil</div>
              <div>
                <a
                  href="https://api.whatsapp.com/send/?phone=5512992065569&text=Ol%C3%A1%21+Meu+nome+%C3%A9+______.+Tenho+um%28a%29+______+%28neg%C3%B3cio%2Fprofiss%C3%A3o%29+e+gostaria+de+um+or%C3%A7amento+para+um+site.+Minha+ideia%3A+______.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp: (12) 99206-5569</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Web Creation
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Projetos & Portfólio
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Oferecidos
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Processo de Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Context & Dev */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Desenvolvedor
            </div>
            <div className="text-xs text-zinc-300 leading-relaxed">
              <div className="font-semibold text-white">Luiz Miguel</div>
              <div className="text-zinc-400 mt-0.5">Estudante de Informática & Desenvolvimento de Sistemas na ETEC</div>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-purple-400 font-mono">
                HTML5 · CSS · TypeScript · React
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Web Creation. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">
              Projetado e codificado com foco em clareza
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
              aria-label="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
