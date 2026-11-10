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
  { name: "Artifacts", description: '"Artifacts" is a series of installation work that explores forces that shape memory, identity and home. The works were developed during As We Grow Program and shown at the Burden of Gravity, from Waking to Space Exhibition at SVĚTOVA1, Prague.', installation: []},
  { name: 'Portraits', description: '', installation: [] },
  { name: 'Held in Sea, Sky and Stone', description: 'Held in Sea, Sky and Stone is a series of inner landscapes.', installation: [] },
  { name: "Still Life", description: '', installation: [],},
]

// Adds a button at the end that shows every painting at once.
// Set to '' to turn it off. (It only appears when you have 2+ categories.)
export const showAllButton = 'Show all'
