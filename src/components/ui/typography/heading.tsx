import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes } from 'react';

// xs-12px; sm-14px; base-16px; lg-18px; xl-20px;
// 2xl-24px; 3xl-30px; 4xl-36px; 5xl-48px; 6xl-60px; 7xl-72px; 8xl-96px;

const headingVariants = cva('font-heading text-gray-900 tracking-tight', {
  variants: {
    level: {
      h1: 'text-5xl sm:text-5xl md:text-6xl font-bold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-semibold',
      h5: 'text-xl font-semibold',
      h6: 'text-lg font-semibold',
    },
    variant: {
      default: '',
      //title variants
      blog_title: 'text-5xl sm:text-6xl md:text-7xl font-extrabold',
      hero_title: 'text-5xl sm:text-6xl md:text-8xl font-extrabold',
      page: 'text-3xl sm:text-4xl md:text-5xl font-bold',
      sec_title: 'text-2xl sm:text-3xl font-semibold',
      card_title: 'leading-none',
      //color variants
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    level: 'h2',
    variant: 'default',
  },
});

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends
    HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h2', variant, as, children, ...props }, ref) => {
    const Component = (as || level) as ElementType;

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
