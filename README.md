# AnimeRate

Platform review dan rating anime berbasis Next.js App Router, PostgreSQL, Prisma, Auth.js, Zod, Tailwind, dan TypeScript. Data anime dalam seed adalah contoh development; aplikasi tidak melakukan scraping Meownime.

## Fitur

- Katalog anime dari PostgreSQL, pencarian, filter genre/status, dan pagination.
- Detail anime SEO, rating 1.0–10.0 (increment 0.1), review, like, bookmark, weighted ranking.
- Register/login credential dengan bcrypt, profil dan halaman bookmark.
- REST API yang divalidasi Zod dan role guard untuk endpoint admin.
- Dashboard serta daftar moderasi admin; schema/API siap untuk CRUD anime, genre, dan komentar.

## Menjalankan lokal

1. Salin `.env.example` menjadi `.env`, lalu isi `DATABASE_URL` PostgreSQL dan `NEXTAUTH_SECRET`.
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npx prisma db seed`
5. `npm run dev`

Buka `http://localhost:3000`. Akun development: `admin` / `DevPassword123!` dan `demouser` / `DevPassword123!`. Ganti atau hapus akun ini di lingkungan non-development.

## Deployment

Set environment variables pada host (Vercel/Railway/Render), provision PostgreSQL, jalankan `npx prisma migrate deploy`, `npx prisma db seed` bila ingin demo data, lalu `npm run build`. Jangan pernah memasukkan `.env` ke repository.
