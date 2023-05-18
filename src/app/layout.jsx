import './globals.css'

export const metadata = {
  title: 'IMDB',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body >{children}</body>
    </html>
  )
}
