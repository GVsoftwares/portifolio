import React, { useEffect } from 'react';
import {
  ArrowRight,
  BarChart2,
  Package,
  TrendingUp,
  DollarSign,
  Users,
  Database,
  PieChart,
  Activity,
  CheckCircle2,
  BarChart3,
  LineChart,
  FileSpreadsheet,
  Cpu,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Filter,
} from 'lucide-react';
import './styles.css';

interface Props {
  onBack: () => void;
}

/* ─── Shared style helpers ─────────────────────────────────── */
const D = {
  bg:      '#07112B',
  panel:   '#0C1E45',
  card:    'linear-gradient(135deg,#122b6e,#1D4ED8)',
  border:  'rgba(59,130,246,0.18)',
  text:    '#E2E8F0',
  muted:   '#64748B',
  green:   '#10B981',
  yellow:  '#F59E0B',
  red:     '#EF4444',
  blue:    '#3B82F6',
  lblue:   '#60A5FA',
};

/* tiny label */
function Lbl({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize:'0.48rem', textTransform:'uppercase', letterSpacing:'0.08em', color: D.muted }}>
      {children}
    </span>
  );
}

/* KPI card */
function KCard({ label, value, sub, color = D.lblue, up }: { label:string; value:string; sub?:string; color?:string; up?:boolean }) {
  return (
    <div style={{ background: D.card, border:`1px solid ${D.border}`, borderRadius:8, padding:'7px 10px', display:'flex', flexDirection:'column', gap:2 }}>
      <Lbl>{label}</Lbl>
      <span style={{ fontSize:'0.88rem', fontWeight:800, color: '#fff', lineHeight:1 }}>{value}</span>
      {sub && (
        <span style={{ fontSize:'0.42rem', color: up == null ? D.muted : up ? D.green : D.red, display:'flex', alignItems:'center', gap:2 }}>
          {up != null && (up ? '▲' : '▼')} {sub}
        </span>
      )}
    </div>
  );
}

/* horizontal bar row */
function HBar({ label, pct, color }: { label:string; pct:number; color:string }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:4 }}>
      <span style={{ fontSize:'0.45rem', color: D.muted, width:52, flexShrink:0, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{label}</span>
      <div style={{ flex:1, height:5, background:'rgba(255,255,255,0.06)', borderRadius:3 }}>
        <div style={{ width:`${pct}%`, height:'100%', background: color, borderRadius:3 }} />
      </div>
      <span style={{ fontSize:'0.4rem', color: D.muted, width:18, textAlign:'right' }}>{pct}%</span>
    </div>
  );
}

/* vertical bar chart */
function VBars({ data, color = D.blue }: { data:number[]; color?:string }) {
  const max = Math.max(...data);
  return (
    <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:54, padding:'0 2px' }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
          <div style={{
            width:'100%', borderRadius:'3px 3px 0 0',
            background: `linear-gradient(to top, ${color}cc, ${color})`,
            height: `${(v / max) * 100}%`,
            minHeight:3,
          }} />
        </div>
      ))}
    </div>
  );
}

/* donut chart */
function Donut({ slices }: { slices: { pct: number; color: string }[] }) {
  let offset = 0;
  const r = 20, circ = 2 * Math.PI * r;
  return (
    <svg width={54} height={54} viewBox="0 0 54 54">
      <circle cx={27} cy={27} r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={9}/>
      {slices.map((s, i) => {
        const dash = (s.pct / 100) * circ;
        const el = (
          <circle
            key={i} cx={27} cy={27} r={r} fill="none"
            stroke={s.color} strokeWidth={9}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset * circ / 100}
            strokeLinecap="round"
            style={{ transform:'rotate(-90deg)', transformOrigin:'27px 27px' }}
          />
        );
        offset += s.pct;
        return el;
      })}
      <circle cx={27} cy={27} r={12} fill={D.panel}/>
    </svg>
  );
}

/* semi-circle gauge */
function Gauge({ pct }: { pct: number }) {
  const r = 22, circ = Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={60} height={34} viewBox="0 0 60 34">
      <path d="M 8 30 A 22 22 0 0 1 52 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={8} strokeLinecap="round"/>
      <path d="M 8 30 A 22 22 0 0 1 52 30" fill="none" stroke={D.blue} strokeWidth={8}
        strokeLinecap="round" strokeDasharray={`${dash} ${circ}`}/>
      <text x={30} y={29} textAnchor="middle" fontSize={7} fontWeight={800} fill="#fff">{pct}%</text>
    </svg>
  );
}

