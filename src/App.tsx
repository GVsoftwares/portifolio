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

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'mvdespesas'>('home');

  if (currentView === 'mvdespesas') {
    return (
      <div className="bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
        <PortfolioMvDespesas onBack={() => {
          setCurrentView('home');
          setTimeout(() => {
            window.location.hash = '#portfolio';
          }, 100);
        }} />
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
        <Portfolio onViewDespesas={() => setCurrentView('mvdespesas')} />
        <LiveDemo />
        <Differentiators />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
