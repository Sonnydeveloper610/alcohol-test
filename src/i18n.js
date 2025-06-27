import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ko from "./locales/ko.json";
import en from "./locales/en.json";
import pt from "./locales/pt.json";
import es from "./locales/es.json";
import vi from "./locales/vi.json";
import zh from "./locales/zh.json";
import id from "./locales/id.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      vi: { translation: vi },
      zh: { translation: zh },
      id: { translation: id },
    },
    fallbackLng: "en", // 번역이 없을 때 영어로
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;