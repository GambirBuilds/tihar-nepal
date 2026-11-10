/**
 * Tihar Nepal - Tihar Wishes Studio (Greeting Card Generator)
 * Customizable festive cards with live preview, canvas rendering, PNG download, and social sharing.
 */

import { t } from "../translations.js";

const PRESET_BLESSINGS = [
  {
    occasion: "general",
    title: "Universal Tihar Blessing (Nepali)",
    text: "तिहारको पावन अवसरमा तपाईं र सम्पूर्ण परिवारजनमा सुख, शान्ति, सुस्वास्थ्य, समृद्धि एवं उत्तरोत्तर प्रगतिको हार्दिक मंगलमय शुभकामना व्यक्त गर्दछु।"
  },
  {
    occasion: "general",
    title: "Radiance & Joy (English)",
    text: "Wishing you and your loved ones a very Happy Tihar! May the glowing diyas illuminate your life with infinite peace, prosperity, and joyous celebration."
  },
  {
    occasion: "laxmi",
    title: "Laxmi Puja Prosperity (Nepali)",
    text: "धनधान्यकी देवी माता महालक्ष्मीको कृपाले तपाईंको घर-आँगन सधैं सुख, शान्ति र ऐश्वर्यले भरिपूर्ण रहोस्। शुभ दीपावली!"
  },
  {
    occasion: "bhai-tika",
    title: "Sister to Brother (Bhai Tika)",
    text: "मखमलीको माला र सप्तरङ्गी टीका झैं हाम्रो दाजुभाइ-दिदीबहिनीको पवित्र सम्बन्ध सधैं अमर र ताजा रहोस्। दाजु/भाइको सुस्वास्थ्य र दीर्घायुको कामना गर्दछु!"
  },
  {
    occasion: "kukur",
    title: "Kukur Tihar Tribute",
    text: "Happy Kukur Tihar! Celebrating our four-legged guardian angel and loyal companion whose unconditional love enriches our home every single day."
  }
];

const CARD_THEMES = [
  {
    id: "midnight-gold",
    name: "Midnight Purple & Gold",
    bgGradient: "from-[#21132d] via-[#140b1c] to-[#2d1a3e]",
    accentColor: "#FFD166",
    borderColor: "border-[#FFD166]/40",
    canvasBg: "#21132D",
    canvasAccent: "#FFD166"
  },
  {
    id: "marigold-sun",
    name: "Marigold Warmth",
    bgGradient: "from-[#391802] via-[#21132d] to-[#451e04]",
    accentColor: "#FF8C42",
    borderColor: "border-[#FF8C42]/40",
    canvasBg: "#301302",
    canvasAccent: "#FF8C42"
  },
  {
    id: "royal-crimson",
    name: "Royal Vermillion",
    bgGradient: "from-[#380e1b] via-[#140b1c] to-[#4a1224]",
    accentColor: "#C83E63",
    borderColor: "border-[#C83E63]/40",
    canvasBg: "#330b17",
    canvasAccent: "#C83E63"
  },
  {
    id: "emerald-himalaya",
    name: "Emerald Devotion",
    bgGradient: "from-[#0d2a1c] via-[#140b1c] to-[#123624]",
    accentColor: "#27845B",
    borderColor: "border-[#27845B]/40",
    canvasBg: "#0c2419",
    canvasAccent: "#27845B"
  }
];

