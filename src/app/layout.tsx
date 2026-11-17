import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";

const title = "Sadi Rueda — Full Stack Developer";
const description =
  "Full Stack Developer con foco en frontend: React, Next.js, TypeScript, Node.js y React Native. Productos en producción para fintech y logística.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-definitiv.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "es_AR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
