import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
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
        <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-sm mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-section text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
