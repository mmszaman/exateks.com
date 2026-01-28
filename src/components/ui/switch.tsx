'use client';

import React from 'react';

export interface SwitchProps {
  /**
   * Whether the switch is currently checked
   */
  checked?: boolean;
  /**
   * Callback when the switch state changes
   */
  onChange?: (checked: boolean) => void;
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Size variant of the switch
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Label text for the switch
   */
  label?: string;
  /**
   * Position of the label relative to the switch
   */
  labelPosition?: 'left' | 'right';
  /**
   * Name attribute for form submission
   */
  name?: string;
  /**
   * ID for the switch input
   */
  id?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeStyles = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

/**
 * Switch component for toggle interactions
 *
 * @example
 * ```tsx
 * <Switch
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 * ```
 */
export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  labelPosition = 'right',
  name,
  id,
  className = '',
}) => {
  const styles = sizeStyles[size];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const switchElement = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out ${styles.track} ${checked ? 'bg-primary-600' : 'bg-gray-200'} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} focus:ring-primary focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      <span className="sr-only">{label || 'Toggle'}</span>
      <span
        className={`inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${styles.thumb} ${checked ? styles.translate : 'translate-x-0.5'} `}
      />
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="sr-only"
        aria-hidden="true"
      />
    </button>
  );

  if (!label) {
    return <div className={className}>{switchElement}</div>;
  }

  return (
    <label
      className={`inline-flex items-center gap-3 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className} `}
    >
      {labelPosition === 'left' && (
        <span
          className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {label}
        </span>
      )}
      {switchElement}
      {labelPosition === 'right' && (
        <span
          className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;
