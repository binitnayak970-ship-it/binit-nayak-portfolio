export const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
} as const;

export type ContactFieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export type ContactInput = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot field — must stay empty. */
  website?: unknown;
};

export type ContactValidation =
  | { ok: true; data: { name: string; email: string; message: string } }
  | { ok: false; errors: ContactFieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the form (instant feedback) and the route handler (authoritative). */
export function validateContact(input: ContactInput | null | undefined): ContactValidation {
  const name = typeof input?.name === "string" ? input.name.trim() : "";
  const email = typeof input?.email === "string" ? input.email.trim() : "";
  const message = typeof input?.message === "string" ? input.message.trim() : "";

  const errors: ContactFieldErrors = {};

  if (name.length < LIMITS.nameMin || name.length > LIMITS.nameMax) {
    errors.name = `Please enter your name (${LIMITS.nameMin}–${LIMITS.nameMax} characters).`;
  }

  if (email.length === 0 || email.length > LIMITS.emailMax || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < LIMITS.messageMin || message.length > LIMITS.messageMax) {
    errors.message = `Please write a message between ${LIMITS.messageMin} and ${LIMITS.messageMax} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { name, email, message } };
}

export function isHoneypotFilled(input: ContactInput | null | undefined): boolean {
  return typeof input?.website === "string" && input.website.trim().length > 0;
}
