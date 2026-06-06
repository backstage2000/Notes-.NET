import { useQuery } from "@tanstack/react-query";
import getNoteById from "../service/getNoteById";

const useGetNoteById = (id: string) => {
  return useQuery({
    queryKey: ["notes", id],
    queryFn: () => getNoteById(id),
    enabled: !!id,
  });
};

export default useGetNoteById;
