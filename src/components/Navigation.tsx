'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Library,
  User,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Catalog', href: '/books' },
  { name: 'Collections', href: '/collections' },
  { name: 'Creators', href: '/creators' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-[#F7C948] transition-colors">
              BookVault
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-[#F7C948]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Library className="h-5 w-5" />
            </button>
            <Link href="/u/me">
              <button className="bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 px-4 py-2 rounded-xl font-medium transition-colors">
                Profile
              </button>
            </Link>
            <Link href="/u/me" className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-[#F7C948]/10 text-[#F7C948]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <Link
                  href="/u/me"
                  className="block px-3 py-2 bg-[#F7C948] text-slate-900 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button className="w-full text-left px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                  Library
                </button>
                <Link href="/u/me" className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg">
                  Profile
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}