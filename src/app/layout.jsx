import { Header } from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDB',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}
