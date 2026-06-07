import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteNote from "../service/deleteNote";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

type Props = {
  isRedirect?: boolean;
};

const useDeleteNote = ({ isRedirect = false }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success(t("toaster.note.deleted"));

      if (isRedirect) {
        navigate("/note");
      }
    },
  });
};

export default useDeleteNote;
