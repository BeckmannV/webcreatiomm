import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicos" className="py-24 border-t border-white/[0.06] bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
            <span>Serviços</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Soluções para Web</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 [text-wrap:balance]">
            Um site para cada necessidade.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            O formato depende do objetivo: apresentar uma empresa, divulgar um serviço, organizar produtos ou melhorar um site existente.
          </p>
        </div>

        {/* Editorial Structured List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="py-8 transition-colors duration-200"
              >
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(service.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="text-xs sm:text-sm font-mono text-purple-400 group-hover:text-purple-300 transition-colors shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                    <span className="hidden sm:inline">
                      {isExpanded ? 'Recolher detalhes' : 'Ver o que inclui'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-white/[0.04] grid grid-cols-1 lg:grid-cols-12 gap-6 pl-0 sm:pl-12">
                    <div className="lg:col-span-6 space-y-4">
                      <div>
                        <span className="text-xs font-mono text-zinc-400 block mb-1">Como funciona:</span>
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#111119] border border-white/[0.04]">
                        <span className="text-xs font-mono text-purple-300 block mb-1">Indicado para:</span>
                        <p className="text-xs text-zinc-400">
                          {service.targetAudience}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                      <div>
                        <span className="text-xs font-mono text-zinc-400 block mb-2">Entregas inclusas no projeto:</span>
                        <ul className="space-y-2 text-xs text-zinc-300">
                          {service.deliverables.map((del, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                        >
                          <span>Solicitar orçamento para {service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
