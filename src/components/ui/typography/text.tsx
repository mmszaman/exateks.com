import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes } from 'react';

// xs-12px; sm-14px; base-16px; lg-18px; xl-20px;

const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      xs_medium: 'text-xs font-medium',
      xs_semibold: 'text-xs font-semibold',
      xs_bold: 'text-xs font-bold',

      sm: 'text-sm',
      sm_medium: 'text-sm font-medium',
      sm_semibold: 'text-sm font-semibold',
      sm_bold: 'text-sm font-bold',

      base: 'text-base',
      base_medium: 'text-base font-medium',
      base_semibold: 'text-base font-semibold',
      base_bold: 'text-base font-bold',

      lg: 'text-lg',
      lg_medium: 'text-lg font-medium',
      lg_semibold: 'text-lg font-semibold',
      lg_bold: 'text-lg font-bold',

      xl: 'text-xl',
      xl_medium: 'text-xl font-medium',
      xl_semibold: 'text-xl font-semibold',
      xl_bold: 'text-xl font-bold',
    },
    variant: {
      default: 'text-gray-700',
      muted: 'text-gray-500',
      caption: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-600',
      primary: 'text-primary-600',
      secondary: 'text-secondary-600',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'default',
  },
});

type TextElement = 'p' | 'span' | 'div' | 'label';

export interface TextProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: TextElement;
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, size, variant, as = 'p', children, ...props }, ref) => {
    const Component = as as ElementType;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
