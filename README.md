# Clarissa Bañez — portfolio (React + Vite)

## First-time setup
1. Install Node.js (nodejs.org, LTS version).
2. In this folder run: `npm install`
3. Copy your existing `images/` folder contents into `public/images/`
   (so thumbnails are in `public/images/thumbs/`), your CV PDF into
   `public/documents/`,.
4. Preview: `npm run dev`  (opens at http://localhost:5173)
5. Publish: `npm run build`, then upload the contents of the `dist/` folder.

## Updating your work
Open `src/data/artworks.js`. Add, remove or edit entries; the gallery,
thumbnails and category filters update automatically.
Other editable files: `src/data/site.js` (about text, links, home image)
`src/data/cv.js` (CV rows) and `src/data/commissions.js` (Commissions page). Colors and fonts: top of `src/styles.css`.

## Where things live
- `src/pages/`       one file per page (Home, Work, About, CV, Contact, Collect)
- `src/components/`  reusable pieces (Header, Footer, ArtworkGrid, Lightbox,
                     CategoryFilter)
