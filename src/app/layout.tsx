import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'BookVault - Premium E-Book Catalog',
  description: 'Discover and share extraordinary books across every genre. From trading strategies to fiction masterpieces.',
  keywords: ['ebooks', 'catalog', 'books', 'reading', 'publishing'],
  authors: [{ name: 'BookVault Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Navigation />
        {children}
        <footer className="mt-24 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-3">BookVault</div>
              <p className="text-slate-600">Premium e-book catalog platform. Discover, preview, and collect the knowledge that matters.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-3">Explore</div>
              <ul className="space-y-2 text-slate-600">
                <li><a href="/books" className="hover:text-slate-900">Catalog</a></li>
                <li><a href="/collections" className="hover:text-slate-900">Collections</a></li>
                <li><a href="/dashboard" className="hover:text-slate-900">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-3">Company</div>
              <ul className="space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900">About</a></li>
                <li><a className="hover:text-slate-900">Careers</a></li>
                <li><a className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-3">Legal</div>
              <ul className="space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900">Terms</a></li>
                <li><a className="hover:text-slate-900">Privacy</a></li>
                <li><a className="hover:text-slate-900">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 py-6 text-center text-slate-500 text-xs">© {new Date().getFullYear()} BookVault. All rights reserved.</div>
        </footer>
      </body>
    </html>
  )
}
