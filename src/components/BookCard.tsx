'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Eye, Bookmark, TrendingUp } from 'lucide-react'

export interface BookCardProps {
  href: string
  title: string
  author: string
  priceCents: number
  rating: number
  reviewCount?: number
  trending?: boolean
  featured?: boolean
  meta?: { pages?: number; year?: number; language?: string }
}

export default function BookCard(props: BookCardProps) {
  const { href, title, author, priceCents, rating, reviewCount, trending, featured, meta } = props
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Link href={href} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200 hover:scale-[1.02] card-hover">
        <div className="relative aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <Image
            src={`https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60`}
            alt={`${title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
          {/* badges/price */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {trending && (
              <span className="px-2 py-1 bg-[#F7C948] text-slate-900 text-xs font-semibold rounded-full inline-flex items-center gap-1">
                <TrendingUp aria-hidden className="h-3 w-3" /> Trending
              </span>
            )}
            {featured && (
              <span className="px-2 py-1 bg-slate-900 text-white text-xs font-semibold rounded-full">Featured</span>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${priceCents === 0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
              {priceCents === 0 ? 'Free' : `$${(priceCents/100).toFixed(2)}`}
            </span>
          </div>
          {/* hover actions */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <span className="flex-1 btn-primary h-10 text-sm"><Eye aria-hidden className="h-4 w-4 mr-2" />Preview</span>
              <span className="btn-secondary h-10 text-sm"><Bookmark aria-hidden className="h-4 w-4 mr-2" />Save</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-[#F7C948] transition-colors line-clamp-2">{title}</h3>
              <p className="text-sm text-slate-600 mb-2">{author}</p>
            </div>
            <div className="text-right ml-4">
              <div className="flex items-center space-x-1 mb-1">
                <Star aria-hidden className="h-4 w-4 text-[#F7C948] fill-current" />
                <span className="text-sm font-medium text-slate-900">{rating.toFixed(1)}</span>
                {reviewCount ? <span className="text-xs text-slate-500">({reviewCount})</span> : null}
              </div>
              <p className="text-xs text-slate-500">{meta?.year || ''}</p>
            </div>
          </div>
          {meta ? (
            <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
              <span>{meta.pages ? `${meta.pages} pages` : ''}</span>
              <span>{meta.year || ''}</span>
              <span>{meta.language || ''}</span>
            </div>
          ) : null}
          <div className="h-1" />
        </div>
      </Link>
    </motion.div>
  )
}


