import React, { useState } from 'react';
import { ArrowUpRight, Eye, Code, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/content';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onSelectProjectForContact: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForContact }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const reddartProject = PROJECTS.find((p) => p.id === 'reddart') || PROJECTS[2];
  const burgerProject = PROJECTS.find((p) => p.id === 'burger-district') || PROJECTS[0];
  const dolceProject = PROJECTS.find((p) => p.id === 'atelier-dolce') || PROJECTS[1];

  return (
    <section id="projetos" className="py-24 border-t border-white/[0.06] bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
            <span>Portfólio</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Trabalhos Selecionados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 [text-wrap:balance]">
            Projetos que mostram o trabalho.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Cada projeto tem uma necessidade diferente. A ideia é apresentar soluções visuais e funcionais que façam sentido para cada contexto, sem templates genéricos ou layouts repetitivos.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="space-y-12">
          {/* Project 1: Reddart (Featured Wide Layout - Published Web App) */}
          <article className="group rounded-2xl border border-white/[0.08] bg-[#0e0e16] overflow-hidden transition-all duration-300 hover:border-purple-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Column */}
              <div
                className="lg:col-span-7 relative bg-black cursor-pointer overflow-hidden aspect-[16/10] lg:aspect-auto"
                onClick={() => setSelectedProject(reddartProject)}
              >
                <img
                  src={reddartProject.image}
                  alt="Interface da plataforma Reddart de exploração de álbuns musicais"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent opacity-80 lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40 backdrop-blur-sm">
                    {reddartProject.type}
                  </span>
                </div>
              </div>

              {/* Text / Context Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
                    <span>{reddartProject.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-emerald-400">Publicado</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {reddartProject.name}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {reddartProject.fullDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono text-zinc-400">Soluções implementadas:</div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {reddartProject.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {reddartProject.technologies.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-400">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {reddartProject.liveUrl && (
                      <a
                        href={reddartProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/40 rounded-lg transition-colors whitespace-nowrap shrink-0"
                      >
                        <span>Visitar site</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(reddartProject)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-white/[0.06] hover:bg-purple-600 border border-white/[0.1] hover:border-purple-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Ver detalhes</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 2-Column Split for Burger District & Atelier Dolce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 2: Burger District */}
            <article className="group rounded-2xl border border-white/[0.08] bg-[#0e0e16] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber-500/30">
              <div>
                <div
                  className="relative bg-black cursor-pointer overflow-hidden aspect-[16/10]"
                  onClick={() => setSelectedProject(burgerProject)}
                >
                  <img
                    src={burgerProject.image}
                    alt="Interface do site conceitual para hamburgueria Burger District"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40 backdrop-blur-sm">
                      {burgerProject.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <span>{burgerProject.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>Conceito gastronômico</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                    {burgerProject.name}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {burgerProject.shortDescription}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#14141f] border border-white/[0.04] text-xs text-zinc-300 mb-4">
                    <span className="font-mono text-amber-400 block mb-1">Destaque:</span>
                    Cardápio organizado por categorias, preparado para visualização rápida em dispositivos móveis e canal de pedidos direto.
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                <div className="flex gap-2 text-[11px] font-mono text-zinc-500">
                  <span>React</span>
                  <span>·</span>
                  <span>TypeScript</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(burgerProject)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg border border-white/[0.06] transition-colors"
                >
                  <span>Explorar projeto</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Project 3: Atelier Dolce */}
            <article className="group rounded-2xl border border-white/[0.08] bg-[#0e0e16] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber-400/30">
              <div>
                <div
                  className="relative bg-zinc-900 cursor-pointer overflow-hidden aspect-[16/10]"
                  onClick={() => setSelectedProject(dolceProject)}
                >
                  <img
                    src={dolceProject.image}
                    alt="Interface do site conceitual para confeitaria Atelier Dolce"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40 backdrop-blur-sm">
                      {dolceProject.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <span>{dolceProject.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>Conceito sob medida</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5">
                    {dolceProject.name}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {dolceProject.shortDescription}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#14141f] border border-white/[0.04] text-xs text-zinc-300 mb-4">
                    <span className="font-mono text-amber-300 block mb-1">Destaque:</span>
                    Design editorial claro com fotografia em destaque e fluxo intuitivo para solicitações de doces e bolos sob encomenda.
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                <div className="flex gap-2 text-[11px] font-mono text-zinc-500">
                  <span>CSS Grid</span>
                  <span>·</span>
                  <span>Responsivo</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(dolceProject)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg border border-white/[0.06] transition-colors"
                >
                  <span>Explorar projeto</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(name) => {
            setSelectedProject(null);
            onSelectProjectForContact(name);
          }}
        />
      )}
    </section>
  );
};
