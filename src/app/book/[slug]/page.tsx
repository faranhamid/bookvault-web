'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Star,
  Download,
  Eye,
  Heart,
  Share2,
  Clock,
  FileText,
  User,
  Calendar,
  Globe,
  Tag,
  ChevronRight,
  Play,
  Pause,
  Volume2
} from 'lucide-react'

// Mock book data
const book = {
  id: '1',
  title: 'Advanced Options Trading Strategies',
  subtitle: 'Professional Techniques for Risk Management and Profit Optimization',
  author: 'Marcus Chen',
  authorBio: 'Marcus Chen is a quantitative analyst with 15 years of experience in derivatives trading at top-tier investment banks.',
  authorAvatar: '/api/placeholder/100/100',
  slug: 'advanced-options-trading',
  cover: '/api/placeholder/400/600',
  genres: ['Finance', 'Trading'],
  tags: ['Options', 'Derivatives', 'Risk Management', 'Quantitative Analysis'],
  rating: 4.8,
  reviewCount: 234,
  price: 2999,
  pages: 324,
  wordCount: 85000,
  language: 'English',
  year: 2024,
  publisher: 'Financial Press',
  isbn: '978-1-234-56789-0',
  description: 'A comprehensive guide to advanced options trading techniques used by professional traders. This book covers complex strategies, risk management principles, and quantitative methods for optimizing trading performance in volatile markets.',
  longDescription: `This definitive guide takes you beyond basic options trading into the sophisticated strategies used by institutional traders and hedge funds. 

  You'll learn how to construct complex multi-leg strategies, manage portfolio risk using Greeks, and implement quantitative models for options pricing and volatility forecasting.

  The book includes real-world case studies, practical examples, and detailed explanations of how to apply these strategies in different market conditions.`,
  tableOfContents: [
    { chapter: 1, title: 'Foundations of Options Theory', pages: '1-45' },
    { chapter: 2, title: 'The Greeks: Risk Sensitivities', pages: '46-89' },
    { chapter: 3, title: 'Volatility Trading Strategies', pages: '90-134' },
    { chapter: 4, title: 'Multi-Leg Spread Strategies', pages: '135-189' },
    { chapter: 5, title: 'Risk Management Frameworks', pages: '190-234' },
    { chapter: 6, title: 'Portfolio Construction', pages: '235-279' },
    { chapter: 7, title: 'Advanced Quantitative Methods', pages: '280-324' }
  ],
  sampleChapters: [
    {
      title: 'Introduction to Advanced Strategies',
      content: 'In this opening chapter, we explore the fundamental concepts that separate professional options traders from retail investors...'
    },
    {
      title: 'Understanding Delta Hedging',
      content: 'Delta hedging is the cornerstone of professional options trading. This chapter demonstrates how to implement dynamic hedging strategies...'
    }
  ],
  reviews: [
    {
      id: '1',
      author: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      content: 'Exceptional depth and clarity. The quantitative methods section alone is worth the price.'
    },
    {
      id: '2',
      author: 'David Kim',
      rating: 5,
      date: '2024-01-10',
      content: 'Finally, a book that explains complex strategies in practical terms. Highly recommended for serious traders.'
    }
  ],
  relatedBooks: [
    { id: '2', title: 'Quantitative Risk Management', author: 'Dr. Lisa Wang', rating: 4.7, price: 3499 },
    { id: '3', title: 'Derivatives Pricing Models', author: 'Robert Chen', rating: 4.6, price: 2799 },
    { id: '4', title: 'Volatility Trading', author: 'Michael Torres', rating: 4.8, price: 2999 }
  ]
}

