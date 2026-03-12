import { ExternalLink, Github, MonitorSmartphone } from 'lucide-react';
import { motion } from 'motion/react';

import mvDespesasPreview from '../assets/mv-despesas-preview.png';

interface PortfolioProps {
  onViewDespesas?: () => void;
}

export default function Portfolio({ onViewDespesas }: PortfolioProps) {
  const projects = [
    {
      title: 'Mv-Despesas',
      description: 'Aplicativo de gestão financeira focado em famílias e casais. Conta com dashboards interativos, sincronização em tempo real na nuvem e biometria.',
      techs: ['React', 'Supabase', 'Tailwind', 'WebAuthn'],
      result: 'Controle seus gastos e aumente em até 50% sua autonomia e planejamento financeiro.',
      image: mvDespesasPreview
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-900 relative">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-md border border-cyan-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-xl p-4 mt-auto">
                  <h4 className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">Resultado</h4>
                  <p className="text-sm text-emerald-100 font-medium">{project.result}</p>
                </div>

                {project.title === 'Mv-Despesas' && onViewDespesas && (
                  <button
                    onClick={onViewDespesas}
                    className="mt-4 w-full py-3 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] text-white font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-[#7aa2f7]/30"
                  >
                    <MonitorSmartphone size={18} /> Ver Mais Detalhes
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all"
          >
            Quero um projeto como estes
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
