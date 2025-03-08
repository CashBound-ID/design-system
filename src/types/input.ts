/////////////////////////////////////////////////////////////////////////////
// Input Container Types
/////////////////////////////////////////////////////////////////////////////

/**
 * Base properties shared across input components.
 */
export interface BaseInputProps {
  /**
   * Accessible label for the input element.
   */
  'aria-label'?: string;

  /**
   * Test identifier for testing purposes.
   */
  'data-testid'?: string;

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the input has an error state.
   */
  error?: boolean;

  /**
   * Helper text displayed below the input.
   */
  helper?: string;

  /**
   * Label text displayed above the input.
   */
  label?: string;

  /**
   * Whether the input is in a loading state.
   */
  loading?: boolean;

  /**
   * Margin around the input element, either as a string or number.
   */
  margin?: string | number;

  /**
   * Whether the input is optional.
   */
  optional?: boolean;

  /**
   * Whether the input is required.
   */
  required?: boolean;

  /**
   * Whether the input has an success state.
   */
  success?: boolean;
}
