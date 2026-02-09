# Dr. Anurag Hemani Dental Clinic Website

A modern, responsive dental clinic website built with React, TypeScript, Express, and Vite. Features appointment booking, service information, testimonials, and a beautiful UI with Tailwind CSS.

## Features

- 🎨 **Responsive Design** — Mobile, tablet, and desktop optimized layouts
- 📅 **Appointment Booking** — Easy-to-use appointment form
- 🖼️ **Image Gallery** — Clinic photos and team gallery
- 💬 **Testimonials** — Patient feedback carousel
- 🏥 **Service Pages** — Detailed dental service listings
- ⚡ **Fast & Modern** — Built with Vite for instant dev experience
- 🔐 **Type-Safe** — Full TypeScript support

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL (optional for development)
- **Build Tool:** Vite, tsx, esbuild
- **Package Manager:** npm

## Prerequisites

- **Node.js** (v18+) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- (Optional) **PostgreSQL** for full database features

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/sumitkt/dentist_client_project.git
cd dentist_client_project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

**Option A: Windows PowerShell (recommended)**

First, set the PowerShell execution policy (one-time):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run:
```powershell
npm run dev:local
```

**Option B: Command Prompt (cmd.exe)**

```cmd
set PATH=C:\Program Files\nodejs;%PATH%
npm run dev:local
```

**Option C: Direct Node command**

```powershell
$env:NODE_ENV='development'; npx cross-env NODE_ENV=development tsx server/index.ts
```

### 4. Open in browser

Navigate to **http://localhost:5000** in your browser.

## Development without Database

The app runs in **dev-only mode** without a database by default. This uses in-memory storage for testimonials.

- No database setup required for local development
- Testimonials are stored in memory (lost on server restart)
- Perfect for UI/UX development

## Enable PostgreSQL (Optional)

For full database functionality:

### 1. Install PostgreSQL

- **Windows:** [Download PostgreSQL](https://www.postgresql.org/download/windows/)
- **Docker:** 
  ```bash
  docker run --name dentist-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres:15
  ```

### 2. Set DATABASE_URL

Create a `.env` file in the project root (copy from `.env.example`):

```env
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/postgres
NODE_ENV=development
PORT=5000
```

### 3. Run migrations

```bash
npm run db:push
```

### 4. Start the server

```bash
npm run dev:local
```

## Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Home, About, Services, Contact
│   │   ├── components/    # Navbar, Footer, AppointmentForm, etc.
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities, API client
│   │   └── main.tsx
│   ├── public/            # Static assets (images, favicon)
│   └── index.html
├── server/                 # Express backend
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   ├── db.ts              # Database connection
│   ├── storage.ts         # Data access layer
│   └── vite.ts            # Vite dev server setup
├── shared/                 # Shared types and schemas
│   ├── routes.ts          # API route definitions
│   └── schema.ts          # Data types
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Available Scripts

```bash
npm run dev:local          # Start development server (Windows-friendly)
npm run build              # Build for production
npm start                  # Run production build
npm run check              # Type check with TypeScript
npm run db:push            # Run database migrations (requires DATABASE_URL)
```

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```env
DATABASE_URL=postgres://user:password@localhost:5432/dbname
NODE_ENV=development
PORT=5000
```

## API Routes

- `GET /` — Serve the React app
- `GET /api/testimonials` — Fetch all approved testimonials
- `POST /api/testimonials` — Submit a new testimonial

## Key Features & Pages

### Home Page
- Hero section with clinic intro
- Service overview cards
- Doctor introduction
- Testimonials carousel
- Appointment booking CTA

### About Page
- Clinic philosophy and values
- Clinic gallery with responsive image grid
- Team information

### Services Page
- Detailed service listings
- Service descriptions and benefits

### Contact Page
- Contact information
- Map embed
- Appointment form

## Troubleshooting

### Port 5000 already in use

Kill the process and restart:

```powershell
# Find PID using port 5000
netstat -ano | Select-String ':5000'

# Kill the process (replace with actual PID)
Stop-Process -Id <PID> -Force

# Restart dev server
npm run dev:local
```

### npm not found in PowerShell

Add Node.js to your PATH:

```powershell
$env:Path += ';C:\Program Files\nodejs\'
npm run dev:local
```

### Images not loading

Ensure all image files are in `client/public/` directory:
- `doctor.jpeg` — Doctor profile image
- `doctor_client.jpeg` — Clinic client image
- `logo.png` — Logo image
- `photo-1.jpeg` through `photo-5.jpeg` — Gallery images

## Database Fallback Behavior

- ✅ **Development:** Runs without database; uses in-memory storage
- ✅ **With DATABASE_URL:** Uses PostgreSQL for persistent storage
- ❌ **Production without DATABASE_URL:** Will fail (intentional safety)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push: `git push origin feature/your-feature`
4. Open a pull request

## License

MIT License — See LICENSE file for details

## Contact

For inquiries about the website or dental services, visit our contact page or call the clinic.

---

**Happy coding!** 🦷✨
