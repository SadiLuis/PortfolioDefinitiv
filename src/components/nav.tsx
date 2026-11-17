"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme";
import { ScrollProgress } from "./scroll-progress";

export function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><ScrollProgress /><nav className="nav" aria-label="Navegación principal"><Link className="wordmark" href="/" transitionTypes={["fade"]}>SR<span>.</span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir o cerrar navegación">{open ? "Cerrar" : "Menú"}</button><div className={`nav-links ${open ? "is-open" : ""}`}><Link href="/#work" onClick={() => setOpen(false)}>Proyectos</Link><Link href="/about" onClick={() => setOpen(false)} transitionTypes={["slide-in"]}>Sobre mí</Link><a href="https://www.linkedin.com/in/sadirueda/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="mailto:sadiluisrueda.94@gmail.com">Contacto ↗</a><ThemeToggle /></div><div className="nav-tools"><ThemeToggle /></div></nav></header>;
}
