import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Membre non trouvé</h2>
          <p className={styles.message}>
            Le membre que vous recherchez n&apos;existe pas ou a été déplacé.
          </p>
          <Link href="/" className="btn">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
