import { useQuery, keepPreviousData } from "@tanstack/react-query";
import getNotes from "../service/getNotes";
import { useNoteStore } from "@store";
import { useDebounce } from "@hooks";

const useGetNotes = () => {
  const search = useNoteStore((state) => state.search);
  const sortItem = useNoteStore((state) => state.sortItem);
  const sortOrder = useNoteStore((state) => state.sortOrder);

  const debouncedSearch = useDebounce(search, 400);

  return useQuery({
    queryKey: ["notes", debouncedSearch, sortItem, sortOrder],
    queryFn: () =>
      getNotes({
        search: debouncedSearch,
        sortItem,
        sortOrder,
      }),
    placeholderData: keepPreviousData,
  });
};

export default useGetNotes;
