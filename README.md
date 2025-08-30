# Papikondalu Tourism Website

A modern, responsive tourism website built with Next.js 14, TypeScript, and Tailwind CSS for Papikondalu Tourism - a company with 20+ years of experience serving 7+ lakh happy customers.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Performance Optimized**: Image optimization with Cloudinary CDN
- **SEO Optimized**: Comprehensive metadata, sitemap, and structured data
- **Interactive Gallery**: Masonry layout with lightbox functionality
- **Smooth Animations**: Framer Motion for engaging user experience
- **Contact Forms**: Functional contact and newsletter forms
- **Accessibility**: WCAG compliant design

## Pages

1. **Home** (`/`) - Hero section, featured attractions, packages, testimonials
2. **About Us** (`/aboutus`) - Company story, fleet information, why choose us
3. **Attractions** (`/attractions`) - 8 detailed attraction pages
4. **Packages** (`/packages`) - 9 comprehensive tour packages
5. **Gallery** (`/gallery`) - Photo gallery with category filtering
6. **Contact** (`/contact`) - Contact form and company information

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Reusable components
├── aboutus/            # About Us page
├── attractions/        # Attractions page
├── packages/           # Packages page
├── gallery/            # Gallery page
├── contact/            # Contact page
├── types/              # TypeScript interfaces
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Key Components

- **Header**: Responsive navigation with mobile menu
- **Footer**: Company information and links
- **Hero**: Full-screen hero section with CTA
- **FeaturedAttractions**: Showcase of top 4 attractions
- **PackageShowcase**: Display of 3 popular packages
- **Testimonials**: Customer reviews and statistics
- **Newsletter**: Email subscription form
- **Lightbox**: Image gallery viewer

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Images**: Next.js Image with Cloudinary CDN
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Performance Features

- Image optimization with Cloudinary transformations
- Lazy loading for all images except hero
- Responsive image sizes
- SEO optimization with metadata
- Fast loading times

## Contact Information

- **Phone**: +91 9848323488
- **Email**: info@papikondalutourism.com
- **Location**: Rajahmundry, Andhra Pradesh

## License

© 2024 Papikondalu Tourism. All rights reserved.