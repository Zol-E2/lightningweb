/** Hands a pre-written message to the contact form across page navigation (stays in this browser tab only). */
const KEY = "lw-draft";

export function setDraft(text: string) {
  try {
    sessionStorage.setItem(KEY, text);
  } catch {
    /* storage unavailable */
  }
}

export function takeDraft(): string | null {
  try {
    const v = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    return v;
  } catch {
    return null;
  }
}
