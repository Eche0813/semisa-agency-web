export interface ProjectDemo {
    id: string;
    title: string;
    description: string;
    badge: string;
    isLive: boolean;
    techStack: string[];
    publicUrl?: string;
    adminUrl?: string;
}

export const AGENCY_PROJECTS: ProjectDemo[] = [
    {
        id: 'booking-mvp',
        title: 'Panel de Reservas & Agendamiento Online',
        description:
            'Sistema completo para agendamiento de citas en tiempo real. Incluye selector dinámico de horarios libres, formulario de confirmación y módulo privado para administradores.',
        badge: 'SaaS / MVP Activo',
        isLive: true,
        techStack: ['Next.js 15', 'Supabase Auth & RLS', 'Tailwind CSS'],
        publicUrl: 'https://booking-system-mvp-eight.vercel.app',
        adminUrl: 'https://booking-system-mvp-eight.vercel.app/admin/login',
    },
    {
        id: 'ecommerce-catalog',
        title: 'Catálogo Interactivo & Carrito de Compras',
        description:
            'Plataforma de comercio electrónico de alta velocidad con filtros en tiempo real, gestión de inventario y pedidos automatizados por WhatsApp.',
        badge: 'SaaS / MVP Activo',
        isLive: true,
        techStack: ['React State', 'WhatsApp API', 'Stripe Integration'],
        publicUrl:'https://semisa-ecommerce-demo.vercel.app/'

    },
];