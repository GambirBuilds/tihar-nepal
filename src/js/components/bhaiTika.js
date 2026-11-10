/**
 * Tihar Nepal - Bhai Tika Dedicated Cultural & Ritual Guide
 * Explores the sacred sister-brother bond, Saptarangi seven-color tika symbolism, walnut breaking, and custom blessing generator.
 */

import { t } from "../translations.js";

const SAPTARANGI_COLORS = [
  { name: "Rato (Red / Vermillion)", hex: "#DC2626", meaning: "Bravery, vitality, and marital auspiciousness (Sindoor)." },
  { name: "Pahilo (Yellow / Turmeric)", hex: "#FACC15", meaning: "Spiritual wisdom, knowledge, and inner radiance (Haldi)." },
  { name: "Hariyo (Green / Leaf)", hex: "#16A34A", meaning: "Prosperity, renewal of nature, and agricultural abundance." },
  { name: "Neelo (Blue / Indigo)", hex: "#2563EB", meaning: "Cosmic tranquility, depth of character, and peace." },
  { name: "Seto (White / Rice Powder)", hex: "#FFFFFF", meaning: "Purity of devotion, clarity of mind, and peace (Akshata)." },
  { name: "Sunthala (Orange / Ochre)", hex: "#EA580C", meaning: "Spiritual renunciation, energy, and warmth of kinship." },
  { name: "Baigani (Purple / Violet)", hex: "#9333EA", meaning: "Royalty of spirit and the eternal unfading Makhamali bond." }
];

