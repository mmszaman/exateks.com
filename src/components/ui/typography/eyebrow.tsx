import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes } from 'react';

const eyebrowVariants = cva(
  'inline-flex items-center gap-2 font-medium tracking-wide uppercase',
  {
    variants: {
      size: {
        xs: 'text-[10px] tracking-[0.15em]',
        sm: 'text-xs tracking-[0.12em]',
        base: 'text-sm tracking-[0.1em]',
        lg: 'text-base tracking-[0.08em]',
      },
      variant: {
        default: 'text-primary-600',
        muted: 'text-gray-500',
        gradient:
          'bg-gradient-to-r from-primary-500 via-tertiary-500 to-secondary-600 bg-clip-text text-transparent',
        badge:
          'rounded-full bg-primary-50 px-4 py-1.5 text-primary-700 ring-1 ring-primary-100',
        'badge-gradient':
          'rounded-full bg-gradient-to-r from-primary-50 via-tertiary-50 to-secondary-50 px-4 py-1.5 text-primary-700 ring-1 ring-primary-100/50',
        pill: 'rounded-full bg-primary-600 px-4 py-1.5 text-white',
        'pill-gradient':
          'rounded-full bg-gradient-to-r from-primary-500 via-tertiary-500 to-secondary-600 px-4 py-1.5 text-white shadow-lg shadow-primary-500/25',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'default',
    },
  }
);

type EyebrowElement = 'span' | 'div' | 'p';

export interface EyebrowProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof eyebrowVariants> {
  as?: EyebrowElement;
}

const Eyebrow = forwardRef<HTMLElement, EyebrowProps>(
  ({ className, size, variant, as = 'span', children, ...props }, ref) => {
    const Component = as as ElementType;

    return (
      <Component
        ref={ref}
        className={cn(eyebrowVariants({ size, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Eyebrow.displayName = 'Eyebrow';

export { Eyebrow, eyebrowVariants };
