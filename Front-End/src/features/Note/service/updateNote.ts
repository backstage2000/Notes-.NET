import { api } from "@config";
import type { UpdateNoteParams } from "../type";

const updateNote = async ({ id, title, description }: UpdateNoteParams): Promise<void> => {
  await api.put(`/Notes/${id}`, { title, description });
};

export default updateNote;