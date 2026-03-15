import Link from 'next/link'
import { unstable_noStore } from 'next/cache'
import styles from './page.module.css'
import Footer from './components/Footer'
import CvAndLetterSection from './components/CvAndLetterSection'
import { getProjects } from '@/lib/projects'

export const dynamic = 'force-dynamic'

const ProjectIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    airplane: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.56 3.44C20.15 3.03 19.5 3.03 19.09 3.44L15.5 7.03L8.5 4.03L5.5 7.03L2.5 4.03L1.5 5.03L4.5 8.03L3.5 9.03L6.5 12.03L5.5 13.03L8.5 16.03L7.5 17.03L10.5 20.03L11.5 19.03L8.5 16.03L11.5 13.03L12.5 14.03L15.5 11.03L16.5 12.03L20.09 8.44C20.5 8.03 20.5 7.38 20.09 6.97L17.03 3.91C16.62 3.5 15.97 3.5 15.56 3.91L20.56 3.44Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
      </svg>
    ),
    diamond: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2L2 7L12 22L22 7L18 2H6ZM8 4H16L19.5 8H4.5L8 4ZM4.5 10H19.5L12 20L4.5 10Z" fill="currentColor"/>
        <path d="M12 2L2 7L12 22L22 7L12 2ZM6 4H18L21 8H3L6 4ZM3 10H21L12 20L3 10Z" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    food: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.1 13.34L10.93 10.51L3.91 3.5C2.35 5.06 2.35 7.59 3.91 9.16L8.1 13.34ZM14.88 11.53C16.41 12.24 18.56 11.74 20.15 10.15C22.06 8.24 22.43 5.5 21.04 4.11C19.65 2.72 16.91 3.09 15 5C13.41 6.59 12.91 8.74 13.62 10.27L3.7 20.19L5.11 21.6L15.03 11.68L14.88 11.53Z" fill="currentColor"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C16.84 22 20.87 18.94 21.8 14.4C21.93 13.9 21.5 13.5 21 13.5H19.5C19.22 13.5 18.97 13.63 18.8 13.84C18.11 14.68 17.03 15.2 15.83 15.2C13.62 15.2 11.83 13.41 11.83 11.2C11.83 9.99 12.35 8.91 13.19 8.22C13.4 8.05 13.53 7.8 13.53 7.52V6C13.53 5.5 13.13 5.07 12.63 5.2C10.59 5.75 9 7.59 9 9.77C9 10.3 9.1 10.81 9.28 11.28C9.46 11.75 9.72 12.18 10.05 12.55C10.38 12.92 10.78 13.22 11.22 13.44C11.66 13.66 12.14 13.77 12.63 13.77C13.41 13.77 14.16 13.55 14.8 13.15C15.44 12.75 15.95 12.18 16.27 11.5C16.59 10.82 16.72 10.06 16.63 9.32C16.54 8.58 16.24 7.88 15.77 7.32L15.77 7.32Z" fill="currentColor"/>
        <circle cx="6.5" cy="8.5" r="1.5" fill="white"/>
        <circle cx="9.5" cy="6.5" r="1.5" fill="white"/>
        <circle cx="13.5" cy="7.5" r="1.5" fill="white"/>
      </svg>
    ),
    music: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12Z" fill="currentColor"/>
        <circle cx="10" cy="17" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  }
  
  return icons[type] || icons.airplane
}

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'JavaScript',
  'PHP',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Linux',
  'Réseaux',
  'Cybersécurité (bases, RGPD)',
  'Design UX/UI',
]

