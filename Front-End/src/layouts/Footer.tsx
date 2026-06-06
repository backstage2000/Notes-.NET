import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className=" bg-purple-950 py-4 text-center text-[13px] text-gray-400">
     {t("footer.notes")} © {new Date().getFullYear()}
    </footer>
  );
}
