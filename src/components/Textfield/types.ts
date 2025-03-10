import type { InputHTMLAttributes, ReactNode } from 'react';

import type { BaseInputProps } from '@/types/input';
import type { GenericHTMLProps } from '@/types/react';

type TextfieldHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'onChange' | 'value' | 'disabled' | 'prefix' | 'suffix'
>;

export type TextfieldProps = TextfieldHTMLProps &
  BaseInputProps & {
    /**
     * The delay (in milliseconds) for debouncing the `onChange` event.
     */
    debounceDelay?: number;

    /**
     * Whether to disable the debounce behavior for the `onChange` event.
     * @default false
     */
    disabledDebounce?: boolean;

    /**
     * Whether to display a clear button to reset the textarea value.
     * @default false
     */
    enableClear?: boolean;

    /**
     * Callback triggered when the value of the textarea changes.
     *
     * @param {string} text - The current value of the textarea.
     * @param {HTMLElement} [element] - The textarea element.
     */
    onChange?: (text: string, element?: HTMLElement) => void;

    /**
     * Element to be displayed at the beginning of the input field.
     * Can be either an icon or text.
     */
    prefix?: ReactNode;

    /**
     * A regular expression to validate the input value.
     */
    rules?: RegExp;

    /**
     * Whether to display a character counter.
     * @default false
     */
    showCounter?: boolean;

    /**
     * Element to be displayed at the end of the input field.
     * Can be either an icon or text.
     */
    suffix?: ReactNode;
    /**
     * The current value of the textarea.
     */
    value?: string;
  };
