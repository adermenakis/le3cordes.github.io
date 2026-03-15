# Le 3 Corde - ASBL Culturelle

Website for Le 3 Corde, a cultural association organizing concerts and cultural events in Beaumont, Belgium.

## 🌐 Multilingual Website

This website is available in three languages:
- **French** (Primary): [index.html](index.html)
- **English**: [index-en.html](index-en.html)
- **Flemish/Dutch**: [index-nl.html](index-nl.html)

## 🎨 Design & Color Palette

The website features an artistic design with a sophisticated color palette:

- **Primary Burgundy** (#8B2635) - Cultural elegance
- **Secondary Gold** (#D4AF37) - Artistic warmth
- **Tertiary Teal** (#2C5F6F) - Sophisticated depth
- **Neutral Cream** (#FAF7F2) - Warm background
- **Accent Coral** (#E27D60) - Vibrant highlights

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Lato (paragraphs)

## 📁 File Structure

```
/
├── index.html          # French version (primary)
├── index-en.html       # English version
├── index-nl.html       # Flemish/Dutch version
├── styles/
│   └── style.css       # Global stylesheet with color palette
├── CLAUDE.md           # Project instructions
└── README.md           # This file
```

## 🚀 GitHub Pages Deployment

This is a static website hosted on GitHub Pages.

### Deploy Steps:

1. Push changes to your GitHub repository
2. Go to **Settings → Pages**
3. Select "Deploy from a branch"
4. Choose the `main` branch
5. Your site will be live at `https://yourusername.github.io/le3corde/`

## 📝 Content Sections

Each language version includes:

1. **Hero Section** - Main introduction with call-to-action buttons
2. **Events Section** - Showcase upcoming concerts and cultural events
3. **About Section** - Information about the association and mission
4. **Gallery** - Photo gallery of past events
5. **Contact Section** - Contact form and location details

### Regions Served

The association serves Beaumont and surrounding areas including:
Sivry-Rance, Chimay, Froidchapelle, Momignies, Thuin, Ham-sur-Heure-Nalinnes, Philippeville, Couvin, Walcourt, Merbes-le-Château, Rance, Rièzes, Sautin, Solre-Saint-Géry, and Grandrieu.

## 🎯 Location

**Le 3 Corde ASBL**
Rue Grand Place 28
6500 Beaumont
Belgium

Email: info@le3corde.be

## ✏️ Customization

### Adding Real Content

Currently, the website uses Lorem Ipsum placeholder text. To add real content:

1. Open the HTML file for the language you want to edit
2. Replace Lorem Ipsum text with actual content
3. Update event dates, titles, and descriptions
4. Add real images to the gallery section

### Modifying Colors

To change the color palette, edit the CSS variables in [styles/style.css](styles/style.css):

```css
:root {
    --primary-burgundy: #8B2635;
    --secondary-gold: #D4AF37;
    --tertiary-teal: #2C5F6F;
    /* ... and more */
}
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)
