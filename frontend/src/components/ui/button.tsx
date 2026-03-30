import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
  'data-testid'?: string
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
  primary: 'btn-gold',
  outline: 'btn-outline',
  ghost: 'bg-transparent hover:bg-white/5 text-[var(--text-secondary)] transition-colors',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-sm',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { className, variant = 'primary', size = 'md', children, 'data-testid': testId } = props
    const classes = cn(variantClasses[variant], sizeClasses[size], className)

    if ('href' in props && props.href) {
      const { href, target, rel } = props
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} target={target} rel={rel} className={classes} data-testid={testId}>
          {children}
        </Link>
      )
    }

    const { onClick, disabled, type } = props as ButtonAsButton
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} onClick={onClick} disabled={disabled} type={type} data-testid={testId}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
