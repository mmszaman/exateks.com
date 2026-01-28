'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

const checkboxVariants = cva(
  'peer shrink-0 rounded border ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-gray-300 data-[state=checked]:border-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-white focus-visible:ring-primary-600',
        secondary:
          'border-gray-300 data-[state=checked]:border-secondary-600 data-[state=checked]:bg-secondary-600 data-[state=checked]:text-white focus-visible:ring-secondary-600',
        error:
          'border-red-500 data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white focus-visible:ring-red-500',
      },
      size: {
        sm: 'h-4 w-4',
        default: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      checked,
      defaultChecked,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false);
    const controlled = checked !== undefined;
    const currentChecked = controlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) {
        setIsChecked(e.target.checked);
      }
      onChange?.(e);
    };

    const checkbox = (
      <div
        role="checkbox"
        aria-checked={currentChecked}
        data-state={currentChecked ? 'checked' : 'unchecked'}
        className={cn(
          checkboxVariants({ variant, size }),
          'relative inline-flex items-center justify-center',
          className
        )}
      >
        {currentChecked && (
          <Check className="h-full w-full p-0.5" strokeWidth={3} />
        )}
      </div>
    );

    if (label || description) {
      return (
        <label
          className={cn(
            'flex cursor-pointer items-start gap-3',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <input
            type="checkbox"
            ref={ref}
            checked={currentChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          {checkbox}
          <div className="space-y-0.5">
            {label && (
              <span className="text-sm font-medium text-gray-900">{label}</span>
            )}
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        </label>
      );
    }

    return (
      <>
        <input
          type="checkbox"
          ref={ref}
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        {checkbox}
      </>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
