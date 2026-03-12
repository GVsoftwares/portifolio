import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Política de Privacidade</h1>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            A <strong>GV Softwares</strong> ("nós", "nosso", "nossa") está comprometida em proteger a sua privacidade. 
            Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Informações que Coletamos</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Podemos coletar informações pessoais que você nos fornece voluntariamente quando expressa interesse em obter informações 
            sobre nossos serviços, quando participa de atividades no site ou de outra forma quando entra em contato conosco.
          </p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
            <li><strong>Dados fornecidos por você:</strong> Nome, endereço de e-mail, número de telefone e nome da empresa.</li>
            <li><strong>Dados coletados automaticamente:</strong> Endereço IP, tipo de navegador, sistema operacional e comportamento de navegação no nosso site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Como Usamos Suas Informações</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Usamos as informações coletadas para os seguintes propósitos:
          </p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
            <li>Responder às suas solicitações de orçamento e consultas.</li>
            <li>Fornecer, operar e manter nosso site e serviços.</li>
            <li>Melhorar, personalizar e expandir nossa experiência de usuário.</li>
            <li>Comunicar novidades, atualizações ou informações relevantes sobre a GV Softwares.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Compartilhamento de Informações</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Podemos compartilhar informações com 
            prestadores de serviços terceirizados estritamente para realizar serviços em nosso nome (como hospedagem web ou 
            serviços de entrega de e-mail), sujeitos a obrigações de confidencialidade.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Segurança de Dados</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra 
            acesso não autorizado, perda, destruição ou alteração. No entanto, nenhum método de transmissão pela Internet é 100% 
            seguro, e não podemos garantir segurança absoluta.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Seus Direitos de Privacidade</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Dependendo de sua localização, você pode ter o direito de solicitar acesso, correção, atualização ou exclusão das 
            suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail oficial.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Contato</h2>
          <p className="text-slate-300 leading-relaxed">
            Se você tiver dúvidas ou comentários sobre esta política, pode nos contatar em: <br/>
            <strong className="text-cyan-400">suporte@gvsoftwares.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
