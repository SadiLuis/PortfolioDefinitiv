export default function Footer() {
  return (
    <footer className="border-t border-[#1C2333] bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Sadi Luis Alberto Rueda. Diseñado y construido con ❤️
        </p>
        <p className="font-mono text-xs text-muted">
          Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
