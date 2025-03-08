import type { ChangeEventHandler, MouseEventHandler } from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';

import Icon from '@/components/Icon';
import FormItem from '@/components/Shared/FormItem';
import type { ThemeType } from '@/components/Shared/FormItem/types';
import Spinner from '@/components/Spinner';
import useDebounce from '@/hooks/useDebounce';

import { cx } from '@/utils/css';
import { noop } from '@/utils/misc';
import { DEFAULT_DEBOUNCE_DELAY } from '@/constant/input';
import { GRAYMAUVE1000, VIOLET900 } from '@/constant/theme';

import Adornment from './Adornment';
import * as styles from './style.module.scss';
import type { TextfieldProps } from './types';

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (props: TextfieldProps, ref) => {
    const {
      className,
      debounceDelay = DEFAULT_DEBOUNCE_DELAY,
      disabled = false,
      disabledDebounce = false,
      enableClear = false,
      error = false,
      helper,
      label,
      loading,
      maxLength,
      onChange = noop,
      optional,
      placeholder = 'Value input',
      prefix,
      required,
      rules,
      showCounter,
      success,
      suffix,
      value: propsValue = '',
      width = '300px',
      ...res
    } = props;
    const containerRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChangeDebounceValue = useCallback(
      (val: string) => {
        onChange(val, inputRef.current ?? undefined);
      },
      [onChange]
    );

    const [value = '', setValue] = useDebounce<string>(
      propsValue,
      handleOnChangeDebounceValue,
      disabledDebounce ? 0 : debounceDelay
    );

    useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement;
    });

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        // INFO: special case if user clear the textfield still trigger onChange props
        if (e.target.value === '') setValue(e.target.value);

        // INFO: skip if regex test result is false
        if (rules && !rules.test(e.target.value)) {
          return;
        }

        setValue(e.target.value);
      },
      [rules, setValue]
    );

    const handleOnClickClearBtn: MouseEventHandler<HTMLSpanElement> =
      useCallback(
        (e) => {
          e.preventDefault();
          setValue('');
        },
        [setValue]
      );

    const helperTheme = useMemo(() => {
      let theme: ThemeType = 'initial';

      if (error) theme = 'error';
      if (success) theme = 'success';
      if (disabled) theme = 'disabled';

      return theme;
    }, [disabled, error, success]);

    useEffect(() => {
      const handleOnFocus = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-focus', 'true');
        }
      };

      const handleOnBlur = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-focus');
        }
      };

      const handleOnMouseOver = () => {
        if (containerRef.current) {
          containerRef.current.setAttribute('data-hover', 'true');
        }
      };

      const handleOnMouseOut = () => {
        if (containerRef.current) {
          containerRef.current.removeAttribute('data-hover');
        }
      };

      if (!disabled) {
        if (inputRef.current) {
          // INFO: Handle Focus State
          inputRef.current.addEventListener('focus', handleOnFocus);
          inputRef.current.addEventListener('blur', handleOnBlur);

          // INFO: Handle Hover State
          inputRef.current.addEventListener('mouseover', handleOnMouseOver);
          inputRef.current.addEventListener('mouseout', handleOnMouseOut);
        }

        if (containerRef.current) {
          // INFO: Handle Hover State
          containerRef.current.addEventListener('mouseover', handleOnMouseOver);
          containerRef.current.addEventListener('mouseout', handleOnMouseOut);
        }

        return () => {
          if (inputRef.current) {
            // INFO: Handle Focus State
            inputRef.current.removeEventListener('focus', handleOnFocus);
            inputRef.current.removeEventListener('blur', handleOnBlur);

            // INFO: Handle Hover State
            inputRef.current.removeEventListener(
              'mouseover',
              handleOnMouseOver
            );
            // INFO: disable eslint since inputRef is not mutating
            // eslint-disable-next-line react-hooks/exhaustive-deps
            inputRef.current.removeEventListener('mouseout', handleOnMouseOut);
          }

          if (containerRef.current) {
            // INFO: Handle Hover State
            containerRef.current.addEventListener(
              'mouseover',
              handleOnMouseOver
            );
            // INFO: disable eslint since containerRef is not mutating
            // eslint-disable-next-line react-hooks/exhaustive-deps
            containerRef.current.addEventListener('mouseout', handleOnMouseOut);
          }
        };
      }

      if (containerRef.current && disabled) {
        containerRef.current.removeAttribute('data-hover');
        containerRef.current.removeAttribute('data-focus');
      }
    }, [disabled]);

    return (
      <FormItem className={cx(styles['textfield'], className)}>
        {Boolean(label) && (
          <FormItem.Label label={label} optional={optional} required />
        )}
        <FormItem.Content>
          <section
            ref={containerRef}
            className={styles['textfield__container']}
            style={{ '--width': width }}
            data-error={error && !disabled}
            data-success={success && !disabled}
            data-disabled={disabled}
          >
            {prefix && prefix.variant && prefix.content && (
              <Adornment
                variant={prefix.variant === 'icon' ? 'text' : prefix.variant}
                content={prefix.content}
                color={prefix.color}
              />
            )}

            <input
              {...res}
              data-testid="textfield-input"
              ref={inputRef}
              disabled={disabled}
              maxLength={maxLength}
              placeholder={placeholder}
              onChange={handleOnChange}
              required={required}
              value={value}
            />

            {showCounter && (
              <FormItem.Counter
                className={styles['counter']}
                currentCounter={value.length}
                maxLength={maxLength}
              />
            )}

            {loading && (
              <Spinner
                data-testid="textfield-loading"
                className={styles['loading-spinner']}
                size={20}
                spinnerWidth={2}
                spinnerColor={VIOLET900}
              />
            )}

            {suffix && suffix.variant && suffix.content && (
              <Adornment
                variant={suffix.variant}
                content={suffix.content}
                color={suffix.color}
              />
            )}

            {/* INFO: Icon to clear the value */}
            {enableClear && !loading && Boolean(value) && (
              <Icon
                icon="cancel-fill"
                color={GRAYMAUVE1000}
                className={styles['clear-btn']}
                onClick={handleOnClickClearBtn}
                size={20}
              />
            )}
          </section>
        </FormItem.Content>

        {/* INFO: Textfield Helper Section */}
        {Boolean(helper) && (
          <FormItem.Helper helper={String(helper)} theme={helperTheme} />
        )}
      </FormItem>
    );
  }
);

export default Textfield;
