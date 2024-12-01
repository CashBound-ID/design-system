import type { Ref } from 'react';

import type { OverlayProps } from '@/components/Shared/Overlay/types';

export type BaseModalOnCloseFnType = (show: boolean) => void;

export interface BaseModalProps {
  /**
   * Accessible name for the modal, used for screen readers.
   */
  'aria-label'?: string;

  componentRef?: Ref<BaseModalRefType>;

  /**
   * Test ID for testing purposes.
   */
  'data-testid'?: string;

  /**
   * Callback function triggered at the end of the animation.
   */
  onAnimationEnd?: (show: boolean) => void;

  /**
   * Callback function triggered when the modal is closed.
   */
  onClose?: BaseModalOnCloseFnType;

  /**
   * Props for configuring the overlay component.
   * The `show` property is excluded as it is handled by the modal.
   */
  overlayProps?: Omit<OverlayProps, 'show'>;
}

export interface BaseModalFooterProps {
  /**
   * Accessible name for the footer, used for screen readers.
   */
  'aria-label'?: string;

  /**
   * Test ID for testing purposes.
   */
  'data-testid'?: string;
}

export interface BaseModalContentProps {
  /**
   * Accessible name for the content, used for screen readers.
   */
  'aria-label'?: string;

  /**
   * Test ID for testing purposes.
   */
  'data-testid'?: string;
}

export interface BaseModalHeaderProps {
  /**
   * Accessible name for the header, used for screen readers.
   */
  'aria-label'?: string;

  /**
   * Test ID for testing purposes.
   */
  'data-testid'?: string;
}

export interface BaseModalRefType {
  /**
   * Closes the modal programmatically.
   */
  close: () => void;
}
