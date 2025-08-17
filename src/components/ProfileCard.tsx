import { User, BookOpen, Bookmark, Eye } from 'lucide-react'

interface Props {
  name: string
  handle: string
  stats?: { books: number; saved: number; reads: number }
}

export default function ProfileCard({ name, handle, stats = { books: 0, saved: 0, reads: 0 } }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
        <User aria-hidden className="h-8 w-8 text-slate-600" />
      </div>
      <div className="flex-1">
        <div className="text-xl font-semibold text-slate-900">{name}</div>
        <div className="text-slate-600">@{handle}</div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2"><BookOpen aria-hidden className="h-4 w-4" /> <span className="font-medium">{stats.books}</span> books</div>
        <div className="flex items-center gap-2"><Bookmark aria-hidden className="h-4 w-4" /> <span className="font-medium">{stats.saved}</span> saved</div>
        <div className="flex items-center gap-2"><Eye aria-hidden className="h-4 w-4" /> <span className="font-medium">{stats.reads}</span> reads</div>
      </div>
    </div>
  )
}


