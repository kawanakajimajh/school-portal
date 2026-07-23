// =========================================
// 川中島中学校 CMS Version4
// Supabase 接続設定
// =========================================

// CDNからSupabaseを読み込む
const { createClient } = supabase;

// Project URL
const SUPABASE_URL =
"https://mmwangsrfumxqgmqnkvm.supabase.co";

// Publishable Key
const SUPABASE_ANON_KEY =
"sb_publishable_vekcLKHsbpLG-p9IBnf6Sg_iXBWDtMw";

// Supabase Client
const db = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected!");
