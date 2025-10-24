import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import BlogPostClient from './BlogPostClient'
import { getBlogPost, blogPosts } from '../blogData'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [{
        url: post.featuredImage,
        width: 800,
        height: 450,
        alt: post.title
      }]
    },
    alternates: {
      canonical: `https://papikondalutourism.com/aboutus/blog/${post.slug}`
    }
  }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://papikondalutourism.com/aboutus/blog/${post.slug}#article`,
    'url': `https://papikondalutourism.com/aboutus/blog/${post.slug}`,
    'headline': post.title,
    'description': post.metaDescription,
    'image': {
      '@type': 'ImageObject',
      'url': post.featuredImage,
      'width': 800,
      'height': 450
    },
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Papikondalu Tourism',
      'url': 'https://papikondalutourism.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://papikondalutourism.com/logo.png'
      }
    },
    'datePublished': post.publishDate,
    'dateModified': post.publishDate,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://papikondalutourism.com/aboutus/blog/${post.slug}`
    },
    'keywords': post.keywords.join(', '),
    'articleSection': post.category,
    'wordCount': post.content.split(' ').length,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://papikondalutourism.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': 'https://papikondalutourism.com/aboutus'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Blog',
          'item': 'https://papikondalutourism.com/aboutus/blog'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': post.title,
          'item': `https://papikondalutourism.com/aboutus/blog/${post.slug}`
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} />
    </>
  )
}