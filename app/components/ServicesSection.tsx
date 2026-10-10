import React from 'react';
import { Layout, Cpu, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            icon: <Layout className="w-6 h-6 text-amber-600" />,
            title: 'Plataformas & SaaS a Medida',
            description:
                'Sistemas web complejos, paneles de administración, gestión de citas y flujos operativos adaptados a la lógica única de su empresa.',
            badge: 'Soluciones Fullstack',
        },
        {
            icon: <Cpu className="w-6 h-6 text-neutral-800" />,
            title: 'Sitios Web Corporativos & Landing Pages',
            description:
                'Interfaces de alto impacto visual diseñadas desde cero con estética escandinava, máxima velocidad de carga y optimización para conversión.',
            badge: 'Diseño UI/UX Prémium',
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
            title: 'Bases de Datos & Mantenimiento Cloud',
            description:
                'Arquitectura segura en la nube con Supabase/PostgreSQL, autenticación RLS, copias de respaldo y monitoreo continuo de rendimiento.',
            badge: 'Infraestructura & Seguridad',
        },
    ];

    return (
        <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-200/80">
            <div className="space-y-12">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] text-amber-600 uppercase">
            Nuestra Oferta
          </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
                        Servicios Especializados
                    </h2>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                        Combinamos ingeniería de código limpio con arquitectura en la nube para entregar software rápido, seguro y escalable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">
                    {item.badge}
                  </span>
                                </div>

                                <h3 className="text-xl font-bold text-black group-hover:text-amber-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 text-xs leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>

                            <a
                                href="https://wa.me/+573504990664"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:text-amber-600 transition-colors pt-4 border-t border-neutral-100"
                            >
                                <span>Consultar por este servicio</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}