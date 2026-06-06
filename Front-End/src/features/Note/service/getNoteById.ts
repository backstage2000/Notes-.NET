import { api } from "@config";
import type { Note } from "../type";

const getNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/Notes/${id}`);
  return data;
};

export default getNoteById;
