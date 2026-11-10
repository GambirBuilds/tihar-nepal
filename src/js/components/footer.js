/**
 * Tihar Nepal - Cultural Footer Component
 */

import { t } from "../translations.js";

export function renderFooter() {
  return `
    <footer class="mt-auto bg-[#100717] border-t border-[#ffd166]/15 text-stone-400 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Col 1: Brand & Cultural Mission -->
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-[#ffd166]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 12 C44 32 32 48 50 66 C68 48 56 32 50 12 Z" fill="#FFD166"/>
              <ellipse cx="50" cy="70" rx="35" ry="12" fill="#FF8C42"/>
            </svg>
            <span class="font-serif text-xl font-bold text-[#f7f4ee]">${t("siteTitle")}</span>
          </div>
          <p class="text-xs text-stone-400 leading-relaxed">
            ${t("footerDesc")}
          </p>
          <p class="text-xs text-[#ffd166]/80 italic">
            "${t("tagline")}"
          </p>
        </div>

        <!-- Col 2: The Five Sacred Days -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold tracking-wider uppercase text-[#ffd166]">${t("footerTraditions")}</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#five-days?day=1" class="hover:text-[#ffd166] transition-colors">${t("day1Name")}</a></li>
            <li><a href="#five-days?day=2" class="hover:text-[#ffd166] transition-colors">${t("day2Name")}</a></li>
            <li><a href="#five-days?day=3" class="hover:text-[#ffd166] transition-colors">${t("day3Name")}</a></li>
            <li><a href="#five-days?day=4" class="hover:text-[#ffd166] transition-colors">${t("day4Name")}</a></li>
            <li><a href="#bhai-tika" class="hover:text-[#ffd166] transition-colors">${t("day5Name")}</a></li>
          </ul>
        </div>

        <!-- Col 3: Interactive Studios -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold tracking-wider uppercase text-[#ffd166]">${t("footerStudios")}</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#rangoli" class="hover:text-[#ffd166] transition-colors">${t("studioRangoliTitle")}</a></li>
            <li><a href="#deusi-bhailo" class="hover:text-[#ffd166] transition-colors">${t("studioDeusiTitle")}</a></li>
            <li><a href="#wishes" class="hover:text-[#ffd166] transition-colors">${t("studioWishesTitle")}</a></li>
            <li><a href="#diya" class="hover:text-[#ffd166] transition-colors">${t("studioDiyaTitle")}</a></li>
            <li><a href="#gallery" class="hover:text-[#ffd166] transition-colors">${t("navGallery")}</a></li>
          </ul>
        </div>

        <!-- Col 4: Community & Cultural Respect -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold tracking-wider uppercase text-[#ffd166]">${t("footerCommunity")}</h4>
          <p class="text-xs text-stone-400 leading-relaxed">
            ${t("footerRespect")}
          </p>
          <div class="pt-2 flex items-center gap-3 text-stone-300">
            <a href="#community" class="px-3 py-1.5 rounded-lg bg-[#21132d] hover:bg-[#321c45] border border-[#ffd166]/20 text-xs text-[#ffd166] transition-colors">
              ${t("studioCommunityTitle")}
            </a>
            <a href="#about" class="px-3 py-1.5 rounded-lg bg-[#21132d] hover:bg-[#321c45] border border-stone-700 text-xs text-stone-300 transition-colors">
              ${t("navAbout")}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="max-w-7xl mx-auto pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div>
          ${t("footerRights")}
        </div>
        <div class="flex items-center gap-4">
          <span class="text-[#ff8c42]">Bikram Sambat 2083</span>
          <span>·</span>
          <span class="text-[#ffd166]">Nepal Sambat 1147</span>
          <span>·</span>
          <span>Shubha Deepawali</span>
        </div>
      </div>
    </footer>
  `;
}
