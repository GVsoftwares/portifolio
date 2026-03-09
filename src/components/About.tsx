import { CheckCircle2, Users, Code, Database, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    { icon: Code, title: 'Desenvolvimento Sob Medida', desc: 'Sistemas criados especificamente para a sua operação.' },
    { icon: Database, title: 'Análise de Dados', desc: 'Dashboards inteligentes para tomada de decisão.' },
    { icon: TrendingUp, title: 'Automação de Processos', desc: 'Reduza tarefas manuais e aumente a produtividade.' },
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Sobre a GV Softwares
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Tecnologia que impulsiona o <span className="text-cyan-400">crescimento</span> do seu negócio.
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Somos especialistas em transformar desafios complexos em soluções digitais simples e eficientes. 
              Nosso foco é entregar sistemas de alta performance, organizados e escaláveis.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
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
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  GV
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nossa Liderança</h3>
                  <p className="text-cyan-400">Victor & Sócio</p>
                </div>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Fundadores com vasta experiência em desenvolvimento de software, análise de dados e arquitetura de sistemas. 
                Combinamos expertise técnica com visão de negócios para entregar resultados reais.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Especialistas em Python',
                  'Arquitetura SQL Avançada',
                  'Foco em Performance',
                  'Código Escalável',
                  'Análise de Dados',
                  'Soluções Cloud'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{skill}</span>
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
