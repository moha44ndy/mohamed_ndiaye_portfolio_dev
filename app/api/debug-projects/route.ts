import { getProjects } from '@/lib/projects'
import { NextResponse } from 'next/server'

/**
 * Route de debug : GET /api/debug-projects
 * À supprimer en production.
 * Indique si Supabase est configuré et combien de projets sont retournés.
 */
export async function GET() {
  const hasUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL)
  const hasKey = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  const projects = await getProjects()

  return NextResponse.json({
    env: {
      hasSupabaseUrl: hasUrl,
      hasSupabaseAnonKey: hasKey,
      hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
      configured: hasUrl && (hasKey || Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY)),
    },
    count: projects.length,
    projects: projects.map((p) => ({ id: p.id, title: p.title, status: p.status })),
  })
}
