# 🪔 Tihar Nepal — Five Days. Endless Traditions.

> "A cultural celebration platform dedicated to preserving, honoring, and sharing the five radiant days of Nepal's Tihar festival with communities across the world."

---

## 🌟 Overview

**Tihar Nepal** is a production-quality, culturally authentic digital celebration platform. Built with semantic **HTML5**, responsive **CSS3 (Tailwind)**, and **Vanilla JavaScript ES6+**, it bridges ancient Himalayan traditions with engaging modern interactive experiences.

### Cultural Philosophy
Tihar (celebrated as *Deepawali*, *Swanti*, or *Yama Panchak*) is globally distinct for sanctifying the coexistence between humankind, animals, and nature:
- **Kag Tihar**: Crows as messengers between earthly life and Yama's spirit realm.
- **Kukur Tihar**: Dogs honored with marigold garlands and red tika for unyielding loyalty and vigilance.
- **Gai Tihar & Laxmi Puja**: Cows revered as maternal nourishers at dawn; evening illuminated with thousands of clay *diyas* and vermillion footsteps (*Laxmi ko Paaela*) welcoming Goddess Mahalakshmi.
- **Govardhan Puja & Mha Puja**: Oxen honored for agricultural labor, Govardhan mountain revered for environmental sustenance, and Newari *Mha Puja* celebrating the inner divinity and purification of one's own soul.
- **Bhai Tika**: The eternal bond between brothers and sisters featuring *Saptarangi* (seven-color) tika, unbroken *Makhamali* garlands (which never wilt), walnut breaking, and *Bhai Masala* gift exchange.

---

## 🚀 Key Features & Interactive Studios

### 1. 🏠 Homepage & Festival Countdown
- **Cinematic Visual Atmosphere**: Authentic night photography of Kathmandu courtyards with midnight purple (`#21132D`), festive gold (`#FFD166`), and marigold orange (`#FF8C42`).
- **Interactive Kindling Diya**: Clickable flame with glowing aura and synthesized temple bell resonance.
- **Floating Golden Sparks**: Ambient particle animations.
- **Live Festival Countdown Clock**: Real-time ticker counting down days, hours, minutes, and seconds to Tihar.
- **Direct Navigation Cards**: Quick gateways to all five days and creative studios.

### 2. 🪷 Rangoli Creator Studio
- **HTML5 Canvas Workspace**: High-resolution interactive canvas with touch and pointer support.
- **Radial Symmetry Modes**: Freehand, 4-fold, 8-fold, and 12-fold geometric radial symmetry that automatically reflects your strokes into intricate mandalas.
- **Traditional Festive Pigments**: Marigold Orange, Turmeric Yellow, Sindoor Vermillion, Rice Flour White, Peafowl Blue, Forest Green, and custom color picker.
- **Brush Controls**: Smooth size and opacity sliders.
- **Cultural Stamps**: Marigold (Sayapatri) flower, Diya, Footsteps of Laxmi, and Sacred Lotus.
- **Action Tools**: Undo/Redo history stack, guidelines grid overlay, clear canvas, and one-click PNG download (`tihar-rangoli.png`).

### 3. 🥁 Deusi Bhailo Cultural Studio
- **Authentic Traditional Lyrics**: Complete verses for Traditional Bhailo, Traditional Deusi, and Aashik (host blessings) with Nepali script, Romanized phonetic transliteration, and English meanings.
- **Interactive Call-and-Response Display**: Highlighting lead singer calls and thunderous chorus responses.
- **Web Audio API Madal Synthesizer**: Built-in rhythmic drum player generating traditional Nepali folk beats ("Dha", "Tin", "Ta") with 8-step visualizer, tempo control, and interactive tap pads. Zero external audio dependency!
- **Search & Category Filters**: Filter by Bhailo, Deusi, or Aashik, with real-time keyword search and one-click lyric copy.

### 4. 💌 Tihar Wishes Studio
- **Personalized Greeting Card Generator**: Customize recipient name, sender name, festival occasion, and custom blessing.
- **Bilingual Blessing Templates**: Pre-written authentic Nepali and English festive prayers.
- **Four Visual Themes**: Midnight Gold, Marigold Warmth, Royal Vermillion, and Emerald Devotion.
- **Client-Side Canvas Renderer**: Generates crisp 1080×1080 HD greeting cards with ornate borders and corner motifs for PNG download.
- **Instant Social Sharing**: Direct WhatsApp sharing link, Facebook share, and clipboard copy.

### 5. 🪔 Virtual Diya Courtyard
- **Interactive Courtyard Scene**: Courtyard with multiple styles of traditional lamps:
  - Traditional Clay Matka Pala
  - Ornate Brass Panchamukhi Diya
  - Carved Terracotta Diya
  - Floating Lotus Diya
- **Touch to Light**: Click any lamp to toggle its flickering flame, golden halo, and rising sparks.
- **Courtyard Controls**: Click anywhere on the courtyard floor to place a new lamp, "Light All Diyas", "Extinguish All", ring the sacred temple bell chime, and capture a courtyard snapshot PNG.

