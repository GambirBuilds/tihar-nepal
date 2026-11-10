/**
 * Tihar Nepal - Five Days of Tihar (Yama Panchak) View Component
 */

import { t } from "../translations.js";

const DAYS_DATA = [
  {
    id: 1,
    tithi: "Kartik Krishna Trayodashi",
    nepaliName: "काग तिहार (Kag Tihar)",
    englishTitle: "Crow Tihar — Messenger of Yama",
    image: "/src/assets/images/hero_tihar_lights_1794235780452.jpg",
    summary: "The opening day of Yama Panchak dedicates first food offerings to crows, the sacred avian messengers of Yama, Lord of Justice and Death.",
    significance: "In Vedic cosmology, crows bridge the earthly plane and the spirit realm of ancestors (Pitri). By offering cooked rice, grains, and sweets before taking breakfast, families petition the messengers to deliver pleasant tidings and ward off untimely bereavement and sickness.",
    rituals: [
      "Early morning culinary preparation of pure cooked rice (Bhat), lentils, and traditional sweets.",
      "Placement of dishes on terracotta trays or leaf plates (Tapari) on the highest roof terraces before family members eat.",
      "Invocation of the crow with affectionate calls: 'Kaa-kaa, aau aau, duto bhaat khau' (Come, eat your offering).",
      "Dhanvantari Jayanti celebration: Physicians and ayurvedic healers honor Lord Dhanvantari, god of holistic health and longevity."
    ],
    regionalNuances: "In Mithila and Terai communities, the day also marks Dhantrayodashi (Dhanteras), where families acquire auspicious metal cookware or silver coins to welcome good health and prosperity into the household."
  },
  {
    id: 2,
    tithi: "Kartik Krishna Chaturdashi",
    nepaliName: "कुकुर तिहार (Kukur Tihar)",
    englishTitle: "Dog Tihar — Guardians of Loyalty & the Netherworld",
    image: "/src/assets/images/tihar_kukur_puja_1794235781527.jpg",
    summary: "A world-renowned celebration honoring dogs—both beloved household pets and community street canines—for their steadfast loyalty, companionship, and spiritual vigilance.",
    significance: "Mythologically, dogs are associated with Bhairava (the fierce manifestation of Shiva) and the two four-eyed hounds (Shyama and Shabala) that guard the gates of Yama's kingdom. Ethically, Nepali culture elevates canine loyalty above human conditional allegiance, recognizing our duty of care to creatures who protect our homes.",
    rituals: [
      "Garlanding with fresh golden marigold flowers (Sayapatri Mala).",
      "Applying the auspicious red vermillion (Sindoor/Akshata) tika to the dog's forehead between the eyes.",
      "Feeding sumptuous feast plates: cooked eggs, meat, milk, Sel Roti, and favorite canine treats.",
      "Community stewardship: Neighborhoods gather to garland and feed free-roaming street dogs across cities and villages."
    ],
    regionalNuances: "Nepal's police canine units and military sniffer dog squads hold formal ceremonial parades with medals, salutes, and flower garlands, honoring police dogs who have served the nation."
  },
  {
    id: 3,
    tithi: "Kartik Krishna Aunsi (New Moon)",
    nepaliName: "गाई तिहार र लक्ष्मी पूजा (Gai Tihar & Laxmi Puja)",
    englishTitle: "Sacred Cow Worship & Welcoming Goddess Laxmi",
    image: "/src/assets/images/tihar_laxmi_puja_1794235781982.jpg",
    summary: "The radiant pinnacle of Tihar. At dawn, cows are revered as incarnations of motherhood and nourishment; as night falls, the entire nation glows with thousands of oil lamps to welcome Laxmi, the Goddess of Wealth and Prosperity.",
    significance: "Cows (Gau Mata) represent unconditional giving and maternal bounty. The new moon night (Aunsi) is historically the darkest night of the month, transformed into brilliant illumination so that ignorance and darkness flee, welcoming spiritual and material abundance.",
    rituals: [
      "Morning Cow Puja: Adorning cows with yellow turmeric, red vermillion, marigold garlands, and feeding them grass, salt, and Sel Roti.",
      "Purification of the Threshold: Sweeping floors and plastering doorways with red mud (Rato Mato) or cow dung paste.",
      "Laxmi ko Paaela: Painting vermillion and rice paste footsteps leading from the entrance straight to the family safe or puja altar.",
      "Illuminating Diyas: Lighting terracotta and brass oil lamps along windows, stairwells, and parapets.",
      "Laxmi Puja Ritual: Offering fruit, coins, new account ledgers (Khata), sweets, and lotus flowers to Goddess Laxmi.",
      "Bhailo Carols: Young girls begin singing traditional Bhailini folk songs house-to-house under the illuminated stars."
    ],
    regionalNuances: "In Newar traditions (Swanti), this night is known as Laxmi Puja where the family treasury, storage jars, and grain storage are sanctified with special offerings."
  },
  {
    id: 4,
    tithi: "Kartik Shukla Pratipada",
    nepaliName: "गोवर्धन पूजा, गोरु पूजा र म्हः पूजा",
    englishTitle: "Ox Worship, Govardhan Reverence & Newari Mha Puja",
    image: "/src/assets/images/tihar_deusi_bhailo_1794235782711.jpg",
    summary: "A multifaceted day honoring the hardworking ox (Goru Puja), the sacred mountain Govardhan, and Newari Mha Puja (the worship of one's own inner soul).",
    significance: "Honors the agricultural debt owed to the ox for tilling the soil. Govardhan represents ecological reverence for mountains that shelter humanity and feed our rivers. In the Kathmandu Valley, Mha Puja marks the dawn of Nepal Sambat New Year, honoring the divinity that resides within the human body.",
    rituals: [
      "Goru Puja: Washing and decorating the working oxen with colored tika and marigold garlands.",
      "Govardhan Parvat: Constructing a miniature hillock of pure cow dung crowned with flowers, honoring Lord Krishna's lifting of Mt. Govardhan to shield all creatures from torrential storms.",
      "Mha Puja: Drawing geometric mandalas on the floor for each family member, lighting long wicks (Kheluita), offering auspicious fruits, eggs, fish, and wine (Sagun) to purify the self for the new year.",
      "Deusi Carols: Men and youth groups initiate vibrant Deusi singing tours with Madal drums and blessings."
    ],
    regionalNuances: "In Mithila, Govardhan Puja includes community crafting of cow-dung sculptures celebrating Krishna's pastimes and blessings of agricultural fertility."
  },
  {
    id: 5,
    tithi: "Kartik Shukla Dwitiya",
    nepaliName: "भाइटिका (Bhai Tika / Kija Puja)",
    englishTitle: "Bhai Tika — The Eternal Bond of Siblings",
    image: "/src/assets/images/tihar_bhai_tika_1794235781997.jpg",
    summary: "The grand culmination of Tihar. Sisters pray for the long life, immunity from premature death, and boundless prosperity of their brothers through sacred rites.",
    significance: "Stemming from the myth of Goddess Yamuna receiving her brother Yama (Lord of Death), who was so touched by her hospitality that he declared anyone who receives tika from their sister on this day shall be granted protection from death and misfortune.",
    rituals: [
      "Telko Ghero: Drawing an unbroken perimeter of mustard oil and holy water three times around the seated brother to bar all negative forces.",
      "Walnut Shattering: Placing a hard walnut on the doorway threshold and striking it with a pestle to shatter all obstacles and mortality.",
      "Makhamali & Sayapatri Mala: Bestowing garlands of Globe Amaranth (which never withers) ensuring eternal life and youth.",
      "Saptarangi Tika: Applying vertical stripes of seven vibrant colors to the brother's forehead.",
      "Gift Exchange: Sisters provide Bhai Masala (dry fruits, nuts, sweets), while brothers touch sisters' feet in gratitude and present gifts and dakshina."
    ],
    regionalNuances: "Known as Kija Puja in the Newar community, where elaborate mandalas are drawn for brothers and traditional Dhau-baji (yogurt and beaten rice) is served."
  }
];

