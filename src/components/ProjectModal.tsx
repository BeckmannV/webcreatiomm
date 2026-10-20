import React, { useState } from 'react';
import { X, Check, ExternalLink, Code2, Layers, Sparkles, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'tech'>('overview');
  
  // Interactive states for simulations
  // Burger District simulation state
  const [selectedBurger, setSelectedBurger] = useState<number>(0);
  
  // Atelier Dolce simulation state
  const [cakeSlices, setCakeSlices] = useState<string>('20 fatias');
  const [cakeFlavor, setCakeFlavor] = useState<string>('Frutas Vermelhas & Baunilha de Madagascar');

  // Reddart simulation state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeGenre, setActiveGenre] = useState<string>('Todos');

  if (!project) return null;

  const burgers = [
    {
      name: 'The District Double',
      price: 'R$ 38,00',
      description: 'Blend bovino 180g (x2), queijo cheddar maturado, bacon artesanal crocante, molho da casa em brioche tostado na manteiga.',
      category: 'Burgers'
    },
    {
      name: 'Spicy Chicken Crunch',
      price: 'R$ 32,00',
      description: 'Sobrecoxa empanada em crosta crocante, slaw de repolho com picles e maionese levemente picante de habanero.',
      category: 'Frango'
    },
    {
      name: 'Batatas Rústicas com Alecrim',
      price: 'R$ 18,00',
      description: 'Batatas cortadas à mão com casca, alecrim fresco, sal marinho defumado e maionese de alho confitado.',
      category: 'Acompanhamentos'
    }
  ];

  const reddartAlbums = [
    { title: 'Velvet Waves', artist: 'Luna Bloom', genre: 'Lo-fi', duration: '3:45' },
    { title: 'Neon Echo', artist: 'Circuit Mind', genre: 'Electronic', duration: '4:12' },
    { title: 'Nightrise', artist: 'Kavinsky Lane', genre: 'Synthwave', duration: '5:01' },
    { title: 'Stardust Hymns', artist: 'The Astral Co.', genre: 'Rock', duration: '3:20' }
  ];

  const filteredAlbums = activeGenre === 'Todos' 
    ? reddartAlbums 
    : reddartAlbums.filter(a => a.genre === activeGenre);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e0e14] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#12121a]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-purple-400">{project.type}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus-visible:outline-2 focus-visible:outline-purple-400"
            aria-label="Fechar janela de detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Header Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {project.name}
              </h2>
              <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Acessar {project.liveUrl.replace('https://', '').replace('/', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
              <button
                onClick={() => {
                  onClose();
                  onRequestSimilar(project.name);
                }}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors whitespace-nowrap"
              >
                Pedir site com esta proposta
              </button>
            </div>
          </div>

          {/* Interactive Navigation Tabs inside Modal */}
          <div className="flex items-center gap-2 p-1 bg-[#151520] rounded-lg border border-white/[0.06] mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Visão Geral & Interface
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'simulation'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Demonstração Interativa
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'tech'
                  ? 'bg-purple-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Arquitetura Técnica
            </button>
          </div>

          {/* Tab 1: Overview & High-Res Image */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* High-res project screenshot */}
              <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-black">
                <img
                  src={project.image}
                  alt={`Interface completa do projeto ${project.name}`}
                  className="w-full h-auto object-cover max-h-[460px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Rationale and Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-[#13131c] border border-white/[0.06]">
                  <h3 className="text-xs font-mono text-zinc-400 mb-2">Objetivo do Projeto</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.objectives}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#13131c] border border-white/[0.06]">
                  <h3 className="text-xs font-mono text-zinc-400 mb-2">Estado Atual</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                    {project.status}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {project.type === 'Projeto Conceitual'
                      ? 'Desenvolvido como projeto conceitual autoral com design system e código funcional.'
                      : 'Projeto real, funcional e mantido em produção.'}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-xs font-mono text-purple-400 mb-3">Recursos & Soluções Desenvolvidas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111118] border border-white/[0.04] text-xs text-zinc-300"
                    >
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Interactive Simulation tailored for each project */}
          {activeTab === 'simulation' && (
            <div className="p-6 rounded-xl bg-[#12121b] border border-white/[0.08] space-y-6">
              {project.id === 'burger-district' && (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Navegação Interativa de Cardápio</h4>
                      <p className="text-xs text-zinc-400">Teste como o cliente explora os pratos e opções em telas menores</p>
                    </div>
                    <span className="text-xs font-mono text-amber-400">Simulador</span>
                  </div>

                  {/* Item selector */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {burgers.map((b, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedBurger(idx)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
                          selectedBurger === idx
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:text-white'
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>

                  {/* Selected Item Card */}
                  <div className="p-4 rounded-xl bg-[#161622] border border-amber-500/20 flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-amber-400 mb-1">{burgers[selectedBurger].category}</div>
                      <h5 className="text-base font-bold text-white mb-2">{burgers[selectedBurger].name}</h5>
                      <p className="text-xs text-zinc-300 leading-relaxed max-w-lg">
                        {burgers[selectedBurger].description}
                      </p>
                    </div>
                    <div className="text-right sm:self-center shrink-0">
                      <div className="text-lg font-mono font-bold text-amber-400">{burgers[selectedBurger].price}</div>
                      <span className="text-[11px] text-zinc-500">Preço sugerido</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'atelier-dolce' && (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Simulador de Pedido Sob Encomenda</h4>
                      <p className="text-xs text-zinc-400">Estrutura que orienta o cliente antes da formalização do pedido</p>
                    </div>
                    <span className="text-xs font-mono text-amber-400">Simulador</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">Tamanho do Bolo</label>
                      <select
                        value={cakeSlices}
                        onChange={(e) => setCakeSlices(e.target.value)}
                        className="w-full bg-[#181824] border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="12 fatias">12 fatias (Pequeno - Aro 15cm)</option>
                        <option value="20 fatias">20 fatias (Médio - Aro 20cm)</option>
                        <option value="35 fatias">35 fatias (Grande - Aro 25cm)</option>
                        <option value="50 fatias">50 fatias (Dois andares - Evento)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">Combinação de Sabor</label>
                      <select
                        value={cakeFlavor}
                        onChange={(e) => setCakeFlavor(e.target.value)}
                        className="w-full bg-[#181824] border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Frutas Vermelhas & Baunilha de Madagascar">Frutas Vermelhas & Baunilha de Madagascar</option>
                        <option value="Pistache Siciliano & Chocolate Belga 54%">Pistache Siciliano & Chocolate Belga 54%</option>
                        <option value="Caramelo Salgado & Nozes Pecan">Caramelo Salgado & Nozes Pecan</option>
                        <option value="Limão Siciliano & Merengue Suíço">Limão Siciliano & Merengue Suíço</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#161622] border border-white/[0.08] text-xs">
                    <div className="text-zinc-400 mb-1">Resumo formatado para envio direto ao confeiteiro:</div>
                    <div className="font-mono text-zinc-200 bg-[#0e0e16] p-3 rounded-lg border border-white/[0.04]">
                      "Olá Atelier Dolce! Gostaria de encomendar um bolo de {cakeSlices} no sabor {cakeFlavor} para um evento."
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'reddart' && (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Explorador Musical & Waveform</h4>
                      <p className="text-xs text-zinc-400">Projeto real: teste a filtragem de álbuns e o reprodutor estético</p>
                    </div>
                    <span className="text-xs font-mono text-purple-400">Publicado</span>
                  </div>

                  {/* Genre filters */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {['Todos', 'Lo-fi', 'Electronic', 'Synthwave', 'Rock'].map((genre) => (
                      <button
                        key={genre}
                        onClick={() => setActiveGenre(genre)}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                          activeGenre === genre
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>

                  {/* Albums Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {filteredAlbums.map((album, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#181824] border border-white/[0.06] hover:border-purple-500/40 transition-colors"
                      >
                        <div className="aspect-square rounded-lg bg-zinc-800 mb-2 overflow-hidden flex items-center justify-center text-zinc-600 text-[10px] font-mono">
                          {album.title}
                        </div>
                        <div className="text-xs font-semibold text-white truncate">{album.title}</div>
                        <div className="text-[11px] text-zinc-400 truncate">{album.artist}</div>
                      </div>
                    ))}
                  </div>

                  {/* Player bar simulator */}
                  <div className="p-3 rounded-xl bg-[#181824] border border-purple-500/30 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                        aria-label={isPlayingAudio ? 'Pausar áudio' : 'Reproduzir demonstração'}
                      >
                        {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <div className="text-xs">
                        <div className="font-medium text-white">Velvet Waves — Luna Bloom</div>
                        <div className="text-zinc-500 font-mono text-[10px]">Lo-fi · 3:12 / 4:45</div>
                      </div>
                    </div>

                    {/* Animated waveform bars when playing */}
                    <div className="hidden sm:flex items-center gap-1 h-5">
                      {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 35, 80].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: isPlayingAudio ? `${h}%` : '25%' }}
                          className={`w-1 rounded-full transition-all duration-200 ${
                            isPlayingAudio ? 'bg-purple-400' : 'bg-zinc-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Technical Architecture */}
          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#12121b] border border-white/[0.08]">
                <h3 className="text-xs font-mono text-purple-400 mb-2">Tecnologias Verificadas</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#181826] border border-white/[0.08] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Todos os projetos foram desenvolvidos sem construtores automáticos engessados, garantindo código semântico, acessibilidade para leitores de tela e controle total sobre layout e estilo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#12121b] border border-white/[0.06]">
                    <div className="text-xs font-semibold text-white mb-1.5">{h.title}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#12121a] flex items-center justify-between text-xs text-zinc-400">
          <span>Web Creation · Luiz Miguel</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Fechar detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
