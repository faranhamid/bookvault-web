'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid,
  List,
  X
} from 'lucide-react'
import BookCard from '@/components/BookCard'

// Mock data for demo
const books = [
  {
    id: '1',
    title: 'Advanced Options Trading Strategies',
    author: 'Marcus Chen',
    slug: 'advanced-options-trading',
    cover: '/api/placeholder/300/400',
    genres: ['Finance', 'Trading'],
    tags: ['Options', 'Derivatives', 'Risk Management'],
    rating: 4.8,
    reviewCount: 234,
    price: 2999,
    pages: 324,
    language: 'English',
    year: 2024,
    description: 'Comprehensive guide to advanced options trading techniques for professional traders.',
    featured: true,
    trending: true
  },
  {
    id: '2',
    title: 'The Psychology of Market Movements',
    author: 'Sarah Williams',
    slug: 'psychology-market-movements',
    cover: '/api/placeholder/280/380',
    genres: ['Finance', 'Psychology'],
    tags: ['Behavioral Finance', 'Market Psychology'],
    rating: 4.9,
    reviewCount: 156,
    price: 0,
    pages: 256,
    language: 'English',
    year: 2024,
    description: 'Understanding the psychological factors that drive market behavior.',
    featured: false,
    trending: true
  },
  {
    id: '3',
    title: 'Sports Analytics: Data-Driven Performance',
    author: 'David Rodriguez',
    slug: 'sports-analytics-performance',
    cover: '/api/placeholder/320/420',
    genres: ['Sports', 'Analytics'],
    tags: ['Data Science', 'Performance', 'Statistics'],
    rating: 4.7,
    reviewCount: 89,
    price: 1999,
    pages: 412,
    language: 'English',
    year: 2023,
    description: 'Leveraging data science to optimize athletic performance and team strategies.',
    featured: true,
    trending: false
  },
  {
    id: '4',
    title: 'Modern Fiction Writing Techniques',
    author: 'Elena Vasquez',
    slug: 'modern-fiction-techniques',
    cover: '/api/placeholder/290/390',
    genres: ['Writing', 'Fiction'],
    tags: ['Creative Writing', 'Storytelling', 'Character Development'],
    rating: 4.6,
    reviewCount: 312,
    price: 1599,
    pages: 278,
    language: 'English',
    year: 2024,
    description: 'Contemporary approaches to crafting compelling fiction narratives.',
    featured: false,
    trending: false
  },
  {
    id: '5',
    title: 'Cryptocurrency Investment Fundamentals',
    author: 'Alex Thompson',
    slug: 'crypto-investment-fundamentals',
    cover: '/api/placeholder/310/410',
    genres: ['Finance', 'Cryptocurrency'],
    tags: ['Bitcoin', 'Blockchain', 'DeFi'],
    rating: 4.5,
    reviewCount: 445,
    price: 2499,
    pages: 356,
    language: 'English',
    year: 2024,
    description: 'Essential guide to understanding and investing in cryptocurrencies.',
    featured: true,
    trending: true
  },
  {
    id: '6',
    title: 'Machine Learning for Business',
    author: 'Dr. Jennifer Park',
    slug: 'ml-for-business',
    cover: '/api/placeholder/300/400',
    genres: ['Technology', 'Business'],
    tags: ['AI', 'Machine Learning', 'Business Strategy'],
    rating: 4.4,
    reviewCount: 178,
    price: 3499,
    pages: 445,
    language: 'English',
    year: 2023,
    description: 'Practical applications of machine learning in business contexts.',
    featured: false,
    trending: false
  }
]

const genres = ['All', 'Finance', 'Technology', 'Sports', 'Writing', 'Business', 'Psychology']
const sortOptions = [
  { label: 'Trending', value: 'trending' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' }
]

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortBy, setSortBy] = useState('trending')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(new Set(books.flatMap(book => book.tags)))

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'All' || book.genres.includes(selectedGenre)
    const matchesPrice = book.price >= priceRange[0] && book.price <= priceRange[1]
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => book.tags.includes(tag))
    
    return matchesSearch && matchesGenre && matchesPrice && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-yellow-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-display font-bold text-slate-900 mb-3 tracking-tight">Catalog</h1>
              <p className="text-lg text-slate-600">Discover exceptional books across every genre</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
              >
                {viewMode === 'grid' ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Search and Quick Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8 sticky top-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-40 py-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search books, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent text-slate-900 placeholder-slate-500"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 rounded-full border border-slate-200 text-slate-900 focus:ring-2 focus:ring-[#F7C948] focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">▾</span>
              </div>
            </div>
          </div>

          {/* Genre Pills */}
          <div className="flex flex-wrap gap-3">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedGenre === genre
                    ? 'bg-[#F7C948] text-slate-900 shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-slate-200 bg-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                    <span className="text-slate-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000])}
                      className="w-20 px-3 py-2 border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-[#F7C948] text-slate-900'
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <X className="inline ml-1 h-3 w-3" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-600">
            Showing {filteredBooks.length} of {books.length} books
          </p>
          {(selectedTags.length > 0 || selectedGenre !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedTags([])
                setSelectedGenre('All')
                setSearchQuery('')
                setPriceRange([0, 5000])
              }}
              className="text-slate-600 hover:text-slate-900 text-sm flex items-center space-x-1"
            >
              <X className="h-4 w-4" />
              <span>Clear filters</span>
            </button>
          )}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="masonry-item">
              <BookCard
                href={`/book/${book.slug}`}
                title={book.title}
                author={book.author}
                priceCents={book.price}
                rating={book.rating}
                reviewCount={book.reviewCount}
                trending={book.trending}
                featured={book.featured}
                meta={{ pages: book.pages, year: book.year, language: book.language }}
              />
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-slate-300 mb-4">📚</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No books found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSelectedTags([])
                setSelectedGenre('All')
                setSearchQuery('')
                setPriceRange([0, 5000])
              }}
              className="bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
