import '@/app/globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-drizzle.vercel.app'),
  title: 'Gift Apartment',
  description:
    'The right apartment for you',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (  
    <div className={inter.variable}>
      {children}
    </div>
  )
}