export function renderBhaiTika() {
  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      <!-- Section Header -->
      <div class="text-center space-y-4 max-w-3xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#c83e63]">The Sacred Concluding Rite</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("bhaiTikaTitle")}
        </h1>
        <p class="text-stone-300 text-sm sm:text-base leading-relaxed">
          ${t("bhaiTikaSubtitle")}
        </p>
      </div>

      <!-- Feature Visual Strip -->
      <div class="relative rounded-3xl overflow-hidden border border-[#ffd166]/20 shadow-2xl aspect-[16/9] sm:aspect-[21/9] bg-stone-900">
        <img 
          src="/src/assets/images/tihar_bhai_tika_1794235781997.jpg" 
          alt="Nepali sister placing Saptarangi Tika and Makhamali garland on brother with brass puja thali"
          class="w-full h-full object-cover filter contrast-105"
          referrerpolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#140b1c] via-[#140b1c]/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <p class="text-xs sm:text-sm text-[#ffd166] font-medium italic">
            "Until the waters of the sacred river dry, and until the petals of the Makhamali flower fade, may my brother live in radiant health."
          </p>
        </div>
      </div>

      <!-- THE FIVE SACRED RITUALS CHRONICLE -->
      <div class="space-y-6">
        <div class="border-b border-stone-800 pb-3">
          <h2 class="font-serif text-2xl font-bold text-[#ffd166]">
            The Five Sacred Ceremonial Steps
          </h2>
          <p class="text-xs text-stone-400">
            Performed by sisters on Kartik Shukla Dwitiya according to ancient Vedic traditions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Ritual 1: Telko Ghero -->
          <div class="tihar-card p-6 rounded-2xl border border-stone-800 space-y-3">
            <h3 class="font-serif text-lg font-bold text-[#ffd166]">${t("ritual1Title")}</h3>
            <p class="text-xs text-stone-300 leading-relaxed">${t("ritual1Desc")}</p>
          </div>

          <!-- Ritual 2: Okhar Phutaune -->
          <div class="tihar-card p-6 rounded-2xl border border-stone-800 space-y-3">
            <h3 class="font-serif text-lg font-bold text-[#ff8c42]">${t("ritual2Title")}</h3>
            <p class="text-xs text-stone-300 leading-relaxed">${t("ritual2Desc")}</p>
          </div>

          <!-- Ritual 3: Makhamali Garland -->
          <div class="tihar-card p-6 rounded-2xl border border-stone-800 space-y-3">
            <h3 class="font-serif text-lg font-bold text-[#c83e63]">${t("ritual3Title")}</h3>
            <p class="text-xs text-stone-300 leading-relaxed">${t("ritual3Desc")}</p>
          </div>

          <!-- Ritual 4: Saptarangi Tika -->
          <div class="tihar-card p-6 rounded-2xl border border-stone-800 space-y-3">
            <h3 class="font-serif text-lg font-bold text-[#27845b]">${t("ritual4Title")}</h3>
            <p class="text-xs text-stone-300 leading-relaxed">${t("ritual4Desc")}</p>
          </div>

          <!-- Ritual 5: Sagun & Masala (Full Width) -->
          <div class="tihar-card p-6 rounded-2xl border border-stone-800 space-y-3 md:col-span-2">
            <h3 class="font-serif text-lg font-bold text-[#ffd166]">${t("ritual5Title")}</h3>
            <p class="text-xs text-stone-300 leading-relaxed">${t("ritual5Desc")}</p>
          </div>

        </div>
      </div>

      <!-- SAPTARANGI TIKA SYMBOLIC BREAKDOWN -->
      <div class="tihar-card rounded-3xl p-6 sm:p-10 border border-[#ffd166]/25 bg-[#1f102c] space-y-6">
        <div class="space-y-1">
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-[#ffd166]">Cosmic Protection</span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#f7f4ee]">
            The Seven Auspicious Colors (सप्तरङ्गी टीका)
          </h2>
          <p class="text-xs text-stone-300 leading-relaxed">
            Each vertical line applied to the brother's forehead represents a spectrum of blessings, cosmic energies, and psychological fortitude.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
          ${SAPTARANGI_COLORS.map(
            (c, idx) => `
            <div class="p-3 rounded-xl bg-[#150b1d] border border-stone-800 flex flex-col justify-between space-y-3">
              <div class="space-y-2">
                <div class="w-full h-8 rounded-lg shadow-inner" style="background-color: ${c.hex};"></div>
                <h4 class="font-serif text-xs font-bold text-stone-200">${c.name}</h4>
              </div>
              <p class="text-[10px] text-stone-400 leading-relaxed">
                ${c.meaning}
              </p>
            </div>
          `
          ).join("")}
        </div>
      </div>

      <!-- BHAI TIKA DEDICATED SIBLING BLESSING GENERATOR -->
      <div class="tihar-card rounded-3xl p-6 sm:p-10 border border-[#c83e63]/30 bg-[#24112e] space-y-6">
        <div class="max-w-xl space-y-2">
          <h2 class="font-serif text-2xl font-bold text-[#ffd166]">
            Personalized Sibling Blessing Generator
          </h2>
          <p class="text-xs text-stone-300">
            Generate an authentic Bhai Tika blessing note for your brother or sister living near or afar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-3 text-xs">
            <div>
              <label class="block font-semibold text-stone-300 mb-1">Your Relationship Role:</label>
              <select id="sibling-role-select" class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200">
                <option value="sister-to-brother">Sister to Brother (Didi/Bahini to Dai/Bhai)</option>
                <option value="brother-to-sister">Brother to Sister (Dai/Bhai to Didi/Bahini)</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold text-stone-300 mb-1">Sibling's Name:</label>
              <input type="text" id="sibling-name-input" placeholder="e.g. Samir Dai" value="Samir Dai" class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200" />
            </div>
            <div>
              <label class="block font-semibold text-stone-300 mb-1">Your Name:</label>
              <input type="text" id="sibling-sender-input" placeholder="e.g. Pooja" value="Pooja" class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200" />
            </div>
            <button id="btn-generate-sibling-note" class="w-full py-2.5 rounded-xl bg-[#ffd166] text-[#140b1c] font-bold text-xs hover:bg-[#ff8c42] hover:text-white transition-all">
              Update Blessing Card
            </button>
          </div>

          <!-- Blessing Preview Card -->
          <div id="sibling-card-box" class="p-6 rounded-2xl bg-[#170a21] border border-[#ffd166]/30 flex flex-col justify-between space-y-4 text-center">
            <span class="text-xs uppercase font-mono tracking-widest text-[#c83e63]">Sacred Sibling Bond</span>
            <h3 id="sibling-card-header" class="font-serif text-lg font-bold text-[#ffd166]">
              To my beloved brother, Samir Dai
            </h3>
            <p id="sibling-card-quote" class="text-xs text-stone-200 italic leading-relaxed">
              "जसरी मखमलीको फूल कहिल्यै ओइलाउँदैन र तोरीको तेलको घेराले कुनै नकारात्मक ऊर्जा छिर्न दिँदैन, त्यसरी नै तपाईँको जीवन सधैं सुस्वास्थ्य, सफलता र दीर्घायुले परिपूर्ण रहोस्।"
            </p>
            <div class="border-t border-stone-800 pt-2 text-[11px] text-stone-400">
              Forever blessed with your affection, <strong id="sibling-card-sender" class="text-[#ffd166]">Pooja</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function attachBhaiTikaEvents() {
  const roleSelect = /** @type {HTMLSelectElement} */ (document.getElementById("sibling-role-select"));
  const nameInput = /** @type {HTMLInputElement} */ (document.getElementById("sibling-name-input"));
  const senderInput = /** @type {HTMLInputElement} */ (document.getElementById("sibling-sender-input"));
  const updateBtn = document.getElementById("btn-generate-sibling-note");

  const cardHeader = document.getElementById("sibling-card-header");
  const cardQuote = document.getElementById("sibling-card-quote");
  const cardSender = document.getElementById("sibling-card-sender");

  function updateCard() {
    const role = roleSelect?.value || "sister-to-brother";
    const name = nameInput?.value.trim() || "Sibling";
    const sender = senderInput?.value.trim() || "You";

    if (role === "sister-to-brother") {
      if (cardHeader) cardHeader.textContent = `To my beloved brother, ${name}`;
      if (cardQuote) {
        cardQuote.textContent =
          `"मखमलीको फूल कहिल्यै नओइलाए झैँ र सप्तरङ्गी टीकाले सधैं सौभाग्य दिए झैँ, दाजु/भाइको जीवन सधैं सुस्वास्थ्य, दीर्घायु र अटल कीर्तिले भरिपूर्ण रहोस्।"`;
      }
    } else {
      if (cardHeader) cardHeader.textContent = `To my beloved sister, ${name}`;
      if (cardQuote) {
        cardQuote.textContent =
          `"तपाईंको निस्वार्थ स्नेह, प्रार्थना र आशीर्वाद नै मेरो जीवनको सबैभन्दा ठूलो शक्ति हो। दिदीबहिनीको रक्षा र सम्मानको सधैं प्रतिबद्धता व्यक्त गर्दछु।"`;
      }
    }

    if (cardSender) cardSender.textContent = sender;
  }

  if (updateBtn) updateBtn.addEventListener("click", updateCard);
  if (roleSelect) roleSelect.addEventListener("change", updateCard);
}
