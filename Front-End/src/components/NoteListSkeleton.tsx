const NoteListSkeleton = () => {
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

export default NoteListSkeleton;
