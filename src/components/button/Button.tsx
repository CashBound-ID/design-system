import { genCSSVariableStyle } from '@/utils/theme';

import './button.scss';

export interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/** Primary UI component for user interaction */
export const Button = ({
  backgroundColor,
  label,
  primary = false,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { ${genCSSVariableStyle()} }`
        }}
      />
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(
          ' '
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </>
  );
};
