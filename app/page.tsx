'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ShowcaseGrid from './components/ShowcaseGrid';
import MethodologySection from './components/MethodologySection';
import Footer from './components/Footer';

export default function AgencyHomePage() {
  return (
      <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans relative overflow-x-hidden selection:bg-amber-400 selection:text-black">
        {/* Fondo Gradiente Plateado/Dorado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-amber-200/30 via-slate-200/50 to-neutral-100 blur-3xl pointer-events-none -z-10" />

        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ShowcaseGrid />
        <MethodologySection />
        <Footer />
      </main>
  );
}