import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AGENCY_PROJECTS } from '@/data/agencyData';

export default function ShowcaseGrid() {
    return (
        <section id="demos" className="py-24 px-6 bg-white border-t border-neutral-200/80">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-amber-600 uppercase">
              Portafolio Interactivo
            </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
                            Demos en Vivo & Proyectos
                        </h2>
                    </div>
                    <p className="text-neutral-500 text-sm max-w-md">
                        Pruebe directamente nuestras soluciones de software activas en servidores de producción.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {AGENCY_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-3xl p-8 space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                                project.isLive
                                    ? 'bg-neutral-50 border border-neutral-200/80 hover:shadow-neutral-900/10'
                                    : 'bg-neutral-900 text-white border border-neutral-800'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                <span
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase ${
                        project.isLive
                            ? 'bg-black text-amber-400'
                            : 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                    }`}
                >
                  {project.badge}
                </span>

                                {project.isLive ? (
                                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    En Línea
                  </span>
                                ) : (
                                    <span className="text-xs text-neutral-400 font-mono">
                    E-Commerce / Catálogo
                  </span>
                                )}
                            </div>

                            <div className="space-y-3">
                                <h3
                                    className={`text-2xl font-bold transition-colors ${
                                        project.isLive
                                            ? 'text-black group-hover:text-amber-600'
                                            : 'text-white group-hover:text-amber-400'
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`text-xs leading-relaxed ${
                                        project.isLive ? 'text-neutral-600 font-normal' : 'text-neutral-400 font-light'
                                    }`}
                                >
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`text-[10px] font-mono px-3 py-1 rounded-lg border ${
                                            project.isLive
                                                ? 'bg-white border-neutral-200 text-neutral-600'
                                                : 'bg-neutral-800 border-neutral-700 text-neutral-300'
                                        }`}
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div
                                className={`pt-4 border-t flex items-center justify-between ${
                                    project.isLive ? 'border-neutral-200/60' : 'border-neutral-800'
                                }`}
                            >
                                {project.isLive && project.publicUrl ? (
                                    <>
                                        <a
                                            href={project.publicUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white font-medium text-xs rounded-xl transition-all flex items-center gap-2"
                                        >
                                            <span>Probar Demo Pública</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                                        </a>

                                        {project.adminUrl && (
                                            <a
                                                href={project.adminUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-neutral-500 hover:text-black transition-colors font-medium underline underline-offset-4"
                                            >
                                                Acceso Admin →
                                            </a>
                                        )}
                                    </>
                                ) : (
                                    <span className="text-xs text-amber-400/80 font-medium italic">
                    En proceso de maquetación final...
                  </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}