export default function BookDetailPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [savedToLibrary, setSavedToLibrary] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'contents', label: 'Table of Contents' },
    { id: 'preview', label: 'Preview' },
    { id: 'reviews', label: 'Reviews' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/books" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Book Cover & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="aspect-[2/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-slate-300">
                      {book.title.charAt(0)}
                    </div>
                  </div>
                </div>
                
                {/* Floating Action Button */}
                <button
                  onClick={() => setSavedToLibrary(!savedToLibrary)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    savedToLibrary 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/90 text-slate-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${savedToLibrary ? 'fill-current' : ''}`} />
                </button>
              </motion.div>

              {/* Price & Actions */}
              <div className="mt-8 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    ${(book.price / 100).toFixed(2)}
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-slate-600">
                    <Star className="h-4 w-4 text-[#F7C948] fill-current" />
                    <span className="font-medium">{book.rating}</span>
                    <span>({book.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Purchase & Download</span>
                  </button>
                  
                  <button className="w-full border-2 border-slate-200 hover:border-slate-300 text-slate-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2">
                    <Eye className="h-5 w-5" />
                    <span>Read Sample</span>
                  </button>

                  <button className="w-full border-2 border-slate-200 hover:border-slate-300 text-slate-700 py-3 px-6 rounded-2xl font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Book Details */}
                <div className="pt-6 border-t border-slate-200 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Pages</span>
                    <span className="font-medium">{book.pages.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Words</span>
                    <span className="font-medium">{book.wordCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Language</span>
                    <span className="font-medium">{book.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Published</span>
                    <span className="font-medium">{book.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">ISBN</span>
                    <span className="font-medium text-xs">{book.isbn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-5xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                  {book.title}
                </h1>
                {book.subtitle && (
                  <h2 className="text-2xl text-slate-600 mb-6">
                    {book.subtitle}
                  </h2>
                )}
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{book.author}</div>
                      <div className="text-sm text-slate-600">{book.publisher}</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {book.genres.map(genre => (
                    <span key={genre} className="px-3 py-1 bg-[#F7C948] text-slate-900 rounded-full text-sm font-medium">
                      {genre}
                    </span>
                  ))}
                  {book.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-slate-200 mb-8">
                <nav className="flex space-x-8">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-[#F7C948] text-[#F7C948]'
                          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="prose max-w-none">
                      <p className="text-lg text-slate-700 mb-6">
                        {book.description}
                      </p>
                      
                      <div className={`text-slate-700 ${showFullDescription ? '' : 'line-clamp-6'}`}>
                        {book.longDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-[#F7C948] hover:text-[#F5B700] font-medium flex items-center space-x-1"
                      >
                        <span>{showFullDescription ? 'Show Less' : 'Read More'}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${showFullDescription ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">About the Author</h3>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-8 w-8 text-slate-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">{book.author}</h4>
                          <p className="text-slate-700">{book.authorBio}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'contents' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-4">
                      {book.tableOfContents.map((chapter, index) => (
                        <div key={chapter.chapter} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-[#F7C948] text-slate-900 rounded-lg flex items-center justify-center font-semibold">
                              {chapter.chapter}
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">{chapter.title}</h4>
                              <p className="text-sm text-slate-600">Pages {chapter.pages}</p>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'preview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-8">
                      {book.sampleChapters.map((chapter, index) => (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900">{chapter.title}</h3>
                          </div>
                          <div className="p-6">
                            <p className="text-slate-700 leading-relaxed">
                              {chapter.content}
                            </p>
                            <div className="mt-4 pt-4 border-t border-slate-200">
                              <p className="text-sm text-slate-500 italic">
                                This is a preview excerpt. Purchase the full book to continue reading.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-6">
                      {book.reviews.map(review => (
                        <div key={review.id} className="border-b border-slate-200 pb-6 last:border-b-0">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-slate-600" />
                              </div>
                              <div>
                                <div className="font-medium text-slate-900">{review.author}</div>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-[#F7C948] fill-current' : 'text-slate-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-slate-500">{review.date}</span>
                          </div>
                          <p className="text-slate-700">{review.content}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Books */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Books</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {book.relatedBooks.map(relatedBook => (
              <div key={relatedBook.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-slate-300">
                    {relatedBook.title.charAt(0)}
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{relatedBook.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{relatedBook.author}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#F7C948] fill-current" />
                    <span className="text-sm font-medium">{relatedBook.rating}</span>
                  </div>
                  <span className="font-bold text-slate-900">
                    ${(relatedBook.price / 100).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
