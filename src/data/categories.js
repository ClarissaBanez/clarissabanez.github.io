// =====================================================================
//  YOUR CATEGORIES — the buttons above the Work grid, in this order.
//  The FIRST one is shown when someone opens the Work page.
//
//  name          must match the names you use in `categories` in artworks.js
//  description   optional text shown above the grid ('' to hide)
//  installation  optional installation shots shown above the grid
//                ([] to hide). `file` is inside public/images/thumbs/
//
//  To add an exhibition or series: copy the example below, remove the
//  `//` marks, then give the paintings that belong to it that same name
//  in artworks.js, e.g.  categories: ['Recent Work', "Painter's Market"]
// =====================================================================

export const categories = [
  { name: 'Recent Work', description: '', installation: [] },
  { name: 'MÁSEN MÁNES', description: 'Works shown at Galerie Mánes, Prague', installation: [] },
  {
    name: "Painter's Market",
    description: 'Works shown at Painter\'s Market, Místečko, Prague.',
    installation: [
      { file: 'ClarissaBanez_PaintersMarket_Installation View.jpg', caption: "Installation view, Painter's Market, 2025" },
    ],
  },
    { name: '15 LET', description: 'Works shown at Málovani a Kresleni, Prague', installation: [] },
]

// Adds a button at the end that shows every painting at once.
// Set to '' to turn it off. (It only appears when you have 2+ categories.)
export const showAllButton = 'Show all'
