import { motion, AnimatePresence } from "motion/react";
import { Calendar, StickyNote } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Note } from "@features/Note/type";

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
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:border-purple-700/50 transition-colors"
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="text-sm font-medium leading-snug text-white">
                {note.title}
              </h3>

              <span className="mt-0.5 flex shrink-0 items-center gap-1 text-xs text-zinc-600">
                <Calendar size={11} />
                {new Date(note.createdAt).toLocaleDateString()}
              </span>
            </div>

            {note.description && (
              <p className="text-sm leading-relaxed text-zinc-500">
                {note.description}
              </p>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default NoteList;
