/**
 * Tihar Nepal - Interactive Rangoli Creator Studio
 * HTML5 Canvas with Radial Symmetry (4, 8, 12-way), Traditional Pigments, Cultural Stamps, Undo/Redo & PNG Export.
 */

import { t } from "../translations.js";

const TRADITIONAL_COLORS = [
  { nameKey: "colorMarigold", hex: "#FF8C42" },
  { nameKey: "colorTurmeric", hex: "#FFD166" },
  { nameKey: "colorSindoor", hex: "#C83E63" },
  { nameKey: "colorWhite", hex: "#FFFFFF" },
  { nameKey: "colorGreen", hex: "#27845B" },
  { nameKey: "colorBlue", hex: "#3A7BD5" },
  { nameKey: "colorPink", hex: "#E85D75" },
  { nameKey: "colorBlack", hex: "#1A0E23" }
];

export function renderRangoli() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Studio Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#ffd166]">Festive Sacred Geometry</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("rangoliTitle")}
        </h1>
        <p class="text-stone-300 text-sm leading-relaxed">
          ${t("rangoliSubtitle")}
        </p>
      </div>

      <!-- Studio Interface Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        <!-- TOOLBAR (Left Column) -->
        <div class="tihar-card rounded-2xl p-5 border border-[#ffd166]/20 bg-[#1e1029] space-y-6 lg:col-span-1">
          
          <!-- Mode / Tool Selection -->
          <div class="space-y-2">
            <label class="text-xs font-semibold uppercase tracking-wider text-stone-400">${t("tools")}</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                id="tool-brush-btn" 
                class="px-3 py-2 rounded-xl text-xs font-semibold bg-[#ffd166] text-[#140b1c] flex items-center justify-center gap-1.5 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span>${t("brush")}</span>
              </button>
              <button 
                id="tool-eraser-btn" 
                class="px-3 py-2 rounded-xl text-xs font-semibold bg-[#2d1a3e] text-stone-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors border border-stone-800"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>${t("eraser")}</span>
              </button>
            </div>
          </div>

          <!-- Radial Symmetry Selector -->
          <div class="space-y-2">
            <label class="text-xs font-semibold uppercase tracking-wider text-stone-400">${t("symmetryMode")}</label>
            <div class="grid grid-cols-2 gap-1.5 p-1 bg-[#140b1c] rounded-xl border border-stone-800">
              <button data-sym="1" class="sym-btn px-2.5 py-1.5 text-xs font-medium rounded-lg text-stone-300 hover:text-white transition-colors">
                ${t("symNone")}
              </button>
              <button data-sym="4" class="sym-btn px-2.5 py-1.5 text-xs font-medium rounded-lg text-stone-300 hover:text-white transition-colors">
                ${t("sym4")}
              </button>
              <button data-sym="8" class="sym-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#ffd166] text-[#140b1c] transition-colors">
                ${t("sym8")}
              </button>
              <button data-sym="12" class="sym-btn px-2.5 py-1.5 text-xs font-medium rounded-lg text-stone-300 hover:text-white transition-colors">
                ${t("sym12")}
              </button>
            </div>
          </div>

          <!-- Color Pigments -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-xs font-semibold uppercase tracking-wider text-stone-400">${t("colorPalette")}</label>
              <span id="active-color-name" class="text-[11px] text-[#ffd166] font-medium">Turmeric Yellow</span>
            </div>
            <div class="grid grid-cols-4 gap-2.5">
              ${TRADITIONAL_COLORS.map(
                (c, idx) => `
                <button 
                  data-color="${c.hex}" 
                  data-name="${t(c.nameKey)}"
                  class="color-btn w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 ${
                    idx === 1 ? "border-white ring-2 ring-[#ffd166]" : "border-stone-700"
                  }"
                  style="background-color: ${c.hex};"
                  title="${t(c.nameKey)}"
                ></button>
              `
              ).join("")}
            </div>
            <!-- Custom Color Picker -->
            <div class="pt-2 flex items-center justify-between text-xs text-stone-400">
              <span>Custom Pigment:</span>
              <input type="color" id="custom-color-picker" value="#FFD166" class="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0" />
            </div>
          </div>

          <!-- Brush Size & Opacity -->
          <div class="space-y-4 pt-1 border-t border-stone-800">
            <div class="space-y-1">
              <div class="flex justify-between text-xs text-stone-300 font-medium">
                <span>${t("brushSize")}</span>
                <span id="brush-size-display" class="font-mono text-[#ffd166]">6px</span>
              </div>
              <input 
                type="range" 
                id="brush-size-slider" 
                min="2" 
                max="40" 
                value="6"
                class="w-full accent-[#ffd166] cursor-pointer"
              />
            </div>

            <div class="space-y-1">
              <div class="flex justify-between text-xs text-stone-300 font-medium">
                <span>${t("brushOpacity")}</span>
                <span id="brush-opacity-display" class="font-mono text-[#ffd166]">100%</span>
              </div>
              <input 
                type="range" 
                id="brush-opacity-slider" 
                min="10" 
                max="100" 
                value="100"
                class="w-full accent-[#ffd166] cursor-pointer"
              />
            </div>
          </div>

          <!-- Cultural Stamps -->
          <div class="space-y-2 pt-1 border-t border-stone-800">
            <label class="text-xs font-semibold uppercase tracking-wider text-stone-400">${t("stampTool")}</label>
            <div class="grid grid-cols-2 gap-2">
              <button data-stamp="marigold" class="stamp-btn p-2 rounded-xl bg-[#2d1a3e] hover:bg-[#3d2354] border border-stone-800 text-[11px] font-medium text-stone-300 transition-colors flex items-center gap-1.5">
                <span>🌼</span>
                <span>${t("stampMarigold")}</span>
              </button>
              <button data-stamp="diya" class="stamp-btn p-2 rounded-xl bg-[#2d1a3e] hover:bg-[#3d2354] border border-stone-800 text-[11px] font-medium text-stone-300 transition-colors flex items-center gap-1.5">
                <span>🪔</span>
                <span>${t("stampDiya")}</span>
              </button>
              <button data-stamp="footsteps" class="stamp-btn p-2 rounded-xl bg-[#2d1a3e] hover:bg-[#3d2354] border border-stone-800 text-[11px] font-medium text-stone-300 transition-colors flex items-center gap-1.5">
                <span>👣</span>
                <span>${t("stampFootsteps")}</span>
              </button>
              <button data-stamp="lotus" class="stamp-btn p-2 rounded-xl bg-[#2d1a3e] hover:bg-[#3d2354] border border-stone-800 text-[11px] font-medium text-stone-300 transition-colors flex items-center gap-1.5">
                <span>🪷</span>
                <span>${t("stampLotus")}</span>
              </button>
            </div>
          </div>

          <!-- Utilities (Undo / Redo / Grid / Clear) -->
          <div class="space-y-2 pt-2 border-t border-stone-800">
            <div class="grid grid-cols-2 gap-2">
              <button id="btn-undo" class="px-3 py-2 rounded-xl bg-[#21132d] hover:bg-[#2d1a3e] text-xs font-semibold text-stone-300 border border-stone-700 transition-colors">
                ↺ ${t("undo")}
              </button>
              <button id="btn-redo" class="px-3 py-2 rounded-xl bg-[#21132d] hover:bg-[#2d1a3e] text-xs font-semibold text-stone-300 border border-stone-700 transition-colors">
                ↻ ${t("redo")}
              </button>
            </div>

            <button id="btn-toggle-grid" class="w-full px-3 py-2 rounded-xl bg-[#21132d] hover:bg-[#2d1a3e] text-xs font-semibold text-stone-300 border border-stone-700 transition-colors">
              ${t("gridToggle")}
            </button>

            <button id="btn-clear-canvas" class="w-full px-3 py-2 rounded-xl bg-[#391522] hover:bg-[#4a1c2d] text-xs font-semibold text-[#ff8c42] border border-[#c83e63]/30 transition-colors">
              ${t("clearCanvas")}
            </button>
          </div>

        </div>

        <!-- CANVAS WORKSPACE (Right 3 Columns) -->
        <div class="lg:col-span-3 space-y-4">
          
          <div class="tihar-card rounded-3xl p-4 sm:p-6 border border-[#ffd166]/25 bg-[#170c1f] shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
            
            <!-- Canvas Container -->
            <div class="relative w-full aspect-square max-w-[620px] rounded-2xl overflow-hidden shadow-inner bg-[#140b1c] border border-stone-800 flex items-center justify-center select-none touch-none">
              <canvas 
                id="rangoli-canvas" 
                width="640" 
                height="640" 
                class="w-full h-full cursor-crosshair block"
              ></canvas>
            </div>

            <!-- Status & Instructions Bar -->
            <div class="w-full max-w-[620px] mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
              <p>
                Touch or drag on canvas. Symmetrical rays replicate your strokes automatically.
              </p>
              
              <!-- Download CTA -->
              <button 
                id="btn-download-rangoli" 
                class="px-5 py-2.5 rounded-xl bg-[#ffd166] text-[#140b1c] hover:bg-[#ff8c42] hover:text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>${t("downloadRangoli")}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  `;
}

