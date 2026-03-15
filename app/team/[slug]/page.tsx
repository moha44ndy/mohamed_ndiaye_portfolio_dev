import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'
import MemberPhoto from '../../components/MemberPhoto'
import Footer from '../../components/Footer'

const teamMembers: Record<string, {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  email?: string;
  linkedin?: string;
  phone?: string;
  image?: string;
}> = {
  'mohamed-ndiaye': {
    name: 'MOHAMED NDIAYE',
    role: 'Étudiant en ingénierie, développement web & cybersécurité',
    bio: 'Ivoirien actuellement en 2ᵉ année d&apos;ingénierie à l&apos;ECE Paris, passionné par le développement web, les réseaux et la cybersécurité. Après l&apos;obtention de mon baccalauréat, j&apos;ai intégré l&apos;ECE Paris où je poursuis mon cursus et rejoindrai en 3ᵉ année le programme <strong>Bachelor Cybersécurité &amp; Réseaux</strong>. J&apos;ai eu l&apos;opportunité de travailler chez Huawei en Côte d&apos;Ivoire en tant qu&apos;assistant développeur pendant une courte période en 2025, une expérience enrichissante qui m&apos;a permis de concilier mes études et la pratique professionnelle. À partir du <strong>13 avril 2026</strong>, je débuterai un <strong>stage</strong> chez Huawei pour une nouvelle période allant jusqu&apos;au <strong>13 août 2026</strong>. Grâce à la qualité de mon travail et à ma discipline, l&apos;équipe m&apos;a renouvelé sa confiance pour cette mission, axée sur des projets orientés <strong>réseaux</strong>, afin de bénéficier d&apos;une formation à l&apos;image du géant du numérique <strong>Huawei</strong>. Je crée des projets pour des clients avec mes collaborateurs, mais je développe également mes propres applications. BagageShare m&apos;appartient ainsi que d&apos;autres projets personnels. Au fil de mon parcours, j&apos;ai développé de nombreuses compétences techniques en développement web, systèmes et réseaux et je me spécialise progressivement vers la <strong>cybersécurité &amp; réseaux</strong>, avec des bases notamment en conformité <strong>RGPD</strong>. Je recherche une alternance pour l&apos;année universitaire <strong>2026-2027</strong> dans le cadre de ma troisième année de Bachelor.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'PHP', 'Java', 'Python', 'HTML', 'CSS', 'MongoDB', 'MySQL', 'PostgreSQL', 'Linux', 'Réseaux', 'Cybersécurité (bases, RGPD)', 'Design UX/UI'],
    email: 'mohamedndiayeallioune@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohamed-ndiaye-00b8093a7',
    phone: '+33 7 44 98 78 53',
    image: '/images/photo_momo.jpeg',
  },
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers[params.slug]

  if (!member) {
    notFound()
  }

  return (
    <div className={styles.memberPage}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.backLink}>
              ← Retour à l&apos;accueil
            </Link>
            <div style={{ textAlign: 'right' }}>
              <h1 className={styles.headerTitle}>PORTFOLIO DE MOHAMED NDIAYE</h1>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.profile}>
            <div className={styles.profileHeader}>
              <MemberPhoto 
                name={member.name} 
                image={member.image} 
                width={350}
                height={450}
                className={styles.memberPhoto}
              />
              <div className={styles.profileInfo}>
                <h1 className={styles.name}>{member.name}</h1>
                <p className={styles.role}>{member.role}</p>
                <div className={`card ${styles.skillsCard}`}>
                  <h2 className={styles.sectionTitle}>Compétences</h2>
                  <div className={styles.skillsList}>
                    {member.skills.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`card ${styles.bioCard}`}>
              <div className={styles.contactInfo}>
                {member.email && (
                  <a href={`mailto:${member.email}`} className={styles.contactLink} title={member.email}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                    </svg>
                  </a>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin.startsWith('http') ? member.linkedin : `https://linkedin.com/in/${member.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                    title="LinkedIn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                    </svg>
                  </a>
                )}
                {member.phone && (
                  <a 
                    href={`tel:${member.phone.replace(/\s/g, '')}`} 
                    className={styles.contactLink}
                    title={member.phone}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                    </svg>
                  </a>
                )}
                {member.phone && (
                  <a 
                    href={`https://wa.me/${member.phone.replace(/[\s+]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                    title={`WhatsApp: ${member.phone}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                    </svg>
                  </a>
                )}
              </div>
              {params.slug === 'mohamed-ndiaye' && (
                <div style={{ marginTop: "1rem", textAlign: "right" }}>
                  <span style={{ display: 'inline-flex', gap: '0.3rem', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--accent-color)', fontSize: '0.9rem' }}>by 𖣘MAN</span>
                </div>
              )}
              <h2 className={styles.sectionTitle}>À propos</h2>
              <p className={styles.bio}>
                {member.bio.split('BagageShare').map((part, index, array) => {
                  if (index === array.length - 1) {
                    return <span key={index}>{part}</span>
                  }
                  return (
                    <span key={index}>
                      {part}
                      <a 
                        href="https://www.bagageshare.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 600 }}
                      >
                        BagageShare
                      </a>
                    </span>
                  )
                })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
