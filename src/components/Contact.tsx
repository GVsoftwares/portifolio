import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Substituir estes 3 parâmetros (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
      // pelas chaves reais criadas no painel do EmailJS mais tarde.
      // O EmailJS fará o match das variáveis {{NOME}}, {{EMPRESA}}, {{EMAIL}} e {{MENSAGEM}}
      // com o atributo "name" correspondente nos inputs do formulário ou objeto passado
      
      const templateParams = {
        NOME: formData.name,
        EMPRESA: formData.company || 'Não informada',
        CARGO: formData.role || 'Não informado',
        EMAIL: formData.email,
        MENSAGEM: formData.message,
      };

      await emailjs.send(
        'service_exx3i3v', // SERVICE_ID
        'template_51jb0c8', // TEMPLATE_ID
        templateParams,
        'bhdA1Osq6m3Vw0F6r' // PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', company: '', role: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Erro ao enviar email via EmailJS:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Fale Conosco
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Pronto para transformar a sua empresa?
            </h2>

            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Entre em contato conosco para discutir o seu projeto. Nossa equipe está pronta
              para entender suas necessidades e propor a melhor solução tecnológica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Comercial</h4>
                  <a href="mailto:suporte@gvsoftwares.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    suporte@gvsoftwares.com
                  </a>
                </div>
              </div>



              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/5534998767988" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    +55 (34) 99876-7988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Localização</h4>
                  <p className="text-slate-400">
                    Uberlândia - MG
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento</h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-2">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Sua empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-400 mb-2">Seu Cargo</label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Ex: Gerente, Diretor, etc."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Profissional</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="seu@email.com.br"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensagem / Detalhes do Projeto</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Conte-nos um pouco sobre o que você precisa..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)] hover:shadow-[0_0_25px_rgba(8,145,178,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              
              {status === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm text-center">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                  Ocorreu um erro ao enviar. Tente novamente ou use nosso WhatsApp.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
