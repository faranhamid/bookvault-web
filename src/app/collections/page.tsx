'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  TrendingUp, 
  Star,
  ArrowRight,
  Users,
  Clock,
  Eye
} from 'lucide-react'

// Mock data for collections
const featuredCollections = [
  {
    id: '1',
    slug: 'trading-mastery',
    name: 'Trading Mastery',
    description: 'Professional trading strategies and risk management techniques from industry experts.',
    heroImage: '/api/placeholder/800/400',
    bookCount: 24,
    totalReaders: 3420,
    averageRating: 4.7,
    featured: true,
    books: [
      { title: 'Advanced Options Trading', author: 'Marcus Chen', rating: 4.8 },
      { title: 'Risk Management Fundamentals', author: 'Sarah Kim', rating: 4.6 },
      { title: 'Quantitative Trading Methods', author: 'Alex Rodriguez', rating: 4.9 }
    ]
  },
  {
    id: '2',
    slug: 'fiction-craft',
    name: 'Fiction Craft',
    description: 'Master the art of storytelling with guides from bestselling authors and writing experts.',
    heroImage: '/api/placeholder/800/400',
    bookCount: 18,
    totalReaders: 2890,
    averageRating: 4.8,
    featured: true,
    books: [
      { title: 'Modern Fiction Techniques', author: 'Elena Vasquez', rating: 4.6 },
      { title: 'Character Development Mastery', author: 'James Wright', rating: 4.9 },
      { title: 'Dialogue and Voice', author: 'Maria Santos', rating: 4.7 }
    ]
  },
  {
    id: '3',
    slug: 'sports-science',
    name: 'Sports Science',
    description: 'Data-driven insights and performance optimization strategies for athletes and coaches.',
    heroImage: '/api/placeholder/800/400',
    bookCount: 31,
    totalReaders: 1560,
    averageRating: 4.6,
    featured: true,
    books: [
      { title: 'Sports Analytics Deep Dive', author: 'David Rodriguez', rating: 4.7 },
      { title: 'Performance Metrics', author: 'Dr. Lisa Chen', rating: 4.5 },
      { title: 'Training Optimization', author: 'Michael Torres', rating: 4.8 }
    ]
  }
]

const allCollections = [
  {
    id: '4',
    slug: 'cryptocurrency',
    name: 'Cryptocurrency & Blockchain',
    description: 'Comprehensive guides to digital assets and blockchain technology.',
    bookCount: 15,
    totalReaders: 4200,
    averageRating: 4.5,
    color: 'bg-orange-100',
    textColor: 'text-orange-800'
  },
  {
    id: '5',
    slug: 'business-strategy',
    name: 'Business Strategy',
    description: 'Strategic frameworks and methodologies for business leaders.',
    bookCount: 22,
    totalReaders: 2100,
    averageRating: 4.4,
    color: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  {
    id: '6',
    slug: 'personal-development',
    name: 'Personal Development',
    description: 'Self-improvement and productivity enhancement guides.',
    bookCount: 28,
    totalReaders: 5600,
    averageRating: 4.3,
    color: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: '7',
    slug: 'technology',
    name: 'Technology & Innovation',
    description: 'Latest trends in technology, AI, and digital transformation.',
    bookCount: 19,
    totalReaders: 3800,
    averageRating: 4.6,
    color: 'bg-purple-100',
    textColor: 'text-purple-800'
  },
  {
    id: '8',
    slug: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Evidence-based approaches to health optimization and wellness.',
    bookCount: 26,
    totalReaders: 4900,
    averageRating: 4.5,
    color: 'bg-pink-100',
    textColor: 'text-pink-800'
  },
  {
    id: '9',
    slug: 'history',
    name: 'History & Biography',
    description: 'Fascinating historical accounts and biographical narratives.',
    bookCount: 33,
    totalReaders: 2800,
    averageRating: 4.7,
    color: 'bg-amber-100',
    textColor: 'text-amber-800'
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F7C948]/10 to-[#F7C948]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Curated Collections
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover expertly curated collections of books organized by topic, expertise level, and professional focus. 
              Each collection is designed to provide comprehensive knowledge in specific domains.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Collections</h2>
          
          <div className="space-y-12">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/collections/${collection.slug}`}>
                  <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}>
                    
                    {/* Collection Image */}
                    <div className="lg:w-1/2 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F7C948]/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                          <div className="text-2xl font-bold text-slate-600">{collection.bookCount} Books</div>
                        </div>
                      </div>
                      
                      {/* Floating Stats */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-[#F7C948]" />
                          <span className="text-sm font-medium text-slate-900">Trending</span>
                        </div>
                      </div>
                    </div>

                    {/* Collection Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#F7C948] transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                          {collection.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-5 w-5 text-slate-500" />
                          <span className="text-sm font-medium text-slate-900">{collection.bookCount} books</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-slate-500" />
                          <span className="text-sm font-medium text-slate-900">{collection.totalReaders.toLocaleString()} readers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-[#F7C948] fill-current" />
                          <span className="text-sm font-medium text-slate-900">{collection.averageRating}</span>
                        </div>
                      </div>

                      {/* Featured Books Preview */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">Featured Books:</h4>
                        <div className="space-y-2">
                          {collection.books.slice(0, 3).map((book, bookIndex) => (
                            <div key={bookIndex} className="flex items-center justify-between text-sm">
                              <div>
                                <span className="font-medium text-slate-900">{book.title}</span>
                                <span className="text-slate-600 ml-2">by {book.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-[#F7C948] fill-current" />
                                <span className="text-slate-600">{book.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-[#F7C948] font-semibold group-hover:text-[#F5B700] transition-colors">
                        <span>Explore Collection</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Collections Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">All Collections</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/collections/${collection.slug}`}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 hover:border-slate-200 hover:scale-105">
                    <div className={`w-16 h-16 ${collection.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className={`h-8 w-8 ${collection.textColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F7C948] transition-colors">
                      {collection.name}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {collection.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{collection.bookCount} books</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-[#F7C948] fill-current" />
                          <span className="font-medium text-slate-900">{collection.averageRating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-600">{collection.totalReaders.toLocaleString()} readers</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center text-[#F7C948] font-medium group-hover:text-[#F5B700] transition-colors">
                      <span>View Collection</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gradient-to-r from-[#F7C948]/10 to-[#F7C948]/5 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore our full catalog or suggest a new collection topic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books">
              <button className="bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105">
                Browse All Books
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
            <button className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg bg-white">
              Suggest Collection
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
