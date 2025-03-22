import type { ChangeEventHandler, MouseEventHandler } from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import FormItem from '@/components/Shared/FormItem';
import type { FormItemThemeType } from '@/components/Shared/FormItem/types';
import Spinner from '@/components/Spinner';
import useDebounce from '@/hooks/useDebounce';

import { cx } from '@/utils/css';
import { noop } from '@/utils/misc';
import { DEFAULT_DEBOUNCE_DELAY } from '@/constant/input';
import { GRAYMAUVE1000, VIOLET900 } from '@/constant/theme';

import Typography from '../Typography';
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
      prefixIcon,
      prefixText,
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
    const {
      color: { GRAYMAUVE1100 }
    } = useDesignSystemProvider();

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
      let theme: FormItemThemeType = 'initial';

      if (error) theme = 'error';
      else if (success) theme = 'success';
      else if (disabled) theme = 'disabled';

      return theme;
    }, [disabled, error, success]);

    useEffect(() => {
      const abortController = new AbortController();
      
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
          inputRef.current.addEventListener(
            'focus',
            handleOnFocus,
            abortController
          );
          inputRef.current.addEventListener(
            'blur',
            handleOnBlur,
            abortController
          );

          // INFO: Handle Hover State
          inputRef.current.addEventListener(
            'mouseover',
            handleOnMouseOver,
            abortController
          );
          inputRef.current.addEventListener(
            'mouseout',
            handleOnMouseOut,
            abortController
          );
        }

        if (containerRef.current) {
          // INFO: Handle Hover State
          containerRef.current.addEventListener(
            'mouseover',
            handleOnMouseOver,
            abortController
          );
          containerRef.current.addEventListener(
            'mouseout',
            handleOnMouseOut,
            abortController
          );
        }
      }

      if (containerRef.current && disabled) {
        containerRef.current.removeAttribute('data-hover');
        containerRef.current.removeAttribute('data-focus');
      }

      return () => {
        abortController.abort();
      };
    }, [disabled]);

    const isPrefixAvailable = Boolean(prefixText || prefixIcon);

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
            {isPrefixAvailable && (
              <div className={styles['prefix']}>
                {prefixIcon && (
                  <Icon icon={prefixIcon} color={GRAYMAUVE1000} size={20} />
                )}
                {prefixText && (
                  <Typography
                    modifier="body-md"
                    fontWeight="bold"
                    color={GRAYMAUVE1100}
                  >
                    {prefixText}
                  </Typography>
                )}
              </div>
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

            {suffix && <span>{suffix}</span>}

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
