import Header from '@/components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Lin Jiatao',
  description: 'This is my resume page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-auto ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
