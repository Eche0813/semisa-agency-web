import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function MethodologySection() {
    const steps = [
        {
            number: '01',
            title: 'Levantamiento & Arquitectura',
            description:
                'Analizamos los objetivos comerciales de su proyecto y diseñamos la arquitectura técnica de datos y componentes antes de escribir código.',
        },
        {
            number: '02',
            title: 'Prototipado UI/UX & Código Limpio',
            description:
                'Maquetamos interfaces minimalistas e interactivas utilizando Next.js, TypeScript y Tailwind CSS sin depender de plantillas genéricas.',
        },
        {
            number: '03',
            title: 'Pruebas & Despliegue en la Nube',
            description:
                'Verificamos rendimiento, seguridad de bases de datos y desplegamos de forma continua en la infraestructura global de Vercel Edge.',
        },
        {
            number: '04',
            title: 'Garantía & Mantenimiento',
            description:
                'Entregamos el código fuente, la documentación técnica y ofrecemos monitoreo constante para asegurar disponibilidad total',
        },
    ];

    return (
        <section id="nosotros" className="py-24 px-6 bg-neutral-900 text-white relative overflow-hidden">
            {/* Sutil resplandor dorado de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-amber-400 uppercase">
              Proceso de Trabajo
            </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                            Nuestra Metodología
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm max-w-md font-light">
                        Un flujo de desarrollo estructurado para entregar proyectos a tiempo, sin sobrecostos y con el máximo nivel técnico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-950/80 p-8 rounded-3xl border border-neutral-800 space-y-4 relative group hover:border-amber-500/40 transition-all duration-300"
                        >
              <span className="text-4xl font-extrabold text-neutral-800 group-hover:text-amber-500/30 transition-colors font-mono">
                {step.number}
              </span>
                            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}