import { useCallback, useSyncExternalStore } from "react";
import { profile } from "@/data/profile";
import { profileId } from "@/data/profile.id";
import { ui, type UiKey } from "@/data/ui";

export type Lang = "en" | "id";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();
// Fallback for when localStorage is blocked (private windows, etc).
let override: Lang | null = null;

// Saved choice first; otherwise the browser's top language. Indonesian is
// "id" (legacy "in"); anything else gets English.
function detect(): Lang {
  if (override) return override;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // ignore
  }
  const first = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase();
  return first === "id" || first.startsWith("id-") || first === "in" || first.startsWith("in-")
    ? "id"
    : "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function setLanguage(lang: Lang) {
  override = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener());
}

export function useI18n() {
  // Server and first client render use "en"; React then switches to the
  // detected language without a hydration mismatch.
  const lang = useSyncExternalStore<Lang>(subscribe, detect, () => "en");

  const t = useCallback(
    (key: UiKey, vars?: Record<string, string | number>) => {
      let text: string = ui[lang][key];
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          text = text.replaceAll(`{${name}}`, String(value));
        }
      }
      return text;
    },
    [lang]
  );

  return { lang, t, profile: lang === "id" ? profileId : profile };
}
