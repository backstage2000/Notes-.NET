import { motion } from "motion/react";
import { ScrollText, Plus } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  createBtn: string;
};

const HomeHero = ({
  badge,
  title,
  titleAccent,
  subtitle,
  createBtn,
}: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center gap-2 rounded-full border border-purple-700/40 bg-purple-900/20 px-4 py-1.5 text-sm text-purple-300"
      >
        <ScrollText size={14} />
        {badge}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5 text-5xl font-semibold leading-tight tracking-tight"
      >
        {title} <span className="text-purple-400">{titleAccent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 max-w-md text-lg leading-relaxed text-zinc-400"
      >
        {subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16 flex flex-wrap justify-center gap-3"
      >
        <Link
          to="/notes"
          className="flex items-center gap-2 rounded-xl bg-purple-700 px-6 py-3 text-sm font-medium transition-colors hover:bg-purple-600"
        >
          <Plus size={16} />
          {createBtn}
        </Link>
      </motion.div>
    </>
  );
};

export default HomeHero;
