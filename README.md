# ADR – Azərbaycan Xalq Cümhuriyyəti (Frontend)

Sadə, zərif və funksional veb sayt. Texnologiyalar: Next.js 16+, TypeScript, Tailwind CSS.

## Qurulum

Node 18+ tələb olunur. Aşağıdakı addımları izləyin:

1. Asılılıqları quraşdırın:
   - npm: `npm install`
   - yarn: `yarn`
   - pnpm: `pnpm install`

2. Lokal inkişaf serverini işə salın:
   - npm: `npm run dev`
   - yarn: `yarn dev`
   - pnpm: `pnpm dev`

3. Brauzerdə açın: http://localhost:3000

## Layihə quruluşu

- `app/`
  - `page.tsx`: Ana səhifə
  - `tarix/page.tsx`: ADR-in tarixi
  - `qurucular/page.tsx`: Qurucu şəxsiyyətlər
  - `layout.tsx`: Ümumi layout (Navbar, Footer)
  - `globals.css`: Ümumi stillər (Tailwind)
- `components/`: UI komponentləri (Navbar, Footer, Hero, FounderCard)
- `public/`: favicon və s.

## Dizayn

- Tarixi və elegant estetika üçün qəhvəyi/sepia palitrası.
- Serif başlıqlar, sans-serif mətn.
- Sadə kartlar və yumşaq kölgələr.

## SEO

- `layout.tsx` daxilində Azərbaycan dilində başlıq, təsvir və əsas açar sözlər.

## Build

- `npm run build` – istehsal build
- `npm start` – production server

