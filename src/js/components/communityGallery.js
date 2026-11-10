/**
 * Tihar Nepal - Community Gallery & Moderation Desk
 * Category filters, search, persistent like/unlike, client-side upload validation, report modal, and admin review desk.
 */

import { t } from "../translations.js";
import {
  fetchApprovedPosts,
  fetchPendingPosts,
  fetchReports,
  submitPost,
  toggleLikePost,
  reportPost,
  approvePost,
  rejectPost,
  getUserLikes
} from "../../lib/supabaseClient.js";

export function renderCommunity() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <!-- Header -->
      <div class="text-center space-y-3 max-w-2xl mx-auto">
        <span class="text-xs font-semibold uppercase tracking-widest text-[#27845b]">Global Nepali Diaspora</span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ee]">
          ${t("communityTitle")}
        </h1>
        <p class="text-stone-300 text-sm leading-relaxed">
          ${t("communitySubtitle")}
        </p>
      </div>

      <!-- Action & Filter Bar -->
      <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        <!-- Category Filters -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none p-1 bg-[#21132d] rounded-2xl border border-stone-800">
          <button data-cat="all" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#ffd166] text-[#140b1c] whitespace-nowrap transition-colors">
            ${t("filterAll")}
          </button>
          <button data-cat="diyas" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors">
            ${t("filterDiyas")}
          </button>
          <button data-cat="rangoli" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors">
            ${t("filterRangoli")}
          </button>
          <button data-cat="pets" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors">
            ${t("filterPets")}
          </button>
          <button data-cat="bhai-tika" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors">
            ${t("filterBhaiTika")}
          </button>
          <button data-cat="deusi" class="cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors">
            ${t("filterDeusi")}
          </button>
        </div>

        <!-- Search & Action Buttons -->
        <div class="flex items-center gap-3">
          <!-- Search input -->
          <div class="relative flex-1 sm:w-64">
            <input 
              type="text" 
              id="community-search-input" 
              placeholder="${t("searchCommunity")}"
              class="w-full px-3.5 py-2 pl-9 rounded-xl bg-[#21132d] border border-stone-800 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#ffd166]"
            />
            <svg class="w-4 h-4 text-stone-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Share Moment Button -->
          <button 
            id="btn-open-submit-modal"
            class="px-4 py-2 rounded-xl text-xs font-bold text-[#140b1c] bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>+</span>
            <span>${t("shareMomentBtn")}</span>
          </button>

          <!-- Admin Moderation Desk Toggle -->
          <button 
            id="btn-toggle-admin-desk"
            class="px-3 py-2 rounded-xl text-xs font-semibold text-stone-300 bg-[#2d1a3e] hover:bg-[#3d2354] border border-stone-700 transition-colors whitespace-nowrap shrink-0"
            title="Administrator Review Desk"
          >
            ⚖️ Desk
          </button>
        </div>

      </div>

      <!-- ADMIN MODERATION DESK DRAWER (Initially collapsed) -->
      <div id="admin-desk-drawer" class="hidden tihar-card rounded-3xl p-6 sm:p-8 border border-[#ff8c42]/40 bg-[#1f0e26] space-y-6">
        <div class="flex items-center justify-between border-b border-stone-800 pb-3">
          <div class="space-y-0.5">
            <h3 class="font-serif text-lg font-bold text-[#ffd166] flex items-center gap-2">
              <span>🛡️</span>
              <span>${t("adminPendingPosts")}</span>
            </h3>
            <p class="text-xs text-stone-400">
              ${t("pendingNotice")}
            </p>
          </div>
          <button id="btn-close-admin-desk" class="text-xs text-stone-400 hover:text-white px-2 py-1 rounded bg-[#140b1c]">
            Close Desk
          </button>
        </div>

        <div id="admin-pending-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Populated by attachCommunityEvents -->
        </div>
      </div>

      <!-- POSTS FEED GRID -->
      <div id="posts-feed-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Rendered by attachCommunityEvents -->
      </div>

      <!-- SUBMISSION MODAL -->
      <div id="submission-modal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="tihar-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#ffd166]/30 bg-[#1c0f26] space-y-5 relative max-h-[90vh] overflow-y-auto">
          
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <h3 class="font-serif text-xl font-bold text-[#ffd166]">
              ${t("submitModalTitle")}
            </h3>
            <button id="btn-close-submit-modal" class="text-stone-400 hover:text-white text-lg font-bold p-1">
              ✕
            </button>
          </div>

          <form id="community-submit-form" class="space-y-4 text-xs">
            <div class="space-y-1">
              <label class="font-semibold text-stone-300">${t("creatorLabel")} *</label>
              <input 
                type="text" 
                id="form-creator-name" 
                required 
                placeholder="e.g. Sunil Thapa"
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]"
              />
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-stone-300">Title *</label>
              <input 
                type="text" 
                id="form-post-title" 
                required 
                placeholder="e.g. Our Kukur Tihar garland ceremony"
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]"
              />
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-stone-300">${t("categoryLabel")} *</label>
              <select id="form-category-select" class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166]">
                <option value="diyas">Diyas & Lights</option>
                <option value="rangoli">Rangoli Art</option>
                <option value="pets">Kukur Tihar Pets</option>
                <option value="bhai-tika">Bhai Tika</option>
                <option value="deusi">Deusi Bhailo</option>
                <option value="general">General Festival</option>
              </select>
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-stone-300">${t("captionLabel")} *</label>
              <textarea 
                id="form-caption-input" 
                required 
                rows="3" 
                placeholder="Share the story behind this festive moment..."
                class="w-full px-3 py-2 rounded-xl bg-[#140b1c] border border-stone-800 text-stone-200 focus:outline-none focus:border-[#ffd166] resize-none"
              ></textarea>
            </div>

            <div class="space-y-1">
              <label class="font-semibold text-stone-300">${t("uploadImageLabel")}</label>
              <input 
                type="file" 
                id="form-file-input" 
                accept="image/jpeg,image/png,image/webp"
                class="w-full text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#ffd166] file:text-[#140b1c] hover:file:bg-[#ff8c42] cursor-pointer"
              />
              <p id="file-error-msg" class="text-[11px] text-red-400 hidden"></p>
            </div>

            <!-- Image Preview Box -->
            <div id="image-preview-wrapper" class="hidden aspect-video rounded-xl overflow-hidden border border-stone-800 relative bg-stone-900">
              <img id="form-image-preview" src="" alt="Submission Preview" class="w-full h-full object-cover" />
            </div>

            <div class="pt-2">
              <p class="text-[11px] text-stone-400 italic mb-3">
                * Note: Submissions are held in moderation queue to ensure family-friendly cultural celebration.
              </p>
              <button 
                type="submit" 
                id="btn-submit-post"
                class="w-full py-3 rounded-xl bg-[#ffd166] hover:bg-[#ff8c42] hover:text-white text-[#140b1c] font-bold text-xs shadow-lg transition-all"
              >
                ${t("submitBtn")}
              </button>
            </div>
          </form>

        </div>
      </div>

      <!-- REPORT MODAL -->
      <div id="report-modal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="tihar-card rounded-2xl p-6 max-w-sm w-full border border-stone-800 bg-[#1c0f26] space-y-4">
          <h3 class="font-serif text-lg font-bold text-stone-200">
            Report Inappropriate Content
          </h3>
          <p class="text-xs text-stone-400">
            Help us maintain a respectful community celebration. Please select reason:
          </p>
          <div class="space-y-2 text-xs">
            <label class="flex items-center gap-2 cursor-pointer text-stone-300">
              <input type="radio" name="report-reason" value="Irrelevant or spam" checked />
              <span>Irrelevant or spam</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-stone-300">
              <input type="radio" name="report-reason" value="Inappropriate or offensive image" />
              <span>Inappropriate or offensive image</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-stone-300">
              <input type="radio" name="report-reason" value="Copyright infringement" />
              <span>Copyright infringement</span>
            </label>
          </div>
          <div class="flex items-center justify-end gap-2 pt-2">
            <button id="btn-cancel-report" class="px-3 py-1.5 rounded-lg text-xs bg-stone-800 text-stone-300">
              Cancel
            </button>
            <button id="btn-confirm-report" class="px-3 py-1.5 rounded-lg text-xs bg-[#c83e63] text-white font-semibold">
              Submit Report
            </button>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function attachCommunityEvents() {
  const feedContainer = document.getElementById("posts-feed-container");
  const searchInput = document.getElementById("community-search-input");
  let activeCategory = "all";
  let activeSearch = "";

  async function loadAndRenderPosts() {
    if (!feedContainer) return;
    const posts = await fetchApprovedPosts(activeCategory, activeSearch);
    const userLikes = getUserLikes();

    if (posts.length === 0) {
      feedContainer.innerHTML = `
        <div class="col-span-full p-12 text-center text-stone-400 tihar-card rounded-2xl space-y-2">
          <p class="text-base font-serif text-stone-300">No community moments found</p>
          <p class="text-xs">Be the first to share your celebration in this category!</p>
        </div>
      `;
      return;
    }

    feedContainer.innerHTML = posts
      .map((post) => {
        const isLiked = Boolean(userLikes[post.id]);
        return `
        <div class="tihar-card rounded-2xl overflow-hidden border border-[#ffd166]/20 bg-[#1c0f26]/80 flex flex-col justify-between group hover:border-[#ffd166]/40 transition-all">
          
          <!-- Image -->
          <div class="aspect-[4/3] w-full overflow-hidden bg-stone-900 relative">
            <img 
              src="${post.image_url}" 
              alt="${post.title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerpolicy="no-referrer"
            />
            <span class="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#140b1c]/80 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-[#ffd166] border border-[#ffd166]/20">
              ${post.category}
            </span>
          </div>

          <!-- Content Body -->
          <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div class="space-y-1.5">
              <h3 class="font-serif text-lg font-bold text-[#f7f4ee] line-clamp-1 group-hover:text-[#ffd166] transition-colors">
                ${post.title}
              </h3>
              <p class="text-xs text-stone-400 leading-relaxed line-clamp-2">
                ${post.caption}
              </p>
            </div>

            <!-- Footer: Creator & Like/Report Actions -->
            <div class="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
              <span class="text-stone-400 truncate max-w-[130px]">
                by <strong class="text-stone-200 font-medium">${post.creator_name}</strong>
              </span>

              <div class="flex items-center gap-3">
                <!-- Like Button -->
                <button 
                  data-post-id="${post.id}"
                  class="like-btn flex items-center gap-1.5 transition-transform active:scale-125 ${
                    isLiked ? "text-[#c83e63] font-bold" : "text-stone-400 hover:text-[#c83e63]"
                  }"
                  title="Like this moment"
                >
                  <svg class="w-4 h-4" fill="${isLiked ? "currentColor" : "none"}" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span class="likes-count tabular-nums">${post.likes_count}</span>
                </button>

                <!-- Report Flag -->
                <button 
                  data-report-post-id="${post.id}" 
                  class="report-btn text-stone-400 hover:text-red-400 transition-colors"
                  title="Report inappropriate content"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>
      `;
      })
      .join("");

    // Attach like listeners
    document.querySelectorAll(".like-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const postId = btn.getAttribute("data-post-id");
        if (postId) {
          const res = await toggleLikePost(postId);
          if (res.success) {
            loadAndRenderPosts();
          }
        }
      });
    });

    // Attach report listeners
    document.querySelectorAll(".report-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const postId = btn.getAttribute("data-report-post-id");
        openReportModal(postId);
      });
    });
  }

  // Admin Pending Posts Drawer
  async function loadAdminPending() {
    const container = document.getElementById("admin-pending-container");
    if (!container) return;

    const pending = await fetchPendingPosts();
    if (pending.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-4 text-center text-xs text-stone-400 bg-[#160b1e] rounded-xl">
          ${t("noPending")}
        </div>
      `;
      return;
    }

    container.innerHTML = pending
      .map(
        (post) => `
      <div class="p-3 rounded-xl bg-[#160b1e] border border-stone-800 space-y-2 text-xs">
        <div class="aspect-video w-full rounded-lg overflow-hidden bg-stone-900">
          <img src="${post.image_url}" alt="${post.title}" class="w-full h-full object-cover" />
        </div>
        <div>
          <h4 class="font-bold text-stone-200">${post.title}</h4>
          <p class="text-stone-400 line-clamp-1">${post.caption}</p>
          <span class="text-[10px] text-stone-400">By ${post.creator_name}</span>
        </div>
        <div class="flex items-center gap-2 pt-1">
          <button data-approve="${post.id}" class="approve-btn flex-1 py-1 rounded bg-[#27845b] text-white font-semibold hover:bg-emerald-600 transition-colors">
            Approve
          </button>
          <button data-reject="${post.id}" class="reject-btn flex-1 py-1 rounded bg-stone-800 text-stone-300 hover:bg-red-900 transition-colors">
            Reject
          </button>
        </div>
      </div>
    `
      )
      .join("");

    document.querySelectorAll(".approve-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-approve");
        if (id) {
          await approvePost(id);
          loadAdminPending();
          loadAndRenderPosts();
        }
      });
    });

    document.querySelectorAll(".reject-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-reject");
        if (id) {
          await rejectPost(id);
          loadAdminPending();
        }
      });
    });
  }

  // Admin Desk Drawer Toggle
  const deskToggleBtn = document.getElementById("btn-toggle-admin-desk");
  const deskDrawer = document.getElementById("admin-desk-drawer");
  const closeDeskBtn = document.getElementById("btn-close-admin-desk");

  if (deskToggleBtn && deskDrawer) {
    deskToggleBtn.addEventListener("click", () => {
      deskDrawer.classList.toggle("hidden");
      if (!deskDrawer.classList.contains("hidden")) {
        loadAdminPending();
      }
    });
  }
  if (closeDeskBtn && deskDrawer) {
    closeDeskBtn.addEventListener("click", () => {
      deskDrawer.classList.add("hidden");
    });
  }

  // Category Filter Buttons
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-filter-btn").forEach((b) => {
        b.className = "cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl text-stone-300 hover:text-white whitespace-nowrap transition-colors";
      });
      btn.className = "cat-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#ffd166] text-[#140b1c] whitespace-nowrap transition-colors";
      activeCategory = btn.getAttribute("data-cat") || "all";
      loadAndRenderPosts();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = /** @type {HTMLInputElement} */ (e.target).value;
      loadAndRenderPosts();
    });
  }

  // Submission Modal
  const modal = document.getElementById("submission-modal");
  const openModalBtn = document.getElementById("btn-open-submit-modal");
  const closeModalBtn = document.getElementById("btn-close-submit-modal");
  const form = /** @type {HTMLFormElement} */ (document.getElementById("community-submit-form"));
  const fileInput = /** @type {HTMLInputElement} */ (document.getElementById("form-file-input"));
  const imagePreviewWrapper = document.getElementById("image-preview-wrapper");
  const imagePreview = /** @type {HTMLImageElement} */ (document.getElementById("form-image-preview"));
  const fileError = document.getElementById("file-error-msg");

  let uploadedImageData = "/src/assets/images/hero_tihar_lights_1794235780452.jpg";

  if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  // File Upload Handling with Client-Side Validation
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = fileInput.files?.[0];
      if (!file) return;

      // Validate file size (< 5MB)
      if (file.size > 5 * 1024 * 1024) {
        if (fileError) {
          fileError.textContent = "File exceeds 5MB size limit. Please choose a smaller photo.";
          fileError.classList.remove("hidden");
        }
        fileInput.value = "";
        return;
      }

      // Validate type
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
        if (fileError) {
          fileError.textContent = "Unsupported format. Please upload JPEG, PNG, or WebP.";
          fileError.classList.remove("hidden");
        }
        fileInput.value = "";
        return;
      }

      if (fileError) fileError.classList.add("hidden");

      const reader = new FileReader();
      reader.onload = (readEvent) => {
        uploadedImageData = /** @type {string} */ (readEvent.target?.result);
        if (imagePreview && imagePreviewWrapper) {
          imagePreview.src = uploadedImageData;
          imagePreviewWrapper.classList.remove("hidden");
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // Form Submit
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const creatorEl = document.getElementById("form-creator-name");
      const titleEl = document.getElementById("form-post-title");
      const categoryEl = document.getElementById("form-category-select");
      const captionEl = document.getElementById("form-caption-input");

      const creator = creatorEl ? creatorEl.value : "";
      const title = titleEl ? titleEl.value : "";
      const category = categoryEl ? categoryEl.value : "general";
      const caption = captionEl ? captionEl.value : "";

      if (!creator || !title || !caption) return;

      await submitPost({
        creator_name: creator,
        title,
        category,
        caption,
        image_url: uploadedImageData
      });

      alert("Thank you! Your Tihar celebration has been submitted for admin approval.");
      form.reset();
      if (imagePreviewWrapper) imagePreviewWrapper.classList.add("hidden");
      if (modal) modal.classList.add("hidden");
      loadAdminPending();
    });
  }

  // Report Modal
  const reportModal = document.getElementById("report-modal");
  const cancelReportBtn = document.getElementById("btn-cancel-report");
  const confirmReportBtn = document.getElementById("btn-confirm-report");
  let reportingPostId = null;

  function openReportModal(postId) {
    reportingPostId = postId;
    if (reportModal) reportModal.classList.remove("hidden");
  }

  if (cancelReportBtn && reportModal) {
    cancelReportBtn.addEventListener("click", () => {
      reportModal.classList.add("hidden");
      reportingPostId = null;
    });
  }

  if (confirmReportBtn && reportModal) {
    confirmReportBtn.addEventListener("click", async () => {
      const checkedInput = document.querySelector('input[name="report-reason"]:checked');
      const checkedReason = checkedInput ? checkedInput.value : "Inappropriate";
      if (reportingPostId) {
        await reportPost(reportingPostId, checkedReason);
        alert("Report received. Our moderation team will review this post.");
      }
      reportModal.classList.add("hidden");
      reportingPostId = null;
    });
  }

  loadAndRenderPosts();
}
