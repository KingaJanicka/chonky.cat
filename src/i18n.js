import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Hot: "Hot",
      New: "New",
      Top: "Top",
      Rising: "Rising",
      "Sort by": "Sort by"
    }
  },
  cat: {
    translation: {
      Hot: "Calent",
      New: "Nou",
      Top: "Cim",
      Rising: "Aixecar-se",
      "Sort by": "Ordenar per"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
