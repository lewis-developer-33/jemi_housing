import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          <body className={inter.variable}>
            {children}
          </body>
        </QueryClientProvider>
      </ClerkProvider>
    </html>
  )
}
