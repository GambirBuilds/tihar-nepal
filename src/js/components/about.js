/**
 * Tihar Nepal - About Tihar Cultural & Philosophical Guide
 */

import { t } from "../translations.js";

export function renderAbout() {
  return `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      <!-- Page Header -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ff8c42]">The Deep Heritage</span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#f7f4ee]">
          About Tihar: Nepal's Autumn Festival of Light & Harmony
        </h1>
        <p class="text-stone-300 text-base leading-relaxed">
          Tihar (also celebrated as Deepawali, Swanti, or Yama Panchak) is Nepal's beloved five-day festival occurring during the bright fortnight of autumn. It bridges the celestial realm, human community, and the natural animal kingdom.
        </p>
      </div>

      <!-- Feature Visual Strip -->
      <div class="relative rounded-3xl overflow-hidden border border-[#ffd166]/20 shadow-2xl aspect-[16/9] bg-stone-900">
        <img 
          src="/src/assets/images/hero_tihar_lights_1794235780452.jpg" 
          alt="Ancient Nepali temple courtyard adorned with oil lamps for Tihar"
          class="w-full h-full object-cover filter brightness-90 contrast-105"
          referrerpolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#140b1c] via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <p class="text-xs sm:text-sm text-[#ffd166] font-medium italic">
            "When every doorway shines with oil lamps, ignorance and sorrow withdraw before the radiant grace of Mahalakshmi."
          </p>
        </div>
      </div>

      <!-- Chapter 1: The Legend of Yama Panchak -->
      <div class="tihar-card rounded-3xl p-8 sm:p-10 border border-[#ffd166]/20 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-[#ffd166]">Chapter 01</span>
          <span class="text-xs text-stone-400">·</span>
          <span class="text-xs uppercase tracking-wider text-stone-400">Mythological Origin</span>
        </div>
        
        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#ffd166]">
          The Myth of Lord Yama and Goddess Yamuna
        </h2>

        <div class="text-sm text-stone-300 space-y-4 leading-relaxed font-sans">
          <p>
            The philosophical core of Tihar centers upon the bond between <strong class="text-[#ffd166]">Yamaraj</strong> (the deity of justice, righteousness, and the afterlife) and his sister <strong class="text-[#ffd166]">Yamuna</strong> (the goddess presiding over the sacred river Yamuna). Legend recounts that Yama was perpetually occupied with his solemn duty of administering karma and escorting departed souls. Yamuna continually invited her brother to visit, longing to share home hospitality and express affection.
          </p>
          <p>
            Unable to leave his realm, Yama sent messages via his emissary—the crow—and guarded his realm with his hounds. Finally, on the second day of the waxing moon (Dwitiya), Yama took leave of absence to visit Yamuna at her home. Overwhelmed with joy, Yamuna welcomed him with an ornate ceremonial bath, drew a protective circle of mustard oil to bar all adversities, adorned him with a garland of never-wilting <em class="text-[#ffd166]">Makhamali</em> flowers, and applied a vibrant seven-colored mark upon his forehead.
          </p>
          <p>
            Delighted by her boundless devotion and hospitality, Yama declared that anyone whose sister honors him with this sacred ritual on this auspicious tithi shall be blessed with longevity, freedom from untimely death, and protection from misfortune.
          </p>
        </div>
      </div>

      <!-- Chapter 2: The Philosophy of Coexistence -->
      <div class="tihar-card rounded-3xl p-8 sm:p-10 border border-[#ffd166]/20 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-[#ff8c42]">Chapter 02</span>
          <span class="text-xs text-stone-400">·</span>
          <span class="text-xs uppercase tracking-wider text-stone-400">Ecological Reverence</span>
        </div>

        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#ff8c42]">
          Sanctifying Human-Animal Interdependence
        </h2>

        <div class="text-sm text-stone-300 space-y-4 leading-relaxed">
          <p>
            Unlike many holidays worldwide that focus exclusively on deities or human achievements, Tihar is globally remarkable for dedicating four of its five days to non-human beings:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-2">
              <h3 class="font-serif text-base font-bold text-[#ffd166]">The Crow (Kag)</h3>
              <p class="text-xs text-stone-300">
                Recognized as an intelligent bird that connects humanity to ancestral realms and nature's messengers.
              </p>
            </div>
            <div class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-2">
              <h3 class="font-serif text-base font-bold text-[#ff8c42]">The Dog (Kukur)</h3>
              <p class="text-xs text-stone-300">
                Celebrated for unconditional loyalty, vigilant guardianship, and companionship across all walks of life.
              </p>
            </div>
            <div class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-2">
              <h3 class="font-serif text-base font-bold text-[#ffd166]">The Cow (Gai)</h3>
              <p class="text-xs text-stone-300">
                Revered as Gau Mata, providing life-sustaining milk, agricultural fertilization, and personifying peace.
              </p>
            </div>
            <div class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-2">
              <h3 class="font-serif text-base font-bold text-[#27845b]">The Ox (Goru) & Nature (Govardhan)</h3>
              <p class="text-xs text-stone-300">
                Acknowledged for enduring physical labor that tills fields and nourishes the civilization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Chapter 3: Regional Diversity & Nuance -->
      <div class="tihar-card rounded-3xl p-8 sm:p-10 border border-[#ffd166]/20 space-y-6">
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-[#c83e63]">Chapter 03</span>
          <span class="text-xs text-stone-400">·</span>
          <span class="text-xs uppercase tracking-wider text-stone-400">Diverse Traditions</span>
        </div>

        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#c83e63]">
          Plurality Across Nepal's Vibrant Communities
        </h2>

        <div class="text-sm text-stone-300 space-y-4 leading-relaxed">
          <p>
            Nepali cultural practices are not monolithic. Different ethnic and regional groups celebrate these five days with distinctive customs:
          </p>
          <ul class="space-y-4 pt-2">
            <li class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-1.5">
              <strong class="text-[#ffd166] font-serif text-base">Newar Community — Swanti & Mha Puja</strong>
              <p class="text-xs text-stone-300">
                In the Newari heritage of the Kathmandu Valley, the festival is celebrated as <em>Swanti</em>. Day 4 is marked by <strong>Mha Puja</strong> (the worship of the divine spark within one's own self), coinciding with the inauguration of the <strong>Nepal Sambat</strong> lunar new year (founded by Shankhadhar Sakhwa in 879 CE). The concluding day is celebrated as <strong>Kija Puja</strong>.
              </p>
            </li>
            <li class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-1.5">
              <strong class="text-[#ff8c42] font-serif text-base">Mithila & Terai Traditions — Deepawali & Godhan</strong>
              <p class="text-xs text-stone-300">
                In the southern plains of Nepal, the celebration features Dhanteras acquisitions, elaborate mud clay sculptures for Godhan Puja, worship of cows and calves with ritual songs, and vibrant Mithila floor art (Aripana).
              </p>
            </li>
            <li class="bg-[#21132d] p-4 rounded-2xl border border-stone-800 space-y-1.5">
              <strong class="text-[#c83e63] font-serif text-base">Khas-Arya & Hill Traditions — Deusi-Bhailo & Saptarangi Tika</strong>
              <p class="text-xs text-stone-300">
                Characterized by enthusiastic door-to-door folk caroling (Bhailo on Laxmi Puja evening, Deusi on subsequent nights), frying golden ring-shaped <em>Sel Roti</em>, and applying the vertical seven-color tika on Bhai Tika.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Quick Navigation CTA -->
      <div class="text-center pt-4">
        <a 
          href="#five-days" 
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#140b1c] bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white transition-all shadow-lg"
        >
          <span>Explore Day-by-Day Rituals</span>
          <span>&rarr;</span>
        </a>
      </div>

    </div>
  `;
}
