/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import Differentiators from './components/Differentiators';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioMvDespesas from './components/PortfolioMvDespesas';
import PortfolioBarataoDoDia from './components/PortfolioBaratao';
import PortfolioSaints from './components/PortfolioSaints';
import PortfolioChatbot from './components/PortfolioChatbot';
import PortfolioDashboard from './components/PortfolioDashboard';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

type View = 'home' | 'mvdespesas' | 'baratao' | 'saints' | 'chatbot' | 'dashboard' | 'privacy' | 'terms';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Sincroniza o botão VOLTAR do navegador/celular com o estado do React
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: View, skipHistory = false) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    
    if (!skipHistory && view !== 'home') {
      window.history.pushState({ view }, '', '');
    } else if (view === 'home' && !skipHistory) {
      // Se estiver voltando para home, não necessariamente fazemos push 
      // para evitar loops, mas o botão de voltar fará handlePopState
    }
  };

  const goBack = () => {
    if (window.history.state && window.history.state.view) {
      window.history.back();
    } else {
      handleNavigate('home');
      setTimeout(() => {
        const element = document.getElementById('portfolio');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (currentView === 'chatbot') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioChatbot onBack={goBack} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'dashboard') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioDashboard onBack={goBack} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'baratao') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioBarataoDoDia onBack={goBack} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'saints') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioSaints onBack={goBack} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'mvdespesas') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioMvDespesas onBack={goBack} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'privacy') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PrivacyPolicy onBack={() => handleNavigate('home')} />
        <Footer onNavigate={(v) => handleNavigate(v)} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <TermsOfUse onBack={() => handleNavigate('home')} />
        <Footer onNavigate={(v) => handleNavigate(v)} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio 
          onViewDespesas={() => handleNavigate('mvdespesas')} 
          onViewBaratao={() => handleNavigate('baratao')} 
          onViewSaints={() => handleNavigate('saints')}
          onViewChatbot={() => handleNavigate('chatbot')}
          onViewDashboard={() => handleNavigate('dashboard')}
        />

        <Differentiators />
        <Contact />
      </main>
      <Footer onNavigate={(v) => handleNavigate(v)} />
      <WhatsAppButton />
    </div>
  );
}
