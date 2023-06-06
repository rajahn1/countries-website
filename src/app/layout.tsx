import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Providers from './Providers';

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries Information',
  description: 'Website with countries information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className}>
          <Providers>
            <Header />
              {children}
          </Providers>
        </body>
    </html>
  )
}
