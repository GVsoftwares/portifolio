import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'privacy' | 'terms') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                GV<span className="text-cyan-400">Softwares</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Transformando ideias em soluções digitais de alta performance.
              Desenvolvimento de software sob medida para empresas que querem crescer.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors">Projetos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">Desenvolvimento Web</li>
              <li className="text-slate-400">Dashboards & BI</li>
              <li className="text-slate-400">Automação de Processos</li>
              <li className="text-slate-400">Integração de APIs</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} GV Softwares. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <button 
              onClick={() => onNavigate && onNavigate('privacy')}
              className="hover:text-cyan-400 transition-colors"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('terms')}
              className="hover:text-cyan-400 transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
