import { useEffect } from 'react';
import {
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  Smartphone,
  Zap,
  LayoutTemplate,
  FastForward,
  Heart
} from 'lucide-react';
import './styles.css';

import saintsVideoGif from '../../assets/Saints-Video.gif';
import saintsReceitasGif from '../../assets/Saints-Video-receitas.gif';
import saintsMobileMp4 from '../../assets/Saints mobile.mp4';
import logoSaints from '../../assets/LogoSaints.webp';

interface Props {
  onBack: () => void;
}

export default function PortfolioSaints({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-saints">
      <header>
        <div className="container nav-content">
          <div className="nav-left-group">
            <div className="back-button" onClick={onBack}>
              <ArrowRight className="text-amber-500" size={24} style={{ transform: 'rotate(180deg)' }} color="#f59e0b" />
              <span>Voltar</span>
            </div>
            <div className="logo">
              <img src={logoSaints} alt="Logo Saints Massas" className="site-logo-img" />
              <span>Saints Massas</span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#apresentacao" onClick={(e) => { e.preventDefault(); document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' }); }}>Apresentação</a>
            <a href="#tecnologias" onClick={(e) => { e.preventDefault(); document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' }); }}>Tecnologias</a>
            <a href="#receitas" onClick={(e) => { e.preventDefault(); document.getElementById('receitas')?.scrollIntoView({ behavior: 'smooth' }); }}>Receitas</a>
            <a href="#design" onClick={(e) => { e.preventDefault(); document.getElementById('design')?.scrollIntoView({ behavior: 'smooth' }); }}>Design</a>
            <a 
              href="https://www.saintsmassas.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="visit-site-link"
            >
              Visitar Website <ExternalLink size={16} />
            </a>
          </nav>
          <a 
            href="https://www.saintsmassas.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-site-link mobile-only-link"
          >
            Site <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <section id="apresentacao" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
               <Heart size={14} /> Artesanal & Premium
            </div>
            <h1>Vitrine digital sofisticada com <span className="gradient-text">alta performance</span></h1>
            <p>
              Desenvolvemos a Saints Massas para refletir o lado premium do artesanato gastronômico. 
              Um catálogo rápido, visualmente imersivo e totalmente voltado para conversão por WhatsApp.
            </p>
            <a href="#tecnologias" className="cta-button" onClick={(e) => { e.preventDefault(); document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Conheça as Tecnologias <ArrowRight size={20} />
            </a>
          </div>

          {/* Hero Mockup - Web View */}
          <div className="web-mockup floating">
            <div className="web-header">
              <div className="web-dot" style={{ background: '#ef4444' }}></div>
              <div className="web-dot" style={{ background: '#f59e0b' }}></div>
              <div className="web-dot" style={{ background: '#10b981' }}></div>
              <div style={{ margin: '0 auto', fontSize: '0.7rem', color: '#d1bfae', display: 'flex', alignItems: 'center', gap: '5px', background: '#1c150f', padding: '2px 10px', borderRadius: '4px' }}>
                <LayoutTemplate size={10} color="#f59e0b" /> www.saintsmassas.com.br
              </div>
            </div>
            <div className="web-content" style={{ backgroundImage: `url(${saintsVideoGif})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="section">
        <div className="container">
          <div className="section-header">
            <h2>As Tecnologias por trás do <span className="gradient-text">Projeto</span></h2>
            <p>Usamos o ecosistema web mais moderno para entregar uma experiência impecável de navegação.</p>
          </div>

          <div className="feature-grid reverse">
            <div className="floating delay-1" style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
              <div style={{
                background: 'rgba(28, 21, 15, 0.4)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '3.5rem 2rem',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px rgba(245, 158, 11, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 style={{ color: '#f59e0b', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '4px', margin: 0, fontWeight: 800 }}>Stack Tecnológico</h4>
                <div style={{ display: 'flex', gap: 'clamp(1rem, 4vw, 3.5rem)', alignItems: 'flex-end', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s' }}>
                       <LayoutTemplate size={28} color="#38bdf8" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#d1bfae' }}>React</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))', padding: '20px', borderRadius: '50%', border: '2px solid rgba(245, 158, 11, 0.5)', transform: 'translateY(-10px)', boxShadow: '0 10px 25px rgba(245,158,11,0.25)' }}>
                       <Zap size={36} color="#fcd34d" />
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fcd34d', textShadow: '0 0 10px rgba(245,158,11,0.5)' }}>Vite</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)' }}>
                       <Smartphone size={28} color="#c084fc" />
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#d1bfae' }}>Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-text">
              <h3>Desenvolvimento de Ponta</h3>
              <p>O React + Vite entregam um carregamento quase instantâneo, superando as lentidões de construtores de sites padrão, mantendo os usuários focados na compra.</p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><FastForward size={24} /></div>
                  <div>
                    <h4>React + Vite</h4>
                    <p>Experiência de SPA (Single Page Application). Sem refrescamentos brancos ao trocar de categorias de massa, transições imediatas.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><ShoppingBag size={24} /></div>
                  <div>
                    <h4>Encaminhamento Web-to-WhatsApp</h4>
                    <p>Pedidos são montados com facilidade e pré-formatados diretamente no WhatsApp da loja, cortando atrito com formas de pagamento complexas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="receitas" className="section">
        <div className="container">
          <div className="section-header">
            <h2>A Cereja do Bolo: <span className="gradient-text">Receitas Exclusivas</span></h2>
            <p>Uma área dedicada para engajar clientes com conteúdo valioso e mostrar toda a versatilidade dos produtos Saints.</p>
          </div>

          <div className="feature-grid">
             <div className="web-mockup floating">
              <div className="web-header">
                <div className="web-dot" style={{ background: '#ef4444' }}></div>
                <div className="web-dot" style={{ background: '#f59e0b' }}></div>
                <div className="web-dot" style={{ background: '#10b981' }}></div>
                <div style={{ margin: '0 auto', fontSize: '0.7rem', color: '#d1bfae', display: 'flex', alignItems: 'center', gap: '5px', background: '#1c150f', padding: '2px 10px', borderRadius: '4px' }}>
                  <Heart size={10} color="#ef4444" /> saintsmassas.com.br/receitas
                </div>
              </div>
              <div className="web-content" style={{ backgroundImage: `url(${saintsReceitasGif})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
              </div>
            </div>

            <div className="feature-text">
              <h3>Conteúdo que Converte</h3>
              <p>
                As receitas são o verdadeiro diferencial competitivo. Elas educam o cliente, trazem água na boca e geram o desejo imediato de adquirir as massas frescas da marca para testar em casa.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Heart size={24} /></div>
                  <div>
                    <h4>Foco Sensorial</h4>
                    <p>Ao invés de apenas um catálogo frio, a página de receitas propõe um estilo de vida gastronômico que inspira paixão pelo produto.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><ExternalLink size={24} /></div>
                  <div>
                    <h4>Retenção e Fidelidade</h4>
                    <p>Uma central viva dentro do site. Os clientes sempre voltam para consultar novidades, dobrando as chances de novas conversões.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="design" className="section" style={{ background: 'rgba(245, 158, 11, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Design <span className="gradient-text">Premium & Mobile First</span></h2>
            <p>Construído primeiramente para celular com identidade e cores que abrem o apetite.</p>
          </div>

          <div className="feature-grid">
            <div className="phone-mockup floating delay-2">
              <div className="phone-notch"></div>
              <div className="app-screen">
                <video className="video-fill video-mobile" src={saintsMobileMp4} autoPlay loop muted playsInline style={{ objectFit: 'cover' }} />
              </div>
              <div className="mock-overlay">
                <Smartphone size={16} color="#f59e0b" /> Experiência Nativa
              </div>
            </div>

            <div className="feature-text">
              <h3>Aestética e Usabilidade</h3>
              <p>
                Os elementos gráficos, botões com efeito "glassmorphism" e fotos com prioridade de tela valorizam enormemente os pães caseiros e massas artesanais.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><LayoutTemplate size={24} /></div>
                  <div>
                    <h4>Tailwind CSS</h4>
                    <p>Permite criação de componentes responsivos, espaçamentos consistentes e utilitários de animação sob medida com um design system fluido.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Smartphone size={24} /></div>
                  <div>
                    <h4>Responsividade Flawless</h4>
                    <p>Perfeito em iPhones e Androids. As imagens redimensionam sem perder qualidade, enquanto navegação e botões em tela pequena são acessíveis e óbvios ao toque.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="logo footer-logo" style={{ justifyContent: 'center', marginBottom: '1rem', color: '#f59e0b' }}>
            <img src={logoSaints} alt="Logo Saints Massas" className="site-logo-img footer-logo-img" />
            Saints Massas
          </div>
          <p className="copyright">
            <a 
              href="https://www.saintsmassas.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              www.saintsmassas.com.br
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
