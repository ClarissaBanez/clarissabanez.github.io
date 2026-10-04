// =====================================================================
//  YOUR ARTWORK LIST — the only file you edit to update the Work page.
//
//  To add a painting: copy one block, paste it at the TOP of the list
//  (newest first), and change the values.
//
//  file         image filename inside public/images/thumbs/
//  fullFile     (optional) larger image inside public/images/ for the
//               big viewer. If left out, `file` is used.
//  categories   one or more names from src/data/categories.js, e.g.
//               ['Recent Work', "Painter's Market"]. A painting can be in
//               several categories.
//  description  shown beside the image. Leave '' to hide it.
//  available    true shows an "Available" link to the Collect page
// =====================================================================

export const artworks = [
  { slug: 'still-life-with-citrus', title: 'Still Life with Citrus', year: 2026, medium: 'Oil on Canvas', dimensions: '40 x 50 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Still Life with Citrus_2026_Oil on Canvas_40x50cm.JPG', description: '', available: false },
  { slug: 'bleak', title: 'Bleak', year: 2026, medium: 'Oil on Canvas', dimensions: '40 x 30 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Bleak, 2026, Oil on Canvas, 40 x 30 cm.jpg', description: '', available: false },
  { slug: 'longing', title: 'Longing', year: 2025, medium: 'Oil on Canvas', dimensions: '80 x 60 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Longing_80x60cm_OilonCanvasBoard_2025.jpg', description: '', available: false },
  { slug: 'rising', title: 'Rising', year: 2025, medium: 'Oil on Linen', dimensions: '80 x 60 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Rising_80x60cm_OilonLinen_2025.jpg', description: '', available: false },
  { slug: 'the-height-of-doubt', title: 'The Height of Doubt', year: 2025, medium: 'Oil on Canvas', dimensions: '30 x 40 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_The Height of Doubt_30x40cm_OilonCanvas_2025.jpg', description: '', available: false },
  { slug: 'a-pair', title: 'A Pair', year: 2025, medium: 'Oil on Linen', dimensions: '30 x 24 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_A Pair_30x24cm_OilonLinen_2025.jpg', description: '', available: false },
  { slug: 'lemons', title: 'Lemons', year: 2025, medium: 'Oil on Canvas', dimensions: '18 x 24 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Lemons_18x24cm_OilonCanvasBoard_2025.jpg', description: '', available: false },
  { slug: 'basking-in-the-morning-sun', title: 'Basking in the Morning Sun', year: 2025, medium: 'Oil on Canvas', dimensions: '45 x 35 cm',
    categories: ['Recent Work'], file: 'ClarissaBanez_Basking in the Morning Sun_45x35cm_OilonCanvasBoard_2025.jpg', description: '', available: false },
]

// Builds safe URLs (handles spaces and commas in filenames).
export const thumbSrc = (a) => encodeURI(`/images/thumbs/${a.file}`)
export const fullSrc = (a) => (a.fullFile ? encodeURI(`/images/${a.fullFile}`) : thumbSrc(a))
