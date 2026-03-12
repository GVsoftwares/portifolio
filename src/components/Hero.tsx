import React from 'react';
import { ArrowRight, ChevronRight, Code2, Database, LayoutTemplate, Workflow } from 'lucide-react';
import { motion } from 'motion/react';

const N8nIcon = (props: React.ComponentProps<'svg'>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            Especialistas em Soluções Sob Medida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight"
          >
            Transformamos ideias em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              soluções digitais
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvimento de softwares personalizados para empresas que querem crescer.
            Automatize processos, analise dados e escale seu negócio com tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] flex items-center justify-center gap-2 group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-300 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Ver Projetos
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 opacity-60"
        >
          {[
            { icon: Code2, label: 'Sistemas Web' },
            { icon: Database, label: 'Análise de Dados' },
            { icon: LayoutTemplate, label: 'Dashboards' },
            { icon: N8nIcon, label: 'N8N' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-slate-400">
              <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
