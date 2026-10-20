import React from 'react';
import { ArrowDown, MessageSquare, Briefcase } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToProjects }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main 2-column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed natural kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 tracking-wide">
              <span>Web Creation</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Por Luiz Miguel</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-purple-400">Desenvolvimento Web</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Sites bem pensados para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-white">
                negócios reais.
              </span>
            </h1>

            {/* Lead Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Desenvolvo sites que apresentam seu negócio, organizam suas informações e facilitam o contato com seus clientes. Design funcional, código limpo e atenção real a cada detalhe.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Vamos conversar sobre seu projeto</span>
              </button>

              <button
                type="button"
                onClick={onScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-zinc-400"
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Conhecer meus projetos</span>
              </button>
            </div>

            {/* Editorial Context Info */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div>
                <span className="text-zinc-500">Desenvolvimento:</span>{' '}
                <span className="text-zinc-300">Front-end moderno & responsivo</span>
              </div>
              <div className="hidden sm:block text-zinc-700">|</div>
              <div>
                <span className="text-zinc-500">Base:</span>{' '}
                <span className="text-zinc-300">Estudante de Informática na ETEC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Preview Asset */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl overflow-hidden border border-white/[0.08] bg-[#101017] shadow-2xl">
              {/* Window bar */}
              <div className="h-8 bg-[#14141f] border-b border-white/[0.06] px-3.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">webcreation.studio</span>
                <div className="w-8" />
              </div>

              {/* High-res generated workspace image */}
              <div className="aspect-[16/10] sm:aspect-[16/11] relative overflow-hidden bg-zinc-900">
                <img
                  src={HERO_IMAGE}
                  alt="Prévia de projeto de desenvolvimento web por Web Creation"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#0d0d14] border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-medium">Ambiente de desenvolvimento & design</span>
                <span className="text-zinc-500 font-mono">React · TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Principles Strip Below Hero */}
        <div className="mt-16 pt-10 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs font-mono text-purple-400 mb-1">01 / Construção</div>
            <h2 className="text-sm font-semibold text-white mb-1.5">Desenvolvimento autoral</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Cada site é estruturado especificamente para o negócio atendido, sem reproduzir modelos idênticos ou estruturas engessadas.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono text-purple-400 mb-1">02 / Performance</div>
            <h2 className="text-sm font-semibold text-white mb-1.5">Leveza e precisão</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Código limpo e sem dependências desnecessárias. Sites rápidos para quem acessa e fáceis de carregar mesmo em conexões móveis.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono text-purple-400 mb-1">03 / Usabilidade</div>
            <h2 className="text-sm font-semibold text-white mb-1.5">Foco no seu cliente</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Informações objetivas, telefone e WhatsApp fáceis de encontrar e caminhos descomplicados para o visitante entrar em contato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
