
import { useEffect } from 'react';
import {
  ShieldCheck,
  Users,
  Wallet,
  Fingerprint,
  LineChart,
  CalendarClock,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CreditCard,
  Crown,
  ExternalLink
} from 'lucide-react';
import './styles.css';

interface Props {
  onBack: () => void;
}

export default function PortfolioMvDespesas({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-mvdespesas">
      <header>
        <div className="container nav-content">
          <div className="nav-left-group">
            <div className="back-button" onClick={onBack}>
              <ArrowRight className="text-primary" size={24} style={{ transform: 'rotate(180deg)' }} color="#6366f1" />
              <span>Voltar</span>
            </div>
            <div className="logo">
              <Wallet className="text-primary" size={28} />
              <span>Mv-Despesas</span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#funcionalidades" onClick={(e) => { e.preventDefault(); document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' }); }}>Funcionalidades</a>
            <a href="#familia" onClick={(e) => { e.preventDefault(); document.getElementById('familia')?.scrollIntoView({ behavior: 'smooth' }); }}>Uso Familiar</a>
            <a href="#seguranca" onClick={(e) => { e.preventDefault(); document.getElementById('seguranca')?.scrollIntoView({ behavior: 'smooth' }); }}>Segurança</a>
            <a 
              href="https://mvdespesas.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="visit-site-link"
            >
              Conhecer app <ExternalLink size={16} />
            </a>
          </nav>
          <a 
            href="https://mvdespesas.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-site-link mobile-only-link"
          >
            App <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>O controle financeiro feito para <span className="gradient-text">você e sua família</span></h1>
            <p>
              Mv-Despesas é um aplicativo moderno e intuitivo que transforma a maneira como você gerencia seu dinheiro.
              Com foco total na colaboração em família e segurança de ponta.
            </p>
            <a href="#funcionalidades" className="cta-button" onClick={(e) => { e.preventDefault(); document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Conheça o App <ArrowRight size={20} />
            </a>
          </div>

          {/* Hero Mockup - Dashboard */}
          <div className="phone-mockup floating">
            <div className="phone-notch"></div>
            <div className="app-screen">
              <div className="mock-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 35, height: 35, borderRadius: '50%', background: 'linear-gradient(45deg, #7aa2f7, #bb9af7)' }}></div>
                  <span style={{ fontWeight: 800 }}>Olá, Victor! 👋</span>
                </div>
              </div>

              <div className="mock-card" style={{ background: 'linear-gradient(135deg, rgba(122, 162, 247, 0.1), rgba(187, 154, 247, 0.1))' }}>
                <div className="mock-balance-label">Saldo Total</div>
                <div className="mock-balance-value">R$ 5.430,00</div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                  <div style={{ flex: 1, background: 'rgba(158, 206, 106, 0.1)', padding: '10px', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#9ece6a', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      <TrendingUp size={14} /> Receitas
                    </div>
                    <div style={{ fontWeight: 'bold', marginTop: '5px' }}>R$ 7.200</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(247, 118, 142, 0.1)', padding: '10px', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f7768e', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      <TrendingDown size={14} /> Despesas
                    </div>
                    <div style={{ fontWeight: 'bold', marginTop: '5px' }}>R$ 1.770</div>
                  </div>
                </div>
              </div>

              <div style={{ fontWeight: 800, margin: '1.5rem 0 1rem' }}>Despesas Recentes</div>

              <div className="mock-card">
                <div className="mock-list-item">
                  <div className="mock-avatar" style={{ background: 'rgba(247, 118, 142, 0.1)', color: '#f7768e' }}>
                    🛒
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Mercado Extra</div>
                    <div style={{ fontSize: '0.75rem', color: '#a9b1d6' }}>Hoje, Cartão de Crédito</div>
                  </div>
                  <div style={{ fontWeight: 'bold', color: '#f7768e' }}>- R$ 450,00</div>
                </div>

                <div className="mock-list-item" style={{ borderBottom: 'none' }}>
                  <div className="mock-avatar" style={{ background: 'rgba(187, 154, 247, 0.1)', color: '#bb9af7' }}>
                    ⚡
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Conta de Luz</div>
                    <div style={{ fontSize: '0.75rem', color: '#a9b1d6' }}>Ontem, Pix</div>
                  </div>
                  <div style={{ fontWeight: 'bold', color: '#f7768e' }}>- R$ 125,50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Gestão Completa</h2>
            <p>Tudo que você precisa para sair do vermelho e construir um futuro financeiro sólido.</p>
          </div>

          <div className="feature-grid">
            <div className="phone-mockup floating delay-1">
              <div className="phone-notch"></div>
              <div className="app-screen">
                <div className="mock-header">
                  <span className="mock-title">Calendário & Atrasos</span>
                </div>
                <div className="mock-card">
                  <div style={{ background: 'rgba(247, 118, 142, 0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center', marginBottom: '1rem' }}>
                    <CalendarClock size={32} color="#f7768e" style={{ margin: '0 auto 10px' }} />
                    <div style={{ color: '#f7768e', fontWeight: 'bold' }}>2 Contas em Atraso!</div>
                  </div>
                  <div className="mock-list-item" style={{ borderBottom: 'none' }}>
                    <div className="mock-avatar">🌐</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Internet Claro</div>
                      <div style={{ fontSize: '0.7rem', color: '#f7768e' }}>Venceu há 3 dias</div>
                    </div>
                    <div style={{ fontWeight: 'bold' }}>R$ 119,90</div>
                  </div>
                </div>

                <div className="mock-header" style={{ marginTop: '2rem' }}>
                  <span className="mock-title">Salários Automatizados</span>
                </div>
                <div className="mock-card">
                  <div className="mock-list-item" style={{ borderBottom: 'none' }}>
                    <div className="mock-avatar" style={{ background: 'rgba(158, 206, 106, 0.1)' }}>💼</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Salário Mensal</div>
                      <div style={{ fontSize: '0.7rem', color: '#a9b1d6' }}>Cai no 5º dia útil</div>
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#9ece6a' }}>R$ 4.500</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-text">
              <h3>Automação que Facilita</h3>
              <p>O Mv-Despesas não é apenas uma planilha no celular. Ele foi projetado para trabalhar para você, organizando lançamentos recorrentes e evitando atrasos.</p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><LineChart size={24} /></div>
                  <div>
                    <h4>Dashboard Inteligente</h4>
                    <p>Visão clara do fluxo de caixa e balanço geral do mês.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><CalendarClock size={24} /></div>
                  <div>
                    <h4>Controle de Atrasados</h4>
                    <p>Alertas automáticos para despesas pendentes baseados na data de vencimento e no momento de abertura do app.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><CreditCard size={24} /></div>
                  <div>
                    <h4>Salários e Vales</h4>
                    <p>Cadastre seus salários e deixe que o sistema gere as receitas automaticamente no quinto dia útil.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="familia" className="section" style={{ background: 'rgba(122, 162, 247, 0.02)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Uso <span className="gradient-text">Familiar</span></h2>
            <p>Trabalhar as finanças em conjunto fortalece o relacionamento e ajuda a alcançar objetivos mais rápido.</p>
          </div>

          <div className="feature-grid reverse">
            <div className="phone-mockup floating delay-2">
              <div className="phone-notch"></div>
              <div className="app-screen">
                <div className="mock-header">
                  <span className="mock-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={18} color="#bb9af7" /> Minha Família
                  </span>
                </div>

                <div className="mock-card" style={{ border: '2px dashed rgba(187, 154, 247, 0.3)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#a9b1d6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                    Código da Família
                  </div>
                  <div style={{ background: 'rgba(187, 154, 247, 0.1)', padding: '15px', borderRadius: '12px', textAlign: 'center', color: '#bb9af7', fontWeight: 800, letterSpacing: '3px', fontSize: '1.2rem' }}>
                    XPQ-789-WYZ
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#a9b1d6', textAlign: 'center', marginTop: '10px', lineHeight: '1.4' }}>
                    Compartilhe este código com seu parceiro(a) para sincronizar despesas.
                  </div>
                </div>

                <div style={{ fontWeight: 800, margin: '1.5rem 0 1rem', fontSize: '0.9rem' }}>Membros Ativos</div>

                <div className="mock-card">
                  <div className="mock-list-item">
                    <div className="mock-avatar" style={{ borderRadius: '50%' }}>V</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Você</span>
                        <span style={{ fontSize: '0.6rem', padding: '2px 6px', background: 'rgba(224, 175, 104, 0.2)', color: '#e0af68', borderRadius: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <Crown size={8} /> ADMIN
                        </span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#a9b1d6' }}>Membro criador</div>
                    </div>
                  </div>

                  <div className="mock-list-item" style={{ borderBottom: 'none' }}>
                    <div className="mock-avatar" style={{ borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>A</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Aline Mendes</div>
                      <div style={{ fontSize: '0.7rem', color: '#a9b1d6' }}>Membro convidado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-text">
              <h3>Finanças Compartilhadas em Tempo Real</h3>
              <p>
                No Mv-Despesas, você pode criar uma "Família" virtual gerando um código único.
                Basta seu parceiro ou parceira inserir esse código ao criar uma conta, e os dois terão acesso ao mesmo banco de dados.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Users size={24} /></div>
                  <div>
                    <h4>Sincronização Nuvem</h4>
                    <p>Alterou uma categoria ou adicionou uma conta? O outro aparelho atualiza na hora usando o poder do Supabase.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Crown size={24} /></div>
                  <div>
                    <h4>Gestão de Administração</h4>
                    <p>O criador da família detém privilégios de administrador, podendo visualizar e expulsar membros a qualquer momento para preservar os dados.</p>
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
            <h2>Bloqueio por <span className="gradient-text">Biometria</span></h2>
            <p>Seus dados financeiros não são brinquedo. Proteja o aplicativo contra olhares curiosos com tecnologia nativa.</p>
          </div>

          <div className="feature-grid">
            <div className="phone-mockup floating">
              <div className="phone-notch"></div>
              <div className="app-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '4px', background: 'var(--primary)', position: 'absolute', top: 0, left: 0, opacity: 0.8, boxShadow: '0 0 10px var(--primary)' }}></div>

                <div className="mock-fingerprint">
                  <Fingerprint size={40} />
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem', textAlign: 'center' }}>Mv-Despesas <br />Bloqueado</h3>
                <p style={{ color: '#a9b1d6', fontSize: '0.85rem', textAlign: 'center', maxWidth: '80%', marginBottom: '3rem' }}>
                  Utilize o Face ID ou a leitora de digitais para acessar suas finanças.
                </p>

                <button className="mock-btn" style={{ boxShadow: '0 8px 20px rgba(122, 162, 247, 0.3)' }}>
                  Tocar para Desbloquear
                </button>
              </div>
            </div>

            <div className="feature-text">
              <h3>Sua Privacidade em Primeiro Lugar</h3>
              <p>
                Com a integração avançada de <strong>WebAuthn</strong>, o Mv-Despesas permite que você vincule seu rosto (Face ID) ou sua digital (Touch ID) para bloquear o acesso local da página.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Fingerprint size={24} /></div>
                  <div>
                    <h4>Bloqueio App Local</h4>
                    <p>Mesmo que alguém pegue seu celular desbloqueado e abra seu navegador, precisará da sua biometria para ver os gastos.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><ShieldCheck size={24} /></div>
                  <div>
                    <h4>Tecnologia WebAuthn</h4>
                    <p>Um nível de segurança equiparado ao de banco, utilizando os próprios sensores de hardware modernos do seu dispositivo de forma independente e anônima.</p>
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
            <Wallet className="text-primary inline-block mr-2" size={24} />
            MV-despesas
          </div>
          <p className="copyright">
            <a 
              href="https://mvdespesas.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              mvdespesas.vercel.app
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