export function renderFiveDays(initialDay = 1) {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <!-- Section Header -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ffd166]">Yama Panchak Chronicle</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("fiveDaysTitle")}
        </h1>
        <p class="text-stone-300 text-sm sm:text-base leading-relaxed">
          ${t("fiveDaysSubtitle")}
        </p>
      </div>

      <!-- Day Navigation Tabs -->
      <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        ${DAYS_DATA.map(
          (d) => `
          <button 
            data-day-tab="${d.id}"
            class="day-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              d.id === Number(initialDay)
                ? "bg-[#ffd166] text-[#140b1c] shadow-lg shadow-[#ffd166]/15"
                : "bg-[#21132d] text-stone-300 hover:bg-[#2d1a3e] hover:text-[#ffd166] border border-stone-800"
            }"
          >
            Day ${d.id}: ${d.nepaliName.split(" ")[0]}
          </button>
        `
        ).join("")}
      </div>

      <!-- Active Day Detail Container -->
      <div id="day-detail-content" class="transition-all duration-300">
        <!-- Rendered by attachFiveDaysEvents -->
      </div>

    </div>
  `;
}

function renderDayCard(dayObj) {
  return `
    <div class="tihar-card rounded-3xl p-6 sm:p-10 border border-[#ffd166]/20 bg-[#1e1029]/80 space-y-8">
      
      <!-- Card Header Split -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text Info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-md bg-[#2d1a3e] border border-[#ffd166]/30 text-xs font-mono font-bold text-[#ffd166]">
              Day 0${dayObj.id}
            </span>
            <span class="text-xs font-mono text-stone-400">
              ${dayObj.tithi}
            </span>
          </div>
          
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#ffd166]">
            ${dayObj.nepaliName}
          </h2>
          <p class="text-lg text-stone-200 font-serif italic">
            ${dayObj.englishTitle}
          </p>
          <p class="text-sm text-stone-300 leading-relaxed">
            ${dayObj.summary}
          </p>
        </div>

        <!-- Featured Cultural Image -->
        <div class="relative rounded-2xl overflow-hidden border border-[#ffd166]/20 shadow-2xl aspect-[4/3] bg-stone-900">
          <img 
            src="${dayObj.image}" 
            alt="${dayObj.englishTitle}"
            class="w-full h-full object-cover filter contrast-105"
            referrerpolicy="no-referrer"
          />
          <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <p class="text-xs text-stone-200 italic">
              Authentic visual heritage: ${dayObj.englishTitle}
            </p>
          </div>
        </div>
      </div>

      <!-- Detailed Breakdown Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-800">
        
        <!-- Col 1: Cultural Significance -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold tracking-wide uppercase text-[#ff8c42] flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cultural Significance
          </h3>
          <p class="text-xs text-stone-300 leading-relaxed">
            ${dayObj.significance}
          </p>
        </div>

        <!-- Col 2: Traditional Rituals -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold tracking-wide uppercase text-[#ffd166] flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sacred Customs & Rituals
          </h3>
          <ul class="space-y-2 text-xs text-stone-300">
            ${dayObj.rituals
              .map(
                (r) => `
              <li class="flex items-start gap-2">
                <span class="text-[#ffd166] font-bold">·</span>
                <span>${r}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <!-- Col 3: Regional Diversity -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold tracking-wide uppercase text-[#c83e63] flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
            Regional Traditions
          </h3>
          <p class="text-xs text-stone-300 leading-relaxed">
            ${dayObj.regionalNuances}
          </p>
          <div class="pt-3">
            <a 
              href="${dayObj.id === 5 ? "#bhai-tika" : dayObj.id === 3 ? "#wishes" : "#community"}" 
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffd166] hover:text-[#ff8c42] transition-colors"
            >
              <span>Explore related studio</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function attachFiveDaysEvents(initialDay = 1) {
  const container = document.getElementById("day-detail-content");
  let activeDay = Number(initialDay) || 1;

  function updateView(dayId) {
    activeDay = dayId;
    const dayData = DAYS_DATA.find((d) => d.id === dayId) || DAYS_DATA[0];
    if (container) {
      container.innerHTML = renderDayCard(dayData);
    }

    // Update active tab styles
    document.querySelectorAll(".day-tab-btn").forEach((btn) => {
      const bDay = Number(btn.getAttribute("data-day-tab"));
      if (bDay === dayId) {
        btn.className =
          "day-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all bg-[#ffd166] text-[#140b1c] shadow-lg shadow-[#ffd166]/15";
      } else {
        btn.className =
          "day-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all bg-[#21132d] text-stone-300 hover:bg-[#2d1a3e] hover:text-[#ffd166] border border-stone-800";
      }
    });
  }

  // Attach button clicks
  document.querySelectorAll(".day-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dayId = Number(btn.getAttribute("data-day-tab"));
      updateView(dayId);
    });
  });

  // Initial load
  updateView(activeDay);
}
