import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-600',
        secondary:
          'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-600',
        outline:
          'border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-600',
        'outline-subtle':
          'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-400',
        ghost: 'hover:bg-gray-100 text-gray-900 focus-visible:ring-gray-400',
        link: 'text-primary-600 underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-primary-500 to-secondary-600 text-white hover:from-primary-600 hover:to-secondary-700 focus-visible:ring-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
        'gradient-vivid':
          'bg-gradient-to-r from-secondary-500 via-primary-500 to-tertiary-600 text-white hover:from-secondary-600 hover:via-primary-600 hover:to-tertiary-700 focus-visible:ring-secondary-600 shadow-lg shadow-secondary-500/25 hover:shadow-xl hover:shadow-secondary-500/30',
        'gradient-cosmic':
          'bg-gradient-to-r from-highlight-600 via-primary-500 to-secondary-500 text-white hover:from-highlight-700 hover:via-primary-600 hover:to-secondary-600 focus-visible:ring-highlight-600 shadow-lg shadow-highlight-500/25 hover:shadow-xl hover:shadow-highlight-500/30',
      },
      size: {
        sm: 'h-8 px-6 text-xs',
        default: 'h-10 px-6 py-2 text-base',
        lg: 'h-12 px-8 text-lg',
        xl: 'h-14 px-10 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
