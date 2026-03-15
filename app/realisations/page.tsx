import Link from 'next/link'
import { unstable_noStore } from 'next/cache'
import styles from './page.module.css'
import Footer from '../components/Footer'
import { getProjects } from '@/lib/projects'

export const dynamic = 'force-dynamic'

export default async function RealisationsPage() {
  unstable_noStore()
  const projects = await getProjects()

  return (
    <div className={styles.realisationsPage}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>
              ← Retour à l&apos;accueil
            </Link>
            <div className={styles.brandContainer}>
              <div className={styles.headerPhotoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="images/photo_momo.jpeg"
                  alt="Photo de Mohamed NDIAYE"
                  className={styles.headerPhoto}
                />
              </div>
              <h1 className={styles.title}>PORTFOLIO DE MOHAMED NDIAYE</h1>
              <p className={styles.subtitle}>
                Étudiant en 2ᵉ année d&apos;ingénierie à <strong>ECE Paris</strong>.
              </p>
              <p className={styles.subtitle}>
                Ce portfolio présente mon parcours, mes expériences académiques et professionnelles, ainsi qu&apos;une sélection de projets réalisés.
                Je suis actuellement à la recherche d&apos;une alternance en <strong>cybersécurité</strong> et en <strong>réseaux</strong> pour l&apos;année universitaire <strong>2026-2027</strong>, dans le cadre de ma 3ᵉ année de Bachelor.{' '}
                <a 
                  href="https://wa.me/33744987853" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'white', textDecoration: 'underline', fontWeight: '600' }}
                >
                  Contactez-moi
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={`card ${styles.projectCard}`}>
                {project.status === 'development' && (
                  <span className={styles.statusBadge}>En développement</span>
                )}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectImageLink}>
                    <div className={styles.projectImage}>
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={180}
                          className={styles.projectImageContent}
                        />
                      ) : null}
                    </div>
                  </a>
                ) : (
                  <div className={styles.projectImage}>
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={180}
                        className={styles.projectImageContent}
                      />
                    ) : null}
                  </div>
                )}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
