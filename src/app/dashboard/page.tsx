'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  FileText, 
  Eye, 
  Settings, 
  TrendingUp,
  Download,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  BarChart3,
  Users,
  DollarSign
} from 'lucide-react'

// Mock data for creator's books
const creatorBooks = [
  {
    id: '1',
    title: 'Advanced Options Trading Strategies',
    status: 'live',
    visibility: 'public',
    price: 2999,
    downloads: 1247,
    revenue: 37410,
    rating: 4.8,
    reviews: 234,
    uploadDate: '2024-01-15',
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    title: 'Risk Management Fundamentals',
    status: 'processing',
    visibility: 'private',
    price: 1999,
    downloads: 0,
    revenue: 0,
    rating: 0,
    reviews: 0,
    uploadDate: '2024-01-25',
    lastUpdated: '2024-01-25'
  },
  {
    id: '3',
    title: 'Quantitative Analysis Methods',
    status: 'live',
    visibility: 'public',
    price: 3499,
    downloads: 892,
    revenue: 31205,
    rating: 4.9,
    reviews: 156,
    uploadDate: '2024-01-10',
    lastUpdated: '2024-01-18'
  }
]

const stats = [
  { label: 'Total Revenue', value: '$68,615', change: '+12.5%', trend: 'up' },
  { label: 'Total Downloads', value: '2,139', change: '+8.2%', trend: 'up' },
  { label: 'Average Rating', value: '4.85', change: '+0.1', trend: 'up' },
  { label: 'Active Books', value: '2', change: '0', trend: 'neutral' }
]

export default function DashboardPage() {
  if (typeof window !== 'undefined') {
    window.location.replace('/u/me')
  }
  const [activeTab, setActiveTab] = useState('overview')
  const [showUploadModal, setShowUploadModal] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'books', label: 'My Books', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-green-700 bg-green-100'
      case 'processing': return 'text-yellow-700 bg-yellow-100'
      case 'disabled': return 'text-red-700 bg-red-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live': return CheckCircle
      case 'processing': return Clock
      case 'disabled': return AlertCircle
      default: return AlertCircle
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Creator Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage your books and track performance</p>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Upload New Book</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#F7C948] text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-slate-600">{stat.label}</h3>
                        <div className={`flex items-center space-x-1 text-xs ${
                          stat.trend === 'up' ? 'text-green-600' : 
                          stat.trend === 'down' ? 'text-red-600' : 'text-slate-600'
                        }`}>
                          {stat.trend === 'up' && <TrendingUp className="h-3 w-3" />}
                          <span>{stat.change}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {[
                      { action: 'New download', book: 'Advanced Options Trading', time: '2 hours ago', icon: Download },
                      { action: 'Review received', book: 'Quantitative Analysis Methods', time: '4 hours ago', icon: Star },
                      { action: 'Book updated', book: 'Advanced Options Trading', time: '1 day ago', icon: FileText },
                      { action: 'Revenue milestone', book: 'All books', time: '2 days ago', icon: DollarSign }
                    ].map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50">
                          <div className="w-10 h-10 bg-[#F7C948]/10 rounded-full flex items-center justify-center">
                            <Icon className="h-5 w-5 text-[#F7C948]" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900">{activity.action}</div>
                            <div className="text-sm text-slate-600">{activity.book}</div>
                          </div>
                          <div className="text-sm text-slate-500">{activity.time}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'books' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Books Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">My Books</h2>
                    <p className="text-slate-600">Manage your published and draft books</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search books..."
                        className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#F7C948] focus:border-transparent"
                      />
                    </div>
                    <button className="p-2 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                      <Filter className="h-4 w-4 text-slate-600" />
                    </button>
                  </div>
                </div>

                {/* Books Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Book</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Status</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Price</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Downloads</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Revenue</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Rating</th>
                          <th className="text-left py-4 px-6 font-semibold text-slate-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {creatorBooks.map(book => {
                          const StatusIcon = getStatusIcon(book.status)
                          return (
                            <tr key={book.id} className="hover:bg-slate-50">
                              <td className="py-4 px-6">
                                <div>
                                  <div className="font-medium text-slate-900">{book.title}</div>
                                  <div className="text-sm text-slate-600">Updated {book.lastUpdated}</div>
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(book.status)}`}>
                                  <StatusIcon className="h-4 w-4" />
                                  <span className="capitalize">{book.status}</span>
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <span className="font-medium text-slate-900">
                                  ${(book.price / 100).toFixed(2)}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="font-medium text-slate-900">
                                  {book.downloads.toLocaleString()}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="font-medium text-slate-900">
                                  ${book.revenue.toLocaleString()}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                {book.rating > 0 ? (
                                  <div className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 text-[#F7C948] fill-current" />
                                    <span className="font-medium text-slate-900">{book.rating}</span>
                                    <span className="text-sm text-slate-600">({book.reviews})</span>
                                  </div>
                                ) : (
                                  <span className="text-slate-500">No ratings</span>
                                )}
                              </td>
                              <td className="py-4 px-6">
                                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                  <MoreHorizontal className="h-4 w-4 text-slate-600" />
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Analytics</h2>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
                    <BarChart3 className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Analytics Coming Soon</h3>
                    <p className="text-slate-600">Detailed analytics and insights will be available in the next update.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Settings</h2>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
                    <Settings className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Settings Panel</h3>
                    <p className="text-slate-600">Account and book settings will be available here.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Upload New Book</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Book File</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#F7C948] transition-colors">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <div className="text-lg font-medium text-slate-900 mb-2">Drop your book file here</div>
                    <div className="text-slate-600 mb-4">or click to browse</div>
                    <div className="text-sm text-slate-500">Supports PDF, ePub, MOBI, DOCX up to 50MB</div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent"
                      placeholder="Enter book title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Price</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent"
                    placeholder="Describe your book..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Genre</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent">
                      <option>Select genre</option>
                      <option>Finance</option>
                      <option>Technology</option>
                      <option>Fiction</option>
                      <option>Business</option>
                      <option>Sports</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Visibility</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#F7C948] focus:border-transparent">
                      <option>Public</option>
                      <option>Unlisted</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="px-6 py-3 border border-slate-200 rounded-xl font-medium text-slate-700 hover:border-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="bg-[#F7C948] hover:bg-[#F5B700] text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors">
                    Upload Book
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
