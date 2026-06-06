import { useGetNoteById } from "@features/Note/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { NoteCard } from "@components";

const NoteDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: note, isLoading } = useGetNoteById(id!);

  return (
    <div className="flex flex-col gap-6">
      <motion.button
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate(-1)}
        className="flex w-fit items-center gap-2 rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:border-purple-700 hover:text-white transition-colors"
      >
        <ArrowLeft size={15} />
        Назад
      </motion.button>

      {isLoading && (
        <div className="flex flex-col gap-4 animate-pulse">
          <div className="h-7 w-1/3 rounded-xl bg-zinc-800" />
          <div className="h-4 w-24 rounded-xl bg-zinc-800" />
          <div className="h-40 w-full rounded-xl bg-zinc-800" />
        </div>
      )}

      {note && <NoteCard isRedirect={true} note={note} />}
    </div>
  );
};

export default NoteDetailPage;
