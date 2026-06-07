import { motion } from "motion/react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
};

const FeaturesGrid = ({ features }: Props) => {
  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full mb-12">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left hover:border-purple-700/50 transition-colors cursor-default"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/30">
            {feature.icon}
          </div>
          <h3 className="mb-2 text-sm font-medium text-white">
            {feature.title}
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
