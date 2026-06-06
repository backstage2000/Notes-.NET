import { toggleLanguage } from "@utils";
import { ScrollText, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-purple-900/40 bg-purple-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700 shadow-lg shadow-purple-900/30">
            <ScrollText size={18} className="text-purple-100" />
          </span>
          <div className="hidden sm:block">
            <h1 className="text-[17px] font-semibold tracking-wide text-white">
              {t("header.notes")}
            </h1>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all
              ${
                pathname === "/"
                  ? "bg-purple-800 text-white shadow-md"
                  : "text-purple-200 hover:bg-purple-900/60 hover:text-white"
              }`}
          >
            <span>{t("header.home")}</span>
          </Link>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-xl border border-purple-800/60 px-3 py-2 text-sm text-purple-200 transition-all hover:bg-purple-900/60 hover:text-white"
          >
            <Languages size={15} />
            <span className="font-medium">
              {i18n.language === "uk" ? "EN" : "УК"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
