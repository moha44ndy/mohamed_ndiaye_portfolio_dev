'use client'

import { useState } from 'react'
import styles from '../page.module.css'

export default function CvAndLetterSection() {
  const [openSection, setOpenSection] = useState<'cv' | 'letter' | null>('cv')

  const toggleSection = (section: 'cv' | 'letter') => {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <>
      <section className={styles.cvSection}>
        <div className={`card ${styles.cvCard}`}>
          <button
            type="button"
            className={styles.accordionHeader}
            onClick={() => toggleSection('cv')}
          >
            <h2 className={`${styles.sectionTitle} ${styles.cvTitle}`}>Mon CV</h2>
            <span
              className={`${styles.accordionIcon} ${
                openSection === 'cv' ? styles.accordionIconOpen : ''
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          {openSection === 'cv' && (
            <div className={styles.cvContent}>
              <a
                href="/assets/gallery/cv_informatique.png"
                download="CV_Mohamed_Ndiaye.png"
                className={styles.cvDownloadLink}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/gallery/cv_informatique.png"
                  alt="CV de Mohamed NDIAYE"
                  className={styles.cvImage}
                />
              </a>
              <p className={styles.cvText}>
                Cliquez sur l&apos;aperçu pour télécharger mon CV au format image.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.cvSection}>
        <div className={`card ${styles.cvCard}`}>
          <button
            type="button"
            className={styles.accordionHeader}
            onClick={() => toggleSection('letter')}
          >
            <h2 className={`${styles.sectionTitle} ${styles.cvTitle}`}>
              Lettre de motivation
            </h2>
            <span
              className={`${styles.accordionIcon} ${
                openSection === 'letter' ? styles.accordionIconOpen : ''
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          {openSection === 'letter' && (
            <div className={styles.cvContent}>
              <p className={styles.cvText}>
                Actuellement étudiant en 2ᵉ année d&apos;ingénierie à l&apos;
                <strong>ECE Paris</strong>, je souhaite intégrer en 3ᵉ année le
                programme <strong>Bachelor Cybersécurité &amp; Réseaux</strong> et
                je suis à la recherche d&apos;une alternance pour l&apos;année
                universitaire <strong>2026-2027</strong>. Passionné par les{' '}
                <strong>réseaux</strong> et la <strong>cybersécurité</strong>, je
                souhaite mettre à profit mes compétences en développement web, en
                administration systèmes et réseaux ainsi que mes premières bases en
                sécurité et conformité <strong>RGPD</strong> dans un environnement
                professionnel exigeant.
              </p>
              <p className={styles.cvText}>
                Mes expériences, notamment chez <strong>Huawei Côte d&apos;Ivoire</strong>,
                m&apos;ont permis de développer rigueur, sens des responsabilités et
                capacité à travailler en équipe sur des projets concrets. L&apos;objectif
                de cette alternance est de continuer à progresser au contact de
                professionnels expérimentés tout en contribuant activement à la
                sécurité et à la fiabilité des infrastructures réseaux et systèmes.
              </p>
              <a
                href="/assets/lettre_motivation_mohamed_ndiaye.pdf"
                download="Lettre_motivation_Mohamed_Ndiaye.pdf"
                className={styles.cvDownloadLink}
              >
                Télécharger la lettre de motivation (PDF)
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

