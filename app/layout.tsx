import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keen Agents - AI Employees for Your Business',
  description: 'Keen Agents builds custom AI agents—digital employees that automate processes, reduce operational costs, and scale your business. Book a free consultation.',
  keywords: 'AI employees, AI agents for business, process automation, automate customer support, AI automation solutions',
  authors: [{ name: 'Keen Agents' }],
  openGraph: {
    title: 'Keen Agents - AI Employees for Your Business',
    description: 'Custom AI agents that work like digital employees to automate your business processes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
