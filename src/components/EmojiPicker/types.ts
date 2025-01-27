export interface EmojiPickerProps {
  /**
   * The height of the emoji picker component.
   * Accepts any valid CSS height value (e.g., `200px`, `50%`, `auto`).
   * @type {string | undefined}
   * @default undefined
   */
  height?: string;

  /**
   * Callback function triggered when an emoji is selected.
   */
  onChooseEmoji(emoji: string): void;

  /**
   * Placeholder text displayed in the emoji picker input (if applicable).
   * @type {string | undefined}
   * @default undefined
   */
  placeholder?: string;

  /**
   * The width of the emoji picker component.
   * Accepts any valid CSS width value (e.g., `300px`, `100%`, `auto`).
   * @type {string | undefined}
   * @default undefined
   */
  width?: string;
}

export interface EmojiPickerBottomSheetProps extends EmojiPickerProps {
  /**
   * The label for the bottom sheet component.
   * This label is typically displayed as the title or heading of the bottom sheet.
   * @type {string}
   */
  label: string;

  /**
   * Callback function triggered when the modal is closed.
   */
  onClose(args: boolean): void;
}
