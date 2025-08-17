'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient'
import { 
  User as UserIcon, 
  BookOpen, 
  Settings, 
  Upload, 
  Star,
  Download,
  DollarSign,
  Calendar,
  Globe,
  Lock,
  Edit,
  Plus,
  Heart,
  Share2,
  Eye,
  BarChart3
} from 'lucide-react'
import ProfileCard from '@/components/ProfileCard'

interface BookLite {
  id: string
  title: string
  slug: string
  price_cents?: number
  rating?: number
  downloads?: number
  category?: string
  status?: string
}

export default function UserProfilePage() {
  const params = useParams<{ handle: string }>()
  const handle = params?.handle || 'me'

  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const [books, setBooks] = useState<BookLite[]>([])
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: '',
    bio: ''
  })

  useEffect(() => {
    let ignore = false
    async function load() {
      try {
        if (!isSupabaseConfigured()) return
        const { data: { user } } = await supabase.auth.getUser()
        const isMe = handle === 'me'
        const userId = isMe ? user?.id : undefined
        
        if (isMe && user) {
          setDisplayName(user?.user_metadata?.name || 'Your Profile')
          setBio(user?.user_metadata?.bio || 'Professional author and content creator')
          setEditForm({
            name: user?.user_metadata?.name || '',
            bio: user?.user_metadata?.bio || ''
          })
        } else {
          setDisplayName(`@${handle}`)
          setBio('Professional author and content creator')
        }
        
        // Mock data for demo - replace with actual API calls
        setBooks([
          {
            id: '1',
            title: 'Advanced Options Trading Strategies',
            slug: 'advanced-options-trading',
            price_cents: 2999,
            rating: 4.8,
            downloads: 1247,
            category: 'Finance',
            status: 'live'
          },
          {
            id: '2',
            title: 'Risk Management Fundamentals',
            slug: 'risk-management-fundamentals',
            price_cents: 1999,
            rating: 4.6,
            downloads: 892,
            category: 'Finance',
            status: 'live'
          },
          {
            id: '3',
            title: 'Quantitative Analysis Methods',
            slug: 'quantitative-analysis',
            price_cents: 3499,
            rating: 4.9,
            downloads: 1567,
            category: 'Finance',
            status: 'live'
          }
        ])
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [handle])

  const handleSaveProfile = async () => {
    // Here you would typically update the user profile in Supabase
    setDisplayName(editForm.name)
    setBio(editForm.bio)
    setIsEditing(false)
  }

  const stats = {
    books: books.length,
    totalDownloads: books.reduce((sum, book) => sum + (book.downloads || 0), 0),
    averageRating: books.length > 0 ? (books.reduce((sum, book) => sum + (book.rating || 0), 0) / books.length).toFixed(1) : '0.0',
    totalRevenue: books.reduce((sum, book) => sum + ((book.downloads || 0) * (book.price_cents || 0) / 100), 0)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-yellow-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                <UserIcon className="h-12 w-12 text-yellow-600" />
              </div>
              <div>
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl font-bold text-slate-900">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="bg-transparent border-b-2 border-yellow-300 focus:border-yellow-500 outline-none"
                      />
                    ) : (
                      displayName
                    )}
                  </h1>
                  {handle === 'me' && (
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                    >
                      <Edit className="h-5 w-5 text-slate-600" />
                    </button>
                  )}
                </div>
                <p className="text-xl text-slate-600 mt-2">
                  {isEditing ? (
                    <textarea
                      value={editForm.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      className="bg-transparent border-b-2 border-yellow-300 focus:border-yellow-500 outline-none resize-none w-full"
                      rows={2}
                    />
                  ) : (
                    bio
                  )}
                </p>
                {isEditing && (
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false)
                        setEditForm({ name: displayName, bio })
                      }}
                      className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {handle === 'me' && (
              <div className="flex space-x-3">
                <Link href="/dashboard" className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-600 transition-colors">
                  <Settings className="h-4 w-4 mr-2" /> Dashboard
                </Link>
                <Link href="/dashboard" className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-yellow-500 text-yellow-600 font-medium hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Upload className="h-4 w-4 mr-2" /> Upload New
                </Link>
              </div>
            )}
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: stats.books.toString(), label: 'Books Published', icon: BookOpen, color: 'text-blue-600' },
              { number: stats.totalDownloads.toLocaleString(), label: 'Total Downloads', icon: Download, color: 'text-green-600' },
              { number: stats.averageRating, label: 'Average Rating', icon: Star, color: 'text-yellow-600' },
              { number: `$${stats.totalRevenue.toLocaleString()}`, label: 'Total Revenue', icon: DollarSign, color: 'text-purple-600' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Published Books</h2>
              {handle === 'me' && (
                <Link href="/dashboard" className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-600 transition-colors">
                  <Plus className="h-4 w-4 mr-2" /> Upload new
                </Link>
              )}
            </div>
            
            {books.length === 0 ? (
              <div className="border border-slate-200 rounded-2xl p-12 text-center">
                <BookOpen className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No books published yet</h3>
                <p className="text-slate-600 mb-6">Start sharing your knowledge with the world</p>
                {handle === 'me' && (
                  <Link href="/dashboard" className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-500 text-slate-900 font-medium hover:bg-yellow-600 transition-colors">
                    <Upload className="h-4 w-4 mr-2" /> Upload Your First Book
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                  <div key={book.id} className="group border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <BookOpen className="h-16 w-16 text-slate-400 group-hover:text-yellow-500 transition-colors duration-300" />
                      <div className="absolute top-2 right-2">
                        {book.status === 'live' ? (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
                            <Globe className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-green-700 font-medium">Live</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-slate-100 rounded-full">
                            <Lock className="h-3 w-3 text-slate-600" />
                            <span className="text-xs text-slate-700 font-medium">Private</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                        {book.title}
                      </h3>
                      <div className="text-sm text-slate-600 mb-2">{book.category}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-slate-700">{book.rating}</span>
                        </div>
                        <span className="text-sm text-slate-500">{book.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-slate-900">
                        {book.price_cents ? `$${(book.price_cents/100).toFixed(2)}` : 'Free'}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <Link href={`/book/${book.slug}`} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-white">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <BarChart3 className="h-4 w-4 mr-2"/> Performance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">This Month</span>
                  <span className="text-sm font-medium text-slate-900">+24%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Total Views</span>
                  <span className="text-sm font-medium text-slate-900">12.4K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Engagement</span>
                  <span className="text-sm font-medium text-slate-900">8.7%</span>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            {handle === 'me' && (
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Settings className="h-4 w-4 mr-2"/> Account
                </h3>
                <ul className="text-sm text-slate-600 space-y-3">
                  <li className="flex items-center justify-between">
                    <span>Profile details</span>
                    <button className="text-yellow-600 hover:text-yellow-700">Edit</button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Billing & payments</span>
                    <button className="text-yellow-600 hover:text-yellow-700">Manage</button>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Security settings</span>
                    <button className="text-yellow-600 hover:text-yellow-700">Secure</button>
                  </li>
                </ul>
              </div>
            )}

            {/* Library Section */}
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2"/> Library
              </h3>
              <p className="text-sm text-slate-600 mb-4">Saved and purchased books will appear here.</p>
              <div className="text-center py-4">
                <BookOpen className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No saved books yet</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">New download</span>
                  <span className="text-slate-400">2h ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Review received</span>
                  <span className="text-slate-400">4h ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-600">Book updated</span>
                  <span className="text-slate-400">1d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


