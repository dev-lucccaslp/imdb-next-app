
export const metadata = {
  title: 'IMDB',
  description: 'This is im IMDB clone website',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head></head>
      <body >{children}</body>
    </html>
  )
}
