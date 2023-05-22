import './globals.css'

import { Providers } from '@/app/Providers'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'IMDB',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >
        <Providers>
          <Header />
          <Navbar />
          {children}

        </Providers>
      </body>
    </html>
  )
}
