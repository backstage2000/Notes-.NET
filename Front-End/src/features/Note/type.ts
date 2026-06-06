export interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface GetNotesParams {
  search?: string;
  sortItem?: string;
  sortOrder?: string;
}

export interface NotesResponse {
  notes: Note[];
}

export interface CreateNoteParams {
  title: string;
  description: string;
}