export function attachRangoliEvents() {
  const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("rangoli-canvas"));
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let isDrawing = false;
  let currentColor = "#FFD166";
  let brushSize = 6;
  let brushOpacity = 1.0;
  let symmetryFold = 8;
  let activeTool = "brush"; // "brush", "eraser", "stamp"
  let activeStamp = null;
  let showGrid = false;

  // History Stack
  const history = [];
  let historyIndex = -1;

  function pushHistory() {
    // Cut any redo states
    if (historyIndex < history.length - 1) {
      history.splice(historyIndex + 1);
    }
    history.push(canvas.toDataURL());
    historyIndex = history.length - 1;
    // Limit history to 20 steps
    if (history.length > 20) {
      history.shift();
      historyIndex--;
    }
  }

  function redrawGrid() {
    if (!showGrid) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.save();
    ctx.strokeStyle = "rgba(255, 209, 102, 0.12)";
    ctx.lineWidth = 1;

    // Rings
    for (let r = 50; r <= 300; r += 50) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Spokes
    if (symmetryFold > 1) {
      for (let i = 0; i < symmetryFold; i++) {
        const angle = (i * 2 * Math.PI) / symmetryFold;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * 320, cy + Math.sin(angle) * 320);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function initializeCanvas() {
    // Dark deep courtyard background
    ctx.fillStyle = "#140b1c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial festive welcoming circle
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    ctx.save();
    ctx.strokeStyle = "rgba(255, 209, 102, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 35, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#C83E63";
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFD166";
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    pushHistory();
  }

  initializeCanvas();

  // Coordinates helper
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX = e.clientX;
    let clientY = e.clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  let lastX = 0;
  let lastY = 0;

  function drawStroke(x1, y1, x2, y2) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushSize;

    if (activeTool === "eraser") {
      ctx.strokeStyle = "#140b1c";
      ctx.globalAlpha = 1.0;
    } else {
      ctx.strokeStyle = currentColor;
      ctx.globalAlpha = brushOpacity;
    }

    if (symmetryFold <= 1) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else {
      for (let i = 0; i < symmetryFold; i++) {
        const angle = (i * 2 * Math.PI) / symmetryFold;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(x1 - cx, y1 - cy);
        ctx.lineTo(x2 - cx, y2 - cy);
        ctx.stroke();

        ctx.restore();
      }
    }
    ctx.restore();
  }

  function stampAt(x, y, stampType) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const renderStampGraphic = () => {
      ctx.save();
      ctx.font = `${Math.max(20, brushSize * 3)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let char = "🌼";
      if (stampType === "diya") char = "🪔";
      if (stampType === "footsteps") char = "👣";
      if (stampType === "lotus") char = "🪷";

      ctx.fillText(char, 0, 0);
      ctx.restore();
    };

    if (symmetryFold <= 1) {
      ctx.save();
      ctx.translate(x, y);
      renderStampGraphic();
      ctx.restore();
    } else {
      for (let i = 0; i < symmetryFold; i++) {
        const angle = (i * 2 * Math.PI) / symmetryFold;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.translate(x - cx, y - cy);
        renderStampGraphic();
        ctx.restore();
      }
    }
  }

  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;

    if (activeTool === "stamp" && activeStamp) {
      stampAt(pos.x, pos.y, activeStamp);
      pushHistory();
    }
  }

  function moveDraw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    if (activeTool === "stamp") return;

    const pos = getPos(e);
    drawStroke(lastX, lastY, pos.x, pos.y);
    lastX = pos.x;
    lastY = pos.y;
  }

  function stopDraw(e) {
    if (isDrawing) {
      isDrawing = false;
      if (activeTool !== "stamp") {
        pushHistory();
      }
    }
  }

  // Pointer & Touch Events
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mousemove", moveDraw);
  window.addEventListener("mouseup", stopDraw);

  canvas.addEventListener("touchstart", startDraw, { passive: false });
  canvas.addEventListener("touchmove", moveDraw, { passive: false });
  window.addEventListener("touchend", stopDraw);

  // Brush / Eraser Mode
  const brushBtn = document.getElementById("tool-brush-btn");
  const eraserBtn = document.getElementById("tool-eraser-btn");

  if (brushBtn && eraserBtn) {
    brushBtn.addEventListener("click", () => {
      activeTool = "brush";
      activeStamp = null;
      brushBtn.className =
        "px-3 py-2 rounded-xl text-xs font-semibold bg-[#ffd166] text-[#140b1c] flex items-center justify-center gap-1.5 transition-colors";
      eraserBtn.className =
        "px-3 py-2 rounded-xl text-xs font-semibold bg-[#2d1a3e] text-stone-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors border border-stone-800";
    });

    eraserBtn.addEventListener("click", () => {
      activeTool = "eraser";
      activeStamp = null;
      eraserBtn.className =
        "px-3 py-2 rounded-xl text-xs font-semibold bg-[#ff8c42] text-white flex items-center justify-center gap-1.5 transition-colors";
      brushBtn.className =
        "px-3 py-2 rounded-xl text-xs font-semibold bg-[#2d1a3e] text-stone-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors border border-stone-800";
    });
  }

  // Symmetry Buttons
  document.querySelectorAll(".sym-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sym-btn").forEach((b) => {
        b.className = "sym-btn px-2.5 py-1.5 text-xs font-medium rounded-lg text-stone-300 hover:text-white transition-colors";
      });
      btn.className = "sym-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#ffd166] text-[#140b1c] transition-colors";
      symmetryFold = Number(btn.getAttribute("data-sym")) || 8;
    });
  });

  // Color Buttons
  const activeColorLabel = document.getElementById("active-color-name");
  document.querySelectorAll(".color-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".color-btn").forEach((b) => {
        b.className = "color-btn w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 border-stone-700";
      });
      btn.className = "color-btn w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 border-white ring-2 ring-[#ffd166]";
      currentColor = btn.getAttribute("data-color") || "#FFD166";
      if (activeColorLabel) {
        activeColorLabel.textContent = btn.getAttribute("data-name") || "Custom";
      }
      if (activeTool === "eraser") {
        if (brushBtn) brushBtn.click();
      }
    });
  });

  // Custom Color Picker
  const customColorInput = /** @type {HTMLInputElement} */ (document.getElementById("custom-color-picker"));
  if (customColorInput) {
    customColorInput.addEventListener("input", (e) => {
      currentColor = /** @type {HTMLInputElement} */ (e.target).value;
      if (activeColorLabel) activeColorLabel.textContent = "Custom Pigment";
      if (activeTool === "eraser" && brushBtn) brushBtn.click();
    });
  }

  // Sliders
  const sizeSlider = /** @type {HTMLInputElement} */ (document.getElementById("brush-size-slider"));
  const sizeDisplay = document.getElementById("brush-size-display");
  if (sizeSlider) {
    sizeSlider.addEventListener("input", () => {
      brushSize = Number(sizeSlider.value);
      if (sizeDisplay) sizeDisplay.textContent = `${brushSize}px`;
    });
  }

  const opacitySlider = /** @type {HTMLInputElement} */ (document.getElementById("brush-opacity-slider"));
  const opacityDisplay = document.getElementById("brush-opacity-display");
  if (opacitySlider) {
    opacitySlider.addEventListener("input", () => {
      brushOpacity = Number(opacitySlider.value) / 100;
      if (opacityDisplay) opacityDisplay.textContent = `${opacitySlider.value}%`;
    });
  }

  // Stamps
  document.querySelectorAll(".stamp-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTool = "stamp";
      activeStamp = btn.getAttribute("data-stamp");
      document.querySelectorAll(".stamp-btn").forEach((b) => {
        b.classList.remove("bg-[#ffd166]", "text-[#140b1c]");
      });
      btn.classList.add("bg-[#ffd166]", "text-[#140b1c]");
    });
  });

  // Undo / Redo
  const undoBtn = document.getElementById("btn-undo");
  const redoBtn = document.getElementById("btn-redo");

  function restoreHistory(dataUrl) {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      redrawGrid();
    };
  }

  if (undoBtn) {
    undoBtn.addEventListener("click", () => {
      if (historyIndex > 0) {
        historyIndex--;
        restoreHistory(history[historyIndex]);
      }
    });
  }

  if (redoBtn) {
    redoBtn.addEventListener("click", () => {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        restoreHistory(history[historyIndex]);
      }
    });
  }

  // Clear Canvas
  const clearBtn = document.getElementById("btn-clear-canvas");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Clear this rangoli artwork and start fresh?")) {
        ctx.fillStyle = "#140b1c";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        pushHistory();
      }
    });
  }

  // Grid Toggle
  const gridBtn = document.getElementById("btn-toggle-grid");
  if (gridBtn) {
    gridBtn.addEventListener("click", () => {
      showGrid = !showGrid;
      gridBtn.textContent = showGrid ? "Hide Grid Guides" : t("gridToggle");
      // Restore current image then overlay grid
      restoreHistory(history[historyIndex]);
    });
  }

  // Download Canvas as PNG
  const downloadBtn = document.getElementById("btn-download-rangoli");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.download = `tihar-rangoli-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
}
