/**
 * Tihar Nepal - Virtual Diya Studio (Courtyard of Lights)
 * Interactive oil lamps, realistic flame flickering, multiple diya designs, ambient sound, and snapshot capture.
 */

import { t } from "../translations.js";
import { playTempleBell } from "../audio.js";

const DIYA_STYLES = [
  { id: "clay", name: "Traditional Clay Pala", color: "#C83E63", bodyColor: "#B45309" },
  { id: "brass", name: "Ornate Brass Diya", color: "#FFD166", bodyColor: "#D97706" },
  { id: "terracotta", name: "Carved Terracotta", color: "#FF8C42", bodyColor: "#9A3412" },
  { id: "lotus", name: "Floating Water Lotus", color: "#EC4899", bodyColor: "#059669" }
];

let diyasState = [
  { id: 1, x: 20, y: 35, lit: true, style: "clay" },
  { id: 2, x: 50, y: 22, lit: true, style: "brass" },
  { id: 3, x: 80, y: 35, lit: true, style: "clay" },
  { id: 4, x: 35, y: 60, lit: true, style: "terracotta" },
  { id: 5, x: 65, y: 60, lit: true, style: "terracotta" },
  { id: 6, x: 50, y: 78, lit: true, style: "lotus" }
];

export function renderVirtualDiya() {
  const litCount = diyasState.filter((d) => d.lit).length;

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Studio Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ffd166]">Courtyard of Illumination</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("diyaTitle")}
        </h1>
        <p class="text-stone-300 text-sm leading-relaxed">
          ${t("diyaSubtitle")}
        </p>
      </div>

      <!-- Action & Metrics Ribbon -->
      <div class="tihar-card rounded-2xl p-4 border border-[#ffd166]/20 bg-[#21132d] flex flex-wrap items-center justify-between gap-4">
        
        <!-- Lit Count -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#2e1a3f] border border-[#ffd166]/30 flex items-center justify-center text-[#ffd166]">
            <svg class="w-6 h-6 animate-diya-flicker" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 12 C44 32 32 48 50 66 C68 48 56 32 50 12 Z" fill="#FFD166"/>
              <ellipse cx="50" cy="70" rx="35" ry="12" fill="#FF8C42"/>
            </svg>
          </div>
          <div>
            <span class="block text-xs uppercase tracking-wider text-stone-400 font-medium">${t("diyaCounter")}</span>
            <span id="lit-counter-display" class="font-mono text-xl font-bold text-[#ffd166] tabular-nums">
              ${litCount} / ${diyasState.length}
            </span>
          </div>
        </div>

        <!-- Controls: Light All / Blow All / Add Diya / Sound / Snapshot -->
        <div class="flex flex-wrap items-center gap-2">
          <button 
            id="btn-light-all"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white text-[#140b1c] transition-all shadow-sm"
          >
            ${t("lightAllDiyas")}
          </button>
          <button 
            id="btn-extinguish-all"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2d1a3e] hover:bg-[#3d2354] text-stone-300 border border-stone-700 transition-colors"
          >
            ${t("extinguishAll")}
          </button>
          <button 
            id="btn-add-diya"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#21132d] hover:bg-[#2d1a3e] text-[#ffd166] border border-[#ffd166]/30 transition-colors flex items-center gap-1.5"
          >
            <span>+</span>
            <span>${t("addDiyaBtn")}</span>
          </button>
          <button 
            id="btn-bell-chime"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#21132d] hover:bg-[#2d1a3e] text-stone-300 border border-stone-700 transition-colors flex items-center gap-1.5"
            title="Ring Temple Ghanti"
          >
            <span>🔔</span>
            <span>${t("soundToggle")}</span>
          </button>
          <button 
            id="btn-capture-diya"
            class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#21132d] hover:bg-[#2d1a3e] text-stone-300 border border-stone-700 transition-colors"
          >
            📷 Snapshot
          </button>
        </div>

      </div>

      <!-- INTERACTIVE COURTYARD SCENE CONTAINER -->
      <div 
        id="diya-courtyard-stage"
        class="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[460px] rounded-3xl overflow-hidden border-2 border-[#ffd166]/25 shadow-2xl bg-[#140b1c] select-none cursor-pointer"
        title="Click anywhere to place a new Diya, or click a Diya to toggle its flame!"
      >
        <!-- Courtyard Ambient Backing with Brick Steps -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#100717] via-[#1a0e24] to-[#251235] opacity-95"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffd166]/10 via-transparent to-transparent pointer-events-none"></div>

        <!-- Courtyard Decorative Floor Rangoli Outline -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
          <svg class="w-96 h-96 text-[#ffd166]" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="100" cy="100" r="80" stroke-dasharray="4 4" />
            <circle cx="100" cy="100" r="50" />
            <polygon points="100,20 120,80 180,100 120,120 100,180 80,120 20,100 80,80" />
          </svg>
        </div>

        <!-- Rendered Diyas Container -->
        <div id="diyas-overlay" class="absolute inset-0">
          <!-- Populated by attachVirtualDiyaEvents -->
        </div>

        <!-- Instructions Watermark -->
        <div class="absolute bottom-4 left-6 pointer-events-none text-[11px] text-[#ffd166]/60 font-mono">
          Click any Diya to light/extinguish · Click empty courtyard space to add new lamp
        </div>
      </div>

      <!-- Diya Styles Educational Gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${DIYA_STYLES.map(
          (style) => `
          <div class="tihar-card p-4 rounded-2xl border border-stone-800 space-y-2">
            <h4 class="text-xs font-semibold text-[#ffd166] uppercase tracking-wider">${style.name}</h4>
            <p class="text-[11px] text-stone-400">
              Crafted from pure earth or beaten brass, holding mustard or sesame oil with hand-rolled cotton wicks.
            </p>
          </div>
        `
        ).join("")}
      </div>

    </div>
  `;
}

export function attachVirtualDiyaEvents() {
  const stage = document.getElementById("diya-courtyard-stage");
  const overlay = document.getElementById("diyas-overlay");
  const counter = document.getElementById("lit-counter-display");

  function renderDiyas() {
    if (!overlay) return;

    overlay.innerHTML = diyasState
      .map(
        (diya) => `
      <div 
        data-diya-id="${diya.id}" 
        class="diya-node absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-transform hover:scale-110"
        style="left: ${diya.x}%; top: ${diya.y}%;"
      >
        <div class="relative w-16 h-16 flex items-center justify-center">
          
          <!-- Radiance Aura Glow (When Lit) -->
          ${
            diya.lit
              ? `<div class="absolute inset-0 bg-[#ffd166]/25 rounded-full blur-xl animate-diya-flicker"></div>`
              : ""
          }

          <!-- SVG Diya Body & Flame -->
          <svg class="w-12 h-12 relative z-10 filter ${
            diya.lit ? "drop-shadow-[0_0_12px_rgba(255,209,102,0.95)]" : "brightness-50"
          }" viewBox="0 0 100 100">
            <!-- Flame (Only if Lit) -->
            ${
              diya.lit
                ? `
                <g class="animate-diya-flicker">
                  <path d="M50 14 C43 32 32 46 50 64 C68 46 57 32 50 14 Z" fill="#FFD166"/>
                  <ellipse cx="50" cy="46" rx="5" ry="11" fill="#FFFFFF" opacity="0.85"/>
                  <circle cx="50" cy="58" r="3" fill="#3B82F6"/>
                </g>
              `
                : `
                <!-- Unlit charred wick -->
                <line x1="50" y1="58" x2="50" y2="48" stroke="#1A0E23" stroke-width="3" stroke-linecap="round"/>
              `
            }

            <!-- Diya Vessel Clay/Brass Body -->
            <path d="M18 64 C18 82 82 82 82 64 C70 72 30 72 18 64 Z" fill="${
              diya.style === "brass" ? "#D97706" : diya.style === "lotus" ? "#C83E63" : "#9A3412"
            }"/>
            <ellipse cx="50" cy="64" rx="32" ry="8" fill="${
              diya.style === "brass" ? "#F59E0B" : diya.style === "lotus" ? "#EC4899" : "#B45309"
            }"/>
          </svg>

          <!-- Sparks particles if lit -->
          ${
            diya.lit
              ? `<span class="absolute top-0 w-1 h-1 bg-[#ffd166] rounded-full animate-float-particle"></span>`
              : ""
          }

        </div>
      </div>
    `
      )
      .join("");

    if (counter) {
      const lit = diyasState.filter((d) => d.lit).length;
      counter.textContent = `${lit} / ${diyasState.length}`;
    }

    // Attach click events on each diya
    document.querySelectorAll(".diya-node").forEach((node) => {
      node.addEventListener("click", (e) => {
        e.stopPropagation();
        const diyaId = Number(node.getAttribute("data-diya-id"));
        const diya = diyasState.find((d) => d.id === diyaId);
        if (diya) {
          diya.lit = !diya.lit;
          if (diya.lit) {
            playTempleBell();
          }
          renderDiyas();
        }
      });
    });
  }

  // Click on stage empty area to add a Diya
  if (stage) {
    stage.addEventListener("click", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

      const styles = ["clay", "brass", "terracotta", "lotus"];
      const randomStyle = styles[Math.floor(Math.random() * styles.length)];

      diyasState.push({
        id: Date.now(),
        x: Math.max(8, Math.min(92, x)),
        y: Math.max(12, Math.min(88, y)),
        lit: true,
        style: randomStyle
      });
      playTempleBell();
      renderDiyas();
    });
  }

  // Light All
  const lightAllBtn = document.getElementById("btn-light-all");
  if (lightAllBtn) {
    lightAllBtn.addEventListener("click", () => {
      diyasState.forEach((d) => (d.lit = true));
      playTempleBell();
      renderDiyas();
    });
  }

  // Extinguish All
  const extinguishAllBtn = document.getElementById("btn-extinguish-all");
  if (extinguishAllBtn) {
    extinguishAllBtn.addEventListener("click", () => {
      diyasState.forEach((d) => (d.lit = false));
      renderDiyas();
    });
  }

  // Add Diya Button
  const addDiyaBtn = document.getElementById("btn-add-diya");
  if (addDiyaBtn) {
    addDiyaBtn.addEventListener("click", () => {
      diyasState.push({
        id: Date.now(),
        x: Math.floor(Math.random() * 70) + 15,
        y: Math.floor(Math.random() * 60) + 20,
        lit: true,
        style: DIYA_STYLES[Math.floor(Math.random() * DIYA_STYLES.length)].id
      });
      playTempleBell();
      renderDiyas();
    });
  }

  // Bell Sound Chime
  const bellBtn = document.getElementById("btn-bell-chime");
  if (bellBtn) {
    bellBtn.addEventListener("click", () => {
      playTempleBell();
    });
  }

  // Snapshot Capture
  const captureBtn = document.getElementById("btn-capture-diya");
  if (captureBtn && stage) {
    captureBtn.addEventListener("click", () => {
      const c = document.createElement("canvas");
      c.width = 1200;
      c.height = 600;
      const ctx = c.getContext("2d");
      if (!ctx) return;

      // Dark courtyard background
      ctx.fillStyle = "#140b1c";
      ctx.fillRect(0, 0, 1200, 600);

      // Floor radial gradient
      const rad = ctx.createRadialGradient(600, 300, 50, 600, 300, 500);
      rad.addColorStop(0, "rgba(255, 209, 102, 0.2)");
      rad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, 1200, 600);

      // Draw each diya
      diyasState.forEach((d) => {
        const dx = (d.x / 100) * 1200;
        const dy = (d.y / 100) * 600;

        // Radiance glow
        if (d.lit) {
          const glow = ctx.createRadialGradient(dx, dy - 15, 2, dx, dy - 15, 55);
          glow.addColorStop(0, "rgba(255, 209, 102, 0.9)");
          glow.addColorStop(0.4, "rgba(255, 140, 66, 0.4)");
          glow.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(dx, dy - 15, 55, 0, Math.PI * 2);
          ctx.fill();

          // Flame teardrop
          ctx.fillStyle = "#FFD166";
          ctx.beginPath();
          ctx.moveTo(dx, dy - 32);
          ctx.bezierCurveTo(dx - 10, dy - 18, dx - 10, dy - 8, dx, dy - 4);
          ctx.bezierCurveTo(dx + 10, dy - 8, dx + 10, dy - 18, dx, dy - 32);
          ctx.fill();
        }

        // Vessel body
        ctx.fillStyle = d.style === "brass" ? "#D97706" : "#9A3412";
        ctx.beginPath();
        ctx.ellipse(dx, dy + 2, 24, 7, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Signature watermark
      ctx.fillStyle = "#FFD166";
      ctx.font = "20px serif";
      ctx.fillText("Tihar Nepal — Courtyard of Lights", 40, 560);

      const link = document.createElement("a");
      link.download = `tihar-courtyard-${Date.now()}.png`;
      link.href = c.toDataURL("image/png");
      link.click();
    });
  }

  renderDiyas();
}
