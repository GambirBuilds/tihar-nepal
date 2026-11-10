/**
 * Tihar Nepal - Deusi Bhailo Cultural Studio
 * Features authentic traditional lyrics, English translations, interactive Madal rhythm engine, and folk explanations.
 */

import { t } from "../translations.js";
import { startMadalRhythm, stopMadalRhythm, isMadalPlaying, setMadalBpm, playMadalDha, playMadalTin } from "../audio.js";

const TRADITIONAL_SONGS = [
  {
    id: "bhailo-classic",
    category: "bhailo",
    titleNepali: "पारम्परिक भैलो (Traditional Bhailini Song)",
    titleEnglish: "The Sacred Evening Bhailo of Laxmi Puja",
    singers: "Traditionally sung by women and girls on the evening of Laxmi Puja",
    stanzas: [
      {
        lead: "हरियो गोबरले लिपेको, लक्ष्मी पूजा गरेको",
        leadPhonetic: "Hariyo gobarle lipeko, laxmi puja gareko",
        response: "हे औँसीको बारो, गाई तिहारो, भैलो!",
        responsePhonetic: "Hey aunsiko baaro, gai tiharo, bhailo!",
        english: "Cleaned with holy earth and green paste, sanctified for Laxmi Puja; on this dark new-moon night, Gai Tihar has arrived, Bhailo!"
      },
      {
        lead: "हामी त्यसै आएनौँ, बलिराजाले पठाको",
        leadPhonetic: "Haami tyasai aayenau, Bali raajaale pathaako",
        response: "हे औँसीको बारो, गाई तिहारो, भैलो!",
        responsePhonetic: "Hey aunsiko baaro, gai tiharo, bhailo!",
        english: "We did not come of our own accord; the benevolent ancient King Bali sent us on this joyous errand!"
      },
      {
        lead: "छानामाथि घिरौँला, के दिन्छिन् घरबेटी दिदी हेरौँला",
        leadPhonetic: "Chhana mathi ghirawla, ke dinchhin gharbeti didi herawla",
        response: "हे औँसीको बारो, गाई तिहारो, भैलो!",
        responsePhonetic: "Hey aunsiko baaro, gai tiharo, bhailo!",
        english: "Look upon the gourd vine climbing on the roof; let us see what blessings and treats the gracious hostess prepares for us!"
      },
      {
        lead: "सेलरोटी पाकेको, तेलमा डुबी डुबी नाचेको",
        leadPhonetic: "Selroti paakeko, telma dubi dubi naacheko",
        response: "हे औँसीको बारो, गाई तिहारो, भैलो!",
        responsePhonetic: "Hey aunsiko baaro, gai tiharo, bhailo!",
        english: "Crisp golden Sel Roti is frying, dancing and bobbing merrily in hot oil, filling the air with festive fragrance!"
      }
    ]
  },
  {
    id: "deusi-classic",
    category: "deusi",
    titleNepali: "पारम्परिक देउसी (Traditional Deusi Re Song)",
    titleEnglish: "The Call-and-Response Folk Deusi",
    singers: "Traditionally sung by boys and men starting from Govardhan Puja",
    stanzas: [
      {
        lead: "आहा भन मेरा भाइहो!",
        leadPhonetic: "Aaha bhana mera bhaiho!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead chanter calls: 'Sing aloud, my brothers!' — Chorus thunders: 'Deusi re!'"
      },
      {
        lead: "आहा राम्रो सँग भन!",
        leadPhonetic: "Aaha ramro sanga bhana!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead: 'Sing with melody and joy!' — Chorus: 'Deusi re!'"
      },
      {
        lead: "आहा स्वर मिलाई भन!",
        leadPhonetic: "Aaha swor milaai bhana!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead: 'Harmonize your voices in unison!' — Chorus: 'Deusi re!'"
      },
      {
        lead: "आहा यो घरको आँगन!",
        leadPhonetic: "Aaha yo gharko aagan!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead: 'Behold this radiant, generous courtyard!' — Chorus: 'Deusi re!'"
      },
      {
        lead: "आहा सुनले छाएको!",
        leadPhonetic: "Aaha sunle chhaayeko!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead: 'May its roof shine with pure gold and blessings!' — Chorus: 'Deusi re!'"
      },
      {
        lead: "आहा राजा बलिले पठाको!",
        leadPhonetic: "Aaha Raja Balile pathaako!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "Lead: 'Sent here on the decree of the legendary King Bali!' — Chorus: 'Deusi re!'"
      }
    ]
  },
  {
    id: "aashik-classic",
    category: "aashik",
    titleNepali: "पारम्परिक आशीष (Traditional Host Blessing)",
    titleEnglish: "Poetic Rhyming Blessings for the Host Family",
    singers: "Recited at the door before departure as gratitude for dakshina and roti",
    stanzas: [
      {
        lead: "यो घरको धुरीमाथि धनेश चरी नाचिराखोस्!",
        leadPhonetic: "Yo gharko dhurimathi Dhanesh chari naachiraakhos!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "May the celestial bird of wealth always dance upon this household's ridgepole!"
      },
      {
        lead: "घरका सबै छोराछोरी पढीगुणी लायक बनून्!",
        leadPhonetic: "Gharka sabai chhorachhori padhiguni laayak banun!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "May all the children of this home grow educated, virtuous, and illustrious in life!"
      },
      {
        lead: "सयपत्री झैँ फुलीरहोस्, मखमली झैँ अमर रहोस्!",
        leadPhonetic: "Sayapatri jhai phulirhos, Makhamali jhai amar rahos!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "May your lineage blossom vibrantly like the marigold, and remain eternal and unfading like the Makhamali flower!"
      },
      {
        lead: "अन्नले भकारी भरियोस्, धनले ढुकुटी भरियोस्!",
        leadPhonetic: "Annale bhakaari bhariyos, dhanle dhukuti bhariyos!",
        response: "देउसी रे!",
        responsePhonetic: "Deusi re!",
        english: "May your granaries overflow with golden harvest, and your vaults with righteous prosperity!"
      }
    ]
  }
];

