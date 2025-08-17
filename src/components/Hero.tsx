'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Upload, Star, Users, Clock, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 rounded-full text-yellow-700 font-bold text-lg mb-6">
              <TrendingUp className="h-5 w-5 mr-2" />
              Premium Digital Products Platform
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Your Gateway to
              <span className="block text-yellow-600">Digital Success</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Access thousands of premium ebooks, courses, and digital products. 
              Resell, rebrand, or use them to build your own empire. The choice is yours.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/books" className="btn-primary text-lg rounded-2xl px-8 py-4">
              <span className="inline-flex items-center">
                Explore Library <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </Link>
            <Link href="/dashboard" className="btn-secondary text-lg rounded-2xl px-8 py-4">
              <span className="inline-flex items-center">
                Start Publishing <Upload className="h-5 w-5 ml-2" />
              </span>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
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
        </div>
      </div>
    </section>
  )
}


