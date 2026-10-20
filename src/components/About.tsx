import React from 'react';
import { Terminal, Layout, Smartphone, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const stack = [
    { name: 'HTML5 Semântico', category: 'Estrutura & Acessibilidade' },
    { name: 'CSS Moderno / Tailwind', category: 'Estilização & Responsividade' },
    { name: 'TypeScript & JavaScript', category: 'Lógica & Interatividade' },
    { name: 'React & Vite', category: 'Componentes & Construção' },
    { name: 'Design de Interfaces', category: 'Hierarquia & Tipografia' },
  ];

  const decisions = [
    {
      title: 'Menos dependências, mais estabilidade',
      description: 'Em vez de encher um site com plugins pesados ou construtores visuais que deixam o carregamento lento, desenvolvo componentes leves que fazem exatamente o que precisam fazer.'
    },
    {
      title: 'Pensado primeiro no celular',
      description: 'A maioria esmagadora dos clientes acessará seu site pelo smartphone. Por isso, a hierarquia de fontes, os botões e os espaçamentos são desenhados para funcionar perfeitamente em telas compactas.'
    },
    {
      title: 'Tipografia com hierarquia nítida',
      description: 'O visitante precisa bater o olho e entender imediatamente o que você faz, sem se perder em parágrafos longos com pouco contraste ou fontes difíceis de ler.'
    }
  ];

  return (
    <section id="sobre" className="py-24 border-t border-white/[0.06] bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-3 tracking-wide">
              <span>Sobre</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Web Creation & Luiz Miguel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
              Por trás de cada projeto, existe uma ideia.
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                A <strong className="text-white font-semibold">Web Creation</strong> é o meu espaço para transformar ideias em projetos web. Trabalho combinando programação e design de interfaces para desenvolver sites que tenham uma identidade própria e funcionem de verdade no dia a dia.
              </p>
              <p>
                Sou <strong className="text-white font-semibold">Luiz Miguel</strong>, estudante de Desenvolvimento de Sistemas e Informática na <strong className="text-white font-semibold">ETEC</strong>. Minha dedicação diária é estudar arquitetura de código, usabilidade e tipografia para criar páginas rápidas, organizadas e agradáveis de navegar.
              </p>
              <p className="text-zinc-400 text-sm">
                Acredito que um bom site para um negócio ou profissional independente não precisa de excesso de firulas, animações que travam o navegador ou promessas exageradas. Ele precisa apresentar quem você é com clareza, passar confiança e facilitar a conversa com quem tem interesse no seu serviço.
              </p>
            </div>

            {/* Practical Stack List without fake percentages */}
            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <div className="text-xs font-mono text-zinc-400 mb-4">
                Tecnologias e fundamentos aplicados nos projetos:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stack.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-lg bg-[#101018] border border-white/[0.04] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">{item.name}</div>
                      <div className="text-[11px] text-zinc-500">{item.category}</div>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Decisions & Practical Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e15] border border-white/[0.08]">
              <div className="text-xs font-mono text-purple-400 mb-2">Decisões de Projeto</div>
              <h3 className="text-xl font-bold text-white mb-6">
                Como penso o desenvolvimento de cada site
              </h3>

              <div className="space-y-6">
                {decisions.map((d, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-sm font-mono text-purple-400 shrink-0 pt-0.5">
                      0{index + 1}.
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1.5">{d.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Note on Authenticity */}
            <div className="p-5 rounded-xl bg-[#11111a] border border-white/[0.05] flex items-start gap-3.5">
              <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-1.5" />
              <div className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 font-medium">Transparência em primeiro lugar:</span>{' '}
                Não invento premiações nem números de vendas exagerados. A qualidade do trabalho da Web Creation é demonstrada através dos projetos visíveis e do código bem construído.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
