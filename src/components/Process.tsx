import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
            <span>Processo</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 [text-wrap:balance]">
            Da ideia ao site no ar.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Um caminho direto e sem complicação. Cada etapa tem entregáveis claros para você acompanhar a evolução do projeto com total tranquilidade.
          </p>
        </div>

        {/* 4-Step Sequence: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between pt-6 border-t-2 border-white/[0.08] hover:border-purple-500 transition-colors group"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Etapa 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-purple-300/80 mb-3 font-medium">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverables */}
              <div className="p-3.5 rounded-lg bg-[#111119] border border-white/[0.04]">
                <div className="text-[11px] font-mono text-zinc-400 mb-2">Entregas da etapa:</div>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
