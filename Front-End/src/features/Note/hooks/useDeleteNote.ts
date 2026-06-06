import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteNote from "../service/deleteNote";
import { useNavigate } from "react-router-dom";

type Props = {
  isRedirect?: boolean;
};

const useDeleteNote = ({ isRedirect = false }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });

      if (isRedirect) {
        navigate("/note");
      }
    },
  });
};

export default useDeleteNote;
