import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="kicker">404 / Página no encontrada</span>
        <h1>No está acá.</h1>
        <Link className="contact-link" href="/">
          Volver al inicio ↗
        </Link>
      </div>
    </main>
  );
}
