import React from 'react';
import { Sparkles, ChevronRight, MessageSquare, Code2, Cpu, Globe } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto relative">
            <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-50 text-amber-800 text-[11px] font-semibold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Agencia de Desarrollo & Software de Alto Nivel</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.08]">
                    Ingeniería web que <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-black">sobresale</span> del resto.
                </h1>

                <p className="text-neutral-600 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                    Diseñamos e implementamos aplicaciones web, plataformas administrables y sistemas a medida construidos con arquitectura moderna y estética escandinava.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#demos"
                        className="px-8 py-4 bg-black hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase rounded-2xl shadow-xl shadow-black/15 transition-all flex items-center justify-center gap-3 hover:-translate-y-1"
                    >
                        <span>Explorar Demos Interactivas</span>
                        <ChevronRight className="w-4 h-4 text-amber-400" />
                    </a>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white hover:bg-neutral-100 text-black border border-neutral-300 font-semibold text-xs tracking-widest uppercase rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-4 h-4 text-neutral-700" />
                        <span>Cotizar Proyecto</span>
                    </a>
                </div>
            </div>

            {/* COMPONENTE CON TARJETAS FLOTANTES 3D */}
            <div className="mt-16 relative max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl shadow-neutral-900/10 p-6 md:p-8 relative z-20 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="text-xs text-neutral-400 font-mono ml-2">semisa-system-v1.0.app</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
              Sistemas Activos 100%
            </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-2">
                            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Tecnología Base</p>
                            <p className="text-xl font-bold text-black flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-amber-600" /> Next.js 15
                            </p>
                            <p className="text-[11px] text-neutral-400">App Router & TypeScript</p>
                        </div>

                        <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-2">
                            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Base de Datos</p>
                            <p className="text-xl font-bold text-black flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-neutral-800" /> Supabase SQL
                            </p>
                            <p className="text-[11px] text-neutral-400">Políticas RLS & Realtime</p>
                        </div>

                        <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-2">
                            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Infraestructura</p>
                            <p className="text-xl font-bold text-black flex items-center gap-2">
                                <Globe className="w-5 h-5 text-amber-600" /> Vercel Edge
                            </p>
                            <p className="text-[11px] text-neutral-400">Despliegue Global Continuo</p>
                        </div>
                    </div>
                </div>

                {/* TARJETAS FLOTANTES LATERALES */}
                <div className="hidden lg:flex items-center gap-3 absolute -top-8 -left-12 z-30 bg-black text-white p-4 rounded-2xl shadow-2xl shadow-black/30 border border-neutral-800 animate-bounce transition-all duration-1000">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold">
                        ⚡
                    </div>
                    <div>
                        <p className="text-xs font-bold">Rendimiento Máximo</p>
                        <p className="text-[10px] text-neutral-400">Lighthouse Score 100/100</p>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-3 absolute -bottom-8 -right-12 z-30 bg-white text-black p-4 rounded-2xl shadow-2xl shadow-neutral-900/15 border border-amber-400/50">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold">
                        ✓
                    </div>
                    <div>
                        <p className="text-xs font-bold">Diseño Exclusivo</p>
                        <p className="text-[10px] text-neutral-500">Sin plantillas genéricas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}