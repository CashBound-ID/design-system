import { useCallback } from 'react';

import EmojiPickerReact, {
  EmojiStyle,
  SuggestionMode,
  Theme
} from 'emoji-picker-react';
import type { MouseDownEvent } from 'emoji-picker-react/dist/config/config';

import * as styles from './style.module.scss';
import type { EmojiPickerProps } from './types';

const EmojiPicker = (props: EmojiPickerProps) => {
  const { height, onChooseEmoji, placeholder = 'Search icon', width } = props;

  const handleOnChooseEmoji: MouseDownEvent = useCallback(
    (value) => {
      onChooseEmoji(value.emoji);
    },
    [onChooseEmoji]
  );

  return (
    <section className={styles['emoji-picker']}>
      <EmojiPickerReact
        autoFocusSearch
        emojiStyle={EmojiStyle.NATIVE}
        height={height}
        lazyLoadEmojis
        previewConfig={{ showPreview: false }}
        searchPlaceholder={placeholder}
        skinTonesDisabled
        suggestedEmojisMode={SuggestionMode.RECENT}
        theme={Theme.LIGHT}
        width={width}
        onEmojiClick={handleOnChooseEmoji}
      />
    </section>
  );
};

export default EmojiPicker;
