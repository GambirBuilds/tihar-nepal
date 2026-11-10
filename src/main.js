/**
 * Tihar Nepal - Main Application Entry Point & Client-Side Router
 * Vanilla JavaScript ES6+ SPA architecture.
 */

import "./index.css";
import { renderNavbar, attachNavbarEvents } from "./js/components/navbar.js";
import { renderFooter } from "./js/components/footer.js";
import { renderHome, attachHomeEvents } from "./js/components/home.js";
import { renderAbout } from "./js/components/about.js";
import { renderFiveDays, attachFiveDaysEvents } from "./js/components/fiveDays.js";
import { renderDeusiBhailo, attachDeusiEvents } from "./js/components/deusiBhailo.js";
import { renderRangoli, attachRangoliEvents } from "./js/components/rangoli.js";
import { renderWishes, attachWishesEvents } from "./js/components/wishesStudio.js";
import { renderVirtualDiya, attachVirtualDiyaEvents } from "./js/components/virtualDiya.js";
import { renderCommunity, attachCommunityEvents } from "./js/components/communityGallery.js";
import { renderBhaiTika, attachBhaiTikaEvents } from "./js/components/bhaiTika.js";
import { renderGallery, attachGalleryEvents } from "./js/components/photoGallery.js";

const appContainer = document.getElementById("app");

function parseHash() {
  const hash = window.location.hash.slice(1) || "home";
  const [route, queryString] = hash.split("?");
  const params = new URLSearchParams(queryString || "");
  return { route, params };
}

function renderApp() {
  if (!appContainer) return;

  const { route, params } = parseHash();

  let mainContent = "";

  switch (route) {
    case "about":
      mainContent = renderAbout();
      break;
    case "five-days":
      mainContent = renderFiveDays(params.get("day") || 1);
      break;
    case "deusi-bhailo":
      mainContent = renderDeusiBhailo();
      break;
    case "rangoli":
      mainContent = renderRangoli();
      break;
    case "wishes":
      mainContent = renderWishes();
      break;
    case "diya":
      mainContent = renderVirtualDiya();
      break;
    case "community":
      mainContent = renderCommunity();
      break;
    case "bhai-tika":
      mainContent = renderBhaiTika();
      break;
    case "gallery":
      mainContent = renderGallery();
      break;
    case "home":
    default:
      mainContent = renderHome();
      break;
  }

  appContainer.innerHTML = `
    ${renderNavbar(route)}
    <main class="flex-1">
      ${mainContent}
    </main>
    ${renderFooter()}
  `;

  // Attach navbar interactivity
  attachNavbarEvents();

  // Attach view-specific interactivity
  switch (route) {
    case "about":
      break;
    case "five-days":
      attachFiveDaysEvents(params.get("day") || 1);
      break;
    case "deusi-bhailo":
      attachDeusiEvents();
      break;
    case "rangoli":
      attachRangoliEvents();
      break;
    case "wishes":
      attachWishesEvents();
      break;
    case "diya":
      attachVirtualDiyaEvents();
      break;
    case "community":
      attachCommunityEvents();
      break;
    case "bhai-tika":
      attachBhaiTikaEvents();
      break;
    case "gallery":
      attachGalleryEvents();
      break;
    case "home":
    default:
      attachHomeEvents();
      break;
  }

  // Scroll to top on route change
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Router Event Listeners
window.addEventListener("hashchange", renderApp);
window.addEventListener("tihar:lang-changed", renderApp);
window.addEventListener("DOMContentLoaded", renderApp);

// Initial invocation
renderApp();
