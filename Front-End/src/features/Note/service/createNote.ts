import { api } from "@config";
import type { CreateNoteParams } from "../type";

const createNote = async (params: CreateNoteParams): Promise<void> => {
  await api.post("/Notes", params);
};

export default createNote;
