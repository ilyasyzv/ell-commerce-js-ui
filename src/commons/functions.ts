import i18next from "i18next"

export const changeLanguage = (lang: "en" | "jp" | "ko") => {
    i18next.changeLanguage(lang)
}
