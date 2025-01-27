import { useCallback, useRef } from 'react';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';

import type { BaseModalRefType } from '@/types/modal';

import EmojiPicker from './EmojiPicker';
import type { EmojiPickerBottomSheetProps } from './types';

const EmojiPickerBottomSheet = (props: EmojiPickerBottomSheetProps) => {
  const {
    height = '400px',
    label,
    onChooseEmoji,
    onClose,
    placeholder = 'Search icon',
    width = '100%'
  } = props;
  const ref = useRef<BaseModalRefType>(null);

  const handleOnChooseEmoji = useCallback(
    (value: string) => {
      onChooseEmoji(value);

      if (ref.current) ref.current.close();
    },
    [onChooseEmoji]
  );

  const handleOnCancel = () => {
    if (ref.current) ref.current.close();
  };

  return (
    <BottomSheet onClose={onClose} showDragHandle componentRef={ref}>
      <BottomSheet.Header
        title={label}
        cta={
          <Button modifier="primary" variant="text" onClick={handleOnCancel}>
            Cancel
          </Button>
        }
      />

      <BottomSheet.Content padding="0">
        <EmojiPicker
          height={height}
          width={width}
          placeholder={placeholder}
          onChooseEmoji={handleOnChooseEmoji}
        />
      </BottomSheet.Content>
    </BottomSheet>
  );
};

export default EmojiPickerBottomSheet;
