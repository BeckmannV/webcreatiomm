import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 border-t border-white/[0.06] bg-[#09090c]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Respostas Claras</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Antes de começar, algumas dúvidas.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Respostas diretas sobre prazos, custos, infraestrutura e funcionamento prático dos projetos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-2 focus-visible:outline-purple-400 py-1"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-white hover:text-purple-300 transition-colors">
                    {item.question}
                  </span>
                  <span className="p-1 rounded-md bg-white/[0.04] text-zinc-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-purple-400" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="mt-3 pt-2 text-sm text-zinc-300 leading-relaxed max-w-3xl"
                  >
                    <p>{item.answer}</p>
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
