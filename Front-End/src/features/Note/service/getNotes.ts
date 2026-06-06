import { api } from "@config";
import type { GetNotesParams, NotesResponse } from "../type";

const getNotes = async (params?: GetNotesParams): Promise<NotesResponse> => {
  const { data } = await api.get("/Notes", {
    params: {
      Search: params?.search,
      SortItem: params?.sortItem,
      SortOrder: params?.sortOrder,
    },
  });

  return data;
};

export default getNotes;
