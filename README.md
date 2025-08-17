# BookVault - Premium Digital Products Platform

A modern, professional platform for discovering, publishing, and selling premium ebooks and digital products. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### For Readers
- **Premium Ebook Library**: Access thousands of high-quality ebooks across all genres
- **AI-Powered Discovery**: Advanced search with semantic understanding and personalized recommendations
- **Rich Preview Experience**: Interactive table of contents, sample chapters, and author insights
- **Universal Formats**: Download in PDF, ePub, MOBI, DOCX with cross-device sync
- **Smart Library Management**: Organize collections with tags, notes, and reading progress tracking

### For Creators
- **Professional Creator Suite**: Advanced upload tools, automated processing, and analytics
- **Revenue Optimization**: Set your own prices, track performance, and maximize earnings
- **Global Distribution**: Sell to customers worldwide with built-in international payments
- **Quality Assurance**: Professional review process and community-driven ratings
- **Private Label Rights**: Edit, rebrand, and sell content with full commercial rights

### Platform Features
- **Summer Sale Promotions**: Dynamic pricing and promotional campaigns
- **Social Proof**: User testimonials and community engagement
- **Comparison Tables**: Transparent feature comparisons with competitors
- **Responsive Design**: Beautiful UI that works on all devices
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (recommended)

## 📱 Screenshots

### Homepage
- Summer sale banner with promotional messaging
- Hero section with social proof and call-to-action
- Featured products grid with pricing and ratings
- Feature comparison table
- Trust indicators and statistics

### Dashboard
- Overview with revenue and performance metrics
- Book management with status tracking
- Analytics dashboard with charts and insights
- Account settings and profile management

### User Profiles
- Editable profile information
- Published books showcase
- Performance statistics
- Activity timeline

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database and auth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faranhamid/bookvault-web.git
   cd bookvault-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

### Users Table
```sql
users (
  id: uuid (primary key)
  email: string
  display_name: string
  bio: text
  avatar_url: string
  created_at: timestamp
  updated_at: timestamp
)
```

### Books Table
```sql
books (
  id: uuid (primary key)
  title: string
  slug: string (unique)
  author_id: uuid (foreign key to users)
  description: text
  price_cents: integer
  category: string
  status: enum ('draft', 'processing', 'live', 'disabled')
  visibility: enum ('public', 'unlisted', 'private')
  file_url: string
  cover_image_url: string
  rating: decimal
  review_count: integer
  download_count: integer
  created_at: timestamp
  updated_at: timestamp
)
```

### Downloads Table
```sql
downloads (
  id: uuid (primary key)
  book_id: uuid (foreign key to books)
  user_id: uuid (foreign key to users)
  downloaded_at: timestamp
)
```

## 🎨 Customization

### Colors
The platform uses a yellow-based color scheme that can be customized in `tailwind.config.js`:

```js
colors: {
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    500: '#eab308', // Primary brand color
    600: '#ca8a04',
  }
}
```

### Components
All components are built with Tailwind CSS and can be easily customized:
- `src/components/Hero.tsx` - Main hero section
- `src/components/BookCard.tsx` - Book display cards
- `src/components/Navigation.tsx` - Site navigation
- `src/components/ProfileCard.tsx` - User profile display

## 📊 Analytics & Performance

### Built-in Metrics
- Revenue tracking and reporting
- Download analytics
- User engagement metrics
- Performance insights

### Performance Features
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Responsive design for all devices

## 🔒 Security Features

- Supabase Row Level Security (RLS)
- User authentication and authorization
- Secure file uploads
- API rate limiting
- Input validation and sanitization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Deploy with Docker support
- **AWS Amplify**: Full-stack deployment solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Entrepedia.co layout and user experience
- **UI Components**: Built with Tailwind CSS and Framer Motion
- **Icons**: Lucide React icon library
- **Database**: Supabase for backend services

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/faranhamid/bookvault-web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/faranhamid/bookvault-web/discussions)
- **Email**: Contact through GitHub profile

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic platform structure
- ✅ User authentication
- ✅ Book upload and management
- ✅ Basic analytics

### Phase 2 (Next)
- [ ] Advanced search and filtering
- [ ] Payment processing integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

### Phase 3 (Future)
- [ ] AI-powered recommendations
- [ ] Social features and communities
- [ ] Multi-language support
- [ ] Advanced creator tools

---

**Built with ❤️ by the BookVault team**
