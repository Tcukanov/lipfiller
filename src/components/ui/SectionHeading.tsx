import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-4 mb-6 justify-center">
          <span className="w-12 h-px bg-gold-400" />
          <span className={cn(
            "tracking-[0.3em] uppercase text-sm",
            light ? "text-gold-400" : "text-gold-500"
          )}>
            {eyebrow}
          </span>
          <span className="w-12 h-px bg-gold-400" />
        </div>
      )}
      <h2 className={cn(
        "heading-section mb-6",
        light ? "text-cream-50" : "text-primary-900"
      )}>{title}</h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-cream-300" : "text-primary-600"
        )}>{description}</p>
      )}
    </div>
  )
}
