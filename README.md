# Rwanda Student Housing & Roommate Finder

A **responsive modern web app** that lets university students in Kigali find:

- **Houses** to rent (details, cost, district/sector filtering)
- **Roommates** based on personality traits, hobbies, and location preferences

The service is scoped **only to Rwanda** (Kigali districts & sectors). No authentication needed – guests can browse instantly.

---

## Tech Stack

| Layer | Technology |
|------|------------|
| **Framework** | **Next.js 14** (React) – server‑side rendering, API routes, file‑based routing |
| **Styling** | **Tailwind CSS** – utility‑first, fully responsive |
| **Database / ORM** | **Prisma** (SQLite for development) |
| **Icons** | Heroicons |
| **Hosting (optional)** | Vercel / Netlify (one‑click) – but you can run locally with `npm run dev` |

---

## Folder Structure
```
📦 rwanda-roommate-housing
 ┣ 📂 components      # reusable UI components
 ┣ 📂 pages           # Next.js page routes (Home, Houses, Roommates, …)
 ┣ 📂 prisma          # Prisma schema & migrations
 ┣ 📂 public          # static assets (images, favicons)
 ┣ 📂 data            # mock JSON data (districts, sectors, listings)
 ┣ 📜 package.json    # npm scripts & dependencies
 ┣ 📜 next.config.js  # Next.js configuration
 ┣ 📜 tailwind.config.js
 ┗ 📜 README.md
```

---

## Setup (Windows PowerShell)
```powershell
# 1️⃣ Clone / create the project folder (already created)
cd C:\Users\GSNYARUSHISHI\.gemini\antigravity\scratch\rwanda-roommate-housing

# 2️⃣ Install dependencies
npm i

# 3️⃣ Initialise Prisma & generate the SQLite DB
npx prisma migrate dev --name init   # creates `dev.db`

# 4️⃣ Run the development server
npm run dev
```
Open <http://localhost:3000> in a browser.

---

## How to Extend
- **Add real listings**: replace the JSON files in `data/` with data from your backend or a real DB.
- **Swap SQLite for PostgreSQL/MySQL**: change the `DATABASE_URL` in `.env` and run `npx prisma migrate dev`.
- **Authentication**: integrate `next-auth` if you later need user accounts.

---

## Data Source – Kigali Districts & Sectors
The app ships with a JSON file (`data/kigali-districts.json`) that contains the three districts of Kigali and their 35 sectors (fetched automatically). You can edit or extend it as needed.

---

## Next Steps
I will now generate the initial codebase (package.json, Tailwind setup, Prisma schema, mock data, and a few starter pages). Let me know if you want any custom pages or UI tweaks before I commit the files.
