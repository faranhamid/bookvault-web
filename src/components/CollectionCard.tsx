import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, ArrowRight } from 'lucide-react'

interface Props {
  href: string
  title: string
  description: string
  count: number
  colorClass?: string
}

export default function CollectionCard({ href, title, description, count, colorClass = 'bg-yellow-100' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link href={href} className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:scale-[1.02] overflow-hidden">
        <div className="relative h-40">
          <Image
            src={`https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=60`}
            alt="Collection preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-8">
          <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <BookOpen aria-hidden className="h-8 w-8 text-slate-700 group-hover:text-yellow-600 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{title}</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">{count} books</span>
            <ArrowRight aria-hidden className="h-5 w-5 text-yellow-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}


