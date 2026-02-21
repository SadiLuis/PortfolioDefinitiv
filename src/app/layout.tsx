import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadi Rueda — Frontend & Mobile Developer",
  description:
    "Desarrollador Frontend & Mobile con visión de producto. Especializado en React.js, Next.js, React Native, Node.js y TypeScript.",
  openGraph: {
    title: "Sadi Rueda — Frontend & Mobile Developer",
    description: "Portfolio de Sadi Luis Alberto Rueda — Fullstack & Mobile Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
