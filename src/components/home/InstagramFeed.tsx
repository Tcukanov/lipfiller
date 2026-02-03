'use client'

import { useEffect, useRef, useState } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

export function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay loading to prioritize above-the-fold content
            setTimeout(() => {
              setIsVisible(true)
            }, 500)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '300px', // Start loading 300px before visible
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="w-12 h-px bg-gold-400" />
            <span className="tracking-[0.3em] uppercase text-sm text-gold-500">
              Follow Our Journey
            </span>
            <span className="w-12 h-px bg-gold-400" />
          </div>
          <h2 className="heading-section text-primary-900 mb-4">
            Instagram
          </h2>
          <p className="text-lg text-primary-600">
            See our latest transformations and behind-the-scenes moments
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {isVisible ? (
            <>
              {/* Instagram Embed - Shows real feed from @inxtinct.beauty.aesthetics */}
              <div className="w-full flex justify-center mb-8">
                <iframe
                  src="https://www.instagram.com/inxtinct.beauty.aesthetics/embed"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  loading="lazy"
                  className="max-w-3xl border border-cream-300"
                  title="Instagram feed for InXtinct Beauty Aesthetics"
                />
              </div>

              {/* Follow Button */}
              <div className="text-center">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 btn btn-primary group text-lg px-8"
                >
                  <Instagram className="w-6 h-6" />
                  Follow @inxtinct.beauty.aesthetics
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </>
          ) : (
            // Minimal placeholder - prevents layout shift, improves CLS score
            <div className="h-[700px] bg-cream-50 flex items-center justify-center border border-cream-300">
              <div className="text-center">
                <Instagram className="w-12 h-12 mx-auto mb-3 text-gold-400 animate-pulse" />
                <p className="text-primary-400 text-sm">Loading Instagram feed...</p>
              </div>
            </div>
          )}
        </div>

        {/* Optional: Display message */}
        <p className="text-center text-sm text-primary-400 mt-6">
          Can&apos;t see the feed? Visit our{' '}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500 hover:text-gold-600 font-medium underline"
          >
            Instagram profile
          </a>
        </p>
      </div>
    </section>
  )
}
