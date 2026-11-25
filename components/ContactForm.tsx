"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";
import { LIMITS, validateContact, type ContactFieldErrors } from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = { name: "", email: "", message: "", website: "" };

const inputClass =
  "w-full border border-ink/30 bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none focus:ring-2 focus:ring-ember/25";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: values.website }),
      });

      if (response.status === 429) {
        setStatus("error");
        setErrorMessage(contact.form.errors.rateLimited);
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(contact.form.errors.generic);
        return;
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(contact.form.errors.network);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border-l-2 border-ember pl-4 py-2">
        <p className="font-display text-2xl uppercase leading-none">
          {contact.form.success.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          {contact.form.success.body}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="micro mt-5 border border-ink/40 px-5 py-3 transition-colors hover:bg-ink hover:text-paper"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="micro block text-ink/65">
            {contact.form.fields.name.label}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.nameMax}
            placeholder={contact.form.fields.name.placeholder}
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-ember-ink">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="micro block text-ink/65">
            {contact.form.fields.email.label}
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={LIMITS.emailMax}
            placeholder={contact.form.fields.email.placeholder}
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-2 ${inputClass}`}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-ember-ink">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="micro block text-ink/65">
          {contact.form.fields.message.label}
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={LIMITS.messageMax}
          placeholder={contact.form.fields.message.placeholder}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error contact-message-hint" : "contact-message-hint"
          }
          className={`mt-2 resize-y ${inputClass}`}
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-ember-ink">
            {errors.message}
          </p>
        ) : null}
        <p id="contact-message-hint" className="mt-1.5 text-xs text-ink/50">
          {contact.form.fields.message.hint}
        </p>
      </div>

      {/* Honeypot: hidden from people, ignored by nothing that matters. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
        />
      </div>

      {errorMessage ? (
        <p
          role="alert"
          className="mt-5 border-l-2 border-ember-ink bg-ember/5 px-4 py-3 text-sm leading-relaxed text-ember-ink"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="micro inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-ember disabled:cursor-not-allowed disabled:bg-ink/50"
        >
          {submitting ? contact.form.submitting : contact.form.submit}
          <span aria-hidden="true">→</span>
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-ink/55">{contact.form.privacy}</p>
      </div>
    </form>
  );
}
