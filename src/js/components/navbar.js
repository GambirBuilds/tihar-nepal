/**
 * Tihar Nepal - Navigation Bar Component
 * Follows the 3-Zone Top Bar Contract with responsive mobile drawer and language toggle.
 */

import { t, getLanguage, setLanguage } from "../translations.js";

export function renderNavbar(activeRoute = "home") {
  const currentLang = getLanguage();
  const nextLangLabel = currentLang === "en" ? "🇳🇵 नेपाली" : "🇬🇧 English";
  const nextLangCode = currentLang === "en" ? "ne" : "en";

  const navLinks = [
    { id: "home", labelKey: "navHome", href: "#home" },
    { id: "five-days", labelKey: "navFiveDays", href: "#five-days" },
    { id: "deusi-bhailo", labelKey: "navDeusiBhailo", href: "#deusi-bhailo" },
    { id: "rangoli", labelKey: "navRangoli", href: "#rangoli" },
    { id: "wishes", labelKey: "navWishes", href: "#wishes" },
    { id: "diya", labelKey: "navDiya", href: "#diya" },
    { id: "community", labelKey: "navCommunity", href: "#community" },
    { id: "bhai-tika", labelKey: "navBhaiTika", href: "#bhai-tika" },
    { id: "about", labelKey: "navAbout", href: "#about" },
    { id: "gallery", labelKey: "navGallery", href: "#gallery" }
  ];

  return `
    <header class="sticky top-0 z-50 bg-[#190d23]/90 backdrop-blur-md border-b border-[#ffd166]/15 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        <!-- Zone 1: Single text element wordmark with Diya emblem -->
        <a href="#home" class="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#ffd166] whitespace-nowrap shrink-0 group">
          <svg class="w-7 h-7 text-[#ff8c42] group-hover:scale-110 transition-transform animate-diya-flicker" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 12 C44 32 32 48 50 66 C68 48 56 32 50 12 Z" fill="#FFD166"/>
            <path d="M20 68 C20 84 80 84 80 68 C70 76 30 76 20 68 Z" fill="#C83E63"/>
            <ellipse cx="50" cy="68" rx="30" ry="8" fill="#FF8C42"/>
          </svg>
          <span class="font-serif tracking-normal text-2xl text-[#f7f4ee]">${t("siteTitle")}</span>
        </a>

        <!-- Zone 2: Clean single-line text navigation links -->
        <nav class="hidden xl:flex items-center gap-5 text-sm font-medium text-stone-300">
          ${navLinks
            .map(
              (link) => `
            <a 
              href="${link.href}" 
              class="whitespace-nowrap shrink-0 transition-colors py-1 ${
                activeRoute === link.id
                  ? "text-[#ffd166] border-b-2 border-[#ffd166] font-semibold"
                  : "hover:text-[#ffd166]"
              }"
            >
              ${t(link.labelKey)}
            </a>
          `
            )
            .join("")}
        </nav>

        <!-- Zone 3: 1 primary action + Language Switcher & Mobile Trigger -->
        <div class="flex items-center gap-3 shrink-0">
          <!-- Language Toggle Button -->
          <button 
            id="lang-toggle-btn" 
            data-next-lang="${nextLangCode}"
            class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#2d1a3e] hover:bg-[#3d2354] border border-[#ffd166]/25 text-[#ffd166] transition-colors whitespace-nowrap shrink-0"
            title="Switch Language / भाषा परिवर्तन गर्नुहोस्"
          >
            ${nextLangLabel}
          </button>

          <!-- Quick Primary Action -->
          <a 
            href="#diya" 
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#140b1c] bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white rounded-lg font-semibold transition-all shadow-sm hover:shadow-[#ffd166]/20 whitespace-nowrap shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            ${t("lightDiyaBtn")}
          </a>

          <!-- Mobile Menu Hamburger Button -->
          <button 
            id="mobile-menu-toggle"
            class="xl:hidden p-2 rounded-lg text-stone-300 hover:text-[#ffd166] hover:bg-[#2d1a3e] transition-colors"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-nav-menu" class="hidden xl:hidden bg-[#1c0f27] border-b border-[#ffd166]/20 px-4 pt-3 pb-5 space-y-2">
        ${navLinks
          .map(
            (link) => `
          <a 
            href="${link.href}" 
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              activeRoute === link.id
                ? "bg-[#2d1a3e] text-[#ffd166] font-semibold"
                : "text-stone-300 hover:bg-[#251433] hover:text-[#ffd166]"
            }"
          >
            ${t(link.labelKey)}
          </a>
        `
          )
          .join("")}
        <div class="pt-2">
          <a 
            href="#diya" 
            class="block w-full text-center px-4 py-2 text-sm font-semibold text-[#140b1c] bg-[#ffd166] rounded-lg"
          >
            ${t("lightDiyaBtn")}
          </a>
        </div>
      </div>
    </header>
  `;
}

export function attachNavbarEvents() {
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = langBtn.getAttribute("data-next-lang");
      setLanguage(nextLang);
    });
  }

  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-nav-menu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}
