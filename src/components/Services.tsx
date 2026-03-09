import { Code2, BarChart3, Settings, Wrench, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento de Sistemas Web',
      description: 'Criamos plataformas robustas, seguras e escaláveis para atender às necessidades específicas do seu negócio.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/20'
    },
    {
      icon: BarChart3,
      title: 'Dashboards e Business Intelligence',
      description: 'Transforme dados em decisões. Desenvolvemos painéis interativos para visualização clara de métricas.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/20'
    },
    {
      icon: Settings,
      title: 'Automação de Processos',
      description: 'Elimine tarefas repetitivas. Criamos scripts e integrações que economizam tempo e reduzem erros.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      icon: Database,
      title: 'Integração com APIs e Bancos de Dados',
      description: 'Conectamos seus sistemas. Especialistas em arquitetura de dados, SQL e consumo de APIs REST/GraphQL.',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    },
    {
      icon: Wrench,
      title: 'Manutenção e Suporte Técnico',
      description: 'Garantimos que sua operação não pare. Suporte ágil, atualizações de segurança e melhorias contínuas.',
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/20'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
          >
            Nossas Soluções
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Serviços Especializados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Oferecemos um portfólio completo de serviços de tecnologia para modernizar, 
            otimizar e escalar a sua empresa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
