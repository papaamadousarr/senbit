import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SenBit - Solutions Digitales Innovantes',
  description: 'SenBit est une entreprise spécialisée dans le développement de solutions digitales innovantes pour les entreprises.',
  metadataBase: new URL('https://senbit.com'),
  openGraph: {
    title: 'SenBit - Solutions Digitales Innovantes',
    description: 'SenBit est une entreprise spécialisée dans le développement de solutions digitales innovantes pour les entreprises.',
    url: 'https://senbit.com',
    siteName: 'SenBit',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'SenBit - Solutions Digitales',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SenBit - Solutions Digitales Innovantes',
    description: 'SenBit est une entreprise spécialisée dans le développement de solutions digitales innovantes pour les entreprises.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
