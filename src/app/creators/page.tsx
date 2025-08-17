'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { User, BookOpen, Star } from 'lucide-react'

const creators = [
  { handle: 'marcus', name: 'Marcus Chen', bio: 'Quant trader and author', books: 12, rating: 4.8 },
  { handle: 'sarahw', name: 'Sarah Williams', bio: 'Behavioral finance researcher', books: 8, rating: 4.9 },
  { handle: 'drodriguez', name: 'David Rodriguez', bio: 'Sports analytics lead', books: 10, rating: 4.7 },
  { handle: 'evasquez', name: 'Elena Vasquez', bio: 'Bestselling fiction coach', books: 9, rating: 4.6 },
]

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-yellow-50/30 paper-grain">
      <div className="border-b border-slate-200 bg-gradient-to-b from-yellow-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-display font-bold text-slate-900 mb-3 tracking-tight">Creators</h1>
          <p className="text-lg text-slate-600">Meet expert authors and publishers sharing premium books.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {creators.map((c, i) => (
            <motion.div
              key={c.handle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <Link href={`/u/${c.handle}`} className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden bg-slate-100">
                    <Image src={`https://i.pravatar.cc/80?img=${i+5}`} alt={c.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900 group-hover:text-[#F7C948] transition-colors">{c.name}</div>
                    <div className="text-sm text-slate-600">@{c.handle}</div>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 line-clamp-2">{c.bio}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <BookOpen className="h-4 w-4" />
                    <span>{c.books} books</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-700">
                    <Star className="h-4 w-4 text-[#F7C948] fill-current" />
                    <span className="font-medium">{c.rating}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


