import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Cliente Satisfeito',
      role: 'CEO, Empresa X',
      text: 'A GV Softwares transformou a maneira como operamos. O sistema sob medida que desenvolveram reduziu nossos custos operacionais em 30% no primeiro semestre.',
      image: 'https://picsum.photos/seed/user1/100/100'
    },
    {
      name: 'Diretor de Operações',
      role: 'Indústria Y',
      text: 'Profissionalismo e entrega no prazo. O dashboard de BI que criaram nos deu uma visão clara dos nossos gargalos de produção.',
      image: 'https://picsum.photos/seed/user2/100/100'
    },
    {
      name: 'Gerente de Vendas',
      role: 'Comércio Z',
      text: 'A automação do nosso atendimento via WhatsApp aumentou nossa taxa de conversão incrivelmente. Suporte técnico sempre ágil.',
      image: 'https://picsum.photos/seed/user3/100/100'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
          >
            O que dizem sobre nós
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Histórias de Sucesso
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative hover:border-cyan-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700/50" />
              <p className="text-slate-300 italic mb-8 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
