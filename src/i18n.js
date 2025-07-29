import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale from "./locale";

const resources = {
  en: {
    translation: locale.en,
    dir: "ltr",
  },
  fa: {
    translation: locale.fa,
    dir: "rtl",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});



export default i18n;
