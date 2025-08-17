import { BookOpen, Users, Star, Clock } from 'lucide-react'

export default function StatsRow() {
  const items = [
    { icon: BookOpen, number: '2,847+', label: 'Premium Books' },
    { icon: Users, number: '450+', label: 'Expert Authors' },
    { icon: Star, number: '98%', label: 'Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Global Access' },
  ]
  return (
    <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {items.map(({ icon: Icon, number, label }) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon aria-hidden className="h-8 w-8 text-yellow-600" />
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">{number}</div>
          <div className="text-slate-600 font-medium">{label}</div>
        </div>
      ))}
    </div>
  )
}


