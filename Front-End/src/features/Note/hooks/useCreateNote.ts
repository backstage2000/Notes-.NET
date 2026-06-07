import { useMutation, useQueryClient } from "@tanstack/react-query";
import createNote from "../service/createNote";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const useCreateNote = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success(t("toaster.note.created"));
    },
  });
};

export default useCreateNote;
