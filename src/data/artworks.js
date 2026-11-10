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
//photoCredit    'Photographer Name',  for the painting's main image
//  alt          (optional) describe what is IN the painting, for people using
//               screen readers, e.g. 'Three lemons on a white cloth'
//  extras       (optional) more views of the same painting, shown as small
//               thumbnails in the lightbox: details, installation views...
//               extras: [
//                 { file: 'Lemons_detail.jpg', label: 'Detail' },
//                 { file: 'Lemons_installation.jpg', fullFile: 'Lemons_installation_large.jpg',
//                   label: 'Installation view', credit: 'Photographer Name' alt: 'Lemons hanging beside two other works' },
//               ],
//               `file` lives in public/images/thumbs/. `fullFile` (optional) is a bigger
//               version in public/images/. `alt` (optional) describes the photo.
//  available    true shows an "Available" link to the Collect page
//  
// =====================================================================

export const artworks = [

   { 
    slug: '09-51-an-artifact-of-space', 
    title: 'No. 09-51: An Artifact of Space ', 
    year: 2026, 
    medium: 'Oil on copper, mounted on acrylic, spring and wires', 
    dimensions: '24 x 18 cm',
    categories: ['Recent Work', 'Artifacts'], 
    fullFile: 'ClarissaBanez_No. 09-51 An Artifact of Space_Oil on Copper, Acrylic sheet, Springs, Wire.jpg',
    file: 'ClarissaBanez_No. 09-51 An Artifact of Space_Oil on Copper, Acrylic sheet, Springs, Wire.jpg', 
    label: 'Installation',
    description: '', 
    extras: [
        {fullFile: 'ClarissaBanez_No. 09-51 An Artifact of Space_Oil on Copper, Acrylic sheet, Springs, Wire_Detail.jpg', file: 'ClarissaBanez_No. 09-51 An Artifact of Space_Oil on Copper, Acrylic sheet, Springs, Wire_Detail.jpg', label: 'Details'}],
    available: false, 
    credit: '',
  },
     { 
    slug: '208-an-artifact-of-time', 
    title: 'No. 208: An Artifact of Time ', 
    year: 2026, 
    medium: 'Free-motion Embroidery on Linen', 
    dimensions: '36 x 208 cm',
    categories: ['Recent Work', 'Artifacts'], 
    fullFile: 'ClarissaBanez_No. 208_An Artifact of Time_svetova_BURDEN OF GRAVITY –-FROM WAKING TO SPACE-1_Marian Hromek.jpg',
    file: 'ClarissaBanez_No. 208_An Artifact of Time_svetova_BURDEN OF GRAVITY –-FROM WAKING TO SPACE-1_Marian Hromek.jpg',
    photoCredit: 'Maria Hromek',
    description: '', 
    extras: [
      {file: 'ClarissaBanez_No. 208_An Artifact of Time_Detail.jpg', label:'Details', credit: 'Maria Hromek'},
      {file: 'ClarissaBanez_No. 208_An Artifact of Time_Detail 2.jpg', label:'Details',  credit: 'Maria Hromek'}
    ],
    available: false, 
  },
  
  { 
    slug: 'i-hope-this-email-finds-you-well', 
    title: 'I hope this email finds you well.', 
    year: 2026, 
    medium: 'Oil on Wood', 
    dimensions: '24 x 18 cm',
    categories: ['Recent Work', 'Portraits'], 
    fullFile: 'ClarissaBanez_I hope this email finds you well_2026_Oil on Wood_24x18cm.jpg',
    file: 'ClarissaBanez_I hope this email finds you well_2026_Oil on Wood_24x18cm.jpg', 
    description: '', 
    extras: [],
    available: false, 
    credit: '',
  },
  
{ 
    slug: 'still-life-with-citrus', 
    title: 'Still Life with Citrus', 
    year: 2026, medium: 'Oil on Canvas', 
    dimensions: '40 x 50 cm',
    categories: ['Recent Work', 'Still Life'], 
    fullFile: 'ClarissaBanez_Still Life with Citrus_2026_Oil on Canvas_40x50cm.JPG', 
    file: 'ClarissaBanez_Still Life with Citrus_2026_Oil on Canvas_40x50cm.JPG', 
    description: '', 
    available: false 
  },

    { 
    slug: 'basking-in-the-morning-sun', 
    title: 'Basking in the Morning Sun', 
    year: 2025, medium: 'Oil on Canvas', 
    dimensions: '45 x 35 cm',
    categories: ['Recent Work','Portraits'], 
    fullFile: 'ClarissaBanez_Basking in the Morning Sun_45x35cm_OilonCanvasBoard_2025.jpg', 
    file: 'ClarissaBanez_Basking in the Morning Sun_45x35cm_OilonCanvasBoard_2025.jpg', 
    description: '', 
    available: false 
  },

  
  { 
    slug: 'longing', 
    title: 'Longing', 
    year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '80 x 60 cm',
    categories: ['Held in Sea, Sky and Stone'], 
    fullFile: 'ClarissaBanez_Longing_80x60cm_OilonCanvasBoard_2025.jpg', 
    file: 'ClarissaBanez_Longing_80x60cm_OilonCanvasBoard_2025.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'rising', 
    title: 'Rising', 
    year: 2025, 
    medium: 'Oil on Linen', 
    dimensions: '80 x 60 cm',
    categories: ['Held in Sea, Sky and Stone'], 
    fullFile: 'ClarissaBanez_Rising_80x60cm_OilonLinen_2025.jpg', 
    file: 'ClarissaBanez_Rising_80x60cm_OilonLinen_2025.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'the-height-of-doubt', 
    title: 'The Height of Doubt', year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '30 x 40 cm',
    categories: ['Held in Sea, Sky and Stone'], 
    fullFile: 'ClarissaBanez_The Height of Doubt_30x40cm_OilonCanvas_2025.jpg', 
    file: 'ClarissaBanez_The Height of Doubt_30x40cm_OilonCanvas_2025.jpg', 
    description: '', 
    available: false 
  },

    { 
    slug: 'bleak', 
    title: 'Bleak', 
    year: 2026, 
    medium: 'Oil on Canvas', 
    dimensions: '40 x 30 cm',
    categories: ['Recent Work', 'Held in Sea, Sky and Stone'], 
    fullFile: 'ClarissaBanez_Bleak, 2026, Oil on Canvas, 40 x 30 cm.jpg', 
    file: 'ClarissaBanez_Bleak, 2026, Oil on Canvas, 40 x 30 cm.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'a-pair', 
    title: 'A Pair', 
    year: 2025, 
    medium: 'Oil on Linen', 
    dimensions: '30 x 24 cm',
    categories: ['Still Life'], 
    fullFile: 'ClarissaBanez_A Pair_30x24cm_OilonLinen_2025.jpg', 
    file: 'ClarissaBanez_A Pair_30x24cm_OilonLinen_2025.jpg', 
    description: '', 
    available: false 
  },
  { slug: 'lemons', 
    title: 'Lemons', 
    year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '18 x 24 cm',
    categories: ['Still Life'], 
    fullFile: 'ClarissaBanez_Lemons_18x24cm_OilonCanvasBoard_2025.jpg', 
    file: 'ClarissaBanez_Lemons_18x24cm_OilonCanvasBoard_2025.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'cherries', 
    title: 'Cherries', 
    year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '15 x 15 cm',
    categories: ['Still Life'], 
    fullFile: 'ClarissaBanez_Cherries_15x15cm_OilonCanvasBoard_2025.jpg', 
    file: 'ClarissaBanez_Cherries_15x15cm_OilonCanvasBoard_2025.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'sibuyas', 
    title: 'Sibuyas', 
    year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '15 x 15 cm',
    categories: ['Still Life'], 
    fullFile: 'ClarissaBanez_Sibuyas_15x15cm_OilonCanvas_2025.jpg', 
    file: 'ClarissaBanez_Sibuyas_15x15cm_OilonCanvas_2025.jpg', 
    description: '', 
    available: false 
  },
  { 
    slug: 'fragile', 
    title: 'Fragile', 
    year: 2025, 
    medium: 'Oil on Canvas', 
    dimensions: '35 x 45 cm',
    categories: ['Still Life'], 
    fullFile: 'clarissabanez_Fragile.jpg', 
    file: 'clarissabanez_Fragile.jpg', 
    description: '', 
    available: false 
  },
]

// Builds safe URLs (handles spaces and commas in filenames).
export const thumbSrc = (a) => encodeURI(`/images/thumbs/${a.file}`)
export const fullSrc = (a) => (a.fullFile ? encodeURI(`/images/${a.fullFile}`) : thumbSrc(a))


// Text read aloud by screen readers. Uses your `alt` description when you wrote one.
export const altText = (a) => (a.alt ? `${a.title}. ${a.alt}` : `${a.title}, ${a.year}, ${a.medium}`)