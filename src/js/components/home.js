/**
 * Tihar Nepal - Homepage View Component
 */

import { t } from "../translations.js";
import { playTempleBell } from "../audio.js";

let countdownInterval = null;

export function renderHome() {
  return `
    <div class="space-y-20 pb-16">
      
      <!-- HERO SECTION -->
      <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
        <!-- Background Image with Scrim -->
        <div class="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_tihar_lights_1794235780452.jpg" 
            alt="Kathmandu Courtyard illuminated for Tihar festival with rows of diyas and marigold rangoli"
            class="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
            referrerpolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#140b1c] via-[#140b1c]/60 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-[#140b1c]/80 via-transparent to-[#140b1c]"></div>
        </div>

        <!-- Floating Golden Particles Generator -->
        <div id="hero-particles" class="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <span class="absolute left-1/4 top-1/2 w-1.5 h-1.5 bg-[#ffd166] rounded-full blur-[1px] animate-float-particle" style="animation-delay: 0s;"></span>
          <span class="absolute left-1/3 top-2/3 w-2 h-2 bg-[#ff8c42] rounded-full blur-[1px] animate-float-particle" style="animation-delay: 1.2s;"></span>
          <span class="absolute left-2/3 top-1/3 w-1.5 h-1.5 bg-[#ffd166] rounded-full blur-[1px] animate-float-particle" style="animation-delay: 2.1s;"></span>
          <span class="absolute left-3/4 top-3/5 w-2 h-2 bg-[#ffd166] rounded-full blur-[1px] animate-float-particle" style="animation-delay: 0.8s;"></span>
          <span class="absolute left-1/2 top-4/5 w-1 h-1 bg-[#ff8c42] rounded-full blur-[1px] animate-float-particle" style="animation-delay: 2.8s;"></span>
        </div>

        <!-- Hero Content Box -->
        <div class="relative z-20 max-w-4xl mx-auto text-center space-y-8">
          
          <!-- Interactive Hero Glowing Diya -->
          <div class="inline-block relative cursor-pointer group" id="hero-interactive-diya" title="Click to kindle the sacred diya flame!">
            <div class="w-20 h-20 mx-auto relative flex items-center justify-center">
              <div id="diya-glow-aura" class="absolute inset-0 bg-[#ffd166]/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
              <svg class="w-16 h-16 text-[#ffd166] filter drop-shadow-[0_0_15px_rgba(255,209,102,0.9)] transition-transform group-hover:scale-110 animate-diya-flicker" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 C42 32 30 50 50 70 C70 50 58 32 50 10 Z" fill="#FFD166"/>
                <ellipse cx="50" cy="50" rx="6" ry="12" fill="#FFFFFF" opacity="0.8"/>
                <path d="M15 72 C15 90 85 90 85 72 C74 80 26 80 15 72 Z" fill="#C83E63"/>
                <ellipse cx="50" cy="72" rx="35" ry="10" fill="#FF8C42"/>
              </svg>
            </div>
            <p class="text-[11px] tracking-wider uppercase text-[#ffd166]/80 mt-1 font-medium group-hover:text-[#ffd166]">
              ${t("lightDiyaBtn")}
            </p>
          </div>

          <!-- Hero Titles -->
          <div class="space-y-4">
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f7f4ee] max-w-3xl mx-auto leading-tight" style="text-wrap: balance;">
              ${t("heroTitle")}
            </h1>
            <p class="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
              ${t("heroSubtitle")}
            </p>
          </div>

          <!-- Festival Countdown Clock (Dedicated to Bhai Tika on Wednesday, Nov 11, 2026) -->
          <div class="tihar-card max-w-xl mx-auto p-6 rounded-2xl border border-[#ffd166]/30 shadow-2xl space-y-4 bg-[#1f102c]/90">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ffd166]">
                <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#ff8c42] animate-pulse"></span>
                <span>${t("heroCountdownTitle")}</span>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-[#c83e63]/25 border border-[#c83e63]/50 text-[11px] font-bold text-[#ffd166]">
                ${t("bhaiTikaWednesdayBadge")}
              </span>
            </div>

            <div class="grid grid-cols-4 gap-3 text-center">
              <div class="bg-[#190d23]/80 p-3 rounded-xl border border-stone-800">
                <span id="countdown-days" class="block font-mono text-2xl sm:text-3xl font-bold text-[#ffd166] tabular-nums">01</span>
                <span class="text-[11px] text-stone-400 font-medium">${t("days")}</span>
              </div>
              <div class="bg-[#190d23]/80 p-3 rounded-xl border border-stone-800">
                <span id="countdown-hours" class="block font-mono text-2xl sm:text-3xl font-bold text-[#ffd166] tabular-nums">14</span>
                <span class="text-[11px] text-stone-400 font-medium">${t("hours")}</span>
              </div>
              <div class="bg-[#190d23]/80 p-3 rounded-xl border border-stone-800">
                <span id="countdown-minutes" class="block font-mono text-2xl sm:text-3xl font-bold text-[#ffd166] tabular-nums">47</span>
                <span class="text-[11px] text-stone-400 font-medium">${t("minutes")}</span>
              </div>
              <div class="bg-[#190d23]/80 p-3 rounded-xl border border-stone-800">
                <span id="countdown-seconds" class="block font-mono text-2xl sm:text-3xl font-bold text-[#ff8c42] tabular-nums">30</span>
                <span class="text-[11px] text-stone-400 font-medium">${t("seconds")}</span>
              </div>
            </div>

            <p id="countdown-subtext" class="text-[11px] text-stone-400 text-center italic">
              Bhai Tika is this Wednesday! Auspicious Sait: 11:37 AM NPT (नेपाल समय बिहान ११:३७)
            </p>
          </div>

          <!-- Hero CTAs -->
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="#five-days" 
              class="px-6 py-3 rounded-xl text-sm font-semibold text-[#140b1c] bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white transition-all shadow-lg hover:shadow-[#ffd166]/20"
            >
              ${t("exploreTraditions")}
            </a>
            <a 
              href="#rangoli" 
              class="px-6 py-3 rounded-xl text-sm font-semibold text-[#f7f4ee] bg-[#2d1a3e]/90 hover:bg-[#3d2354] border border-[#ffd166]/30 transition-all hover:border-[#ffd166]"
            >
              ${t("createRangoliCTA")}
            </a>
            <a 
              href="#deusi-bhailo" 
              class="px-6 py-3 rounded-xl text-sm font-semibold text-[#f7f4ee] bg-[#21132d]/80 hover:bg-[#2d1a3e] border border-stone-700 hover:border-stone-500 transition-all"
            >
              ${t("studioDeusiTitle")}
            </a>
          </div>
        </div>
      </section>

      <!-- FIVE DAYS OF TIHAR HIGHLIGHT STRIP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <span class="text-xs font-semibold tracking-widest uppercase text-[#ff8c42]">Yama Panchak</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#f7f4ee]">${t("fiveDaysTitle")}</h2>
          <p class="text-sm text-stone-400 leading-relaxed">${t("fiveDaysSubtitle")}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <!-- Day 1 Card -->
          <a href="#five-days?day=1" class="tihar-card tihar-card-glow p-5 rounded-2xl flex flex-col justify-between space-y-4 group transition-all">
            <div class="space-y-2">
              <span class="text-xs font-mono text-[#ffd166]">Day 01 · Trayodashi</span>
              <h3 class="font-serif text-lg font-bold text-[#f7f4ee] group-hover:text-[#ffd166] transition-colors">${t("day1Name")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-3">${t("day1Desc")}</p>
            </div>
            <span class="text-xs font-semibold text-[#ff8c42] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </span>
          </a>

          <!-- Day 2 Card -->
          <a href="#five-days?day=2" class="tihar-card tihar-card-glow p-5 rounded-2xl flex flex-col justify-between space-y-4 group transition-all">
            <div class="space-y-2">
              <span class="text-xs font-mono text-[#ffd166]">Day 02 · Chaturdashi</span>
              <h3 class="font-serif text-lg font-bold text-[#f7f4ee] group-hover:text-[#ffd166] transition-colors">${t("day2Name")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-3">${t("day2Desc")}</p>
            </div>
            <span class="text-xs font-semibold text-[#ff8c42] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </span>
          </a>

          <!-- Day 3 Card -->
          <a href="#five-days?day=3" class="tihar-card tihar-card-glow p-5 rounded-2xl flex flex-col justify-between space-y-4 group transition-all border-[#ffd166]/30">
            <div class="space-y-2">
              <span class="text-xs font-mono text-[#ffd166]">Day 03 · Aunsi</span>
              <h3 class="font-serif text-lg font-bold text-[#ffd166] transition-colors">${t("day3Name")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-3">${t("day3Desc")}</p>
            </div>
            <span class="text-xs font-semibold text-[#ff8c42] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </span>
          </a>

          <!-- Day 4 Card -->
          <a href="#five-days?day=4" class="tihar-card tihar-card-glow p-5 rounded-2xl flex flex-col justify-between space-y-4 group transition-all">
            <div class="space-y-2">
              <span class="text-xs font-mono text-[#ffd166]">Day 04 · Pratipada</span>
              <h3 class="font-serif text-lg font-bold text-[#f7f4ee] group-hover:text-[#ffd166] transition-colors">${t("day4Name")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-3">${t("day4Desc")}</p>
            </div>
            <span class="text-xs font-semibold text-[#ff8c42] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </span>
          </a>

          <!-- Day 5 Card -->
          <a href="#bhai-tika" class="tihar-card tihar-card-glow p-5 rounded-2xl flex flex-col justify-between space-y-4 group transition-all border-[#c83e63]/30">
            <div class="space-y-2">
              <span class="text-xs font-mono text-[#c83e63]">Day 05 · Dwitiya</span>
              <h3 class="font-serif text-lg font-bold text-[#f7f4ee] group-hover:text-[#c83e63] transition-colors">${t("day5Name")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-3">${t("day5Desc")}</p>
            </div>
            <span class="text-xs font-semibold text-[#c83e63] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore &rarr;
            </span>
          </a>
        </div>
      </section>

      <!-- FEATURED INTERACTIVE STUDIOS SHOWCASE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <span class="text-xs font-semibold tracking-widest uppercase text-[#ffd166]">Interactive Experiences</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#f7f4ee]">${t("studiosTitle")}</h2>
          <p class="text-sm text-stone-400 leading-relaxed">${t("studiosSubtitle")}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Studio 1: Rangoli Creator -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#ffd166]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4 5 5 0 0110 0 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("studioRangoliTitle")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                ${t("studioRangoliDesc")}
              </p>
            </div>
            <a href="#rangoli" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#ffd166] hover:bg-[#3d2354] transition-colors">
              <span>${t("createRangoliCTA")}</span>
              <span>&rarr;</span>
            </a>
          </div>

          <!-- Studio 2: Deusi Bhailo Player -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#ff8c42]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("studioDeusiTitle")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                ${t("studioDeusiDesc")}
              </p>
            </div>
            <a href="#deusi-bhailo" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#ff8c42] hover:bg-[#3d2354] transition-colors">
              <span>Explore Lyrics & Beats</span>
              <span>&rarr;</span>
            </a>
          </div>

          <!-- Studio 3: Wishes Card Generator -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#c83e63]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("studioWishesTitle")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                ${t("studioWishesDesc")}
              </p>
            </div>
            <a href="#wishes" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#c83e63] hover:bg-[#3d2354] transition-colors">
              <span>Generate Greeting Card</span>
              <span>&rarr;</span>
            </a>
          </div>

          <!-- Studio 4: Virtual Diya Courtyard -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#ffd166]">
                <svg class="w-6 h-6 animate-diya-flicker" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("studioDiyaTitle")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                ${t("studioDiyaDesc")}
              </p>
            </div>
            <a href="#diya" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#ffd166] hover:bg-[#3d2354] transition-colors">
              <span>Enter Courtyard</span>
              <span>&rarr;</span>
            </a>
          </div>

          <!-- Studio 5: Community Gallery -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#27845b]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("studioCommunityTitle")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                ${t("studioCommunityDesc")}
              </p>
            </div>
            <a href="#community" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#27845b] hover:bg-[#3d2354] transition-colors">
              <span>View Community Wall</span>
              <span>&rarr;</span>
            </a>
          </div>

          <!-- Studio 6: Bhai Tika Rituals Deep Dive -->
          <div class="tihar-card rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#ffd166]/40 transition-all">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-[#2d1a3e] border border-[#ffd166]/20 flex items-center justify-center text-[#c83e63]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 class="font-serif text-xl font-bold text-[#f7f4ee]">${t("navBhaiTika")}</h3>
              <p class="text-xs text-stone-400 leading-relaxed">
                Explore the sacred rituals of Saptarangi Tika, Makhamali garland, walnut breaking, and fraternal protection.
              </p>
            </div>
            <a href="#bhai-tika" class="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#2d1a3e] text-xs font-semibold text-[#c83e63] hover:bg-[#3d2354] transition-colors">
              <span>Bhai Tika Guide</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>
      </section>

      <!-- PHILOSOPHICAL PILLARS STRIP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="tihar-card rounded-3xl p-8 sm:p-12 border border-[#ffd166]/20 bg-gradient-to-br from-[#21132d] to-[#140b1c] space-y-8">
          <div class="max-w-2xl space-y-2">
            <span class="text-xs font-semibold uppercase tracking-widest text-[#ff8c42]">Spiritual Essence</span>
            <h2 class="font-serif text-3xl font-bold text-[#f7f4ee]">${t("culturalPillarsTitle")}</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-[#ffd166] font-bold">01.</span>
                <h3 class="font-serif text-lg font-bold text-[#f7f4ee]">${t("pillar1Title")}</h3>
              </div>
              <p class="text-xs text-stone-300 leading-relaxed">
                ${t("pillar1Desc")}
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-[#ffd166] font-bold">02.</span>
                <h3 class="font-serif text-lg font-bold text-[#f7f4ee]">${t("pillar2Title")}</h3>
              </div>
              <p class="text-xs text-stone-300 leading-relaxed">
                ${t("pillar2Desc")}
              </p>
            </div>

            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-[#ffd166] font-bold">03.</span>
                <h3 class="font-serif text-lg font-bold text-[#f7f4ee]">${t("pillar3Title")}</h3>
              </div>
              <p class="text-xs text-stone-300 leading-relaxed">
                ${t("pillar3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function attachHomeEvents() {
  // 1. Interactive Diya click
  const interactiveDiya = document.getElementById("hero-interactive-diya");
  if (interactiveDiya) {
    interactiveDiya.addEventListener("click", () => {
      playTempleBell();
      const aura = document.getElementById("diya-glow-aura");
      if (aura) {
        aura.classList.add("scale-150", "bg-[#ffd166]/50");
        setTimeout(() => {
          aura.classList.remove("scale-150", "bg-[#ffd166]/50");
        }, 600);
      }
    });
  }

  // 2. Real-time Tihar Countdown dedicated exclusively to Bhai Tika on Wednesday, Nov 11, 2026
  // Wednesday, Nov 11, 2026 at 11:37 AM Nepal Standard Time (+05:45)
  const targetDate = new Date("2026-11-11T11:37:00+05:45");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const dEl = document.getElementById("countdown-days");
    const hEl = document.getElementById("countdown-hours");
    const mEl = document.getElementById("countdown-minutes");
    const sEl = document.getElementById("countdown-seconds");

    if (distance <= 0) {
      if (dEl) dEl.textContent = "00";
      if (hEl) hEl.textContent = "00";
      if (mEl) mEl.textContent = "00";
      if (sEl) sEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}
