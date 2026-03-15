import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mosam Digital - Agence web & solutions numériques',
  description:
    'Mosam Digital, filiale de Mosam Studio, est une agence web & solutions numériques qui conçoit, développe et maintient des sites et solutions digitales sur mesure pour des clients partout dans le monde.',
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
