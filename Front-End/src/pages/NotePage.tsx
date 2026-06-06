import { NoteList, NoteListSkeleton, NoteSidebar } from "@components";
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



export default NotePage;
