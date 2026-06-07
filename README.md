#   NOTES API

## Stack Backend
- **Backend**: .NET, Entity Framework Core
- **Database**: PostgreSQL (Docker)

##  📁Project Structure Backend

```
Backend/
├── bin/          # compiled output files  auto-generated, do not edit
├── Contracts/    # API request/response DTOs  CreateNoteRequest, GetNotesRequest etc.
├── Controllers/  # API endpoints  NotesController with GET, POST, PUT, DELETE
├── DataAccess/   # database layer  NotesDbContext (Entity Framework Core)
├── Models/       # data models  Note class (Id, Title, Description, CreatedAt)
├── obj/          # temporary build files  auto-generated, do not edit
├── Properties/   # launch settings  launchSettings.json (ports, environment)
└── Program.cs    # entry point  service registration, middleware, app startup
```

## ⚙️ Configuration

Connection string in `appsettings.json`:
```json
"ConnectionStrings": {
  "Database": "Host=localhost;Port=2121;Database=postgres;Username=postgres;Password=123123"
}
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd Backend
```

### 2. Launch Database

```bash
docker-compose up -d
```

### 3. Run the  Backend

```bash
cd Backend
dotnet run
```

Swagger UI: http://localhost:5002/swagger

## API Endpoints


| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/Notes ` | Get all notes  |
| `GET` | `/Notes/{id}` | Get note by ID |
| `PUT` | `/Notes/{id}` | Update note |
| `POST` | `/Notes` |  Create note |
| `DELETE` | `/Notes/{id}` | Delete note |

### Example Create Note
```json
POST /Notes
Content-Type: application/json

{
  "title": "My first note",
  "description": "This is a description of my first note"
}
```

**Response** `200 OK`


### Example Get Notes
```json
GET /Notes?Search=my&SortItem=date&SortOrder=desc
```

---

**Response** `200 OK`
```json
{
  "notes": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "title": "My first note",
      "description": "This is a description of my first note",
      "createdAt": "2024-01-01T12:00:00Z"
    }
  ]
}
```

---




# Notes FRONT END

## Tech Stack

- **React** — UI library
- **TypeScript** — static typing
- **State**: Zustand
- **TanStack Query** — server state management
- **Axios** — HTTP client
- **Tailwind CSS** — utility-first styling
- **Motion** — animations
- **Flowbite** — UI components
- **Sonner** — Toaster
- **i18n** — 
- **Testing**: Playwright (E2E)

##  📁Project Structure

```
src/
├── main.tsx           # Entry point
├── store/             # Zustand global state
├── config/            # App configuration (Router, axios)
├── style/             # Base styles and global CSS
├── pages/             # Route-level page components
├── hooks/             # Shared hooks
├── layouts/           # Reusable layout sections (Header, Footer)
├── i18n/              # Localization config (uk/en translations)
├── utils/             # Utility functions
├── components/        # Shared UI components
└── features
    └── quiz/
        ├── hooks/        # TanStack Query hooks (useGetNotes, useCreateNote, etc.)
        ├── services/     # Axios API calls (getNotes, createNote, etc.)
        ├── type.ts    # TypeScript types (Note, CreateNoteParams, etc.)
        

```


## Getting Started

### 1. Clone the repository

```bash
git clone 
cd Front-End
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5002
```

### 4. Run the project

```bash
npm run dev
```