export default async function Home() {
  unstable_noStore()
  const allProjects = await getProjects()
  const projects = allProjects.slice(0, 5)

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
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
          <CvAndLetterSection />

          <section className={styles.aboutSection}>
            <div className={`card ${styles.aboutCard}`}>
              <h2 className={`${styles.sectionTitle} ${styles.aboutTitle}`}>À propos de moi</h2>
              <div className={styles.contactInfo}>
                <a
                  href="mailto:mohamedndiayeallioune@gmail.com"
                  className={styles.contactLink}
                  title="mohamedndiayeallioune@gmail.com"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-ndiaye-00b8093a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  title="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0H5C2.79 0 1 1.79 1 4V20C1 22.21 2.79 24 5 24H19C21.21 24 23 22.21 23 20V4C23 1.79 21.21 0 19 0ZM8 20H5V9H8V20ZM6.5 7.73C5.4 7.73 4.5 6.82 4.5 5.73C4.5 4.64 5.4 3.73 6.5 3.73C7.6 3.73 8.5 4.64 8.5 5.73C8.5 6.82 7.6 7.73 6.5 7.73ZM20 20H17V14.5C17 13.12 15.88 12 14.5 12C13.12 12 12 13.12 12 14.5V20H9V9H12V10.4C12.7 9.53 13.8 9 15 9C17.21 9 19 10.79 19 13V20H20Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="tel:+33744987853"
                  className={styles.contactLink}
                  title="+33 7 44 98 78 53"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C11.72 21 5 14.28 5 6C5 5.45 5.45 5 6 5H9.5C10.05 5 10.5 5.45 10.5 6C10.5 7.24 10.7 8.45 11.07 9.57C11.19 9.92 11.1 10.32 10.83 10.59L8.62 12.8L6.62 10.79Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/33744987853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  title="WhatsApp: +33 7 44 98 78 53"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.52 3.48C18.17 1.13 15.21 0 12 0C5.37 0 0 5.37 0 12C0 13.93 0.49 15.8 1.42 17.47L0 24L6.59 22.6C8.2 23.46 10.06 24 12 24C18.63 24 24 18.63 24 12C24 8.79 22.87 5.83 20.52 3.48ZM12 21.82C10.38 21.82 8.8 21.37 7.43 20.52L7.16 20.35L3.57 21.13L4.36 17.57L4.17 17.27C3.27 15.85 2.82 14.26 2.82 12.61C2.82 7 7.39 2.43 12.99 2.43C15.76 2.43 18.31 3.51 20.19 5.39C22.07 7.27 23.15 9.82 23.15 12.59C23.15 18.2 18.58 22.77 12.97 22.77L12 21.82Z" fill="currentColor"/>
                    <path d="M17.21 14.46L15.19 13.58C14.98 13.49 14.75 13.5 14.56 13.63L13.82 14.16C13.63 14.29 13.39 14.3 13.19 14.18C12.31 13.65 11.43 12.84 10.74 11.96C10.61 11.77 10.62 11.53 10.75 11.34L11.28 10.6C11.41 10.41 11.42 10.18 11.33 9.97L10.45 7.95C10.29 7.6 9.86 7.46 9.52 7.63C9.06 7.86 8.66 8.2 8.35 8.62C8.03 9.06 7.85 9.58 7.83 10.12C7.79 11.23 8.2 12.44 9.03 13.73C9.85 15 10.98 16.17 12.12 16.86C13.31 17.59 14.43 17.94 15.47 17.94C16.01 17.94 16.52 17.76 16.96 17.45C17.39 17.14 17.73 16.74 17.96 16.28C18.13 15.94 17.99 15.51 17.64 15.34L17.21 14.46Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <h3 className={styles.skillsTitle}>Compétences</h3>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className={styles.aboutText}>
                Je suis <strong>Mohamed NDIAYE</strong>, étudiant ivoirien en 2ᵉ année d&apos;ingénierie à <strong>ECE Paris</strong>, passionné par le développement web, les réseaux et la cybersécurité. 
                Après l&apos;obtention de mon baccalauréat, j&apos;ai intégré l&apos;<strong>ECE Paris</strong>, où je consolide mes bases techniques et collabore sur de nombreux projets concrets. 
                J&apos;ai également eu l&apos;opportunité de travailler chez <strong>Huawei en Côte d&apos;Ivoire</strong> en tant qu&apos;assistant développeur en 2025, une expérience enrichissante qui m&apos;a permis de concilier études et pratique professionnelle. 
                À partir du <strong>13 avril 2026</strong>, je débuterai un <strong>stage</strong> chez Huawei pour une nouvelle période allant jusqu&apos;au <strong>13 août 2026</strong>. 
                Grâce à la qualité de mon travail et à ma discipline, l&apos;équipe n&apos;a pas hésité à me confier à nouveau des responsabilités, cette fois-ci centrées sur des projets orientés <strong>réseaux</strong>, afin de bénéficier d&apos;une formation à l&apos;image du géant du numérique <strong>Huawei</strong>.
              </p>
              <p className={styles.aboutText}>
                Au fil de mon parcours, j&apos;ai conçu et développé plusieurs projets web pour des clients en France et en Afrique, ainsi que des projets personnels 
                comme <strong>BagageShare</strong> et d&apos;autres plateformes digitales. En 3ᵉ année, je rejoindrai le programme <strong>Bachelor Cybersécurité &amp; Réseaux</strong> afin de me spécialiser en administration systèmes et réseaux, sécurité des infrastructures et conformité <strong>RGPD</strong>.
              </p>
              <p className={styles.aboutText}>
                J&apos;ai fondé{' '}
                <a href="https://mosamstudio.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <strong>Mosam Studio</strong>
                </a>
                , puis créé avec des amis développeurs{' '}
                <a href="https://mosamdigital.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <strong>Mosam Digital</strong>
                </a>{' '}
                comme filiale dédiée aux projets web et aux solutions sur mesure. À travers ces structures et mes collaborations, j&apos;accompagne des entreprises, des créateurs et des organisations
                dans leur transformation numérique, en mettant l&apos;accent sur la qualité, l&apos;ergonomie et l&apos;impact de chaque projet.
              </p>
            </div>
          </section>

          <section className={styles.projectsSection}>
            <h2 className={`${styles.sectionTitle} ${styles.projectsTitle}`}>Mes Réalisations</h2>
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
                            width={200}
                            height={120}
                            className={styles.projectImageContent}
                          />
                        ) : (
                          <ProjectIcon type="airplane" />
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className={styles.projectImage}>
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.image}
                          alt={project.title}
                          width={200}
                          height={120}
                          className={styles.projectImageContent}
                        />
                      ) : (
                        <ProjectIcon type="airplane" />
                      )}
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
            <div className={styles.arrowContainer}>
              <Link href="/realisations" className={styles.arrowLink}>
                <span className={styles.arrowText}>Voir mes réalisations</span>
                <svg className={styles.arrowIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
