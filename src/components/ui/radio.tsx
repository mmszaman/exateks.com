'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const radioVariants = cva(
  'peer shrink-0 rounded-full border ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-gray-300 data-[state=checked]:border-primary-600 focus-visible:ring-primary-600',
        secondary:
          'border-gray-300 data-[state=checked]:border-secondary-600 focus-visible:ring-secondary-600',
        error:
          'border-red-500 data-[state=checked]:border-red-600 focus-visible:ring-red-500',
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

// Context for RadioGroup
interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
  variant?: 'default' | 'secondary' | 'error' | null;
  size?: 'sm' | 'default' | 'lg' | null;
  disabled?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null
);

// RadioGroup Component
export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    Omit<VariantProps<typeof radioVariants>, 'variant' | 'size'> {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'secondary' | 'error';
  size?: 'sm' | 'default' | 'lg';
  disabled?: boolean;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      name,
      value,
      defaultValue = '',
      onChange,
      variant = 'default',
      size = 'default',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const controlled = value !== undefined;
    const currentValue = controlled ? value : internalValue;

    const handleChange = (newValue: string) => {
      if (!controlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <RadioGroupContext.Provider
        value={{
          name,
          value: currentValue,
          onChange: handleChange,
          variant,
          size,
          disabled,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn('space-y-2', className)}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';

// Radio Component
export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof radioVariants> {
  label?: string;
  description?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      variant: propVariant,
      size: propSize,
      label,
      description,
      value,
      disabled: propDisabled,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(RadioGroupContext);

    const variant = propVariant ?? context?.variant ?? 'default';
    const size = propSize ?? context?.size ?? 'default';
    const disabled = propDisabled ?? context?.disabled;
    const name = context?.name ?? props.name;
    const isChecked = context ? context.value === value : undefined;

    const handleChange = () => {
      if (context && value) {
        context.onChange(value as string);
      }
    };

    const dotSize =
      size === 'sm' ? 'h-2 w-2' : size === 'lg' ? 'h-3 w-3' : 'h-2.5 w-2.5';
    const dotColor =
      variant === 'secondary'
        ? 'bg-secondary-600'
        : variant === 'error'
          ? 'bg-red-600'
          : 'bg-primary-600';

    const radio = (
      <button
        type="button"
        role="radio"
        aria-checked={isChecked}
        data-state={isChecked ? 'checked' : 'unchecked'}
        disabled={disabled}
        className={cn(
          radioVariants({ variant, size }),
          'flex items-center justify-center',
          className
        )}
        onClick={handleChange}
      >
        {isChecked && <span className={cn('rounded-full', dotSize, dotColor)} />}
      </button>
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
            type="radio"
            ref={ref}
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          {radio}
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
          type="radio"
          ref={ref}
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        {radio}
      </>
    );
  }
);
Radio.displayName = 'Radio';

export { Radio, RadioGroup, radioVariants };
