/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LiveDemo from './components/LiveDemo';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioMvDespesas from './components/PortfolioMvDespesas';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'mvdespesas' | 'privacy' | 'terms'>('home');

  const handleNavigate = (view: 'home' | 'mvdespesas' | 'privacy' | 'terms') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (currentView === 'mvdespesas') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioMvDespesas onBack={() => {
          handleNavigate('home');
          setTimeout(() => {
            window.location.hash = '#portfolio';
          }, 100);
        }} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'privacy') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PrivacyPolicy onBack={() => handleNavigate('home')} />
        <Footer onNavigate={handleNavigate} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <TermsOfUse onBack={() => handleNavigate('home')} />
        <Footer onNavigate={handleNavigate} />
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
        <Portfolio onViewDespesas={() => handleNavigate('mvdespesas')} />
        <LiveDemo />
        <Differentiators />
        <Testimonials />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}
