# Le 3 Cordes - ASBL Culturelle

Website for Le 3 Cordes, a cultural association organizing concerts and cultural events in Beaumont, Belgium.

Built with Jekyll for GitHub Pages. Live at **https://le3cordes.github.io**

## 🌐 Multilingual Website

This website is available in three languages via a JavaScript language switcher:
- **French** (Primary)
- **English**
- **Flemish/Dutch**

Language preference is saved to browser storage and the Facebook widget updates accordingly.

## 🎨 Design & Color Palette

The website features an artistic design with a sophisticated color palette:

- **Primary Burgundy** (#8B2635) - Cultural elegance
- **Secondary Gold** (#D4AF37) - Artistic warmth
- **Tertiary Teal** (#2C5F6F) - Sophisticated depth
- **Neutral Dark** (#0a0a0a) - Black background
- **Accent Coral** (#E27D60) - Vibrant highlights

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Lato (paragraphs)

## 📁 File Structure

```
le3cordes/
├── _config.yml                # Jekyll configuration
├── Gemfile                    # Ruby dependencies (github-pages)
├── index.md                   # Main page (front matter only)
├── _layouts/
│   └── default.html           # Main HTML template with Liquid includes
├── _includes/                 # Modular section components
│   ├── nav.html               # Navigation bar
│   ├── hero.html              # Hero section
│   ├── events.html            # Events / Facebook widget
│   ├── about.html             # About section
│   ├── gallery.html           # Photo gallery
│   └── contact.html           # Contact information
├── _data/                     # Editable content files
│   ├── gallery.yml            # Gallery items
│   ├── contact.yml            # Address, email, regions
│   └── site_meta.yml          # Facebook URLs
├── assets/
│   └── images/                # Gallery photos
├── styles/
│   └── style.css              # Global stylesheet
├── scripts/
│   ├── translations.js        # Text content in 3 languages
│   └── main.js                # Language switcher, animations
└── CLAUDE.md                  # Project instructions
```

## 🚀 GitHub Pages Deployment

This is a Jekyll site hosted on GitHub Pages at `le3cordes.github.io`.

### Automatic Deployment:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys via Jekyll
3. Your site updates within seconds at **https://le3cordes.github.io**

No settings changes needed—GitHub Pages detects the `Gemfile` and builds automatically.

## 📝 Content Sections

The single-page site includes:

1. **Navigation** - Sticky header with language switcher (FR/EN/NL)
2. **Hero Section** - Main introduction with call-to-action buttons
3. **Events Section** - Embedded Facebook Page widget showing events & timeline
4. **About Section** - Association info and mission statement
5. **Gallery** - Photo gallery of past events (emoji placeholders, add real images)
6. **Contact Section** - Address, email, and service regions
7. **Footer** - Navigation links and copyright

### Regions Served

Beaumont, Sivry-Rance, Chimay, Froidchapelle, Momignies, Thuin, Ham-sur-Heure-Nalinnes, Philippeville, Couvin, Walcourt, Merbes-le-Château, Rance, Rièzes, Sautin, Solre-Saint-Géry, Grandrieu.

## 🎯 Location & Contact

**Le 3 Cordes ASBL**
Rue Grand Place 28
6500 Beaumont
Belgium

📧 Email: letroiscordes@outlook.com
📱 Facebook: [Le 3 Cordes](https://www.facebook.com/profile.php?id=61570921900536)

## ✏️ Editing Content

### Edit Text Content

Text content (headings, descriptions, labels) is stored in [scripts/translations.js](scripts/translations.js) in three languages:

```javascript
const translations = {
  fr: { navHome: "Accueil", ... },
  en: { navHome: "Home", ... },
  nl: { navHome: "Startpagina", ... }
}
```

The JavaScript language switcher automatically swaps text based on user selection.

### Edit Gallery

Edit [`_data/gallery.yml`](_data/gallery.yml) to add or update gallery items:

```yaml
- icon: "🎸"
  alt: "Guitar concert"
  image: "assets/images/concert-1.jpg"  # Add when you have photos
```

Currently uses emoji placeholders. Add real photos by:
1. Upload JPG/PNG to `assets/images/`
2. Add `image: "assets/images/filename.jpg"` to the gallery item
3. The template will display the photo instead of the emoji

### Edit Contact Info

Update [`_data/contact.yml`](_data/contact.yml) to change address, email, or service regions.

### Edit Facebook Widget

Update the Facebook Page URL in [`_data/site_meta.yml`](_data/site_meta.yml):

```yaml
facebook_page_url: "https://www.facebook.com/profile.php?id=61570921900536&sk=about"
```

### Modify Colors

Edit CSS variables in [styles/style.css](styles/style.css):

```css
:root {
    --primary-burgundy: #8B2635;
    --secondary-gold: #D4AF37;
    --tertiary-teal: #2C5F6F;
    /* ... and more */
}
```

## 🏗️ Local Development

### Prerequisites
- Ruby 3.0+

### Setup

```bash
# Install dependencies
gem install github-pages

# Build the site
jekyll build

# Serve locally at http://localhost:4000
jekyll serve
```

The `github-pages` gem ensures your local build matches GitHub Pages exactly.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)
