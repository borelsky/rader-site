"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const inputCls =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") ?? "").trim();

    const payload = {
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: phone || null,
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      locale,
      website: String(data.get("website") ?? ""),
    };

    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      if (res.status === 400) {
        const body = await res.json();
        setErrors(body.errors ?? {});
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const field = (name: string) => (errors[name] ? "border-red-500" : "");

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-2xl gap-4 text-left">
      <label className="text-sm font-semibold text-gray-700">
        {t("name")}
        <input name="fullName" required maxLength={120} className={`${inputCls} ${field("fullName")}`} />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-gray-700">
          {t("email")}
          <input name="email" type="email" required maxLength={160} className={`${inputCls} ${field("email")}`} />
        </label>
        <label className="text-sm font-semibold text-gray-700">
          {t("phone")}
          <input name="phone" type="tel" maxLength={30} className={`${inputCls} ${field("phone")}`} />
        </label>
      </div>

      <label className="text-sm font-semibold text-gray-700">
        {t("subject")}
        <input name="subject" required maxLength={150} className={`${inputCls} ${field("subject")}`} />
      </label>

      <label className="text-sm font-semibold text-gray-700">
        {t("message")}
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={3000}
          className={`${inputCls} ${field("message")}`}
        />
      </label>

      {/* Champ piège anti-robots : ne pas remplir */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {Object.keys(errors).length > 0 && (
        <p role="alert" className="text-sm text-red-600">
          {t("fieldError")}
        </p>
      )}
      {status === "error" && Object.keys(errors).length === 0 && (
        <p role="alert" className="text-sm text-red-600">
          {t("error")}
        </p>
      )}
      {status === "success" && (
        <p role="status" className="rounded-md bg-surface p-3 text-sm font-semibold text-primary">
          {t("success")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-alt disabled:opacity-60"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>
    </form>
  );
}
