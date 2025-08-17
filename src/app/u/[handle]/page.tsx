'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient'
import { User as UserIcon, BookOpen, Settings, Upload } from 'lucide-react'
import ProfileCard from '@/components/ProfileCard'

interface BookLite {
  id: string
  title: string
  slug: string
  price_cents?: number
}

export default function UserProfilePage() {
  const params = useParams<{ handle: string }>()
  const handle = params?.handle || 'me'

  const [displayName, setDisplayName] = useState('')
  const [books, setBooks] = useState<BookLite[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    async function load() {
      try {
        if (!isSupabaseConfigured()) return
        const { data: { user } } = await supabase.auth.getUser()
        const isMe = handle === 'me'
        const userId = isMe ? user?.id : undefined
        setDisplayName(isMe ? (user?.user_metadata?.name || 'Your Profile') : `@${handle}`)
        // Placeholder: query user books when schema ready
        setBooks([])
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [handle])

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-b from-yellow-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ProfileCard name={displayName || (loading ? 'Loading…' : 'User')} handle={handle} stats={{ books: books.length, saved: 0, reads: 0 }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">Your Books</h2>
              <Link href="/dashboard" className="inline-flex items-center px-4 py-2 rounded-xl bg-[#F7C948] text-slate-900 font-medium hover:bg-[#F5B700]">
                <Upload className="h-4 w-4 mr-2" /> Upload new
              </Link>
            </div>
            {books.length === 0 ? (
              <div className="border border-slate-200 rounded-2xl p-8 text-slate-600 text-center">
                You have not uploaded any books yet.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((b) => (
                  <Link key={b.id} href={`/book/${b.slug}`} className="block border border-slate-200 rounded-2xl p-6 hover:shadow-lg">
                    <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-4" />
                    <div className="font-semibold text-slate-900">{b.title}</div>
                    <div className="text-sm text-slate-600">{b.price_cents ? `$${(b.price_cents/100).toFixed(2)}` : 'Free'}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-6">
              <div className="font-semibold text-slate-900 mb-2 flex items-center"><Settings className="h-4 w-4 mr-2"/> Account</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Profile details</li>
                <li>Billing</li>
                <li>Security</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6">
              <div className="font-semibold text-slate-900 mb-2 flex items-center"><BookOpen className="h-4 w-4 mr-2"/> Library</div>
              <p className="text-sm text-slate-600">Saved and purchased books will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


