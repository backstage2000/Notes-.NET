using MyNotes.DataAccess;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddDbContext<NotesDbContext>();



var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

using var scope = app.Services.CreateScope();
using var dbContext = scope.ServiceProvider.GetRequiredService<NotesDbContext>();
Console.WriteLine("Подключение к базе...");
await dbContext.Database.EnsureCreatedAsync();
Console.WriteLine("База готова!");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

