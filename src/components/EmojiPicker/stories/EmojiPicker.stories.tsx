import { type ComponentType, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import EmojiPicker from '@/components/EmojiPicker';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { noop } from '@/utils/misc';
import { GRAYMAUVE1100 } from '@/constant/theme';

const meta = {
  component: EmojiPicker,
  parameters: {
    'component-name': 'EmojiPicker',
    'import-path': '@cashbound-id/design-system/emoji-picker',
    'source-code': 'src/components/EmojiPicker'
  },
  subcomponents: {
    'EmojiPicker.BottomSheet': EmojiPicker.BottomSheet as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Form/Emoji Picker'
} satisfies Meta<typeof EmojiPicker>;

export default meta;

type Story = StoryObj<typeof EmojiPicker>;

export const Basic: Story = {
  args: {
    height: '400px',
    onChooseEmoji: noop,
    width: '300px'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    },
    layout: 'centered'
  }
};

export const BottomSheet: Story = {
  render: () => {
    const Component = () => {
      const [show, toggleShow] = useState(false);
      const [emoji, setEmoji] = useState('');

      return (
        <>
          <Flex vertical gap={16}>
            <Typography color={GRAYMAUVE1100}>
              Selected Emoji: {emoji || '-'}
            </Typography>

            <Button
              modifier="primary"
              variant="fill"
              onClick={() => toggleShow(true)}
            >
              Open Bottom Sheet
            </Button>
          </Flex>

          {show && (
            <EmojiPicker.BottomSheet
              label="Icon Picker"
              onChooseEmoji={setEmoji}
              onClose={toggleShow}
            />
          )}
        </>
      );
    };

    return <Component />;
  }
};
