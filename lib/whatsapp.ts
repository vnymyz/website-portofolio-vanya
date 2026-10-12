import { profile } from "@/data/profile";
import type { Lang } from "@/lib/i18n";

const messages: Record<Lang, string> = {
  en: "Hey Vanya, I'm interested in working with you or the services you have. Can you explain more about it?",
  id: "Halo Vanya, saya tertarik untuk bekerja sama atau menggunakan layanan Anda. Bisa tolong jelaskan lebih lanjut?",
};

// wa.me wants digits only (no "+" or spaces).
export const getWhatsappUrl = (lang: Lang) =>
  `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(messages[lang])}`;
