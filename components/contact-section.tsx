"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const { t } = useI18n()
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [generalError, setGeneralError] = useState("")

  const emailIsValid = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}

    if (!form.name.trim()) {
      nextErrors.name = t("contact.error.name")
    }

    if (!form.email.trim()) {
      nextErrors.email = t("contact.error.email")
    } else if (!emailIsValid(form.email)) {
      nextErrors.email = t("contact.error.invalidEmail")
    }

    if (!form.message.trim()) {
      nextErrors.message = t("contact.error.message")
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGeneralError("")

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "No se pudo enviar el mensaje")
      }

      setSubmitted(true)
    } catch (error) {
      setGeneralError(
        t("contact.error.general") ||
          "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo más tarde."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm({ name: "", email: "", message: "" })
    setErrors({})
    setGeneralError("")
  }

  const inputClass =
    "w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all duration-200"

  const labelClass = "block text-xs font-mono text-white mb-1.5 uppercase tracking-wider"

  const isFormValid =
    form.name.trim().length > 0 &&
    form.message.trim().length > 0 &&
    emailIsValid(form.email)

  return (
    <section id="contact" className="relative">
      <div className="border border-white/15 bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 transition-all hover:border-white/25">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t("contact.title")}
            </h2>
            <p className="text-white font-mono text-sm">
              {t("contact.subtitle")}
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative mb-2">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                <CheckCircle className="relative w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white">{t("contact.success.title")}</h3>
              <p className="text-white max-w-sm">{t("contact.success.message")}</p>
              <button
                onClick={handleReset}
                className="mt-4 text-xs font-mono text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors"
              >
                {t("contact.success.again")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {generalError ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 mb-4">
                  {generalError}
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t("contact.name")}</label>
                  <input
                    type="text"
                    placeholder="Steban Ruiz"
                    value={form.name}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, name: e.target.value }))
                      setErrors((prev) => ({ ...prev, name: undefined }))
                    }}
                    className={inputClass}
                  />
                  {errors.name ? (
                    <p className="mt-2 text-xs text-red-300">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label className={labelClass}>{t("contact.email")}</label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, email: e.target.value }))
                      setErrors((prev) => ({ ...prev, email: undefined }))
                    }}
                    className={inputClass}
                  />
                  {errors.email ? (
                    <p className="mt-2 text-xs text-red-300">{errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label className={labelClass}>{t("contact.message")}</label>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, message: e.target.value }))
                    setErrors((prev) => ({ ...prev, message: undefined }))
                  }}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-red-300">{errors.message}</p>
                ) : null}
              </div>
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={loading || !isFormValid}
                  className="flex items-center gap-2 px-10 py-3.5 bg-primary hover:bg-primary/90 rounded-full text-white font-mono text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(0,171,228,0.3)] hover:shadow-[0_0_32px_rgba(0,171,228,0.5)]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("contact.send")}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