export function renderWishes() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <!-- Studio Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ffd166]">Festive Greetings Studio</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("wishesTitle")}
        </h1>
        <p class="text-stone-300 text-sm leading-relaxed">
          ${t("wishesSubtitle")}
        </p>
      </div>

      <!-- Studio Layout: Configurator (Left) + Live Card & Actions (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- CARD CONFIGURATION FORM (5 Cols) -->
        <div class="lg:col-span-5 tihar-card rounded-3xl p-6 sm:p-8 border border-[#ffd166]/20 bg-[#1f102b] space-y-6">
          <h2 class="font-serif text-lg font-bold text-[#ffd166] border-b border-stone-800 pb-3 flex items-center gap-2">
            <svg class="w-5 h-5 text-[#ff8c42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Personalize Your Card
          </h2>

          <div class="space-y-4 text-xs">
            <!-- Occasion Selector -->
            <div class="space-y-1.5">
              <label class="font-semibold text-stone-300">${t("festivalOccasion")}</label>
              <select id="wish-occasion-select" class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]">
                <option value="general">Deepawali / Tihar (All Days)</option>
                <option value="laxmi">Laxmi Puja (Goddess of Wealth)</option>
                <option value="kukur">Kukur Tihar (Dog Festival)</option>
                <option value="bhai-tika">Bhai Tika (Sister-Brother Bond)</option>
                <option value="govardhan">Govardhan & Mha Puja</option>
              </select>
            </div>

            <!-- Recipient Name -->
            <div class="space-y-1.5">
              <label class="font-semibold text-stone-300">${t("recipientName")}</label>
              <input 
                type="text" 
                id="wish-recipient-input" 
                placeholder="e.g. Priye Aama / Dear Samir" 
                value="Priya Pariwaar"
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]"
              />
            </div>

            <!-- Sender Name -->
            <div class="space-y-1.5">
              <label class="font-semibold text-stone-300">${t("senderName")}</label>
              <input 
                type="text" 
                id="wish-sender-input" 
                placeholder="e.g. Tapai ko Bhai / Rohan" 
                value="Aastha & Family"
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]"
              />
            </div>

            <!-- Card Theme Selector -->
            <div class="space-y-1.5">
              <label class="font-semibold text-stone-300">${t("cardTheme")}</label>
              <div class="grid grid-cols-2 gap-2">
                ${CARD_THEMES.map(
                  (theme, idx) => `
                  <button 
                    data-theme="${theme.id}"
                    class="theme-select-btn p-2 rounded-xl border text-left transition-all ${
                      idx === 0
                        ? "border-[#ffd166] bg-[#2d1a3e] text-[#ffd166] font-semibold"
                        : "border-stone-800 bg-[#140b1c] text-stone-400 hover:text-white"
                    }"
                  >
                    <span class="block truncate">${theme.name}</span>
                  </button>
                `
                ).join("")}
              </div>
            </div>

            <!-- Custom Message Box -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="font-semibold text-stone-300">${t("cardMessage")}</label>
                <button id="quick-preset-btn" class="text-[11px] text-[#ffd166] hover:underline">
                  Use Preset Template
                </button>
              </div>
              <textarea 
                id="wish-message-input" 
                rows="4" 
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166] leading-relaxed resize-none"
              >तिहारको पावन अवसरमा तपाईं र सम्पूर्ण परिवारजनमा सुख, शान्ति, सुस्वास्थ्य, समृद्धि एवं उत्तरोत्तर प्रगतिको हार्दिक मंगलमय शुभकामना व्यक्त गर्दछु।</textarea>
            </div>
          </div>

        </div>

        <!-- LIVE CARD PREVIEW & EXPORT ACTIONS (7 Cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="tihar-card rounded-3xl p-6 sm:p-8 border border-[#ffd166]/20 bg-[#160b1e] space-y-6 flex flex-col items-center">
            
            <div class="w-full flex items-center justify-between border-b border-stone-800 pb-3">
              <span class="text-xs font-semibold uppercase tracking-wider text-stone-400">${t("previewTitle")}</span>
              <span class="text-xs text-[#ffd166] font-mono">1080 × 1080 HD Card</span>
            </div>

            <!-- Card Visual Container -->
            <div 
              id="live-card-container" 
              class="w-full max-w-[480px] aspect-square rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-[#ffd166]/40 bg-gradient-to-br from-[#21132d] via-[#140b1c] to-[#2d1a3e] text-center select-none"
            >
              <!-- Traditional Ornate Corners -->
              <div class="absolute top-3 left-3 text-[#ffd166]/40 text-lg">❖</div>
              <div class="absolute top-3 right-3 text-[#ffd166]/40 text-lg">❖</div>
              <div class="absolute bottom-3 left-3 text-[#ffd166]/40 text-lg">❖</div>
              <div class="absolute bottom-3 right-3 text-[#ffd166]/40 text-lg">❖</div>

              <!-- Top Emblem & Recipient -->
              <div class="space-y-3 z-10 pt-2">
                <div class="w-12 h-12 mx-auto text-[#ffd166] flex items-center justify-center animate-diya-flicker">
                  <svg class="w-10 h-10" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 12 C44 32 32 48 50 66 C68 48 56 32 50 12 Z" fill="#FFD166"/>
                    <ellipse cx="50" cy="70" rx="36" ry="12" fill="#FF8C42"/>
                  </svg>
                </div>
                <div class="space-y-0.5">
                  <span id="preview-sub-kicker" class="text-xs uppercase tracking-widest text-[#ff8c42] font-semibold">
                    Shubha Deepawali
                  </span>
                  <h3 id="preview-recipient" class="font-serif text-xl sm:text-2xl font-bold text-[#ffd166] truncate">
                    Priya Pariwaar
                  </h3>
                </div>
              </div>

              <!-- Message Body -->
              <div class="my-auto py-2 z-10 px-4">
                <p id="preview-message" class="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                  तिहारको पावन अवसरमा तपाईं र सम्पूर्ण परिवारजनमा सुख, शान्ति, सुस्वास्थ्य, समृद्धि एवं उत्तरोत्तर प्रगतिको हार्दिक मंगलमय शुभकामना व्यक्त गर्दछु।
                </p>
              </div>

              <!-- Bottom Sender Signature -->
              <div class="space-y-1 z-10 pb-2 border-t border-[#ffd166]/20 pt-3">
                <span class="text-[11px] text-stone-400">With Warm Prayers & Affection,</span>
                <p id="preview-sender" class="font-serif text-sm sm:text-base font-bold text-[#ffd166] truncate">
                  Aastha & Family
                </p>
                <span class="block text-[10px] text-stone-400 font-mono">Tihar Nepal · Bikram Sambat 2083</span>
              </div>

              <!-- Subtle background glow -->
              <div class="absolute inset-0 bg-radial from-[#ffd166]/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <!-- Export Buttons Strip -->
            <div class="w-full max-w-[480px] grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button 
                id="btn-download-card" 
                class="px-4 py-3 rounded-xl bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white text-[#140b1c] font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>${t("downloadCard")}</span>
              </button>

              <button 
                id="btn-share-whatsapp" 
                class="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.193-.55-1.921-.797-3.141-2.775-3.237-2.903-.095-.128-.778-1.034-.778-1.97 0-.937.49-1.396.664-1.587.174-.191.38-.239.507-.239.127 0 .253.002.364.007.119.006.277-.045.433.33.163.394.555 1.353.603 1.451.048.098.08.213.016.34-.064.127-.096.207-.19.319-.096.111-.2.247-.286.332-.095.095-.195.199-.084.39.111.191.494.814 1.059 1.318.729.648 1.343.85 1.534.945.191.095.302.08.414-.048.111-.127.476-.556.603-.746.127-.19.254-.159.428-.095.174.063 1.11.524 1.3.62.19.095.317.143.364.222.048.079.048.461-.096.866z"/>
                </svg>
                <span>${t("shareWhatsApp")}</span>
              </button>
            </div>

            <!-- Copy text action -->
            <button 
              id="btn-copy-greeting" 
              class="text-xs text-stone-400 hover:text-[#ffd166] transition-colors flex items-center gap-1.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span id="copy-text-status">${t("copyLink")}</span>
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}

