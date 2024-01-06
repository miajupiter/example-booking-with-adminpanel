import Providers from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'leaflet/dist/leaflet.css'
import 'react-day-picker/dist/style.css'

export const metadata: Metadata = {
  title: 'TourAbi',
  description: 'Travel Agency Service1',
  icons: {
    icon: '/web-icon.png', // /public path
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon192.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon192.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //   ],
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </Providers>
  )
}
