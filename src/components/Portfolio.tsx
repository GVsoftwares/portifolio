import React, { useState, useEffect } from 'react';
import { ExternalLink, MonitorSmartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

import mvDespesasPreview from '../assets/mv-despesas-preview.png';
import barataoPreview from '../assets/baratao_preview.png';
import saintsMassasPreview from '../assets/saints-massas.webp';

interface PortfolioProps {
  onViewDespesas?: () => void;
  onViewBaratao?: () => void;
  onViewSaints?: () => void;
  onViewChatbot?: () => void;
  onViewDashboard?: () => void;
}

export default function Portfolio({ onViewDespesas, onViewBaratao, onViewSaints, onViewChatbot, onViewDashboard }: PortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects: {
    title: string;
    description: string;
    techs: string[];
    result: string;
    image?: string;
    bgStyle?: React.CSSProperties;
    onView?: () => void;
  }[] = [
    {
      title: 'Mv-Despesas',
      description: 'Aplicativo de gestão financeira focado em famílias e casais. Conta com dashboards interativos, sincronização em tempo real na nuvem e biometria.',
      techs: ['React', 'Supabase', 'Tailwind', 'WebAuthn'],
      result: 'Controle seus gastos e aumente em até 50% sua autonomia e planejamento financeiro.',
      image: mvDespesasPreview,
      onView: onViewDespesas
    },
    {
      title: 'Baratão do Dia',
      description: 'Vitrine digital multicanal para e-commerce. Substitui o link na bio por uma plataforma com CMS próprio, encaminhamento inteligente de vendas e experiência mobile-first.',
      techs: ['React', 'Supabase', 'TypeScript', 'Vite'],
      result: 'Aumente suas conversões com uma vitrine profissional, rápida e fácil de gerenciar.',
      image: barataoPreview,
      onView: onViewBaratao
    },
    {
      title: 'Saints Massas',
      description: 'Plataforma premium para produtos artesanais. Focada em conversão com catálogo dinâmico, design focado em alta performance e experiência mobile impecável.',
      techs: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
      result: 'Uma vitrine sofisticada e rápida que valoriza os produtos e direciona para vendas.',
      image: saintsMassasPreview,
      onView: onViewSaints
    },
    {
      title: 'Chatbot IA',
      description: 'Chatbot com IA para WhatsApp que qualifica leads automaticamente. Entende o perfil do cliente, coleta as informações certas e encaminha para o consultor ideal, 24h por dia.',
      techs: ['Node.js', 'WhatsApp API', 'TypeScript', 'OpenAI'],
      result: 'Reduza 80% do tempo de pré-vendas qualificando leads automaticamente no WhatsApp.',
      image: '/chatbot-preview.svg',
      onView: onViewChatbot
    },
    {
      title: 'Dashboard Saints',
      description: 'Business Intelligence para Saints Massas — 4 módulos integrados: estoque, produção, financeiro e clientes. KPIs visuais, gráficos interativos e tabelas dinâmicas em um único painel.',
      techs: ['Power BI', 'Excel', 'DAX', 'VBA'],
      result: 'Gestão operacional centralizada, eliminando planilhas manuais e aumentando a eficiência em +60%.',
      image: '/dashboard-preview.svg',
      onView: onViewDashboard
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-[20%] left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
          >
            <MonitorSmartphone className="w-4 h-4" />
            Nosso Portfólio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Projetos Recentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Conheça algumas das soluções que desenvolvemos e os resultados alcançados pelos nossos clientes.
          </motion.p>
        </div>

        {/* Mátrix de Resultados - Foco B2B e Qualidade Boutique */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto relative z-20"
        >
          <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl text-center shadow-[0_0_20px_rgba(6,182,212,0.02)] transition-all group">
            <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform">5.0</h4>
            <span className="text-xs text-slate-400 tracking-widest uppercase font-bold mt-2 block">Satisfação Média</span>
          </div>
          <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl text-center shadow-[0_0_20px_rgba(6,182,212,0.02)] transition-all group">
            <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform">100%</h4>
            <span className="text-xs text-slate-400 tracking-widest uppercase font-bold mt-2 block">Entrega no Prazo</span>
          </div>
          <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl text-center shadow-[0_0_20px_rgba(6,182,212,0.02)] transition-all group">
            <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform">Zero</h4>
            <span className="text-xs text-slate-400 tracking-widest uppercase font-bold mt-2 block">Templates Prontos</span>
          </div>
          <div className="p-5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/30 rounded-2xl text-center shadow-[0_0_20px_rgba(6,182,212,0.02)] transition-all group">
            <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform">10x</h4>
            <span className="text-xs text-emerald-400 tracking-widest uppercase font-bold mt-2 block">Potencial de Vendas</span>
          </div>
        </motion.div>

        {/* Podium Structure around Accordion - Otimizado sem Blur */}
        <div className="p-2 md:p-4 rounded-[2.5rem] bg-[#020617]/95 border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

        {/* Futuristic Expanding Accordion */}
        <div 
          className="flex flex-col md:flex-row h-[800px] md:h-[600px] w-full gap-2 md:gap-4 overflow-hidden rounded-[2rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => !isActive && setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden flex cursor-pointer group will-change-[flex,flex-basis] transition-[flex] duration-500 ease-out ${
                  isActive 
                    ? 'flex-[12] md:flex-[8] border-2 border-cyan-500/60' 
                    : 'flex-[1] min-h-[70px] md:min-h-0 md:min-w-[100px] border border-slate-700/50 opacity-70 hover:opacity-100'
                } bg-[#020617]`}
              >
                {/* Background Image or Gradient */}
                {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading={isActive ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 will-change-transform ${isActive ? 'scale-100' : 'scale-105 object-center'}`}
                  referrerPolicy="no-referrer"
                />
                ) : (
                <div className="absolute inset-0" style={project.bgStyle} />
                )}
                
                {/* Cyberpunk Grade/Overlay (Sem transition lenta) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent ${isActive ? 'opacity-100' : 'opacity-90'}`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent ${isActive ? 'block' : 'hidden'}`} />
                
                {/* Scanline Effect (Otimizado para não travar mobile) */}
                {isActive && (
                  <div className="hidden md:block absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
                )}

                {/* Inactive Vertical Title */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <h3 className="text-slate-300 font-bold whitespace-nowrap md:-rotate-90 tracking-[0.2em] text-lg md:text-xl transition-colors group-hover:text-cyan-400 group-hover:tracking-[0.3em] font-mono">
                    {project.title}
                  </h3>
                </div>

                {/* Active Content */}
                <div className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-end w-full md:w-3/4 lg:w-2/3 transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-12 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Sistema Integrado</span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-500 mb-6 drop-shadow-lg">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm md:text-lg mb-8 leading-relaxed max-w-xl bg-[#020617]/70 p-4 rounded-xl border-l-2 border-cyan-500/30">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-bold text-cyan-300 bg-[#020617] rounded-lg border border-cyan-500/30 shadow-none flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button
                      onClick={(e) => { e.stopPropagation(); project.onView && project.onView(); }}
                      className="group/btn relative px-8 py-4 bg-transparent text-white font-bold rounded-xl overflow-hidden transition-all flex items-center justify-center gap-3 border border-cyan-500 hover:border-cyan-400"
                    >
                      {/* Neon button background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 group-hover/btn:from-cyan-600/40 group-hover/btn:to-blue-600/40 transition-colors"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur group-hover/btn:opacity-40 transition-opacity"></div>
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <MonitorSmartphone size={20} className="text-cyan-400" />
                        Ver Mais Detalhes
                        <ExternalLink size={16} className="text-cyan-400 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                      </span>
                    </button>

                      <div className="flex-1 max-w-xs mt-4 sm:mt-0">
                        <p className="text-xs text-emerald-400 font-mono mb-1 uppercase tracking-wider">Métrica Entregue <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span></p>
                        <p className="text-sm text-slate-300 leading-tight">{project.result}</p>
                      </div>
                    </div>

                  </div>
              </div>
            );
          })}
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            Iniciar Protocolo de Contato
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
