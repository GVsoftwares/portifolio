import { CheckCircle, Clock, Target, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Differentiators() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Código Organizado e Escalável',
      desc: 'Desenvolvemos com as melhores práticas do mercado, garantindo que seu sistema possa crescer sem gargalos.'
    },
    {
      icon: CheckCircle,
      title: 'Atendimento Personalizado',
      desc: 'Entendemos a fundo o seu problema antes de propor uma solução. Você fala diretamente com quem desenvolve.'
    },
    {
      icon: Clock,
      title: 'Entrega no Prazo',
      desc: 'Trabalhamos com cronogramas realistas e metodologias ágeis para garantir que seu projeto seja entregue na data combinada.'
    },
    {
      icon: Target,
      title: 'Foco em Resultado',
      desc: 'Não entregamos apenas código. Entregamos soluções que reduzem custos, aumentam vendas e otimizam processos.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher a <span className="text-cyan-400">GV Softwares</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nosso compromisso vai além da tecnologia. Somos parceiros estratégicos
              focados em resolver os problemas reais da sua empresa através de software de qualidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{point.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl opacity-50" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative Code Block */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500 font-mono">main.py</span>
              </div>
              <pre className="text-sm font-mono text-slate-300 overflow-hidden">
                <code className="block text-emerald-400">def</code> <code className="block text-blue-400 inline">optimize_business</code>(client):
                <br />
                {'    '}system = GVSoftware.build(
                <br />
                {'        '}requirements=client.needs,
                <br />
                {'        '}scalable=<code className="text-orange-400">True</code>,
                <br />
                {'        '}performance=<code className="text-green-400">'High'</code>
                <br />
                {'    '})
                <br />
                <br />
                {'    '}<code className="text-emerald-400">return</code> system.deploy()
                <br />
                <br />
                <code className="text-slate-500"># Result: Increased efficiency and profit</code>
              </pre>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
