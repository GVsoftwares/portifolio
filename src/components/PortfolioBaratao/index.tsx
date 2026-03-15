import { useEffect } from 'react';
import {
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  Settings,
  Smartphone,
  Shield,
  Zap,
  CheckCircle,
  Database
} from 'lucide-react';
import './styles.css';

import slideAdmin from '../../assets/slide_admin_baratao.png';
import slideSeguranca from '../../assets/slide_seguranca_baratao.png';
import siteAnimation from '../../assets/baratao_desktop_video.mp4';
import mobileAnimation from '../../assets/baratao_mobile_video.mp4';

interface Props {
  onBack: () => void;
}

export default function PortfolioBarataoDoDia({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-baratao">
      <header>
        <div className="container nav-content">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={onBack}>
            <ArrowRight className="text-primary" size={28} style={{ transform: 'rotate(180deg)' }} color="#6366f1" />
            <span style={{ fontSize: '1rem', color: '#a9b1d6' }}>Voltar ao Início</span>
          </div>
          <div className="logo ml-4">
            <ShoppingBag size={28} color="#6366f1" />
            De Tudo um pouco
          </div>
          <nav className="nav-links">
            <a href="#experiencia">Experiência</a>
            <a href="#admin">Gestão CMS</a>
            <a href="#seguranca">Segurança</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
               <Zap size={14} /> E-commerce Premium
            </div>
            <h1>Vitrine digital inteligente focada em <span className="gradient-text">conversão</span></h1>
            <p>
              Substituímos o tradicional link na bio por uma plataforma multicanal dinâmica.
              Layout responsivo com navegação fluida e encaminhamento inteligente de vendas.
            </p>
            <a href="#experiencia" className="cta-button">
              Conheça o Projeto <ArrowRight size={20} />
            </a>
          </div>

          {/* Hero Mockup - Web View */}
          <div className="web-mockup floating">
            <div className="web-header">
              <div className="web-dot" style={{ background: '#ef4444' }}></div>
              <div className="web-dot" style={{ background: '#f59e0b' }}></div>
              <div className="web-dot" style={{ background: '#10b981' }}></div>
              <div style={{ margin: '0 auto', fontSize: '0.7rem', color: '#a9b1d6', display: 'flex', alignItems: 'center', gap: '5px', background: '#0d0e15', padding: '2px 10px', borderRadius: '4px' }}>
                <Shield size={10} color="#10b981" /> detudoumpouco.com.br
              </div>
            </div>
            <div className="web-content">
              <video className="video-fill" src={siteAnimation} autoPlay loop muted playsInline />
            </div>

          </div>
        </div>
      </section>

      <section id="experiencia" className="section">
        <div className="container">
          <div className="section-header">
            <h2>A Verdadeira <span className="gradient-text">Experiência Mobile</span></h2>
            <p>Otimizado para a melhor experiência na palma da mão, onde 90% das compras acontecem, rodando direto no navegador com sensação de App nativo.</p>
          </div>

          <div className="feature-grid">
            <div className="phone-mockup floating delay-1">
              <div className="phone-notch"></div>
              <div className="app-screen">
                <video className="video-fill video-mobile" src={mobileAnimation} autoPlay loop muted playsInline />
              </div>
              <div className="mock-overlay">
                <Smartphone size={16} color="#a855f7" /> Mobile-First Extremo
              </div>
            </div>

            <div className="feature-text">
              <h3>Touch Targets Precisos</h3>
              <p>O design responde a cada interação. Utilizamos <b>Framer Motion</b> para garantir transições suaves e micro-interações sem tempo de carregamento perceptível.</p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><ExternalLink size={24} /></div>
                  <div>
                    <h4>Encaminhamento Multicanal</h4>
                    <p>Ao selecionar um produto, o usuário é levado diretamente ao canal de venda principal estipulado para aquele produto (WhatsApp, Shopee, Instagram).</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><ShoppingBag size={24} /></div>
                  <div>
                    <h4>Filtros Dinâmicos</h4>
                    <p>Categorização instantânea entre produtos novos, seminovos e serviços sem precisar recarregar a página.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Zap size={24} /></div>
                  <div>
                    <h4>Fluidez Extrema</h4>
                    <p>Efeitos Glassmorphism e botões flutuantes adaptáveis para evitar cliques incorretos na versão mobile.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="admin" className="section" style={{ background: 'rgba(99, 102, 241, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Gestão Completa com <span className="gradient-text">CMS Próprio</span></h2>
            <p>Total autonomia para o cliente final administrar produtos e informações de contato.</p>
          </div>

          <div className="feature-grid reverse">
            <div className="web-mockup reverse-angle floating delay-2">
              <div className="web-header">
                <div className="web-dot" style={{ background: '#ef4444' }}></div>
                <div className="web-dot" style={{ background: '#f59e0b' }}></div>
                <div className="web-dot" style={{ background: '#10b981' }}></div>
                <div style={{ margin: '0 auto', fontSize: '0.7rem', color: '#a9b1d6', display: 'flex', alignItems: 'center', gap: '5px', background: '#0d0e15', padding: '2px 10px', borderRadius: '4px' }}>
                  <Settings size={10} color="#6366f1" /> Admin Dashboard
                </div>
              </div>
              <div className="web-content" style={{ backgroundImage: `url(${slideAdmin})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}></div>
               <div className="mock-overlay">
                <Database size={16} color="#10b981" /> Supabase Backend
              </div>
            </div>

            <div className="feature-text">
              <h3>Automação na Palma da Mão</h3>
              <p>
                O projeto acompanha um painel administrativo exclusivo. Adicione, edite ou remova produtos (posts) instantaneamente, e veja a vitrine atualizar em real-time.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Settings size={24} /></div>
                  <div>
                    <h4>Edição Descomplicada</h4>
                    <p>Interface intuitiva e livre de distrações, voltada unicamente para gerenciar o catálogo da loja.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Database size={24} /></div>
                  <div>
                    <h4>Múltiplos Destinos de Venda</h4>
                    <p>Para cada produto cadastrado, você escolhe on-the-fly exatamente o link de destino de atendimento/conversão de vendas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Tecnologia <span className="gradient-text">Moderna & Segura</span></h2>
            <p>Construção robusta com as melhores práticas de desenvolvimento web moderno usando React.</p>
          </div>

          <div className="feature-grid">
            <div className="web-mockup floating">
              <div className="web-header">
                <div className="web-dot" style={{ background: '#ef4444' }}></div>
                <div className="web-dot" style={{ background: '#f59e0b' }}></div>
                <div className="web-dot" style={{ background: '#10b981' }}></div>
              </div>
              <div className="web-content" style={{ backgroundImage: `url(${slideSeguranca})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}></div>
            </div>

            <div className="feature-text">
              <h3>Backend as a Service</h3>
              <p>
                A plataforma foi desenhada para crescer. Com o Supabase e PostgreSQL as fundações estão prontas para escalabilidade infinita.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Shield size={24} /></div>
                  <div>
                    <h4>Controle de Acessos Auth</h4>
                    <p>O painel administrativo e a edição de produtos e contato são estritamente protegidos por login e senha.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Zap size={24} /></div>
                  <div>
                    <h4>Vite & TypeScript</h4>
                    <p>Tipagem estática para evitar erros em produção e empacotamento ultra-rápido gerando arquivos levíssimos no navegador final do cliente.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-logo">
            <ShoppingBag color="#6366f1" className="inline-block mr-2" size={24} />
            De Tudo um pouco
          </div>
        </div>
      </footer>
    </div>
  );
}
