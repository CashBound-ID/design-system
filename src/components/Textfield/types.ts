import type { InputHTMLAttributes } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type { BaseInputProps } from '@/types/input';
import type { GenericHTMLProps } from '@/types/react';

type TextfieldHTMLProps = Omit<
  GenericHTMLProps<InputHTMLAttributes<HTMLInputElement>>,
  'onChange' | 'value' | 'disabled' | 'prefix' | 'suffix'
>;

export interface TextfieldAdditionalProps {
  icon?: CashboundIconType;
  kind: 'prefix' | 'suffix';
  text?: string;
}

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
     * Element to be displayed the icon at the beginning of the input field.
     */
    prefixIcon?: CashboundIconType;

    /**
     * Element to be displayed the text at the beginning of the input field.
     */
    prefixText?: string;

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
     * Element to be displayed the icon at the end of the input field.
     */
    suffixIcon?: CashboundIconType;

    /**
     * Element to be displayed the text at the end of the input field.
     */
    suffixText?: string;

    /**
     * The current value of the textarea.
     */
    value?: string;
  };
