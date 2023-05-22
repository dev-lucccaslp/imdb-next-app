import './globals.css'

import { Header } from '@/components/Header'
import { Providers } from '@/app/Providers'

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
          {children}
        </Providers>
      </body>
    </html>
  )
}
