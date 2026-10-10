'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
    // Inicializamos con el año actual como fallback estático seguro
    const [year, setYear] = useState<number>(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-black text-white py-12 px-6 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">
                        S
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-neutral-200">
            SEMISA <span className="text-amber-400 font-normal">Web Solutions</span>
          </span>
                </div>

                <p className="text-neutral-500 text-xs text-center md:text-right">
                    © {year} Semisa Web Solutions. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}