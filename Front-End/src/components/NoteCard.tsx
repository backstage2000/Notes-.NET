import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Pencil, Check, X, Trash2 } from "lucide-react";
import type { Note } from "@features/Note/type";
import { useDeleteNote, useUpdateNote } from "@features/Note/hooks";

const NoteCard = ({ note }: { note: Note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const { mutate: updateNote, isPending } = useUpdateNote();
  const { mutate: deleteNote, isPending: isDeleting } = useDeleteNote();

  const handleSave = () => {
    if (!title.trim()) return;
    updateNote(
      { id: note.id, title, description },
      { onSuccess: () => setIsEditing(false) },
    );
  };

  const handleCancel = () => {
    setTitle(note.title);
    setDescription(note.description);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      className={`rounded-2xl border p-5 transition-colors ${
        isEditing
          ? "border-purple-700/60 bg-zinc-900"
          : "border-zinc-800 bg-zinc-900 hover:border-purple-700/50"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isEditing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-3"
          >
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none focus:border-purple-600 transition-colors"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none focus:border-purple-600 transition-colors"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <X size={13} />
                Отмена
              </button>
              <button
                onClick={handleSave}
                disabled={isPending || !title.trim()}
                className="flex items-center gap-1.5 rounded-xl bg-purple-700 px-3 py-1.5 text-xs text-white hover:bg-purple-600 disabled:opacity-40 transition-colors"
              >
                <Check size={13} />
                {isPending ? "Сохранение..." : "Сохранить"}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="text-sm font-medium leading-snug text-white">
                {note.title}
              </h3>
              <div className="flex shrink-0 items-center gap-2">
                <span className="mt-0.5 flex items-center gap-1 text-xs text-zinc-600">
                  <Calendar size={11} />
                  {new Date(note.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-zinc-600 hover:text-purple-400 transition-colors"
                >
                  <Pencil size={13} />
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  disabled={isDeleting}
                  className="text-zinc-600 hover:text-red-400 disabled:opacity-40 transition-colors"
                >
                  {isDeleting ? (
                    <span className="h-3 w-3 rounded-full border-2 border-red-400/30 border-t-red-400 animate-spin block" />
                  ) : (
                    <Trash2 size={13} />
                  )}
                </button>
              </div>
            </div>
            {note.description && (
              <p className="text-sm leading-relaxed text-zinc-500">
                {note.description}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NoteCard;
