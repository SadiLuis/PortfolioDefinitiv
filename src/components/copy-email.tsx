"use client";

import { useState } from "react";

/** Copia el email al portapapeles: funciona aunque el visitante no tenga una app de correo configurada. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button type="button" className="copy-email" onClick={copy} aria-live="polite">
      <span className="copy-email-address">{email}</span>
      <span className="copy-email-action">{copied ? "¡Copiado! ✓" : "Copiar email"}</span>
    </button>
  );
}
