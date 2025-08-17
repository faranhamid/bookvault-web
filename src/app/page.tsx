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
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Award,
  BookMarked,
  Sparkles
} from 'lucide-react'

// Mock data for demo
const featuredBooks = [
  {
    id: '1',
    title: 'Advanced Trading Mastery',
    author: 'Marcus Chen',
    rating: 4.8,
    price: 2999,
    originalPrice: 5999,
    pages: 324,
    category: 'Finance'
  },
  {
    id: '2',
    title: 'AI Content Creation Guide',
    author: 'Sarah Williams',
    rating: 4.9,
    price: 1999,
    originalPrice: 3999,
    pages: 256,
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Business Strategy Blueprint',
    author: 'David Rodriguez',
    rating: 4.7,
    price: 3999,
    originalPrice: 7999,
    pages: 412,
    category: 'Business'
  }
]

const testimonials = [
  { name: 'Alvin', role: 'Entrepreneur', avatar: '👨‍💼' },
  { name: 'Saleem', role: 'Content Creator', avatar: '👨‍🎨' },
  { name: 'Lily', role: 'Business Owner', avatar: '👩‍💼' },
  { name: 'Danu', role: 'Investor', avatar: '👨‍💻' },
  { name: 'Rudy', role: 'Author', avatar: '👨‍🏫' }
]

const features = [
  {
    icon: BookOpen,
    title: 'Premium Ebook Library',
    description: 'Access to thousands of high-quality ebooks across all genres and topics'
  },
  {
    icon: Shield,
    title: '100% Profit Keep',
    description: 'Keep all profits when you resell or use our content in your business'
  },
  {
    icon: Zap,
    title: 'Lifetime Updates',
    description: 'Get access to new content and updates forever with one payment'
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Sell to customers worldwide with our built-in international payment system'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every book is professionally reviewed and meets our high standards'
  },
  {
    icon: BookMarked,
    title: 'Private Label Rights',
    description: 'Edit, rebrand, and sell as your own with full commercial rights'
  }
]

const comparisonData = [
  { feature: 'Total Ebooks', bookvault: '2,847+', others: '500-1000' },
  { feature: 'New Content Weekly', bookvault: 'Free', others: 'Must Pay' },
  { feature: 'Average Price Per Book', bookvault: 'Less Than $0.20', others: 'At Least $5.00' },
  { feature: 'Lifetime Access', bookvault: 'Available', others: 'Pay Per Product' },
  { feature: 'Content Quality', bookvault: 'Made by Experts', others: 'Low Outdated Quality' },
  { feature: 'Graphics & Design', bookvault: 'Best-Seller Standards', others: 'Basic At Best' },
  { feature: 'Growth Tools', bookvault: 'University & Toolkit', others: 'No Resources' },
  { feature: 'Money Back Guarantee', bookvault: 'Full 30 Days', others: 'No Guarantee' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Summer Sale Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white text-center py-3 font-bold text-lg"
      >
        🔥 Summer Sale 🔥 Save 70% on Premium Library Access
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 rounded-full text-yellow-700 font-bold mb-8 text-lg">
              <Sparkles className="h-5 w-5 mr-2" />
              High-quality products with PLR
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              More than 1000 digital products
              <span className="block text-yellow-600">done for you to resell</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Imagine you have unlimited library of video courses, books, prompts, templates, and more. 
              Sell as your own products or use the content in any way. You are in charge.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
                Get Master Library
              </button>
              <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-lg border-2 border-white">
                    {testimonial.avatar}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Loved by 20,000+ entrepreneurs</div>
                <div className="text-slate-600 text-sm">Join our community today</div>
              </div>
            </div>
          </motion.div>

          {/* Featured Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <BookOpen className="h-20 w-20 text-slate-400 group-hover:text-yellow-500 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -70%
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-2">{book.category}</div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors text-lg">
                      {book.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{book.author}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                        ))}
                        <span className="text-sm font-medium text-slate-700 ml-2">{book.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-slate-900">
                          ${(book.price / 100).toFixed(2)}
                        </span>
                        <span className="text-sm text-slate-500 line-through">
                          ${(book.originalPrice / 100).toFixed(2)}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500">{book.pages} pages</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Complete shortcut to build your digital empire
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stop wasting time creating digital products and content from scratch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-yellow-200">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              #1 Digital Product Provider
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Let's be real, most PLR looks like it came straight out of 2005. Outdated information, 
              ugly designs, and content that just feel cheap. See why BookVault stands out.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50">
              <div className="p-6 font-semibold text-slate-900">Features</div>
              <div className="p-6 font-semibold text-slate-900 text-center">BookVault</div>
              <div className="p-6 font-semibold text-slate-900 text-center">Other Sites</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <div className="p-6 text-slate-700">{row.feature}</div>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-green-600 font-semibold">
                    <CheckCircle className="h-5 w-5" />
                    <span>{row.bookvault}</span>
                  </div>
                </div>
                <div className="p-6 text-center text-slate-500">{row.others}</div>
              </div>
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
              One-time payment
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Transform
              <span className="text-yellow-400 block">
                Your Business?
              </span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join over 20,000 entrepreneurs who trust BookVault for premium digital products. 
              Start building your empire today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/books">
                <button className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
                  <span className="flex items-center justify-center">
                    Get Master Library
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
                { number: '20,000+', label: 'Active Users' },
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