'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

const selectVariants = cva(
  'flex w-full appearance-none rounded-lg border bg-white text-sm text-gray-900 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-gray-300 focus-visible:ring-primary-600 hover:border-gray-400',
        error: 'border-red-500 focus-visible:ring-red-500',
      },
      size: {
        sm: 'h-9 px-3 py-1.5 text-sm',
        default: 'h-11 px-4 py-2',
        lg: 'h-12 px-4 py-2.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface SelectProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(selectVariants({ variant, size }), 'pr-10', className)}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    );
  }
);
Select.displayName = 'Select';

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, ...props }, ref) => {
    return <option className={cn(className)} ref={ref} {...props} />;
  }
);
SelectOption.displayName = 'SelectOption';

export { Select, SelectOption, selectVariants };
