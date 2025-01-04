import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Nexara Innovations',
    default: 'Nexara Innovations - Future of Tech',
  },
  description: 'Nexara Innovations pioneers blockchain, AI, and cutting-edge software solutions.',
  applicationName: 'Nexara Platform',
  generator: 'Next.js 14',
  keywords: [
    'Nexara Innovations',
    'Blockchain Development',
    'AI Solutions',
    'Software Development',
    'Secure Technologies',
    'Next.js App'
  ],
  authors: [
    { name: 'John Doe', url: 'https://nexara.io/team/john' },
    { name: 'Jane Smith', url: 'https://nexara.io/team/jane' },
  ],
  creator: 'Nexara Innovations',
  publisher: 'Nexara Media',
  metadataBase: new URL('https://nexara.io'),
  openGraph: {
    title: 'Nexara Innovations - Leading the Future',
    description: 'Explore cutting-edge AI and blockchain solutions from Nexara Innovations.',
    url: 'https://nexara.io',
    siteName: 'Nexara Innovations',
    images: [
      {
        url: 'https://nexara.io/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexara Innovations Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexarainnovations',
    creator: '@johndoe',
    title: 'Nexara Innovations',
    description: 'Innovating with AI and Blockchain to shape the future.',
    images: ['https://nexara.io/assets/twitter-card.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://nexara.io',
    languages: {
      'en-US': 'https://nexara.io',
      'fr-FR': 'https://nexara.io/fr',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    // bing: 'bing-site-verification-code',
    yandex: 'yandex-site-verification-code',
  },
};


function index() {

  return (
    <div>Home</div>
  )
}

export default index