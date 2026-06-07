import { motion } from "motion/react";
import { Plus, Search, Calendar, ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNoteStore } from "@store";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { CreateNoteParams } from "@features/Note/type";
import { useState } from "react";

interface NoteSidebarProps {
  isLoading: boolean;

  onCreate: UseMutateFunction<void, Error, CreateNoteParams, unknown>;
}

const NoteSidebar = ({ onCreate }: NoteSidebarProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { t } = useTranslation();

  const search = useNoteStore((state) => state.search);
  const sortOrder = useNoteStore((state) => state.sortOrder);
  const setSearch = useNoteStore((state) => state.setSearch);
  const toggleSortOrder = useNoteStore((state) => state.toggleSortOrder);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onCreate(
      { title, description },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
        },
      },
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4 lg:w-80 shrink-0"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 flex flex-col gap-3"
      >
        <h2 className="text-sm font-medium text-purple-300 uppercase tracking-widest">
          {t("notes.newNote")}
        </h2>

        <input
          data-testid="note-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("notes.titlePlaceholder")}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-600 transition-colors"
        />

        <textarea
          data-testid="note-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("notes.descPlaceholder")}
          rows={5}
          className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-purple-600 transition-colors"
        />

        <motion.button
          data-testid="note-submit"
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={!title.trim()}
          className="flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-600 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Plus size={16} />
          {t("notes.createBtn")}
        </motion.button>
      </form>

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
          type="button"
          onClick={toggleSortOrder}
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
  );
};

export default NoteSidebar;
