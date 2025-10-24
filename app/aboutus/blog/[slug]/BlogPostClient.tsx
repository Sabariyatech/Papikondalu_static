'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, Share2 } from 'lucide-react'
import { BlogPost, getRelatedPosts } from '../blogData'
import { useState } from 'react'

interface Props {
  post: BlogPost
}

const BlogPostClient = ({ post }: Props) => {
  const [isSharing, setIsSharing] = useState(false)
  const relatedPosts = getRelatedPosts(post.slug)

  const handleShare = async () => {
    setIsSharing(true)
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-4">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/aboutus" className="hover:text-primary-600">About Us</Link>
            <span>/</span>
            <Link href="/aboutus/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span className="text-neutral-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="heading-xl text-neutral-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
              <button
                onClick={handleShare}
                disabled={isSharing}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Share2 size={18} />
                <span>{isSharing ? 'Sharing...' : 'Share'}</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-96 mb-12">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Article Content */}
      <article className="pb-16">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-primary-600 prose-a:text-primary-600 hover:prose-a:text-primary-700"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t bg-neutral-50 py-8">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              href="/aboutus/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
            >
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            
            <Link href="/packages" className="btn-primary">
              Book Your Tour
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-padding max-w-6xl mx-auto">
            <h2 className="heading-lg text-center text-neutral-900 mb-12">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      href={`/aboutus/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogPostClient