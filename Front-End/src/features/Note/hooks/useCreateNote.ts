import { useMutation, useQueryClient } from "@tanstack/react-query";
import createNote from "../service/createNote";

const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export default useCreateNote;
