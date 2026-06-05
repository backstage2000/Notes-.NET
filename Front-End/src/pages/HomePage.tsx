import { Plus, Search, ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FeaturesGrid, HomeHero, StatsList } from "@components";

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Plus size={20} className="text-purple-400" />,
      title: t("features.create.title"),
      description: t("features.create.desc"),
    },
    {
      icon: <Search size={20} className="text-purple-400" />,
      title: t("features.search.title"),
      description: t("features.search.desc"),
    },
    {
      icon: <ArrowUpDown size={20} className="text-purple-400" />,
      title: t("features.sort.title"),
      description: t("features.sort.desc"),
    },
  ];

  const stats = [
    { value: "REST", label: "api" },
    { value: "React", label: "frontend" },
    { value: "PostgreSQL", label: "Database" },
  ];

  return (
    <>
      <div className="flex flex-col items-center py-12 text-center">
        <HomeHero
          badge={t("welcome.badge")}
          title={t("welcome.title")}
          titleAccent={t("welcome.titleAccent")}
          subtitle={t("welcome.subtitle")}
          createBtn={t("welcome.createBtn")}
        />

        <FeaturesGrid features={features} />
        <StatsList stats={stats} />
      </div>
    </>
  );
};

export default HomePage;
