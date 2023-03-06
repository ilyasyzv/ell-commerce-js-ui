import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { en } from "./en"
import { jp } from "./jp"
import { ko } from "./ko"

const resources = {
    en: {
        translation: {
            ...en,
        },
    },
    jp: {
        translation: {
            ...jp,
        },
    },
    ko: {
        translation: {
            ...ko,
        },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export { default } from "i18next"
