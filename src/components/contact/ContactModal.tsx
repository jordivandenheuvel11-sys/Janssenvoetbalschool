"use client";

import React, { useEffect, useId, useState } from "react";
import type { ContactAanvraagType } from "./ContactModalContext";

export type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  initialType?: ContactAanvraagType;
  initialSubject?: string;
  initialMessage?: string;
};

const TYPE_OPTIONS: {
  value: ContactAanvraagType;
  label: string;
  hint: string;
}[] = [
  {
    value: "proefles",
    label: "Proefles aanvragen",
    hint: "Plan een eerste training",
  },
  {
    value: "mini-voetbalschool",
    label: "Mini Voetbalschool",
    hint: "Voor 3 t/m 5 jaar",
  },
  {
    value: "contact",
    label: "Stel een vraag",
    hint: "Algemeen contact",
  },
];

const DEFAULT_SUBJECT: Record<ContactAanvraagType, string> = {
  proefles: "Proefles aanvraag",
  "mini-voetbalschool": "Mini Voetbalschool",
  contact: "",
};

const TOTAL_STEPS = 3;

export default function ContactModal({
  open,
  onClose,
  initialType,
  initialSubject,
  initialMessage,
}: ContactModalProps) {
  const titleId = useId();
  const [step, setStep] = useState(1);
  const [type, setType] = useState<ContactAanvraagType>(
    initialType ?? "proefles",
  );
  const [formData, setFormData] = useState({
    subject: initialSubject ?? DEFAULT_SUBJECT[initialType ?? "proefles"],
    name: "",
    email: "",
    phone: "",
    message: initialMessage ?? "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setStatus("idle");
    const nextType = initialType ?? "proefles";
    setType(nextType);
    setFormData({
      subject: initialSubject ?? DEFAULT_SUBJECT[nextType],
      name: "",
      email: "",
      phone: "",
      message: initialMessage ?? "",
    });
  }, [open, initialType, initialSubject, initialMessage]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectType = (next: ContactAanvraagType) => {
    setType(next);
    setFormData((prev) => ({
      ...prev,
      subject:
        prev.subject.trim() === "" ||
        Object.values(DEFAULT_SUBJECT).includes(prev.subject)
          ? DEFAULT_SUBJECT[next]
          : prev.subject,
    }));
  };

  const canContinueStep2 =
    formData.name.trim().length > 1 &&
    formData.email.includes("@") &&
    formData.email.includes(".");

  const canSubmit =
    formData.message.trim().length > 2 &&
    (formData.subject.trim().length > 0 || type !== "contact");

  const handleSubmit = async () => {
    try {
      setStatus("submitting");
      const res = await fetch("/api/aanvragen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          subject: formData.subject || DEFAULT_SUBJECT[type],
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setStep(4);
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    padding: "14px 16px",
    borderRadius: 'var(--radius)',
    border: "1px solid #333333",
    fontSize: "16px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    width: "100%",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 800,
    color: "#595959",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "8px",
    display: "block",
  };

  const primaryBtn: React.CSSProperties = {
    padding: "14px 22px",
    borderRadius: 'var(--radius)',
    backgroundColor: "#ffffff",
    color: "#0a0a0a",
    fontSize: "15px",
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.04em",
  };

  const ghostBtn: React.CSSProperties = {
    padding: "14px 18px",
    borderRadius: 'var(--radius)',
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.7)",
    fontSize: "14px",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.18)",
    cursor: "pointer",
  };

  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100000,
        backgroundColor: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "520px",
          maxHeight: "min(90vh, 720px)",
          overflowY: "auto",
          backgroundColor: "#111111",
          color: "#ffffff",
          borderRadius: 'var(--radius)',
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 28px 80px rgba(0,0,0,0.55)",
          padding: "28px 24px 24px",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Sluiten"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            borderRadius: 'var(--radius)',
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {status !== "success" && (
          <div style={{ marginBottom: "24px", paddingRight: "36px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 900,
                color: "#D90429",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Stap {Math.min(step, TOTAL_STEPS)} van {TOTAL_STEPS}
            </span>
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginTop: "12px",
              }}
            >
              {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: "4px",
                    borderRadius: 'var(--radius)',
                    backgroundColor:
                      i < step ? "#D90429" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <>
            <h2
              id={titleId}
              style={{
                margin: "0 0 8px",
                fontSize: "clamp(1.5rem, 4vw, 1.85rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Waarmee kan ik je helpen?
            </h2>
            <p
              style={{
                margin: "0 0 24px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.55,
                fontSize: "15px",
              }}
            >
              Kies wat het beste past — daarna vul je je gegevens in.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {TYPE_OPTIONS.map((opt) => {
                const active = type === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => selectType(opt.value)}
                    style={{
                      textAlign: "left",
                      padding: "16px 18px",
                      borderRadius: 'var(--radius)',
                      border: active
                        ? "2px solid #D90429"
                        : "1px solid rgba(255,255,255,0.14)",
                      backgroundColor: active
                        ? "rgba(217,4,41,0.12)"
                        : "#1a1a1a",
                      color: "#ffffff",
                      cursor: "pointer",
                    }}
                  >
                    <strong style={{ display: "block", fontSize: "16px" }}>
                      {opt.label}
                    </strong>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {opt.hint}
                    </span>
                  </button>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <button type="button" onClick={onClose} style={ghostBtn}>
                Annuleren
              </button>
              <button type="button" onClick={() => setStep(2)} style={primaryBtn}>
                Verder
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2
              id={titleId}
              style={{
                margin: "0 0 8px",
                fontSize: "clamp(1.5rem, 4vw, 1.85rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Jouw gegevens
            </h2>
            <p
              style={{
                margin: "0 0 24px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.55,
                fontSize: "15px",
              }}
            >
              Zodat ik je snel kan bereiken over je{" "}
              {type === "proefles"
                ? "proefles"
                : type === "mini-voetbalschool"
                  ? "Mini-aanvraag"
                  : "vraag"}
              .
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label htmlFor="contact-name" style={labelStyle}>
                  Naam
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={labelStyle}>
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" style={labelStyle}>
                  Telefoonnummer
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <button type="button" onClick={() => setStep(1)} style={ghostBtn}>
                Terug
              </button>
              <button
                type="button"
                disabled={!canContinueStep2}
                onClick={() => setStep(3)}
                style={{
                  ...primaryBtn,
                  opacity: canContinueStep2 ? 1 : 0.45,
                  cursor: canContinueStep2 ? "pointer" : "not-allowed",
                }}
              >
                Verder
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2
              id={titleId}
              style={{
                margin: "0 0 8px",
                fontSize: "clamp(1.5rem, 4vw, 1.85rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Je bericht
            </h2>
            <p
              style={{
                margin: "0 0 24px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.55,
                fontSize: "15px",
              }}
            >
              Vertel kort wat je zoekt — ik reageer zo snel mogelijk.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label htmlFor="contact-subject" style={labelStyle}>
                  Onderwerp
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  Bericht
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
            </div>
            {status === "error" && (
              <p
                style={{
                  margin: "16px 0 0",
                  color: "#fca5a5",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Versturen ging mis. Probeer het opnieuw.
              </p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <button type="button" onClick={() => setStep(2)} style={ghostBtn}>
                Terug
              </button>
              <button
                type="button"
                disabled={!canSubmit || status === "submitting"}
                onClick={handleSubmit}
                style={{
                  ...primaryBtn,
                  opacity: canSubmit && status !== "submitting" ? 1 : 0.45,
                  cursor:
                    canSubmit && status !== "submitting"
                      ? "pointer"
                      : "not-allowed",
                }}
              >
                {status === "submitting" ? "Versturen…" : "Verstuur"}
              </button>
            </div>
          </>
        )}

        {step === 4 && status === "success" && (
          <>
            <h2
              id={titleId}
              style={{
                margin: "8px 0 12px",
                fontSize: "clamp(1.5rem, 4vw, 1.85rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Bedankt — ik heb je bericht
            </h2>
            <p
              style={{
                margin: "0 0 28px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                fontSize: "16px",
              }}
            >
              Je aanvraag is verstuurd. Ik neem zo snel mogelijk contact met je
              op.
            </p>
            <button type="button" onClick={onClose} style={primaryBtn}>
              Sluiten
            </button>
          </>
        )}
      </div>
    </div>
  );
}
