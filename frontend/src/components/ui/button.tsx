import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'glass' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  href?: never
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  glass: 'btn-glass',
  ghost: 'bg-transparent hover:bg-white/20 text-[var(--text-mid)] rounded-full transition-colors',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3.5 text-[0.9rem]',
  lg: 'px-10 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { className, variant = 'primary', size = 'md', children } = props

    const classes = cn(
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-250',
      variantClasses[variant],
      variant === 'ghost' && sizeClasses[size],
      className
    )

    if ('href' in props && props.href) {
      const { href, target, rel, ...rest } = props
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </Link>
      )
    }

    const { onClick, disabled, type, ...buttonRest } = props as ButtonAsButton

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
