"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { FormCopy, FormStatus } from "@/i18n/types";

const field =
  "border-b-[1.5px] border-line-dark bg-transparent py-3 text-base text-cream placeholder:text-muted-dark outline-none transition-[border-color] duration-150 ease-out focus:border-accent";

export function ContactForm({ t }: { t: FormCopy }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(t);
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" aria-busy={status === "loading"}>
      <label className="sr-only" htmlFor="name">{t.name}</label>
      <input id="name" name="name" type="text" placeholder={t.name} required maxLength={100} autoComplete="name" className={field} />
      <label className="sr-only" htmlFor="email">{t.email}</label>
      <input id="email" name="email" type="email" placeholder={t.email} required maxLength={200} autoComplete="email" className={field} />
      <label className="sr-only" htmlFor="message">{t.message}</label>
      <textarea id="message" name="message" placeholder={t.message} required rows={4} maxLength={5000} className={`${field} resize-y`} />
      {/* Honeypot: hidden from people, bots fill it. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button
        type="submit"
        disabled={status === "loading"}
        className={`mt-2 cursor-pointer rounded-full px-7.5 py-4 text-[15px] font-extrabold transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream ${
          status === "success" ? "bg-cream text-ink" : "bg-accent text-ink hover:bg-cream"
        }`}
      >
        {/* key={status} remounts the label so each state change plays its blur-in. */}
        <span key={status} className="enter-label inline-block">
          {t.status[status]}
        </span>
      </button>
      <p role="status" className="sr-only">
        {status === "success" ? t.srSuccess : status === "error" ? t.srError : ""}
      </p>
    </form>
  );
}
