'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Upload } from 'lucide-react'
import Image from 'next/image'
import StatsRow from '@/components/StatsRow'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* diagonal band + grain overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-yellow-100/50"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 70%)' }}
        />
        <div className="absolute inset-0 paper-grain opacity-30" />
      </div>
      {/* background image */}
      <div className="absolute right-0 top-0 h-full w-2/3 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1600&q=60"
          alt="books"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-medium mb-6">
              <TrendingUp aria-hidden className="h-4 w-4 mr-2" />
              Premium Book Catalog Platform
            </div>
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Discover & Share
              <span className="block text-yellow-500">Extraordinary Books</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto">
              A distinctive, curated catalog for finished books. Preview, save, and collect with a professional browsing experience.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className="btn-primary text-lg rounded-2xl px-8 py-4">
              <span className="inline-flex items-center">Explore Catalog <ArrowRight aria-hidden className="h-5 w-5 ml-2" /></span>
            </Link>
            <Link href="/u/me" className="btn-secondary text-lg rounded-2xl px-8 py-4">
              <span className="inline-flex items-center">Publish Your Book <Upload aria-hidden className="h-5 w-5 ml-2" /></span>
            </Link>
          </motion.div>
        </div>
        <StatsRow />
      </div>
    </section>
  )
}


