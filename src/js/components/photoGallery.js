/**
 * Tihar Nepal - Festival Photo Gallery (Cultural Photography Exhibition)
 * High-definition documentary photography, zoom lightbox modal, captions, and category filters.
 */

import { t } from "../translations.js";

const GALLERY_PHOTOS = [
  {
    id: "photo-1",
    title: "Kathmandu Courtyard of Illumination",
    category: "decorations",
    day: "Laxmi Puja Night",
    src: "/src/assets/images/hero_tihar_lights_1794235780452.jpg",
    caption: "Ancient brick courtyard in Patan illuminated with concentric rows of glowing clay oil diyas and vibrant powdered marigold rangoli.",
    culturalNote: "Terracotta diyas filled with mustard oil symbolize lighting the path for Goddess Laxmi, while the orange marigold petals purify the grounds."
  },
  {
    id: "photo-2",
    title: "Kukur Tihar: Faithful Companion Honored",
    category: "kukur",
    day: "Day 02 · Kukur Tihar",
    src: "/src/assets/images/tihar_kukur_puja_1794235781527.jpg",
    caption: "A Nepali dog adorned with a fresh Sayapatri (marigold) garland and vermillion tika on its forehead during morning rituals.",
    culturalNote: "Dogs are celebrated as guardians of the threshold and loyal companions to humanity. Street canines and domestic pets alike are given feast plates."
  },
  {
    id: "photo-3",
    title: "The Sacred Footsteps of Mahalakshmi",
    category: "laxmi",
    day: "Day 03 · Gai Tihar & Laxmi Puja",
    src: "/src/assets/images/tihar_laxmi_puja_1794235781982.jpg",
    caption: "Sacred vermillion and rice paste footstep impressions (Laxmi ko Paaela) leading inside the illuminated home doorway.",
    culturalNote: "Drawn from the courtyard gate straight to the family puja room or safe, guiding the Goddess of Fortune into the heart of the home."
  },
  {
    id: "photo-4",
    title: "Bhai Tika: The Sacred Sibling Bond",
    category: "bhai-tika",
    day: "Day 05 · Bhai Tika",
    src: "/src/assets/images/tihar_bhai_tika_1794235781997.jpg",
    caption: "A sister applying Saptarangi tika with a traditional brass puja thali featuring Makhamali malas, walnuts, and sacred Dubo grass.",
    culturalNote: "The purple Globe Amaranth (Makhamali) garland never wilts, representing an undying bond of love, health, and mutual protection."
  },
  {
    id: "photo-5",
    title: "Deusi Bhailo Night in the Tole",
    category: "deusi",
    day: "Govardhan Night",
    src: "/src/assets/images/tihar_deusi_bhailo_1794235782711.jpg",
    caption: "Nepali youth adorned in traditional Dhaka topis and cultural attire caroling under festival fairy lights with live Madal drums.",
    culturalNote: "Deusi troops bring musical joy, comedic rhyming tales of King Bali, and heartwarming blessings to neighborhood doorsteps."
  }
];

