import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-white/70 backdrop-blur-xl border border-neutral-200/80 rounded-full px-6 py-3.5 shadow-xl shadow-neutral-900/5 flex items-center justify-between transition-all">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-black text-sm tracking-widest shadow-md">
                    S
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-black uppercase">
          SEMISA <span className="text-amber-600 font-normal">Web Solutions</span>
        </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-neutral-600">
                <a href="#servicios" className="hover:text-black transition-colors">Servicios</a>
                <a href="#demos" className="hover:text-black transition-colors">Demos & Portafolio</a>
                <a href="#nosotros" className="hover:text-black transition-colors">Metodología</a>
            </div>

            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white font-medium text-xs tracking-wider uppercase rounded-full transition-all shadow-md shadow-black/10 flex items-center gap-2 hover:scale-105"
            >
                <span>Contacto</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
        </nav>
    );
}