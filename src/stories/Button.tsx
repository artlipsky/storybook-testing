import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Role of this button on the page */
  type?: 'primary' | 'cta' | 'action' | 'attention' | 'base';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'big';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Disable the button */
  disabled?: boolean;
  /** Fill style for the button */
  fill?: 'solid' | 'lined' | 'boundless';
}

/** The Button component is a customizable UI element used to trigger user actions. It supports different sizes, types (such as primary, cta, and action), fill styles (e.g., solid, lined, boundless), and can be disabled when needed. The button’s appearance and behavior are easily adjustable through props. */
export const Button = ({
  type = 'primary',
  size = 'big',
  fill = 'solid',
  label = 'Button',
  disabled = true,
  ...props
}: ButtonProps) => {
  const typeClass = `ergeon-button--${type}`;
  const disabledClass = disabled ? 'is-disabled' : '';
  const fillClass = `ergeon-button--${fill}`;
  return (
    <button
      type="button"
      className={['ergeon-button', `ergeon-button--${size}`, typeClass, disabledClass, fillClass].join(' ')}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
