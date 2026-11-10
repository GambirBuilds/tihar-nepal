-- ==============================================================================
-- TIHAR NEPAL - SUPABASE DATABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS on Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Community Posts Table
CREATE TABLE IF NOT EXISTS public.community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE SET NULL,
  creator_name TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('diyas', 'rangoli', 'pets', 'bhai-tika', 'deusi', 'general')),
  caption TEXT NOT NULL,
  image_url TEXT NOT NULL,
  likes_count INTEGER DEFAULT 0 NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS on Community Posts
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

-- Everyone can view approved posts
CREATE POLICY "Approved community posts are viewable by everyone" 
  ON public.community_posts FOR SELECT USING (status = 'approved');

-- Authenticated or guest users can submit new posts (defaults to pending)
CREATE POLICY "Users can submit posts with pending status" 
  ON public.community_posts FOR INSERT WITH CHECK (status = 'pending');

-- 3. Post Likes Table (Prevents duplicate likes)
CREATE TABLE IF NOT EXISTS public.post_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  CONSTRAINT unique_post_user_like UNIQUE (post_id, user_id)
);

-- Enable RLS on Post Likes
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view likes" 
  ON public.post_likes FOR SELECT USING (true);

CREATE POLICY "Authenticated users can like posts" 
  ON public.post_likes FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their own like" 
  ON public.post_likes FOR DELETE USING (auth.uid() = user_id);

-- 4. Post Reports Table (Moderation)
CREATE TABLE IF NOT EXISTS public.post_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE NOT NULL,
  reason TEXT NOT NULL,
  reporter_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS on Post Reports
ALTER TABLE public.post_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a report" 
  ON public.post_reports FOR INSERT WITH CHECK (true);

-- 5. Storage Bucket Configuration for Community Images
-- Insert bucket if storage schema exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('community-images', 'community-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public Access to Community Images" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'community-images');

CREATE POLICY "Anyone can upload Community Images" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'community-images');
