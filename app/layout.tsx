import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohamed Ndiaye - Portfolio',
  description:
    'Portfolio de Mohamed Ndiaye, étudiant en ingénierie à l\'ECE Paris, passionné par la cybersécurité, les réseaux et le développement web. CV et lettre de motivation.',
  openGraph: {
    title: 'Mohamed Ndiaye - Portfolio',
    description:
      'Portfolio de Mohamed Ndiaye, étudiant en ingénierie à l\'ECE Paris, passionné par la cybersécurité, les réseaux et le développement web.',
    type: 'website',
    images: ['/images/photo_momo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Ndiaye - Portfolio',
    description:
      'Portfolio de Mohamed Ndiaye, étudiant en ingénierie à l\'ECE Paris, cybersécurité, réseaux et développement web.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
