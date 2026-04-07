import { CheckCircle2, Users, Code, Database, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    { icon: Code, title: 'Desenvolvimento Sob Medida', desc: 'Sistemas criados especificamente para a sua operação.' },
    { icon: Database, title: 'Análise de Dados', desc: 'Dashboards inteligentes para tomada de decisão.' },
    { icon: TrendingUp, title: 'Fluxos N8N e Automações', desc: 'Especialistas em conectar sistemas e automatizar rotinas para aumentar a produtividade.' },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#020617] overflow-hidden relative">
      {/* Background Futurista Integrado */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Luzes de Fundo (Orbes Ambientais) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Users className="w-4 h-4" />
              Sobre a GV Softwares
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tecnologia que impulsiona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">crescimento</span> do seu negócio.
            </h2>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l-2 border-cyan-500/30 pl-4 bg-slate-900/40 backdrop-blur-sm p-4 rounded-r-xl">
              Somos especialistas em transformar desafios complexos em soluções digitais simples e eficientes.
              Nosso foco é entregar sistemas de alta performance, organizados e escaláveis.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="mt-1 p-3 rounded-xl bg-[#0f172a]/80 backdrop-blur-md border border-slate-700/50 group-hover:border-cyan-500/50 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Founders Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Holographic Glowing Backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />

            <div className="relative bg-[#0f172a]/90 backdrop-blur-2xl border border-cyan-500/30 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Internal Accent Line */}
              <div className="absolute top-0 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-300/30">
                  GV
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">Nossa Equipe</h3>
                  <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mt-1">Especialistas em Tecnologia</p>
                </div>
              </div>

              <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                Contamos com vasta experiência em desenvolvimento de software, análise de dados e arquitetura de sistemas.
                Combinamos expertise técnica com visão de negócios para entregar resultados reais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                {[
                  'Criação de Sites e Plataformas',
                  'Arquitetura SQL Avançada',
                  'Fluxos N8N e Automações',
                  'Código Escalável',
                  'Análise de Dados',
                  'Soluções Cloud'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    </div>
                    <span className="text-sm md:text-base text-slate-200 font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
