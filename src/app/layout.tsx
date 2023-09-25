import './globals.css'
import type { Metadata } from 'next'
import { STIX_Two_Text } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Onebroderie',
  description: 'onebroderie',
}


const Stix:any = STIX_Two_Text({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={Stix.className}>
      <body>{children}</body>
    </html>
  )
}