export function attachWishesEvents() {
  const recipientInput = /** @type {HTMLInputElement} */ (document.getElementById("wish-recipient-input"));
  const senderInput = /** @type {HTMLInputElement} */ (document.getElementById("wish-sender-input"));
  const messageInput = /** @type {HTMLTextAreaElement} */ (document.getElementById("wish-message-input"));
  const occasionSelect = /** @type {HTMLSelectElement} */ (document.getElementById("wish-occasion-select"));

  const previewRecipient = document.getElementById("preview-recipient");
  const previewSender = document.getElementById("preview-sender");
  const previewMessage = document.getElementById("preview-message");
  const previewKicker = document.getElementById("preview-sub-kicker");
  const cardContainer = document.getElementById("live-card-container");

  let activeTheme = CARD_THEMES[0];

  function syncPreview() {
    if (previewRecipient && recipientInput) {
      previewRecipient.textContent = recipientInput.value.trim() || "Priya Pariwaar";
    }
    if (previewSender && senderInput) {
      previewSender.textContent = senderInput.value.trim() || "Aastha & Family";
    }
    if (previewMessage && messageInput) {
      previewMessage.textContent = messageInput.value.trim() || "Happy Tihar!";
    }
    if (previewKicker && occasionSelect) {
      const oc = occasionSelect.value;
      if (oc === "laxmi") previewKicker.textContent = "Shubha Laxmi Puja";
      else if (oc === "kukur") previewKicker.textContent = "Shubha Kukur Tihar";
      else if (oc === "bhai-tika") previewKicker.textContent = "Shubha Bhai Tika";
      else if (oc === "govardhan") previewKicker.textContent = "Govardhan & Mha Puja";
      else previewKicker.textContent = "Shubha Deepawali";
    }
  }

  if (recipientInput) recipientInput.addEventListener("input", syncPreview);
  if (senderInput) senderInput.addEventListener("input", syncPreview);
  if (messageInput) messageInput.addEventListener("input", syncPreview);
  if (occasionSelect) occasionSelect.addEventListener("change", syncPreview);

  // Preset Template Button
  const presetBtn = document.getElementById("quick-preset-btn");
  if (presetBtn && messageInput && occasionSelect) {
    presetBtn.addEventListener("click", () => {
      const oc = occasionSelect.value;
      const matched = PRESET_BLESSINGS.find((p) => p.occasion === oc) || PRESET_BLESSINGS[0];
      messageInput.value = matched.text;
      syncPreview();
    });
  }

  // Theme Selectors
  document.querySelectorAll(".theme-select-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const themeId = btn.getAttribute("data-theme");
      const found = CARD_THEMES.find((t) => t.id === themeId);
      if (found && cardContainer) {
        activeTheme = found;
        document.querySelectorAll(".theme-select-btn").forEach((b) => {
          b.className = "theme-select-btn p-2 rounded-xl border text-left transition-all border-stone-800 bg-[#140b1c] text-stone-400 hover:text-white";
        });
        btn.className = `theme-select-btn p-2 rounded-xl border text-left transition-all border-[${found.accentColor}] bg-[#2d1a3e] text-[${found.accentColor}] font-semibold`;
        
        cardContainer.className = `w-full max-w-[480px] aspect-square rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 ${found.borderColor} bg-gradient-to-br ${found.bgGradient} text-center select-none`;
      }
    });
  });

  // Client-Side Canvas Rendering for High-Res PNG Download
  const downloadBtn = document.getElementById("btn-download-card");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const c = document.createElement("canvas");
      c.width = 1080;
      c.height = 1080;
      const ctx = c.getContext("2d");
      if (!ctx) return;

      // Background
      ctx.fillStyle = activeTheme.canvasBg;
      ctx.fillRect(0, 0, 1080, 1080);

      // Radial Glow
      const rad = ctx.createRadialGradient(540, 540, 50, 540, 540, 500);
      rad.addColorStop(0, "rgba(255, 209, 102, 0.15)");
      rad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, 1080, 1080);

      // Ornate Border
      ctx.strokeStyle = activeTheme.canvasAccent;
      ctx.lineWidth = 6;
      ctx.strokeRect(40, 40, 1000, 1000);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 2;
      ctx.strokeRect(55, 55, 970, 970);

      // Decorative Corner Motifs
      ctx.fillStyle = activeTheme.canvasAccent;
      ctx.font = "32px sans-serif";
      ctx.fillText("❖", 75, 95);
      ctx.fillText("❖", 975, 95);
      ctx.fillText("❖", 75, 995);
      ctx.fillText("❖", 975, 995);

      // Diya Icon / Text
      ctx.textAlign = "center";
      ctx.font = "bold 64px sans-serif";
      ctx.fillText("🪔", 540, 200);

      // Sub-kicker
      ctx.font = "600 24px sans-serif";
      ctx.fillStyle = "#FF8C42";
      ctx.fillText((previewKicker?.textContent || "SHUBHA DEEPAWALI").toUpperCase(), 540, 260);

      // Recipient
      ctx.font = "bold 52px serif";
      ctx.fillStyle = activeTheme.canvasAccent;
      ctx.fillText(previewRecipient?.textContent || "Priya Pariwaar", 540, 340);

      // Line divider
      ctx.strokeStyle = "rgba(255, 209, 102, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(340, 380);
      ctx.lineTo(740, 380);
      ctx.stroke();

      // Greeting Message (multi-line wrap)
      ctx.font = "32px sans-serif";
      ctx.fillStyle = "#F7F4EE";
      const text = previewMessage?.textContent || "Happy Tihar!";
      const words = text.split(" ");
      let line = "";
      let y = 470;
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > 780 && i > 0) {
          ctx.fillText(line, 540, y);
          line = words[i] + " ";
          y += 50;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 540, y);

      // Sender Footer
      ctx.font = "24px sans-serif";
      ctx.fillStyle = "#A8A29E";
      ctx.fillText("With Warm Festive Prayers & Affection,", 540, 840);

      ctx.font = "bold 44px serif";
      ctx.fillStyle = activeTheme.canvasAccent;
      ctx.fillText(previewSender?.textContent || "Aastha & Family", 540, 900);

      ctx.font = "20px monospace";
      ctx.fillStyle = "#78716C";
      ctx.fillText("Tihar Nepal · Bikram Sambat 2083", 540, 960);

      // Download Trigger
      const link = document.createElement("a");
      link.download = `tihar-wishes-${Date.now()}.png`;
      link.href = c.toDataURL("image/png");
      link.click();
    });
  }

  // WhatsApp Share
  const whatsappBtn = document.getElementById("btn-share-whatsapp");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const recipient = previewRecipient?.textContent || "";
      const sender = previewSender?.textContent || "";
      const msg = previewMessage?.textContent || "";
      const shareText = `*Happy Tihar 2083!* 🪔\n\nTo: ${recipient}\n\n"${msg}"\n\nFrom: ${sender}\n\nCelebrated via Tihar Nepal: ${window.location.origin}`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
      window.open(url, "_blank");
    });
  }

  // Copy Greeting Text
  const copyBtn = document.getElementById("btn-copy-greeting");
  const copyStatus = document.getElementById("copy-text-status");
  if (copyBtn && copyStatus) {
    copyBtn.addEventListener("click", () => {
      const recipient = previewRecipient?.textContent || "";
      const sender = previewSender?.textContent || "";
      const msg = previewMessage?.textContent || "";
      const fullText = `Happy Tihar 2083!\n\nTo: ${recipient}\n\n"${msg}"\n\nFrom: ${sender}\n\nCreated on Tihar Nepal`;
      navigator.clipboard.writeText(fullText);
      copyStatus.textContent = "Copied to Clipboard!";
      setTimeout(() => {
        copyStatus.textContent = t("copyLink");
      }, 2000);
    });
  }

  syncPreview();
}