/* ─── Power BI–style full panel ─────────────────────────────── */
function DashboardMockup({ screen }: { screen: 'estoque' | 'producao' | 'financeiro' | 'clientes' }) {
  const screenIdx = ['estoque','producao','financeiro','clientes'].indexOf(screen);

  /* ── Estoque ── */
  const estoqueContent = (
    <>
      {/* KPI row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:5 }}>
        <KCard label="Farinha" value="56 kg" sub="+4 kg vs mês ant." up />
        <KCard label="Óleo" value="12 L" sub="-2 L vs mês ant." up={false} />
        <KCard label="Sal" value="10 kg" sub="Estável" />
      </div>

      {/* Movimento table */}
      <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
          <Lbl>Movimentações por Período</Lbl>
          <Lbl>Jan–Dez 2024</Lbl>
        </div>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'0.45rem', color: D.text }}>
          <thead>
            <tr style={{ color: D.muted }}>
              {['Mês','Farinha','Óleo','Sal'].map(h => <th key={h} style={{ textAlign:'left', paddingBottom:2, fontWeight:600, fontSize:'0.42rem' }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {[['Jan','48 kg','10 L','8 kg'],['Fev','52 kg','11 L','9 kg'],['Mar','56 kg','12 L','10 kg'],['Abr','50 kg','9 L','8 kg']].map((r,i) => (
              <tr key={i} style={{ background: i%2===0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                {r.map((c,j) => <td key={j} style={{ padding:'2px 0' }}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Estoque atual — horizontal bars */}
      <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
        <Lbl>Estoque Atual (% do máximo)</Lbl>
        <div style={{ marginTop:5 }}>
          <HBar label="Farinha 000"  pct={75} color={D.blue} />
          <HBar label="Farinha Trigo" pct={60} color={D.lblue} />
          <HBar label="Óleo Soja"    pct={40} color={D.yellow} />
          <HBar label="Sal Refinado" pct={55} color={D.green} />
          <HBar label="Ovos (dz)"    pct={85} color="#A78BFA" />
        </div>
      </div>
    </>
  );

  /* ── Produção ── */
  const producaoContent = (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:5 }}>
        <KCard label="Total Produzido" value="6.0 kg" sub="+12% vs ontem" up />
        <KCard label="Total Massas" value="349.5 kg" sub="Acumulado mês" />
        <KCard label="Qtd Restante" value="343.5 kg" sub="-1.7% vendido" up={false} />
      </div>

      {/* gauge + bar side by side */}
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:6, alignItems:'center' }}>
        <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'8px 10px', display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
          <Lbl>Meta do dia</Lbl>
          <Gauge pct={74} />
          <span style={{ fontSize:'0.45rem', color: D.green }}>74% atingido</span>
        </div>
        <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'8px' }}>
          <Lbl>Produção por Dia (kg)</Lbl>
          <VBars data={[3.2,4.5,3.8,6.0,5.2,4.1,5.7]} color={D.blue} />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:2 }}>
            {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d => (
              <span key={d} style={{ flex:1, fontSize:'0.38rem', color: D.muted, textAlign:'center' }}>{d}</span>
            ))}
          </div>
        </div>
      </div>

      {/* products breakdown */}
      <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
        <Lbl>Produção por Tipo de Massa</Lbl>
        <div style={{ marginTop:5 }}>
          <HBar label="Massa Fresca"     pct={82} color={D.blue} />
          <HBar label="Massa Seca"       pct={54} color={D.green} />
          <HBar label="Massa Recheada"   pct={38} color={D.yellow} />
          <HBar label="Especial"         pct={22} color="#A78BFA" />
        </div>
      </div>
    </>
  );

  /* ── Financeiro ── */
  const financeiroContent = (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:5 }}>
        <KCard label="Valor Bruto"  value="R$225"   sub="+8% vs mês ant."   up />
        <KCard label="Valor Líq."   value="-R$1.32k" sub="Após encargos"    color={D.red} />
        <KCard label="Em Caixa"     value="R$726"   sub="Disponível hoje"   up />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:5 }}>
        <KCard label="Gastos Totais"  value="R$1.548" sub="+120 vs prev." up={false} />
        <KCard label="Ticket Médio"   value="R$15/kg" sub="Estável"       />
      </div>

      {/* bar + donut row */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:6, alignItems:'stretch' }}>
        <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
          <Lbl>Receita por Produto (R$)</Lbl>
          <VBars data={[80, 55, 120, 40, 95, 60, 75]} color={D.blue} />
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:2 }}>
            {['Fr.','Sec.','Rech.','Esp.','Fresca2','Seca2','Out.'].map(d => (
              <span key={d} style={{ flex:1, fontSize:'0.36rem', color: D.muted, textAlign:'center', lineHeight:1 }}>{d}</span>
            ))}
          </div>
        </div>

        <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'8px 10px', display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
          <Lbl>Mix de Produtos</Lbl>
          <Donut slices={[{pct:47,color:D.blue},{pct:20,color:D.green},{pct:13,color:D.yellow},{pct:9,color:'#A78BFA'},{pct:11,color:D.red}]}/>
          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {[['Fresca','47%',D.blue],['Seca','20%',D.green],['Recheada','13%',D.yellow],['Especial','9%','#A78BFA']].map(([l,p,c]) => (
              <div key={l as string} style={{ display:'flex', alignItems:'center', gap:3 }}>
                <div style={{ width:5, height:5, borderRadius:2, background: c as string, flexShrink:0 }}/>
                <span style={{ fontSize:'0.4rem', color: D.muted }}>{l as string}</span>
                <span style={{ fontSize:'0.4rem', color:'#fff', marginLeft:'auto' }}>{p as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  /* ── Clientes ── */
  const clientesContent = (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:4 }}>
        <KCard label="Total Pedidos"   value="180"        sub="+12 esse mês" up />
        <KCard label="Total kg"        value="349.5 kg"   sub="Acumulado" />
        <KCard label="Status"          value="Ativo"      sub="02/01/2025" color={D.green} />
        <KCard label="Próx. Entrega"   value="05/05"      sub="3 dias" color={D.yellow} />
      </div>

      {/* pedidos por cliente - horizontal bars */}
      <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
        <Lbl>Pedidos por Cliente</Lbl>
        <div style={{ marginTop:5 }}>
          <HBar label="Restaurante A"  pct={88} color={D.blue} />
          <HBar label="Café Gourmet"   pct={65} color={D.lblue} />
          <HBar label="Bistrô Central" pct={55} color={D.green} />
          <HBar label="Padaria Norte"  pct={42} color={D.yellow} />
          <HBar label="Outros"         pct={30} color={D.muted} />
        </div>
      </div>

      {/* days remaining panel */}
      <div style={{ background:'rgba(255,255,255,0.025)', border:`1px solid ${D.border}`, borderRadius:6, padding:'6px 8px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
          <Lbl>Dias Restantes para Entrega</Lbl>
          <Lbl>Prioridade ↓</Lbl>
        </div>
        {[
          ['Restaurante A','3 dias',D.red],
          ['Café Gourmet','7 dias',D.yellow],
          ['Bistrô Central','12 dias',D.green],
          ['Padaria Norte','18 dias',D.green],
        ].map(([name,dias,color]) => (
          <div key={name as string} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'3px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize:'0.44rem', color: D.text }}>{name as string}</span>
            <span style={{ fontSize:'0.44rem', fontWeight:700, color: color as string, background:`${color as string}1a`, padding:'1px 5px', borderRadius:4 }}>{dias as string}</span>
          </div>
        ))}
      </div>
    </>
  );

  const screenContent: Record<string, React.ReactNode> = {
    estoque: estoqueContent,
    producao: producaoContent,
    financeiro: financeiroContent,
    clientes: clientesContent,
  };

  const screenTitles = ['📦 Estoque','⚙️ Produção','💰 Financeiro','👥 Clientes'];

  return (
    <div className="web-mockup floating">
      {/* Browser chrome */}
      <div className="web-header">
        <div className="web-dot" style={{ background: '#ef4444' }} />
        <div className="web-dot" style={{ background: '#f59e0b' }} />
        <div className="web-dot" style={{ background: '#10b981' }} />
        <div className="web-address">
          <BarChart2 size={9} color="#3B82F6" />
          saints-massas · dashboard
        </div>
        <div style={{ marginLeft:'auto', display:'flex', gap:4 }}>
          <Filter size={7} color={D.muted}/>
          <RefreshCw size={7} color={D.muted}/>
        </div>
      </div>

      {/* Full dashboard layout */}
      <div style={{ display:'grid', gridTemplateColumns:'40px 1fr', background: D.bg, minHeight:0 }}>
        {/* Sidebar */}
        <div style={{ background:'#040D1F', borderRight:`1px solid ${D.border}`, display:'flex', flexDirection:'column', alignItems:'center', padding:'8px 0', gap:8 }}>
          {/* logo dot */}
          <div style={{ width:20, height:20, borderRadius:6, background:'linear-gradient(135deg,#1D4ED8,#3B82F6)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:4 }}>
            <BarChart2 size={10} color="#fff"/>
          </div>
          {[Package, TrendingUp, DollarSign, Users].map((Icon, i) => (
            <div key={i} style={{
              width:28, height:28, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center',
              background: screenIdx===i ? 'rgba(59,130,246,0.25)' : 'transparent',
              borderLeft: screenIdx===i ? '2px solid #3B82F6' : '2px solid transparent',
            }}>
              <Icon size={13} color={screenIdx===i ? '#60A5FA' : '#4B5563'} />
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ padding:'8px 10px', display:'flex', flexDirection:'column', gap:6, overflow:'hidden' }}>
          {/* Top bar */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:'0.62rem', fontWeight:800, color:'#fff', letterSpacing:'0.02em' }}>
              {screenTitles[screenIdx]}
            </span>
            <div style={{ display:'flex', gap:3, alignItems:'center' }}>
              <span style={{ fontSize:'0.38rem', color: D.green, display:'flex', alignItems:'center', gap:2 }}>
                <span style={{ width:4, height:4, borderRadius:'50%', background: D.green, display:'inline-block' }}/>
                Ao vivo
              </span>
              <span style={{ fontSize:'0.38rem', color: D.muted }}>Atualizado 09:42</span>
            </div>
          </div>

          {/* Tab bar */}
          <div style={{ display:'flex', gap:3, borderBottom:`1px solid ${D.border}`, paddingBottom:4 }}>
            {screenTitles.map((t, i) => (
              <span key={i} style={{
                fontSize:'0.42rem', fontWeight: screenIdx===i ? 700 : 400,
                color: screenIdx===i ? '#60A5FA' : D.muted,
                paddingBottom:3,
                borderBottom: screenIdx===i ? `1.5px solid #3B82F6` : '1.5px solid transparent',
                cursor:'default',
              }}>{t}</span>
            ))}
          </div>

          {/* Screen-specific content */}
          {screenContent[screen]}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioDashboard({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-dashboard">
      {/* ===== Header ===== */}
      <header>
        <div className="container nav-content">
          <div className="nav-left-group">
            <div className="back-button" onClick={onBack}>
              <ArrowRight size={22} color="#3B82F6" style={{ transform: 'rotate(180deg)' }} />
              <span>Voltar</span>
            </div>
            <div className="logo">
              <BarChart2 size={28} color="#3B82F6" />
              <span>Dashboard Saints</span>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#visao-geral" onClick={(e) => { e.preventDefault(); document.getElementById('visao-geral')?.scrollIntoView({ behavior: 'smooth' }); }}>Visão Geral</a>
            <a href="#estoque" onClick={(e) => { e.preventDefault(); document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' }); }}>Estoque</a>
            <a href="#producao" onClick={(e) => { e.preventDefault(); document.getElementById('producao')?.scrollIntoView({ behavior: 'smooth' }); }}>Produção</a>
            <a href="#financeiro" onClick={(e) => { e.preventDefault(); document.getElementById('financeiro')?.scrollIntoView({ behavior: 'smooth' }); }}>Financeiro</a>
            <a href="#clientes" onClick={(e) => { e.preventDefault(); document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' }); }}>Clientes</a>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="visao-geral" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Activity size={14} />
              Business Intelligence · Dados em Tempo Real
            </div>
            <h1>
              Dashboard completo para <span className="gradient-text">gestão inteligente</span>
            </h1>
            <p>
              Sistema de business intelligence desenvolvido para a Saints Massas. Centraliza
              estoque, produção, finanças e clientes em um único painel visual interativo —
              transformando dados brutos em decisões ágeis.
            </p>
            <a href="#estoque" className="cta-button" onClick={(e) => { e.preventDefault(); document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Explorar Módulos <ArrowRight size={20} />
            </a>
          </div>

          {/* Hero mockup — finance overview */}
          <DashboardMockup screen="financeiro" />
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>4</h3>
              <p>Módulos Integrados</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Dados em Tempo Real</p>
            </div>
            <div className="stat-card">
              <h3>Zero</h3>
              <p>Planilhas Manuais</p>
            </div>
            <div className="stat-card">
              <h3>+60%</h3>
              <p>Eficiência Operacional</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Estoque ===== */}
      <section id="estoque" className="section">
        <div className="container">
          <div className="section-header">
            <div className="hero-badge" style={{ display: 'inline-flex' }}>
              <Package size={14} /> Módulo 01
            </div>
            <h2>Gestão de <span className="gradient-text">Estoque</span></h2>
            <p>
              Monitore seus insumos em tempo real, acompanhe movimentações por período
              e receba alertas quando os níveis estiverem abaixo do ideal.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-text">
              <h3>Controle total dos <span className="gradient-text">seus insumos</span></h3>
              <p>
                O módulo de estoque exibe os níveis atuais de cada ingrediente com kpis
                visuais de destaque, tabela de movimentações históricas por ano/mês e
                gráfico de barras horizontais de estoque atual — tudo em uma tela limpa
                e responsiva.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Package size={18} /></div>
                  <div>
                    <h4>KPIs de Insumos</h4>
                    <p>Farinha, óleo, sal e demais ingredientes com valores e unidades em destaque.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><BarChart3 size={18} /></div>
                  <div>
                    <h4>Movimentações Históricas</h4>
                    <p>Tabela dinâmica com detalhamento por período (ano/mês) e tipo de insumo.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Activity size={18} /></div>
                  <div>
                    <h4>Gráfico por Categoria</h4>
                    <p>Visualização comparativa do estoque atual de cada produto em barras horizontais.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="floating">
              <DashboardMockup screen="estoque" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Produção ===== */}
      <section id="producao" className="section" style={{ background: 'rgba(13, 27, 62, 0.3)' }}>
        <div className="container">
          <div className="section-header">
            <div className="hero-badge" style={{ display: 'inline-flex' }}>
              <Cpu size={14} /> Módulo 02
            </div>
            <h2>Controle de <span className="gradient-text">Produção</span></h2>
            <p>
              Acompanhe em tempo real quanto foi produzido, quanto resta e como está
              o ritmo diário de produção — com gauge visual e gráficos de barras.
            </p>
          </div>

          <div className="feature-grid reverse">
            <div className="feature-text">
              <h3>Do lote ao <span className="gradient-text">produto final</span></h3>
              <p>
                O painel de produção centraliza os dados de fabricação em KPIs claros:
                total produzido, total de massas e quantidade restante. O gauge circular
                mostra de forma visual o progresso em relação à meta do período.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><TrendingUp size={18} /></div>
                  <div>
                    <h4>Gauge de Progresso</h4>
                    <p>Indicador semicircular exibindo produção atual vs meta configurada.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><BarChart3 size={18} /></div>
                  <div>
                    <h4>Produção por Dia</h4>
                    <p>Gráfico de colunas mostrando o volume de massas produzido por dia da semana.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><CheckCircle2 size={18} /></div>
                  <div>
                    <h4>Saldo de Estoque Vivo</h4>
                    <p>Cálculo automático entre o total produzido e os pedidos já separados.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="floating delay-1">
              <DashboardMockup screen="producao" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Financeiro ===== */}
      <section id="financeiro" className="section">
        <div className="container">
          <div className="section-header">
            <div className="hero-badge" style={{ display: 'inline-flex' }}>
              <DollarSign size={14} /> Módulo 03
            </div>
            <h2>Painel <span className="gradient-text">Financeiro</span></h2>
            <p>
              Visão completa das receitas, custos e saldo do período com donut chart
              por produto e análise de margens em tempo real.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-text">
              <h3>Finanças sempre <span className="gradient-text">sob controle</span></h3>
              <p>
                Cinco KPIs financeiros em destaque — valor bruto, valor líquido, gastos,
                valor em caixa e totais do período — complementados por um donut chart
                do mix de vendas e uma análise de receita por produto.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><DollarSign size={18} /></div>
                  <div>
                    <h4>5 KPIs Financeiros</h4>
                    <p>Total, valor bruto, valor líquido, gastos e saldo em caixa exibidos em cards.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><PieChart size={18} /></div>
                  <div>
                    <h4>Donut por Produto</h4>
                    <p>Distribuição percentual da receita entre os diferentes tipos de massa.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><LineChart size={18} /></div>
                  <div>
                    <h4>Análise de Margem</h4>
                    <p>Comparativo entre receita bruta e custos para identificar produtos mais rentáveis.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="floating">
              <DashboardMockup screen="financeiro" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Clientes ===== */}
      <section id="clientes" className="section" style={{ background: 'rgba(13, 27, 62, 0.3)' }}>
        <div className="container">
          <div className="section-header">
            <div className="hero-badge" style={{ display: 'inline-flex' }}>
              <Users size={14} /> Módulo 04
            </div>
            <h2>Clientes &amp; <span className="gradient-text">Pedidos</span></h2>
            <p>
              Gerencie os pedidos ativos, acompanhe prazos de entrega e identifique
              os clientes que mais consomem com análise por cliente.
            </p>
          </div>

          <div className="feature-grid reverse">
            <div className="feature-text">
              <h3>Gestão de clientes <span className="gradient-text">em tempo real</span></h3>
              <p>
                Painel com KPIs de pedidos (total, status, data de entrega) combinados
                com gráfico de barras por nome de cliente e painel lateral com dias
                restantes para cada entrega — priorizando automaticamente os mais urgentes.
              </p>

              <ul className="feature-list">
                <li>
                  <div className="icon-wrapper"><Users size={18} /></div>
                  <div>
                    <h4>Visão por Cliente</h4>
                    <p>Volume de pedidos de cada cliente exibido em gráfico de barras ordenado.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><Activity size={18} /></div>
                  <div>
                    <h4>Contagem de Dias</h4>
                    <p>Painel lateral calculando automaticamente os dias restantes para cada entrega.</p>
                  </div>
                </li>
                <li>
                  <div className="icon-wrapper"><CheckCircle2 size={18} /></div>
                  <div>
                    <h4>Status em Tempo Real</h4>
                    <p>Indicador visual de status por pedido: ativo, ausente, entregue e atrasado.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="floating delay-2">
              <DashboardMockup screen="clientes" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tecnologias ===== */}
      <section className="section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="hero-badge" style={{ display: 'inline-flex' }}>
              <Database size={14} /> Stack Técnica
            </div>
            <h2>Tecnologias <span className="gradient-text">utilizadas</span></h2>
            <p>
              Desenvolvido com ferramentas de mercado para análise de dados empresariais,
              garantindo performance, flexibilidade e fácil manutenção.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: <BarChart2 size={28} color="#3B82F6" />,
                name: 'Power BI Desktop',
                desc: 'Visualizações interativas, KPIs dinâmicos, relatórios e dashboards com atualização automática.',
              },
              {
                icon: <FileSpreadsheet size={28} color="#10B981" />,
                name: 'Excel + Power Query',
                desc: 'Modelagem de dados, ETL e transformações com Power Query integradas ao dashboard.',
              },
              {
                icon: <Database size={28} color="#F59E0B" />,
                name: 'DAX',
                desc: 'Linguagem de fórmulas para cálculos avançados: médias móveis, acumulados e KPIs financeiros.',
              },
              {
                icon: <Cpu size={28} color="#EF4444" />,
                name: 'VBA / Macros',
                desc: 'Automações para import de dados, formatação e triggers de atualização programada.',
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #0D1B3E, #112157)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  borderRadius: 16,
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {t.icon}
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#E2E8F0' }}>{t.name}</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <BarChart2 size={28} color="#3B82F6" />
            <span style={{ fontWeight: 900, fontSize: '1.3rem', color: '#fff' }}>Dashboard Saints Massas</span>
          </div>
          <p style={{ color: '#94A3B8', marginBottom: '1rem' }}>
            Sistema de Business Intelligence desenvolvido para otimizar a operação da Saints Massas.
          </p>
          <p style={{ color: '#475569', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Desenvolvido por{' '}
            <span style={{ color: '#3B82F6', fontWeight: 700 }}>GV Softwares</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
