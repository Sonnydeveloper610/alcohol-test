import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ko from "./locales/ko.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
    },
    fallbackLng: "ko",
    interpolation: { escapeValue: false },
    detection: {
      // 순서: querystring, cookie, localStorage, navigator, htmlTag, path, subdomain
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;