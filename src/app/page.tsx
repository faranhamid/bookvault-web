'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Star,
  ArrowRight,
  Users,
  Clock,
  Eye,
  Search,
  Download,
  Library,
  Upload,
  TrendingUp
} from 'lucide-react'
import Hero from '@/components/Hero'

// Mock data for demo
const featuredBooks = [
  {
    id: '1',
    title: 'The Art of Trading',
    author: 'Marcus Chen',
    rating: 4.8,
    price: 2999,
    pages: 324
  },
  {
    id: '2',
    title: 'Modern Fiction Techniques',
    author: 'Sarah Williams',
    rating: 4.9,
    price: 0,
    pages: 256
  },
  {
    id: '3',
    title: 'Sports Analytics Deep Dive',
    author: 'David Rodriguez',
    rating: 4.7,
    price: 1999,
    pages: 412
  }
]

const collections = [
  { name: 'Trading Mastery', count: 24, color: 'bg-blue-100', description: 'Professional trading strategies' },
  { name: 'Fiction Craft', count: 18, color: 'bg-purple-100', description: 'Storytelling mastery guides' },
  { name: 'Sports Science', count: 31, color: 'bg-green-100', description: 'Performance optimization' },
  { name: 'Business Strategy', count: 47, color: 'bg-orange-100', description: 'Corporate leadership guides' },
  { name: 'Tech & Innovation', count: 35, color: 'bg-cyan-100', description: 'Cutting-edge technology' },
  { name: 'Health & Wellness', count: 29, color: 'bg-pink-100', description: 'Optimize your wellbeing' },
  { name: 'Personal Development', count: 52, color: 'bg-indigo-100', description: 'Self-improvement mastery' },
  { name: 'Cryptocurrency', count: 19, color: 'bg-amber-100', description: 'Digital asset strategies' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero />

          {/* Featured Books Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <BookOpen className="h-20 w-20 text-slate-400 group-hover:text-yellow-500 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                      #{index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors text-lg">
                      {book.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{book.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-slate-900">
                        {book.price === 0 ? 'Free' : `$${(book.price / 100).toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '2,847+', label: 'Premium Books', icon: BookOpen },
              { number: '450+', label: 'Expert Authors', icon: Users },
              { number: '98%', label: 'Satisfaction Rate', icon: Star },
              { number: '24/7', label: 'Global Access', icon: Clock }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>

      {/* Enhanced Collections Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              8 Specialized Collections
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Curated Knowledge Collections
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Expertly organized collections spanning professional development, creative arts, 
              emerging technologies, and specialized knowledge domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-200 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 ${collection.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <BookOpen className="h-8 w-8 text-slate-700 group-hover:text-yellow-600 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {collection.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">
                        {collection.count}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">
                        books
                      </span>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Collections CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/collections">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Explore All Collections
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Premium Platform Features
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional-grade tools and features designed for serious readers, creators, and knowledge seekers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Search,
                title: 'AI-Powered Discovery',
                description: 'Advanced search algorithms with semantic understanding, personalized recommendations, and intelligent content matching.'
              },
              {
                icon: Eye,
                title: 'Rich Preview Experience',
                description: 'Interactive table of contents, sample chapters, author insights, and comprehensive book analytics before purchase.'
              },
              {
                icon: Download,
                title: 'Universal Formats',
                description: 'Download in PDF, ePub, MOBI, DOCX with professional formatting and cross-device synchronization.'
              },
              {
                icon: Library,
                title: 'Smart Library Management',
                description: 'Organize your collection with tags, notes, reading progress tracking, and intelligent categorization.'
              },
              {
                icon: Upload,
                title: 'Professional Creator Suite',
                description: 'Advanced upload tools, automated processing, analytics dashboard, and revenue optimization features.'
              },
              {
                icon: TrendingUp,
                title: 'Quality Assurance',
                description: 'Curated content, expert reviews, trending algorithms, and community-driven quality ratings.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-yellow-200">
                  <div className="text-center">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 opacity-10"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500 bg-opacity-20 rounded-full text-yellow-400 font-bold mb-8 text-lg">
              <TrendingUp className="h-5 w-5 mr-2" />
              Join the Knowledge Revolution
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Transform
              <span className="text-yellow-400 block">
                Your Learning?
              </span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join over 50,000 professionals who trust BookVault for premium knowledge discovery. 
              Start exploring today or share your expertise with the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/books">
                <button className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
                  <span className="flex items-center justify-center">
                    Explore 2,847+ Books
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="group border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    Publish Your Book
                    <Upload className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '50,000+', label: 'Active Users' },
                { number: '2,847+', label: 'Premium Books' },
                { number: '450+', label: 'Expert Authors' },
                { number: '98%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}