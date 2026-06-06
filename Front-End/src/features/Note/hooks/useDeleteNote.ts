import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteNote from "../service/deleteNote";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export default useDeleteNote;