### 6. 📸 Community Gallery & Moderation Desk
- **Community Feed**: Showcase of Tihar decorations, rangolis, pet tributes, and home lighting from around the globe.
- **Category Filters**: All, Diyas & Lights, Rangoli Art, Kukur Tihar Pets, Bhai Tika, Deusi Bhailo.
- **Duplicate-Free Likes**: Like and unlike system with persistent counters.
- **Client-Validated Submission Modal**: Submit photos with size validation (< 5MB), format checks (JPEG/PNG/WebP), preview, and caption.
- **Admin Moderation Desk**: Review queue where submissions remain in pending status until approved or rejected by an administrator.

### 7. 🌸 Bhai Tika Dedicated Deep Dive
- **The Five Sacred Steps**: Telko Ghero (protective oil boundary), Okhar Phutaune (breaking walnuts on the threshold), Makhamali garland ritual, Saptarangi tika application, and Sagun/Masala exchange.
- **Saptarangi Color Symbolism**: Comprehensive breakdown of all seven colors (Red, Yellow, Green, Blue, White, Orange, Purple) and their spiritual significance.
- **Personalized Sibling Blessing Generator**: Sister-to-Brother and Brother-to-Sister customized greeting generator.

### 8. 🖼️ Festival Photo Gallery
- **High-Definition Visual Heritage**: Authentic photography with zoom lightbox, captions, and cultural significance notes.

### 9. 🌐 Bilingual Localization
- **Complete English & Nepali Support**: Seamless toggle button in the header preserving state in `localStorage`. All headings, navigation, day descriptions, and controls update dynamically.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 with accessibility attributes (ARIA).
- **Styling**: Modern CSS3 with Tailwind CSS v4, custom theme variables, and keyframe animations.
- **Client Logic**: Vanilla JavaScript ES6+ (Modular ES imports, zero runtime frameworks).
- **Audio Engine**: Native Web Audio API synthesizer for Madal drums and temple bells.
- **Graphics**: HTML5 2D Canvas API for Rangoli drawing, greeting card rendering, and snapshot downloads.
- **Backend Architecture**: Designed for Supabase PostgreSQL database, Row Level Security (RLS), and Storage buckets. Includes an offline-first LocalStorage repository that operates completely standalone out-of-the-box.

---

## 📁 Project Architecture

```
├── .env.example              # Environment variables template
├── index.html                # Main HTML5 entry point with OpenGraph & Google Fonts
├── metadata.json             # AI Studio applet metadata
├── package.json              # Scripts & dependencies
├── README.md                 # Project documentation
├── vercel.json               # Vercel deployment configuration
├── vite.config.ts            # Vite bundler configuration
├── supabase/
│   └── schema.sql            # PostgreSQL DDL, RLS policies, and storage configuration
└── src/
    ├── index.css             # Tailwind v4 theme tokens, color palette, and keyframe animations
    ├── main.js               # Application router and entry orchestrator
    ├── assets/
    │   └── images/           # High-resolution cultural photography assets
    ├── js/
    │   ├── audio.js          # Web Audio API synthesizer (Madal beats & temple bells)
    │   ├── translations.js   # Complete English & Nepali dictionary
    │   └── components/
    │       ├── navbar.js     # Top Bar Contract responsive navigation
    │       ├── footer.js     # Cultural footer with calendar years
    │       ├── home.js       # Hero, countdown, interactive diya, and feature strip
    │       ├── about.js      # History, philosophy, and regional nuances
    │       ├── fiveDays.js   # Five Days (Yama Panchak) tabbed ritual guide
    │       ├── deusiBhailo.js# Lyrics, call-and-response, and Madal drum player
    │       ├── rangoli.js    # Interactive canvas rangoli creator with radial symmetry
    │       ├── wishesStudio.js# Greeting card generator & export
    │       ├── virtualDiya.js# Interactive courtyard of lights
    │       ├── communityGallery.js# Community feed, upload modal & moderation desk
    │       ├── bhaiTika.js   # Sacred Bhai Tika guide & sibling blessing creator
    │       └── photoGallery.js# Cultural photo exhibition with zoom lightbox
    └── lib/
        └── supabaseClient.js # Supabase connector with offline-first local persistence
```

---

## 🗄️ Supabase Setup (Optional Backend Integration)

The application works 100% out-of-the-box with offline-first client storage. When connecting to a live Supabase project:

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard and execute the contents of `supabase/schema.sql`.
   - Provisions `profiles`, `community_posts`, `post_likes`, `post_reports` tables.
   - Configures Row Level Security (RLS) policies.
   - Configures the `community-images` storage bucket.
3. Add your Supabase credentials to your `.env` or Vercel environment variables:
   ```bash
   VITE_SUPABASE_URL="https://your-project.supabase.co"
   VITE_SUPABASE_ANON_KEY="your-anon-public-key"
   ```
---

## 📜 Cultural Respect & Heritage Note

Tihar is observed with regional nuances across Nepal's diverse communities—including Khas-Arya communities, Newar communities (*Swanti* & *Mha Puja*), Mithila/Terai traditions (*Deepawali* & *Godhan*), and Himalayan communities. This platform respects and highlights these regional customs without presenting any single tradition as universal.

**Shubha Deepawali & Happy Nepal Sambat 1147!**
