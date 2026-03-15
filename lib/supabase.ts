import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null
let _supabaseServer: SupabaseClient | null = null

/** Client avec clé anon (respecte le RLS). À utiliser côté client si besoin. */
export function getSupabase(): SupabaseClient | null {
  if (_supabase) return _supabase
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  _supabase = createClient(url, key)
  return _supabase
}

/**
 * Client avec clé service_role (contourne le RLS).
 * À utiliser UNIQUEMENT côté serveur (getProjects, etc.).
 * Ne jamais exposer cette clé (pas de NEXT_PUBLIC_).
 */
export function getSupabaseServer(): SupabaseClient | null {
  if (_supabaseServer) return _supabaseServer
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  _supabaseServer = createClient(url, key, { auth: { persistSession: false } })
  return _supabaseServer
}
