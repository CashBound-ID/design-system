import type { MouseEventHandler, ReactNode } from 'react';
import { type HTMLAttributes, useCallback, useMemo, useRef } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

type CheckboxHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface CheckboxProps extends CheckboxHTMLProps {
  /**
   * Controlled checked state of the checkbox
   */
  checked?: boolean;
  /**
   * Initial checked state for uncontrolled checkbox
   */
  defaultChecked?: boolean;
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * Toogling enabl click label section
   */
  enableClickLabel?: boolean;
  /**
   * Unique identifier for the checkbox input
   */
  id?: string;
  /**
   * Showing indeterminate state (use with checked prop).
   */
  indeterminate?: boolean;
  /**
   * Text label displayed next to the checkbox
   */
  label?: ReactNode;
  /**
   * Name attribute for the checkbox input
   */
  name?: string;
  /**
   * Whether the checkbox should indicate an error, success or default UI.
   */
  theme?: 'default' | 'error' | 'success';
}

const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    className,
    defaultChecked,
    disabled,
    enableClickLabel = false,
    id,
    indeterminate = false,
    label,
    onChange,
    theme = 'default',
    ...res
  } = props;
  const { color: colorTheme } = useDesignSystemProvider();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleOnClickLabel: MouseEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (enableClickLabel) checkboxRef.current?.click();
    },
    [enableClickLabel]
  );

  const { color } = useMemo(() => {
    let color = colorTheme.VIOLET900;
    if (theme === 'error') color = colorTheme.REDTOMATO900;
    if (theme === 'success') color = colorTheme.GREENGRASS900;
    if (disabled) color = colorTheme.GRAYMAUVE900;

    return { color };
  }, [
    colorTheme.GRAYMAUVE900,
    colorTheme.GREENGRASS900,
    colorTheme.REDTOMATO900,
    colorTheme.VIOLET900,
    disabled,
    theme
  ]);

  return (
    <Flex gap={8} className={cx(styles['checkbox'], className)}>
      <Flex
        className={styles['checkbox-wrapper']}
        justify="center"
        align="center"
        gap={8}
      >
        <input
          {...res}
          type="checkbox"
          id={id}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          ref={checkboxRef}
        />
        <span className={styles['checkmark']}>
          <Icon data-check={false} icon="box" size={18} color={color} />
          {indeterminate ? (
            <Icon data-check={true} icon="box" size={18} color={color}>
              <span data-indeterminate style={{ backgroundColor: color }} />
            </Icon>
          ) : (
            <Icon
              data-check={true}
              icon="check-box-fill"
              size={18}
              color={color}
            />
          )}
        </span>

        {label && (
          <Typography
            tag="p"
            onClick={handleOnClickLabel}
            data-enable-label={enableClickLabel}
            color={
              disabled ? colorTheme.GRAYMAUVE900 : colorTheme.GRAYMAUVE1200
            }
          >
            {label}
          </Typography>
        )}
      </Flex>
    </Flex>
  );
};

export default Checkbox;
