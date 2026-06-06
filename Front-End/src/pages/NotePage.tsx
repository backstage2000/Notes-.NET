import { NoteList, NoteSidebar } from "@components";
import { useGetNotes, useCreateNote } from "@features/Note/hooks";

const NotePage = () => {
  const { data, isLoading } = useGetNotes();
  const { mutate: createNote, isPending } = useCreateNote();

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-[70vh]">
      <NoteSidebar isLoading={isPending} onCreate={createNote} />

      {isLoading ? (
        <NoteListSkeleton />
      ) : (
        <NoteList notes={data?.notes ?? []} />
      )}
    </div>
  );
};

export const NoteListSkeleton = () => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 animate-pulse"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div className="h-4 w-2/3 rounded-lg bg-zinc-800" />
            <div className="h-3 w-16 rounded-lg bg-zinc-800" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-3 w-full rounded-lg bg-zinc-800" />
            <div className="h-3 w-4/5 rounded-lg bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotePage;
