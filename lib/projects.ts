import { getSupabase, getSupabaseServer } from './supabase'

export type Project = {
  id: number | string
  title: string
  description: string
  technologies: string[]
  image: string | null
  link: string | null
  status: 'live' | 'development'
}

/** Row from Supabase (technologies can be jsonb or text[]) */
type ProjectRow = {
  id: number | string
  title: string
  description: string
  technologies: string[] | unknown
  image: string | null
  link: string | null
  status: string
}

function mapRow(row: ProjectRow): Project {
  const technologies = Array.isArray(row.technologies)
    ? row.technologies
    : typeof row.technologies === 'string'
      ? (() => {
          try {
            const parsed = JSON.parse(row.technologies) as unknown
            return Array.isArray(parsed) ? (parsed as string[]) : []
          } catch {
            return []
          }
        })()
      : []
  // Schéma BDD : image et link sont TEXT DEFAULT '' → on normalise '' en null
  const image = row.image?.trim()
  const link = row.link?.trim()
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    technologies,
    image: image || null,
    link: link || null,
    status: row.status === 'development' ? 'development' : 'live',
  }
}

export async function getProjects(): Promise<Project[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    console.error('[getProjects] NEXT_PUBLIC_SUPABASE_URL manquant dans .env.local')
    return []
  }

  // Préférer la clé service_role (contourne RLS) pour éviter les soucis de policy
  const supabase = getSupabaseServer() ?? getSupabase()
  if (!supabase) {
    console.error(
      '[getProjects] Ajoutez dans .env.local : NEXT_PUBLIC_SUPABASE_ANON_KEY ou SUPABASE_SERVICE_ROLE_KEY (recommandé pour la lecture des projets).'
    )
    return []
  }

  const { data, error } = await supabase
    .from('projects')
    .select('id, title, description, technologies, image, link, status')
    .eq('category', 'site_web_application')
    .order('id', { ascending: true })

  if (error) {
    console.error('[getProjects] Erreur Supabase:', error.message, error.details)
    return []
  }

  const list = (data as ProjectRow[]) ?? []
  return list.map(mapRow)
}
