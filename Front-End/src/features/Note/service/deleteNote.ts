import { api } from "@config";

const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/Notes/${id}`);
};

export default deleteNote;
