import { motion } from "motion/react";

type Stat = {
  value: string;
};

type Props = {
  stats: Stat[];
};

const StatsList = ({ stats }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex justify-center gap-12 flex-wrap border-t border-zinc-800 pt-8 w-full"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.85 + i * 0.08 }}
          className="text-center"
        >
          <div className="text-2xl font-semibold text-purple-400">
            {stat.value}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsList;
