import { motion, AnimatePresence } from "motion/react";
import { StickyNote } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Note } from "@features/Note/type";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const { t } = useTranslation();

  if (notes.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-24 text-zinc-600">
        <StickyNote size={40} strokeWidth={1.2} />
        <p className="text-sm">{t("notes.empty")}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex-1 flex flex-col gap-3"
    >
      <AnimatePresence initial={false}>
        {notes.map((note, i) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <NoteCard note={note} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default NoteList;