export function renderGallery() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <!-- Section Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ffd166]">Visual Heritage Archive</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("galleryTitle")}
        </h1>
        <p class="text-stone-300 text-sm leading-relaxed">
          ${t("gallerySubtitle")}
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button data-cat="all" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#ffd166] text-[#140b1c] transition-colors whitespace-nowrap">
          All Photographs
        </button>
        <button data-cat="kukur" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800">
          Kukur Tihar
        </button>
        <button data-cat="laxmi" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800">
          Laxmi Puja
        </button>
        <button data-cat="bhai-tika" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800">
          Bhai Tika
        </button>
        <button data-cat="deusi" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800">
          Deusi Bhailo
        </button>
        <button data-cat="decorations" class="gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800">
          Courtyards & Diyas
        </button>
      </div>

      <!-- Photo Grid -->
      <div id="gallery-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Rendered by attachGalleryEvents -->
      </div>

      <!-- Lightbox Modal -->
      <div id="gallery-lightbox" class="hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
        <div class="max-w-4xl w-full bg-[#1c0f26] rounded-3xl overflow-hidden border border-[#ffd166]/30 shadow-2xl relative space-y-4">
          <button id="btn-close-lightbox" class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white font-bold flex items-center justify-center hover:bg-[#c83e63] transition-colors">
            ✕
          </button>
          
          <div class="aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
            <img id="lightbox-img" src="" alt="" class="max-h-full max-w-full object-contain" />
          </div>

          <div class="p-6 space-y-2 border-t border-stone-800">
            <div class="flex items-center gap-2">
              <span id="lightbox-day" class="text-xs font-mono font-semibold text-[#ffd166] uppercase"></span>
            </div>
            <h3 id="lightbox-title" class="font-serif text-2xl font-bold text-[#f7f4ee]"></h3>
            <p id="lightbox-caption" class="text-xs text-stone-300 leading-relaxed"></p>
            <p id="lightbox-note" class="text-xs text-[#ff8c42] italic pt-1 border-t border-stone-800/80"></p>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function attachGalleryEvents() {
  const grid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = /** @type {HTMLImageElement} */ (document.getElementById("lightbox-img"));
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxNote = document.getElementById("lightbox-note");
  const lightboxDay = document.getElementById("lightbox-day");
  const closeBtn = document.getElementById("btn-close-lightbox");

  let activeCategory = "all";

  function renderPhotos() {
    if (!grid) return;
    const filtered = GALLERY_PHOTOS.filter(
      (p) => activeCategory === "all" || p.category === activeCategory
    );

    grid.innerHTML = filtered
      .map(
        (photo) => `
      <div 
        data-photo-id="${photo.id}" 
        class="photo-card tihar-card rounded-2xl overflow-hidden border border-[#ffd166]/20 bg-[#1c0f26] cursor-pointer group hover:border-[#ffd166]/50 transition-all flex flex-col justify-between"
      >
        <div class="aspect-[4/3] w-full overflow-hidden bg-stone-900 relative">
          <img 
            src="${photo.src}" 
            alt="${photo.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerpolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-xs font-semibold text-[#ffd166] border border-[#ffd166]/30">
              🔍 ${t("zoomPhoto")}
            </span>
          </div>
          <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-stone-300 font-mono">
            ${photo.day}
          </span>
        </div>

        <div class="p-4 space-y-1.5">
          <h3 class="font-serif text-base font-bold text-[#f7f4ee] group-hover:text-[#ffd166] transition-colors">
            ${photo.title}
          </h3>
          <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
            ${photo.caption}
          </p>
        </div>
      </div>
    `
      )
      .join("");

    // Lightbox triggers
    document.querySelectorAll(".photo-card").forEach((card) => {
      card.addEventListener("click", () => {
        const photoId = card.getAttribute("data-photo-id");
        const found = GALLERY_PHOTOS.find((p) => p.id === photoId);
        if (found && lightbox && lightboxImg) {
          lightboxImg.src = found.src;
          if (lightboxTitle) lightboxTitle.textContent = found.title;
          if (lightboxCaption) lightboxCaption.textContent = found.caption;
          if (lightboxNote) lightboxNote.textContent = `Cultural Significance: ${found.culturalNote}`;
          if (lightboxDay) lightboxDay.textContent = found.day;
          lightbox.classList.remove("hidden");
        }
      });
    });
  }

  // Filter Buttons
  document.querySelectorAll(".gal-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gal-cat-btn").forEach((b) => {
        b.className = "gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#21132d] text-stone-300 hover:text-white transition-colors whitespace-nowrap border border-stone-800";
      });
      btn.className = "gal-cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-[#ffd166] text-[#140b1c] transition-colors whitespace-nowrap";
      activeCategory = btn.getAttribute("data-cat") || "all";
      renderPhotos();
    });
  });

  if (closeBtn && lightbox) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  }

  renderPhotos();
}
