# Sadi Rueda — Portfolio

Portfolio personal construido con **Next.js 15**, **TypeScript**, **Tailwind CSS** y principios de **ShadCN UI**.

## 🚀 Setup rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Correr en desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### 3. Build para producción

```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css        # Estilos globales + fuentes
│   ├── layout.tsx         # Root layout con metadata
│   └── page.tsx           # Página principal
├── components/
│   ├── sections/
│   │   ├── Hero.tsx       # Sección hero con typewriter
│   │   ├── About.tsx      # Sobre mí
│   │   ├── Skills.tsx     # Habilidades con skill bars
│   │   ├── Experience.tsx # Timeline de experiencia
│   │   ├── Projects.tsx   # Proyectos destacados
│   │   └── Contact.tsx    # Formulario de contacto
│   ├── Cursor.tsx         # Cursor personalizado
│   ├── Navbar.tsx         # Navegación con scroll effect
│   └── Footer.tsx         # Footer
└── hooks/
    └── useReveal.ts       # Hook para animaciones on-scroll
```

## 🎨 Personalización

### Agregar tu CV
Colocá tu CV como `public/cv-sadi-rueda.pdf` para habilitar el botón de descarga.

### Agregar tus links sociales
En `Navbar.tsx` y `Contact.tsx`, reemplazá los `href` de GitHub y LinkedIn con tus URLs reales.

### Formulario de contacto
El formulario actualmente simula el envío. Para conectarlo a un backend real, podés usar:
- [Formspree](https://formspree.io/) — gratis y fácil
- [Resend](https://resend.com/) — para emails transaccionales
- API Route de Next.js (`src/app/api/contact/route.ts`)

### ShadCN UI (optional)
Para agregar componentes ShadCN adicionales:
```bash
npx shadcn@latest init
npx shadcn@latest add button card badge
```

## 🌐 Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta .next
```

## 🧰 Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: Playfair Display + DM Sans + JetBrains Mono
- **Icons**: Lucide React
- **Animaciones**: CSS animations + Intersection Observer

---

Diseñado para destacar en el mercado tech 🚀
