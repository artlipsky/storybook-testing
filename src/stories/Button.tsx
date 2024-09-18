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
}

/** Primary UIX component for user interaction */
export const Button = ({
  type = 'primary',
  size = 'big',
  label,
  ...props
}: ButtonProps) => {
  const mode = `ergeon-button--${type}`;
  return (
    <button
      type="button"
      className={['ergeon-button', `ergeon-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
