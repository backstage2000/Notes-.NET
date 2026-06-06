import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateNote from "../service/updateNote";

const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export default useUpdateNote;
