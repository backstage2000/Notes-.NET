public record GetNotesResponse(List<NoteDto> Notes);
public record NoteDto(Guid Id, string Title, string Description, DateTime CreatedAt);