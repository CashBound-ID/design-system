import _EmojiPicker from './EmojiPicker';
import _EmojiPickerBottomSheet from './EmojiPickerBottomSheet';

type Contract = typeof _EmojiPicker & {
  BottomSheet: typeof _EmojiPickerBottomSheet;
};

// @ts-expect-error irfanandriansyah10@gmail.com expected error
const EmojiPicker: Contract = _EmojiPicker;

EmojiPicker.BottomSheet = _EmojiPickerBottomSheet;

export default EmojiPicker;