export function renderDeusiBhailo() {
  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ff8c42]">Folk Caroling Heritage</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("deusiTitle")}
        </h1>
        <p class="text-stone-300 text-sm sm:text-base leading-relaxed">
          ${t("deusiSubtitle")}
        </p>
      </div>

      <!-- Feature Visual Strip -->
      <div class="relative rounded-3xl overflow-hidden border border-[#ffd166]/20 shadow-2xl aspect-[16/9] sm:aspect-[21/9] bg-stone-900">
        <img 
          src="/src/assets/images/tihar_deusi_bhailo_1794235782711.jpg" 
          alt="Nepali youths in Dhaka topi celebrating Deusi Bhailo playing Madal drums"
          class="w-full h-full object-cover filter contrast-105"
          referrerpolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#140b1c] via-[#140b1c]/40 to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-base sm:text-lg font-serif font-bold text-[#ffd166]">
              "Aaha Bhana Mera Bhaiho — Deusi Re!"
            </h3>
            <p class="text-xs text-stone-200">
              The joyous communal caroling rooted in the mythology of King Bali's boundless generosity.
            </p>
          </div>
        </div>
      </div>

      <!-- MADAL RHYTHM SYNTHESIZER ENGINE (Interactive Web Audio) -->
      <div class="tihar-card rounded-3xl p-6 sm:p-8 border border-[#ffd166]/25 bg-[#21132d] shadow-2xl space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-5">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffd166]">
              <svg class="w-4 h-4 text-[#ff8c42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <span>${t("rhythmEngine")} (Authentic Web Audio)</span>
            </div>
            <p class="text-xs text-stone-300">
              Listen to the traditional folk Khyali/Jhyaure syncopated pulse that accompanies Deusi dancers.
            </p>
          </div>

          <!-- Play/Stop Controls -->
          <div class="flex items-center gap-3">
            <button 
              id="madal-toggle-btn"
              class="px-5 py-2.5 rounded-xl text-xs font-bold text-[#140b1c] bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white transition-all shadow-md flex items-center gap-2"
            >
              <svg id="madal-btn-icon" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <span id="madal-btn-label">${t("playRhythm")}</span>
            </button>
          </div>
        </div>

        <!-- Beat Visualizer & Live Interactive Tap Pads -->
        <div class="space-y-4">
          <!-- Step Lights Strip -->
          <div class="flex items-center justify-between gap-1 sm:gap-2 px-2 py-3 bg-[#160b1e] rounded-xl border border-stone-800">
            ${[0, 1, 2, 3, 4, 5, 6, 7]
              .map(
                (step) => `
              <div 
                id="beat-step-${step}" 
                class="flex-1 h-3 rounded-full bg-stone-800 transition-all duration-100"
              ></div>
            `
              )
              .join("")}
          </div>

          <!-- Interactive Tap Pads -->
          <div class="grid grid-cols-2 gap-4">
            <button 
              id="pad-dha" 
              class="p-4 rounded-2xl bg-[#2e1a3f] hover:bg-[#3b2152] active:scale-95 border border-[#ffd166]/20 transition-all text-center space-y-1"
            >
              <span class="block text-base font-bold text-[#ffd166]">Dha (धा) — Left Bass Head</span>
              <span class="text-[11px] text-stone-400">Click or tap to play the resonant bass head hit</span>
            </button>

            <button 
              id="pad-tin" 
              class="p-4 rounded-2xl bg-[#2e1a3f] hover:bg-[#3b2152] active:scale-95 border border-[#ffd166]/20 transition-all text-center space-y-1"
            >
              <span class="block text-base font-bold text-[#ff8c42]">Tin / Ta (तिन / ता) — Right Treble Head</span>
              <span class="text-[11px] text-stone-400">Click or tap to play the sharp metallic rim snap</span>
            </button>
          </div>
        </div>
      </div>

      <!-- LYRICS FILTER & SEARCH BAR -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <!-- Category Buttons -->
        <div class="flex items-center gap-1.5 p-1 bg-[#21132d] rounded-xl border border-stone-800">
          <button data-cat="all" class="deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#ffd166] text-[#140b1c] transition-colors">
            ${t("deusiTabAll")}
          </button>
          <button data-cat="bhailo" class="deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-300 hover:text-white transition-colors">
            ${t("deusiTabBhailo")}
          </button>
          <button data-cat="deusi" class="deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-300 hover:text-white transition-colors">
            ${t("deusiTabDeusi")}
          </button>
          <button data-cat="aashik" class="deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-300 hover:text-white transition-colors">
            ${t("deusiTabAashik")}
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative max-w-xs w-full">
          <input 
            type="text" 
            id="lyrics-search-input" 
            placeholder="${t("searchLyrics")}"
            class="w-full px-4 py-2 pl-9 rounded-xl bg-[#21132d] border border-stone-800 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#ffd166]"
          />
          <svg class="w-4 h-4 text-stone-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- LYRIC CARDS CONTAINER -->
      <div id="songs-container" class="space-y-8">
        <!-- Rendered by attachDeusiEvents -->
      </div>

    </div>
  `;
}

function renderSongCard(song) {
  return `
    <div class="tihar-card rounded-3xl p-6 sm:p-8 border border-[#ffd166]/20 bg-[#1c0f26]/80 space-y-6">
      <div class="border-b border-stone-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span class="text-xs uppercase tracking-widest font-mono text-[#ffd166]">
            ${song.category.toUpperCase()}
          </span>
          <h2 class="font-serif text-2xl font-bold text-[#f7f4ee]">
            ${song.titleNepali}
          </h2>
          <p class="text-xs text-stone-400 italic">
            ${song.titleEnglish} · ${song.singers}
          </p>
        </div>
        <button 
          data-copy-song="${song.id}"
          class="copy-song-btn text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#2d1a3e] border border-stone-700 hover:border-[#ffd166] text-stone-300 transition-colors self-start sm:self-auto"
        >
          Copy Lyrics
        </button>
      </div>

      <div class="space-y-4">
        ${song.stanzas
          .map(
            (stanza, idx) => `
          <div class="p-4 rounded-2xl bg-[#241334]/50 border border-stone-800/80 hover:border-[#ffd166]/30 transition-all space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="space-y-0.5">
                <p class="font-serif text-base font-semibold text-[#ffd166]">
                  ${stanza.lead}
                </p>
                <p class="text-xs text-stone-400 italic font-mono">
                  ${stanza.leadPhonetic}
                </p>
              </div>
              <div class="sm:text-right space-y-0.5">
                <span class="inline-block px-3 py-1 rounded-full bg-[#ff8c42]/20 border border-[#ff8c42]/40 text-xs font-bold text-[#ff8c42]">
                  ${stanza.response}
                </span>
                <p class="text-[11px] text-stone-400 italic font-mono">
                  ${stanza.responsePhonetic}
                </p>
              </div>
            </div>
            <p class="text-xs text-stone-300 pt-1 border-t border-stone-800/60 leading-relaxed">
              <strong class="text-stone-400">Meaning:</strong> ${stanza.english}
            </p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function attachDeusiEvents() {
  const songsContainer = document.getElementById("songs-container");
  const searchInput = document.getElementById("lyrics-search-input");
  let activeCategory = "all";
  let currentSearch = "";

  function filterAndRender() {
    if (!songsContainer) return;
    const filtered = TRADITIONAL_SONGS.filter((s) => {
      const matchCat = activeCategory === "all" || s.category === activeCategory;
      const matchSearch =
        !currentSearch ||
        s.titleNepali.toLowerCase().includes(currentSearch.toLowerCase()) ||
        s.titleEnglish.toLowerCase().includes(currentSearch.toLowerCase()) ||
        s.stanzas.some(
          (st) =>
            st.lead.toLowerCase().includes(currentSearch.toLowerCase()) ||
            st.leadPhonetic.toLowerCase().includes(currentSearch.toLowerCase()) ||
            st.english.toLowerCase().includes(currentSearch.toLowerCase())
        );
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      songsContainer.innerHTML = `
        <div class="p-8 text-center text-stone-400 tihar-card rounded-2xl">
          No songs found matching your search. Try another keyword.
        </div>
      `;
      return;
    }

    songsContainer.innerHTML = filtered.map(renderSongCard).join("");

    // Attach copy buttons
    document.querySelectorAll(".copy-song-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const songId = btn.getAttribute("data-copy-song");
        const song = TRADITIONAL_SONGS.find((s) => s.id === songId);
        if (song) {
          const lyricsText = song.stanzas
            .map((st) => `${st.lead} -> ${st.response}\n(${st.english})`)
            .join("\n\n");
          navigator.clipboard.writeText(lyricsText);
          btn.textContent = "Copied to Clipboard!";
          setTimeout(() => {
            btn.textContent = "Copy Lyrics";
          }, 2000);
        }
      });
    });
  }

  // Category buttons
  document.querySelectorAll(".deusi-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".deusi-cat-btn").forEach((b) => {
        b.className =
          "deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-300 hover:text-white transition-colors";
      });
      btn.className =
        "deusi-cat-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#ffd166] text-[#140b1c] transition-colors";
      activeCategory = btn.getAttribute("data-cat") || "all";
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = /** @type {HTMLInputElement} */ (e.target).value;
      filterAndRender();
    });
  }

  // Interactive Tap Pads
  const padDha = document.getElementById("pad-dha");
  if (padDha) {
    padDha.addEventListener("click", () => {
      playMadalDha();
    });
  }

  const padTin = document.getElementById("pad-tin");
  if (padTin) {
    padTin.addEventListener("click", () => {
      playMadalTin();
    });
  }

  // Madal Rhythm Toggle
  const toggleBtn = document.getElementById("madal-toggle-btn");
  const labelEl = document.getElementById("madal-btn-label");

  function resetBeatVisuals() {
    for (let i = 0; i < 8; i++) {
      const stepEl = document.getElementById(`beat-step-${i}`);
      if (stepEl) {
        stepEl.className = "flex-1 h-3 rounded-full bg-stone-800 transition-all duration-100";
      }
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (isMadalPlaying()) {
        stopMadalRhythm();
        if (labelEl) labelEl.textContent = t("playRhythm");
        resetBeatVisuals();
      } else {
        startMadalRhythm((stepIdx) => {
          resetBeatVisuals();
          const activeEl = document.getElementById(`beat-step-${stepIdx}`);
          if (activeEl) {
            activeEl.className =
              stepIdx === 0 || stepIdx === 4
                ? "flex-1 h-3 rounded-full bg-[#ffd166] shadow-[0_0_12px_#ffd166] scale-y-125 transition-all duration-100"
                : "flex-1 h-3 rounded-full bg-[#ff8c42] shadow-[0_0_8px_#ff8c42] transition-all duration-100";
          }
        });
        if (labelEl) labelEl.textContent = t("stopRhythm");
      }
    });
  }

  filterAndRender();
}
