import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Search, Calendar, ArrowUpDown, StickyNote } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

type SortOrder = "asc" | "desc";

const NotePage = () => {
  const { t } = useTranslation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [notes, setNotes] = useState<Note[]>([
    {
      id: crypto.randomUUID(),
      title: "Первая заметка",
      description:
        "Это пример заметки. Здесь можно хранить любые мысли, идеи или напоминания.",
      createdAt: new Date(),
    },
  ]);

  const handleCreate = () => {
    if (!title.trim()) return;
    const note: Note = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date(),
    };
    setNotes((prev) => [note, ...prev]);
    setTitle("");
    setDescription("");
  };

  const filtered = notes
    .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "desc"
        ? b.createdAt.getTime() - a.createdAt.getTime()
        : a.createdAt.getTime() - b.createdAt.getTime(),
    );

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-[70vh]">
      {/* LEFT — Form + Filters */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 lg:w-80 shrink-0"
      >
        {/* Create form */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 flex flex-col gap-3">
          <h2 className="text-sm font-medium text-purple-300 uppercase tracking-widest">
            {t("notes.newNote")}
          </h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t("notes.titlePlaceholder")}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-600 transition-colors"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("notes.descPlaceholder")}
            rows={5}
            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-600 transition-colors"
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCreate}
            disabled={!title.trim()}
            className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-600 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Plus size={16} />
            {t("notes.createBtn")}
          </motion.button>
        </div>

        {/* Search + Sort */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 flex flex-col gap-3">
          <h2 className="text-sm font-medium text-purple-300 uppercase tracking-widest">
            {t("notes.filters")}
          </h2>

          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("notes.searchPlaceholder")}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-600 transition-colors"
            />
          </div>

          <button
            onClick={() => setSortOrder((o) => (o === "desc" ? "asc" : "desc"))}
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 hover:border-purple-700 hover:text-white transition-colors"
          >
            <Calendar size={15} />
            {t("notes.sortByDate")}
            <ArrowUpDown size={13} className="ml-auto text-zinc-500" />
            <span className="text-xs text-purple-400">
              {sortOrder === "desc" ? "↓" : "↑"}
            </span>
          </button>
        </div>
      </motion.div>

      {/* RIGHT — Notes list */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-1 flex flex-col gap-3"
      >
        {filtered.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-zinc-600 py-24">
            <StickyNote size={40} strokeWidth={1.2} />
            <p className="text-sm">{t("notes.empty")}</p>
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {filtered.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:border-purple-700/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-sm font-medium text-white leading-snug">
                    {note.title}
                  </h3>
                  <span className="shrink-0 text-xs text-zinc-600 flex items-center gap-1 mt-0.5">
                    <Calendar size={11} />
                    {note.createdAt.toLocaleDateString()}
                  </span>
                </div>
                {note.description && (
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {note.description}
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default NotePage;
