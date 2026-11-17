// Contenido alineado con el perfil de LinkedIn: https://www.linkedin.com/in/sadirueda/

export const profile = {
  name: "Sadi Luis Rueda",
  shortName: "Sadi Rueda",
  role: "Full Stack Developer",
  headline: "React · Next.js · TypeScript · Node.js · React Native",
  location: "Provincia de Buenos Aires, Argentina",
  email: "sadiluisrueda.94@gmail.com",
  linkedin: "https://www.linkedin.com/in/sadirueda/",
  github: "https://github.com/SadiLuis",
  site: "https://portfolio-definitiv.vercel.app",
  availability: "Disponible para posiciones Full Stack / Frontend (remoto o híbrido) y proyectos freelance.",
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  period: string;
  context: string;
  problem: string;
  approach: string[];
  decisions: string[];
  outcome?: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  cover: string;
  /** Capturas reales en /public/projects. La primera se usa como portada. */
  images: { src: string; alt: string; caption: string; width: number; height: number }[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "knauf-logistica",
    title: "Una app móvil para mover containers entre países",
    eyebrow: "Knauf Argentina / Logística",
    summary: "App interna de Knauf para el seguimiento internacional de containers: cámara nativa, mapas en tiempo real y acceso por roles.",
    role: "Ingeniero de Software Freelance",
    period: "Jun 2025 — Dic 2025",
    context: "Knauf, multinacional líder en materiales de construcción, necesitaba optimizar la logística y el traslado internacional de containers con una app móvil interna para sus operarios.",
    problem: "Los operarios en campo debían cargar pruebas logísticas (fotos, capturas, documentos) y hacer seguimiento de activos de forma rápida y segura, sin acceder a información que no correspondía a su perfil.",
    approach: [
      "Implementé funcionalidades nativas complejas: cámara, edición de capturas y acceso a almacenamiento para agilizar la carga de pruebas en campo.",
      "Integré AWS S3 y Google Maps API para el almacenamiento y el seguimiento de activos en tiempo real.",
      "Desarrollé un sistema de gestión de roles con Redux para que cada operario acceda solo a lo que su perfil permite.",
    ],
    decisions: [
      "Priorizar flujos cortos de carga en campo, donde la conectividad y el tiempo son limitados.",
      "Centralizar permisos en el estado global para que la seguridad no dependa de cada pantalla.",
      "Usar servicios gestionados (S3, Maps) para escalar sin infraestructura propia.",
    ],
    outcome: "La app se lanzó en Argentina y luego se implementó también en Colombia.",
    metrics: [
      { value: "2", label: "países en producción" },
      { value: "7", label: "meses de desarrollo" },
    ],
    stack: ["React Native", "TypeScript", "Redux", "AWS S3", "Google Maps API", "Git"],
    cover: "mvp",
    images: [
      { src: "/projects/knauf.jpg", alt: "Sitio web de Knauf Argentina", caption: "Knauf Argentina, el cliente. La app es de uso interno, por eso no hay capturas públicas de la app en sí.", width: 1568, height: 782 },
    ],
    links: [{ label: "Knauf Argentina", href: "https://knauf.com/es-AR" }],
  },
  {
    slug: "firma-electronica",
    title: "Verificación de identidad sin fricción para fintech",
    eyebrow: "CARDCRED / Fintech",
    summary: "Sistema de verificación de identidad y firma electrónica para entidades financieras, diseñado y desarrollado desde cero.",
    role: "Programador Full Stack",
    period: "Jul 2024 — Ago 2025",
    context: "CARDCRED, empresa fintech, necesitaba un sistema propio de verificación de identidad y firma electrónica para ofrecer a entidades financieras.",
    problem: "El onboarding financiero exige máxima seguridad, pero cada paso extra hace que más usuarios abandonen el proceso.",
    approach: [
      "Diseñé y desarrollé el sistema desde cero, del frontend a la API.",
      "Prioricé la seguridad en la verificación de identidad sin sacrificar la experiencia.",
      "Iteré los pasos del flujo para reducir la fricción en el onboarding.",
    ],
    decisions: [
      "Tratar la seguridad y la UX como un mismo requisito, no como fuerzas opuestas.",
      "Mantener cada paso del flujo con un único objetivo claro.",
      "Construir sobre una API REST con Node.js y Express para integrarse con otras entidades.",
    ],
    metrics: [
      { value: "0 → 1", label: "producto construido desde cero" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
    cover: "systems",
    images: [
      { src: "/projects/cardcred-firma.png", alt: "Página de Firma Electrónica en el sitio de CardCred", caption: "Firma Electrónica, el producto publicado en el sitio de CardCred.", width: 1440, height: 900 },
    ],
    links: [{ label: "Ver Firma Electrónica", href: "https://www.cardcred.com.ar/firmaElectronica" }],
  },
  {
    slug: "paycard",
    title: "Migrar el sistema de cobranzas sin frenar la operación",
    eyebrow: "CARDCRED / Producto interno",
    summary: "Migración y optimización de PayCard, el sistema de cobranzas core usado por 5 áreas de la empresa.",
    role: "Programador Full Stack",
    period: "Jul 2024 — Ago 2025",
    context: "PayCard era el sistema interno de cobranzas de CARDCRED: unas 25 personas de Cobranzas, RRHH, Soporte, Desarrollo y Legales lo usaban para gestionar pagos, historial y métricas.",
    problem: "Migrar un sistema core mientras está en uso: cualquier regresión impacta directamente en el trabajo diario de cinco áreas distintas.",
    approach: [
      "Colaboré en la migración y optimización del sistema de cobranzas.",
      "Mejoré la gestión de pagos, el historial de transacciones y las métricas de desempeño por rol.",
      "Acompañé la transición de los equipos para que siguieran operando durante la migración.",
    ],
    decisions: [
      "Diferenciar vistas y métricas según el rol de cada área.",
      "Optimizar los flujos más usados antes que sumar funcionalidades.",
      "Migrar de forma incremental para no interrumpir la operación.",
    ],
    outcome: "El flujo de trabajo de los equipos que usan PayCard se volvió un 30% más eficiente.",
    metrics: [
      { value: "+30%", label: "eficiencia en el flujo de trabajo" },
      { value: "25", label: "usuarios en 5 áreas" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Git"],
    cover: "interface",
    images: [
      { src: "/projects/paycard.png", alt: "Pantalla de ingreso de PayCard CardCred", caption: "Acceso a PayCard. El resto del sistema es privado y requiere credenciales de empresa.", width: 1440, height: 900 },
    ],
    links: [{ label: "Ver PayCard", href: "https://paycard.cardcred.com.ar/" }],
  },
  {
    slug: "cardcred-landing",
    title: "Un sitio más rápido para vender servicios financieros",
    eyebrow: "CARDCRED / Sitio web",
    summary: "Refactor de la landing principal de CardCred y sus páginas de producto, como Firma Electrónica y Link de Pago.",
    role: "Programador Full Stack",
    period: "Jul 2024 — Ago 2025",
    context: "El sitio de CardCred es la puerta de entrada para financieras que buscan débitos recurrentes, firma electrónica y cobros por link de pago.",
    problem: "Un sitio lento y pesado pierde clientes antes de que lleguen a leer la propuesta, y cada producto necesitaba su propia página clara.",
    approach: [
      "Refactoricé el sitio principal para mejorar la velocidad de carga y la fluidez.",
      "Trabajé las páginas de producto, como Firma Electrónica y Link de Pago, con una estructura común.",
      "Mantuve una navegación simple entre servicios, preguntas frecuentes y acceso a clientes.",
    ],
    decisions: [
      "Medir la velocidad antes y después para tener una mejora real, no percibida.",
      "Reutilizar componentes entre páginas de producto para mantener consistencia.",
      "Priorizar el mensaje principal de cada servicio por encima de la decoración.",
    ],
    outcome: "El sitio mejoró un 20% su velocidad de carga y fluidez.",
    metrics: [
      { value: "+20%", label: "velocidad de carga" },
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Git"],
    cover: "mvp",
    images: [
      { src: "/projects/cardcred-landing.png", alt: "Página principal de CardCred", caption: "Home de CardCred: débitos recurrentes para financieras.", width: 1440, height: 900 },
      { src: "/projects/cardcred-linkdepago.png", alt: "Página de Link de Pago de CardCred", caption: "Link de Pago: cobros por WhatsApp, SMS o correo electrónico.", width: 1440, height: 900 },
    ],
    links: [
      { label: "Ver cardcred.com.ar", href: "https://www.cardcred.com.ar/" },
      { label: "Ver Link de Pago", href: "https://www.cardcred.com.ar/linkDePago" },
    ],
  },
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  mode: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    period: "Jun 2025 — Dic 2025",
    company: "Knauf Argentina",
    role: "Ingeniero de Software Freelance",
    mode: "Autónomo · Híbrido",
    summary: "App móvil interna para la logística internacional de containers, lanzada en Argentina y Colombia. React Native, Redux, AWS S3 y Google Maps API.",
  },
  {
    period: "Jul 2024 — Ago 2025",
    company: "CARDCRED",
    role: "Programador Full Stack",
    mode: "Jornada completa · Híbrido",
    summary: "Firma electrónica desde cero, migración del sistema de cobranzas PayCard (+30% de eficiencia) y refactor del sitio web (+20% de velocidad).",
  },
];

export const education = {
  school: "Universidad Nacional del Litoral",
  degree: "Ingeniería Informática",
  period: "2022 — 2028 (en curso)",
};

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico profesional" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"] },
  { group: "Mobile", items: ["React Native", "Cámara y almacenamiento nativo", "Google Maps API"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "AWS S3"] },
  { group: "Forma de trabajo", items: ["Git", "Comunicación", "Responsabilidad", "Visión de producto"] },
];
