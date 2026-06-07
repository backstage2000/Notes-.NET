import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateNote from "../service/updateNote";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const useUpdateNote = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success(t("toaster.note.updated"));
    },
  });
};

export default useUpdateNote;
