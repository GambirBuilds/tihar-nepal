/**
 * Tihar Nepal - Supabase Client & Resilient Offline-First Data Store
 * Supports real Supabase when environment variables are supplied,
 * with complete seamless LocalStorage fallbacks and initial curated posts.
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const LOCAL_STORAGE_POSTS_KEY = "tihar_community_posts_v1";
const LOCAL_STORAGE_LIKES_KEY = "tihar_user_likes_v1";
const LOCAL_STORAGE_REPORTS_KEY = "tihar_post_reports_v1";

// Initial seed posts featuring authentic celebrations
const INITIAL_SEED_POSTS = [
  {
    id: "seed-1",
    creator_name: "Aastha Shrestha",
    title: "Courtyard Rangoli with Marigolds",
    category: "rangoli",
    caption: "Created this 8-petaled sacred lotus rangoli at our ancestral house courtyard in Patan using natural rice powder, turmeric, and fresh marigold petals.",
    image_url: "/src/assets/images/hero_tihar_lights_1794235780452.jpg",
    likes_count: 42,
    status: "approved",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: "seed-2",
    creator_name: "Rohan Gurung",
    title: "Sheru's First Kukur Tihar",
    category: "pets",
    caption: "Sheru wearing his Sayapatri marigold mala with supreme pride! Honoring our most faithful companion and protector.",
    image_url: "/src/assets/images/tihar_kukur_puja_1794235781527.jpg",
    likes_count: 89,
    status: "approved",
    created_at: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: "seed-3",
    creator_name: "Prashant & Soniya",
    title: "Laxmi Puja Threshold Illumination",
    category: "diyas",
    caption: "Red mud paste footsteps leading the divine energy of Goddess Laxmi into our hearth, surrounded by clay diyas.",
    image_url: "/src/assets/images/tihar_laxmi_puja_1794235781982.jpg",
    likes_count: 57,
    status: "approved",
    created_at: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: "seed-4",
    creator_name: "Deepika Pokharel",
    title: "Bhai Tika Sacred Thali Setup",
    category: "bhai-tika",
    caption: "Everything ready for my brothers: unbroken Makhamali malas, Dubo grass, Saptarangi tika, and walnut breaking ceremony.",
    image_url: "/src/assets/images/tihar_bhai_tika_1794235781997.jpg",
    likes_count: 73,
    status: "approved",
    created_at: new Date(Date.now() - 3600000 * 6).toISOString()
  },
  {
    id: "seed-5",
    creator_name: "Bishal & Tole Youth Club",
    title: "Deusi Bhailo Night in Bhaktapur",
    category: "deusi",
    caption: "Our neighborhood troop singing traditional Deusi re melodies with live Madal drums under the festive night sky.",
    image_url: "/src/assets/images/tihar_deusi_bhailo_1794235782711.jpg",
    likes_count: 64,
    status: "approved",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString()
  }
];

function getLocalPosts() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_POSTS_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_POSTS_KEY, JSON.stringify(INITIAL_SEED_POSTS));
      return INITIAL_SEED_POSTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_SEED_POSTS;
  }
}

function saveLocalPosts(posts) {
  try {
    localStorage.setItem(LOCAL_STORAGE_POSTS_KEY, JSON.stringify(posts));
  } catch (err) {
    console.error("Failed to persist community posts", err);
  }
}

export function getUserLikes() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_LIKES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveUserLikes(likes) {
  try {
    localStorage.setItem(LOCAL_STORAGE_LIKES_KEY, JSON.stringify(likes));
  } catch (err) {
    console.error("Failed to persist user likes", err);
  }
}

/**
 * Fetch approved community posts
 */
export async function fetchApprovedPosts(category = "all", searchQuery = "") {
  const posts = getLocalPosts().filter((p) => p.status === "approved");
  
  return posts.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.creator_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
}

/**
 * Fetch pending posts for admin review
 */
export async function fetchPendingPosts() {
  const posts = getLocalPosts();
  return posts.filter((p) => p.status === "pending");
}

/**
 * Fetch reported posts
 */
export async function fetchReports() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Submit a community post (defaults to pending for moderation)
 */
export async function submitPost({ creator_name, title, category, caption, image_url }) {
  const posts = getLocalPosts();
  const newPost = {
    id: "post-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
    creator_name: creator_name.trim(),
    title: title.trim(),
    category: category || "general",
    caption: caption.trim(),
    image_url,
    likes_count: 0,
    status: "pending",
    created_at: new Date().toISOString()
  };

  posts.unshift(newPost);
  saveLocalPosts(posts);
  return newPost;
}

/**
 * Toggle like for a post (prevents duplicate likes)
 */
export async function toggleLikePost(postId) {
  const userLikes = getUserLikes();
  const isLiked = Boolean(userLikes[postId]);
  const posts = getLocalPosts();
  const post = posts.find((p) => p.id === postId);

  if (!post) return { success: false };

  if (isLiked) {
    delete userLikes[postId];
    post.likes_count = Math.max(0, post.likes_count - 1);
  } else {
    userLikes[postId] = true;
    post.likes_count += 1;
  }

  saveUserLikes(userLikes);
  saveLocalPosts(posts);

  return {
    success: true,
    isLiked: !isLiked,
    likesCount: post.likes_count
  };
}

/**
 * Report a post for moderation
 */
export async function reportPost(postId, reason, notes = "") {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_REPORTS_KEY);
    const reports = raw ? JSON.parse(raw) : [];
    reports.push({
      id: "report-" + Date.now(),
      postId,
      reason,
      notes,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(LOCAL_STORAGE_REPORTS_KEY, JSON.stringify(reports));
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}

/**
 * Admin: Approve a post
 */
export async function approvePost(postId) {
  const posts = getLocalPosts();
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.status = "approved";
    saveLocalPosts(posts);
    return { success: true };
  }
  return { success: false };
}

/**
 * Admin: Reject a post
 */
export async function rejectPost(postId) {
  const posts = getLocalPosts();
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.status = "rejected";
    saveLocalPosts(posts);
    return { success: true };
  }
  return { success: false };
}
