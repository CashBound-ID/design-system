import type { MouseEventHandler, ReactNode } from 'react';
import { type HTMLAttributes, useCallback, useRef } from 'react';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import { GRAYMAUVE900, GRAYMAUVE1200, VIOLET900 } from '@/constant/theme';
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
   * Text label displayed next to the checkbox
   */
  label?: ReactNode;
  /**
   * Name attribute for the checkbox input
   */
  name?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    className,
    defaultChecked,
    disabled,
    enableClickLabel = false,
    id,
    label,
    onChange,
    ...res
  } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleOnClickLabel: MouseEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (enableClickLabel) checkboxRef.current?.click();
    },
    [enableClickLabel]
  );

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
        <span className={styles['checkmark']} data-checkbox>
          <Icon
            data-check={false}
            icon="box"
            size={18}
            color={disabled ? GRAYMAUVE900 : VIOLET900}
          />
          <Icon
            data-check={true}
            icon="check-box-fill"
            size={18}
            color={disabled ? GRAYMAUVE900 : VIOLET900}
          />
        </span>

        {label && (
          <Typography
            tag="p"
            onClick={handleOnClickLabel}
            data-enable-label={enableClickLabel}
            color={disabled ? GRAYMAUVE900 : GRAYMAUVE1200}
          >
            {label}
          </Typography>
        )}
      </Flex>
    </Flex>
  );
};

export default Checkbox;
