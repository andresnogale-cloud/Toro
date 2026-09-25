/* Toro settings.
   Accounts, sync and friends switch on when both Supabase values are filled in.
   Create a free project at https://supabase.com, run supabase/schema.sql in its SQL editor,
   then copy Project URL and the anon public key from Project Settings > API.
   The anon key is meant to be public; row-level security in schema.sql protects the data. */
window.TORO_CONFIG = {
  // Your live site, for example 'https://toro.vercel.app'. The phone apps use it for real market data and sign-in links.
  siteUrl: '',
  supabaseUrl: '',      // e.g. 'https://abcdefgh.supabase.co'
  supabaseAnonKey: '',  // the "anon public" key
  google: false         // true after enabling Google under Authentication > Providers
};
