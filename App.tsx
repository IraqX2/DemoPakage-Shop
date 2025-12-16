import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const LandingPage = () => (
  <>
    <Hero />
    <Products />
    <About />
    <Location />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-slate-50 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Catch-all route to redirect back to home if something goes wrong */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
};

export default App;