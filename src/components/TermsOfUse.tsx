import { ArrowLeft, Scale } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export default function TermsOfUse({ onBack }: TermsOfUseProps) {
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
            <Scale className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Termos de Uso</h1>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Ao acessar e usar o site da <strong>GV Softwares</strong>, você aceita e concorda em cumprir e sujeitar-se a estes 
            Termos de Uso. Caso não concorde com alguma parte destes termos, você não deve usar o nosso site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Uso do Site</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            O conteúdo das páginas deste site é apenas para sua informação geral e uso não comercial. Ele está sujeito a alterações 
            sem aviso prévio. O uso indevido do site, incluindo, sem limitação, pirataria, injeção de código malicioso ou 
            qualquer tentativa de prejudicar nossa infraestrutura é estritamente proibido.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Propriedade Intelectual</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não está 
            limitado a, design, layout, aparência, gráficos e código fonte. A reprodução é proibida, exceto de acordo com as 
            leis de direitos autorais.  
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Serviços e Orçamentos</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Quaisquer propostas comerciais, orçamentos ou prazos apresentados ou solicitados por meio dos formulários do site 
            estão sujeitos a análise e não constituem um contrato legal vinculativo imediato até que um acordo formal seja assinado 
            entre a GV Softwares e o cliente.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Limitação de Responsabilidade</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Em nenhuma circunstância a GV Softwares será responsável por quaisquer danos diretos, indiretos, incidentais ou 
            consequenciais resultantes do uso ou da incapacidade de usar nosso site ou os materiais nele contidos, mesmo 
            que a GV Softwares tenha sido avisada da possibilidade de tais danos.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Links para Outros Sites</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Nosso site pode conter links para sites de terceiros que não são controlados pela GV Softwares. Não temos 
            controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou 
            serviços de terceiros.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Alterações dos Termos</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Reservamo-nos o direito de, a nosso exclusivo critério, modificar ou substituir estes Termos de Uso a 
            qualquer momento. Seu uso continuado do site após a postagem de quaisquer alterações a estes Termos de Uso 
            constitui aceitação dessas alterações.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Contato</h2>
          <p className="text-slate-300 leading-relaxed">
            Se tiver dúvidas sobre estes Termos, entre em contato através de: <br/>
            <strong className="text-cyan-400">suporte@gvsoftwares.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
