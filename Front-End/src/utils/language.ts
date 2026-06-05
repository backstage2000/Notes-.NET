import i18n from "../i18n/index";

export default function toggleLanguage() {
  const next = i18n.language === "uk" ? "en" : "uk";
  i18n.changeLanguage(next);
  localStorage.setItem("lang", next);
}
