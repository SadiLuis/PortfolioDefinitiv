"use client";
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="not-found"><div><span className="kicker">Algo falló</span><h1>Probá de nuevo.</h1><button className="contact-link" onClick={() => reset()}>Recargar ↗</button></div></main>; }
