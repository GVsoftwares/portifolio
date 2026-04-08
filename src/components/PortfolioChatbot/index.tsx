import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Bot,
  Zap,
  Clock,
  BarChart3,
  Users,
  Send,
  Target,
  UserCheck
} from 'lucide-react';
import './styles.css';

function WhatsAppIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
  );
}

interface Props {
  onBack: () => void;
}

export default function PortfolioChatbot({ onBack }: Props) {
  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-scroll the full conversation to the bottom
  useEffect(() => {
    if (demoRef.current) {
      demoRef.current.scrollTop = demoRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="portfolio-chatbot">
      {/* ─── Header ─────────────────────────────────────────── */}
      <header>
        <div className="container nav-content">
          <div className="nav-left-group">
            <div className="back-button" onClick={onBack}>
              <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} color="#25D366" />
              <span>Voltar</span>
            </div>
            <div className="logo">
              <div className="logo-icon">
                <WhatsAppIcon size={20} />
              </div>
              <span>Chatbot IA</span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#como-funciona" onClick={(e) => { e.preventDefault(); document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' }); }}>Como Funciona</a>
            <a href="#demo" onClick={(e) => { e.preventDefault(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); }}>Demonstração</a>
            <a href="#funcionalidades" onClick={(e) => { e.preventDefault(); document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' }); }}>Funcionalidades</a>
          </nav>
        </div>
      </header>

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content">

          {/* Left: text */}
          <div className="hero-text">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px',
              background: 'rgba(37,211,102,0.1)', color: '#25D366',
              borderRadius: '100px', fontSize: '0.85rem', fontWeight: 'bold',
              marginBottom: '1.5rem', border: '1px solid rgba(37,211,102,0.2)'
            }}>
              <Bot size={14} /> Chatbot com IA para WhatsApp
            </div>

            <h1>
              Qualifique leads e{' '}
              <span className="gradient-text">automatize o atendimento</span>
            </h1>

            <p>
              O Chatbot IA atua como o primeiro ponto de contato no WhatsApp — entende o
              que o cliente precisa, coleta as informações certas e encaminha para o
              consultor ideal, sem deixar nenhum lead sem resposta.
            </p>

            <a href="#demo" className="cta-button" onClick={(e) => { e.preventDefault(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Ver Demonstração <ArrowRight size={20} />
            </a>
          </div>

          {/* Right: WhatsApp Phone Mockup */}
          <div className="phone-mockup floating">
            <div className="phone-notch"></div>
            <div className="app-screen">
              <div className="wa-chat">

                {/* WA Header */}
                <div className="wa-header">
                  <div className="wa-avatar">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="wa-contact-info">
                    <div className="wa-contact-name">Urban Fit 🤖</div>
                    <div className="wa-contact-status">● online agora</div>
                  </div>
                </div>

                {/* Chat Messages — natural AI style, no menus */}
                <div className="wa-messages">

                  {/* msg 1 — bot greeting */}
                  <div className="wa-msg wa-msg-received" style={{ animationDelay: '0.3s' }}>
                    Olá! 👋 Sou a <strong>Sofia</strong>, assistente da Urban Fit.
                    Com o que posso te ajudar hoje?
                    <div className="wa-msg-time">09:41</div>
                  </div>

                  {/* msg 2 — user natural language */}
                  <div className="wa-msg wa-msg-sent" style={{ animationDelay: '1.5s' }}>
                    Quero um tênis pra corrida em asfalto
                    <div className="wa-msg-time">09:42 <span className="wa-msg-check">✓✓</span></div>
                  </div>

                  {/* typing */}
                  <div className="typing-indicator" style={{ animationDelay: '2.4s' }}>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>

                  {/* msg 3 — bot qualifies naturally */}
                  <div className="wa-msg wa-msg-received" style={{ animationDelay: '3.5s' }}>
                    Perfeito! 🏃 Para indicar o modelo ideal,
                    qual seu número e você tem pronação
                    neutra, plana ou supinada?
                    <div className="wa-msg-time">09:42</div>
                  </div>

                  {/* msg 4 — user answers naturally */}
                  <div className="wa-msg wa-msg-sent" style={{ animationDelay: '5.0s' }}>
                    42, pronação neutra
                    <div className="wa-msg-time">09:43 <span className="wa-msg-check">✓✓</span></div>
                  </div>

                  {/* typing */}
                  <div className="typing-indicator" style={{ animationDelay: '5.9s' }}>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>

                  {/* msg 5 — bot recommends and qualifies */}
                  <div className="wa-msg wa-msg-received" style={{ animationDelay: '7.1s' }}>
                    Ótimo perfil! 👟 Tenho duas opções
                    certeiras: <strong>Air Max Run R$ 349</strong> e
                    <strong> Speed Pro R$ 429</strong> — ambos no nº 42.
                    Posso te conectar ao nosso consultor?
                    <div className="wa-msg-time">09:43</div>
                  </div>

                </div>

                {/* Input Bar */}
                <div className="wa-input-bar">
                  <div className="wa-input-field">Digite uma mensagem...</div>
                  <div className="wa-input-icon">
                    <Send size={15} color="#fff" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Como Funciona ───────────────────────────────────── */}
      <section id="como-funciona" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Como o <span className="gradient-text">Chatbot IA Funciona</span></h2>
            <p>Três etapas que transformam uma mensagem no WhatsApp em um lead qualificado, pronto para o consultor converter.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '2rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {[
              {
                num: '01',
                icon: <WhatsAppIcon size={28} color="#25D366" />,
                color: 'rgba(37,211,102,0.1)',
                border: 'rgba(37,211,102,0.15)',
                title: 'Cliente Inicia a Conversa',
                desc: 'O visitante envia uma mensagem ao número da empresa no WhatsApp. O bot detecta a intenção e responde em menos de 1 segundo, a qualquer hora do dia.'
              },
              {
                num: '02',
                icon: <Bot size={28} color="#34B7F1" />,
                color: 'rgba(52,183,241,0.1)',
                border: 'rgba(52,183,241,0.15)',
                title: 'IA Identifica e Responde',
                desc: 'O motor de IA interpreta o que o cliente quer — catálogo, preço, disponibilidade — e entrega a resposta certa com opções claras e objetivas.'
              },
              {
                num: '03',
                icon: <Target size={28} color="#f59e0b" />,
                color: 'rgba(245,158,11,0.1)',
                border: 'rgba(245,158,11,0.15)',
                title: 'Lead Qualificado e Encaminhado',
                desc: 'Com as informações coletadas, o bot encaminha o lead ao consultor certo com todo o contexto pronto — nome, necessidade e perfil — aumentando a taxa de conversão.'
              }
            ].map((step, i) => (
              <div key={i} style={{
                background: 'rgba(26,39,48,0.55)',
                border: `1px solid ${step.border}`,
                borderRadius: '20px',
                padding: '2.25rem',
                position: 'relative',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '3.5rem', fontWeight: 900,
                  color: 'rgba(255,255,255,0.04)',
                  position: 'absolute', top: '1rem', right: '1.5rem',
                  lineHeight: 1, fontFamily: 'monospace', userSelect: 'none'
                }}>
                  {step.num}
                </div>
                <div style={{
                  background: step.color,
                  padding: '12px', borderRadius: '14px',
                  width: 'fit-content', marginBottom: '1.5rem'
                }}>
                  {step.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#fff' }}>
                  {step.title}
                </h4>
                <p style={{ color: '#8696A0', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Full Conversation Demo ───────────────────────────── */}
      <section id="demo" className="section" style={{ background: 'rgba(37,211,102,0.015)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Conversa <span className="gradient-text">Real de Qualificação</span></h2>
            <p>
              Do primeiro "Olá" até o lead qualificado e encaminhado para o consultor —
              tudo em uma conversa natural conduzida pela IA.
            </p>
          </div>

          <div className="feature-grid">

            {/* Web mockup with full chat */}
            <div className="web-mockup floating">
              <div className="web-header">
                <div className="web-dot" style={{ background: '#ef4444' }}></div>
                <div className="web-dot" style={{ background: '#f59e0b' }}></div>
                <div className="web-dot" style={{ background: '#10b981' }}></div>
                <div style={{
                  margin: '0 auto', fontSize: '0.65rem', color: '#8696A0',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  background: '#111B21', padding: '2px 10px', borderRadius: '4px'
                }}>
                  <WhatsAppIcon size={9} color="#25D366" /> WhatsApp Business — Urban Fit
                </div>
              </div>

              <div className="web-content">
                <div className="full-demo">

                  {/* Fake WA contact header */}
                  <div className="full-demo-header">
                    <div className="full-demo-avatar">
                      <WhatsAppIcon size={14} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E9EDEF' }}>
                        Urban Fit 🤖
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#25D366' }}>● Respondendo agora</div>
                    </div>
                  </div>

                  {/* Full qualification conversation */}
                  <div className="full-demo-messages" ref={demoRef}>

                    <div className="full-demo-msg received">
                      Olá! 👋 Sou a <strong>Sofia</strong>, assistente virtual da Urban Fit.
                      Para te ajudar da melhor forma, pode me dizer seu nome?
                      <div className="full-demo-time">09:40</div>
                    </div>

                    <div className="full-demo-msg sent">
                      Carlos
                      <div className="full-demo-time">09:40 ✓✓</div>
                    </div>

                    <div className="full-demo-msg received">
                      Oi <strong>Carlos</strong>! Com o que posso te ajudar hoje? 😊
                      <div className="full-demo-time">09:41</div>
                    </div>

                    <div className="full-demo-msg sent">
                      Quero saber sobre tênis de corrida
                      <div className="full-demo-time">09:41 ✓✓</div>
                    </div>

                    <div className="full-demo-msg received">
                      Ótimo tema! 🏃 Para recomendar o modelo perfeito pra você,
                      me conta: você corre com que frequência e em qual superfície
                      — asfalto, pista ou trilha?
                      <div className="full-demo-time">09:41</div>
                    </div>

                    <div className="full-demo-msg sent">
                      Corro 3 a 4x por semana, sempre em asfalto
                      <div className="full-demo-time">09:42 ✓✓</div>
                    </div>

                    <div className="full-demo-msg received">
                      Excelente! Mais uma coisa: qual é o seu número e você
                      tem pronação neutra, plana ou supinada? Isso faz
                      diferença enorme na escolha do tênis 👟
                      <div className="full-demo-time">09:42</div>
                    </div>

                    <div className="full-demo-msg sent">
                      Número 42, pronação neutra
                      <div className="full-demo-time">09:43 ✓✓</div>
                    </div>

                    <div className="full-demo-msg received">
                      Perfeito <strong>Carlos</strong>! Com base no seu perfil
                      — intermediário, asfalto, pronação neutra, nº 42 — nosso
                      consultor <strong>Paulo</strong> tem 2 opções certeiras pra você.
                      <br /><br />
                      Posso passar suas informações pra ele entrar em
                      contato em até 30 min?
                      <div className="full-demo-time">09:43</div>
                    </div>

                    <div className="full-demo-msg sent">
                      Sim, pode falar!
                      <div className="full-demo-time">09:44 ✓✓</div>
                    </div>

                    <div className="full-demo-msg received confirmed">
                      ✅ <strong>Tudo certo, Carlos!</strong><br /><br />
                      Encaminhei seu perfil completo para o <strong>Paulo</strong>.
                      Ele vai entrar em contato em até 30 min com as
                      melhores opções pra você 🎯
                      <div className="full-demo-time">09:44</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Features beside the mockup */}
            <div className="feature-text">
              <h3>Do Olá ao Lead Qualificado</h3>
              <p>
                O Chatbot IA conduz o cliente por uma conversa natural e fluída —
                entende o contexto, coleta as informações certas e encaminha para o
                consultor ideal com todo o perfil pronto para converter.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Zap size={24} /></div>
                  <div>
                    <h4>Resposta em &lt; 1 segundo</h4>
                    <p>Nenhum lead fica sem resposta. O bot atende instantaneamente, independente do horário ou do volume de conversas simultâneas.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Target size={24} /></div>
                  <div>
                    <h4>Qualificação Inteligente</h4>
                    <p>A IA identifica o perfil, a necessidade e o momento do lead por meio de perguntas naturais, entregando para o consultor apenas leads prontos para comprar.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><BarChart3 size={24} /></div>
                  <div>
                    <h4>Histórico Completo</h4>
                    <p>Cada conversa é registrada no Supabase com o perfil do lead. O consultor recebe o contexto completo antes mesmo de fazer o primeiro contato.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Funcionalidades ─────────────────────────────────── */}
      <section id="funcionalidades" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Inteligência que <span className="gradient-text">Converte Mais</span></h2>
            <p>O Chatbot IA integra as principais funções de pré-vendas em um único assistente disponível 24h — sem custo fixo de equipe.</p>
          </div>

          <div className="feature-grid reverse">

            {/* Stack visual */}
            <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }} className="floating delay-1">
              <div style={{
                background: 'rgba(26,39,48,0.5)',
                border: '1px solid rgba(37,211,102,0.2)',
                padding: '2.5rem 2rem',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 style={{
                  color: '#25D366', fontSize: '0.85rem',
                  textTransform: 'uppercase', letterSpacing: '4px',
                  marginBottom: '2rem', fontWeight: 800, textAlign: 'center'
                }}>
                  Stack Tecnológico
                </h4>

                <div style={{
                  display: 'flex', flexWrap: 'wrap',
                  gap: '1.25rem', justifyContent: 'center'
                }}>
                  {[
                    { label: 'Node.js',        hex: '#68A063' },
                    { label: 'TypeScript',     hex: '#3178C6' },
                    { label: 'WhatsApp API',   hex: '#25D366' },
                    { label: 'OpenAI',         hex: '#10a37f' },
                    { label: 'Supabase',       hex: '#3ECF8E' },
                    { label: 'Baileys',        hex: '#F59E0B' },
                  ].map((tech, i) => (
                    <div key={i} style={{
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '8px', minWidth: '72px'
                    }}>
                      <div style={{
                        background: `${tech.hex}18`,
                        padding: '14px', borderRadius: '50%',
                        border: `1px solid ${tech.hex}40`
                      }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%',
                          background: tech.hex, opacity: 0.9
                        }} />
                      </div>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 700,
                        color: '#8696A0', textAlign: 'center'
                      }}>
                        {tech.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metrics row */}
                <div style={{
                  display: 'flex', gap: '1rem', marginTop: '2rem',
                  justifyContent: 'center'
                }}>
                  {[
                    { value: '24h', label: 'Disponível' },
                    { value: '< 1s', label: 'Resposta' },
                    { value: '80%', label: 'Automação' },
                  ].map((m, i) => (
                    <div key={i} style={{
                      flex: 1, textAlign: 'center',
                      background: 'rgba(37,211,102,0.06)',
                      border: '1px solid rgba(37,211,102,0.15)',
                      padding: '0.75rem 0.5rem', borderRadius: '12px'
                    }}>
                      <div style={{
                        fontSize: '1.3rem', fontWeight: 900,
                        background: 'linear-gradient(135deg, #25D366, #34B7F1)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#8696A0', fontWeight: 600, marginTop: '2px' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Feature list */}
            <div className="feature-text">
              <h3>Automação de Ponta a Ponta</h3>
              <p>
                Combinamos as tecnologias mais modernas do mercado para entregar um chatbot
                rápido, inteligente e integrado com os sistemas da empresa — sem manutenção complexa.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Clock size={24} /></div>
                  <div>
                    <h4>Disponível 24h / 7 dias</h4>
                    <p>Nunca perde uma venda por horário. O assistente atende feriados, madrugadas e fins de semana com a mesma qualidade de um vendedor experiente.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Bot size={24} /></div>
                  <div>
                    <h4>IA Generativa (OpenAI)</h4>
                    <p>Perguntas fora do fluxo padrão são respondidas naturalmente pela IA. O bot aprende o contexto da conversa e nunca deixa o cliente sem resposta.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Users size={24} /></div>
                  <div>
                    <h4>Escalada para Consultor</h4>
                    <p>Quando o lead está qualificado, a conversa é transferida para o consultor em 1 clique com todo o histórico e perfil visíveis para agilizar a conversão.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><UserCheck size={24} /></div>
                  <div>
                    <h4>Painel de Leads</h4>
                    <p>Interface web para visualizar todos os leads qualificados, acompanhar o status de cada atendimento e medir a taxa de conversão em tempo real.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer>
        <div className="container">
          <div className="footer-logo">
            <div className="logo-icon">
              <WhatsAppIcon size={22} />
            </div>
            Chatbot IA
          </div>
          <p className="copyright" style={{ color: '#475569', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Desenvolvido por{' '}
            <span style={{ color: '#3B82F6', fontWeight: 700 }}>GV Softwares</span>
          </p>
        </div>
      </footer>

    </div>
  );
}
