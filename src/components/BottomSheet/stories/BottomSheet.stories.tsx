import type { ComponentType } from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Typography from '@/components/Typography';

import { GRAYMAUVE1000 } from '@/constant/theme';

const meta = {
  component: BottomSheet,
  parameters: {
    'component-name': 'BottomNavigation',
    'import-path': '@cashbound-id/design-system/bottom-sheet',
    'source-code': 'src/components/BottomSheet'
  },
  subcomponents: {
    'BottomSheet.Content': BottomSheet.Content as ComponentType<unknown>,
    'BottomSheet.Footer': BottomSheet.Footer as ComponentType<unknown>,
    'BottomSheet.Header': BottomSheet.Header as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Feedback/Bottom Sheet'
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof BottomSheet>;

const ContentBottomSheet = () => {
  return (
    <Typography modifier="body-md" color={GRAYMAUVE1000}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non molestie
      felis, vel consequat metus. Cras tincidunt condimentum tellus, sed
      consectetur urna consectetur ut. Duis egestas tellus at nunc varius
      rhoncus. Quisque venenatis, nulla feugiat pellentesque mollis, leo neque
      cursus enim, et vulputate risus libero nec diam. Suspendisse faucibus et
      ex id egestas. Duis sollicitudin vel massa et tempor. Proin in purus
      cursus, mattis eros et, fermentum nibh. Sed sagittis odio eget blandit
      accumsan.
      <br />
      <br />
      Suspendisse potenti. Duis fermentum, dui eget semper rhoncus, massa metus
      scelerisque tellus, nec iaculis eros augue in magna. Maecenas sit amet
      fringilla lectus, id rutrum lacus. Morbi sit amet ultrices lacus, eget
      tempor sapien. Donec venenatis fringilla metus vel dapibus. Sed molestie
      lacus blandit luctus pulvinar. Donec eget nisi et ex pellentesque
      tincidunt. Ut quis tortor eget turpis egestas imperdiet nec sit amet nisl.
      Nullam tincidunt in mi non rhoncus. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae;
    </Typography>
  );
};

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    }
  },
  render: () => {
    const _Component = () => {
      const [show, toggleShow] = useState(false);

      return (
        <>
          <Button
            modifier="primary"
            variant="fill"
            size="md"
            onClick={() => toggleShow(true)}
          >
            Open Bottom Sheet
          </Button>
          {show && (
            <BottomSheet onClose={toggleShow}>
              <BottomSheet.Header
                title="Sample Title"
                cta={
                  <Button modifier="primary" variant="text" disabled>
                    Reset
                  </Button>
                }
              />

              <BottomSheet.Content padding="16px">
                <ContentBottomSheet />
              </BottomSheet.Content>

              <BottomSheet.Footer>
                <Button modifier="primary" variant="fill" size="lg" block>
                  Save Data
                </Button>
              </BottomSheet.Footer>
            </BottomSheet>
          )}
        </>
      );
    };

    return <_Component />;
  }
};

export const DragHandle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `showDragHandle` prop to display drag handle. User can drag the bottomsheet from the header area.'
      }
    }
  },
  render: () => {
    const _Component = () => {
      const [show, toggleShow] = useState(false);

      return (
        <>
          <Button
            modifier="primary"
            variant="fill"
            size="md"
            onClick={() => toggleShow(true)}
          >
            Open Bottom Sheet
          </Button>
          {show && (
            <BottomSheet onClose={toggleShow} showDragHandle>
              <BottomSheet.Header title="Sample Title" />

              <BottomSheet.Content padding="16px">
                <ContentBottomSheet />
              </BottomSheet.Content>

              <BottomSheet.Footer>
                <Button modifier="primary" variant="fill" size="lg" block>
                  Save Data
                </Button>
              </BottomSheet.Footer>
            </BottomSheet>
          )}
        </>
      );
    };

    return <_Component />;
  }
};

export const AdjustMaximumHeight: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can provide single value of `snapPoints` to adjust maximum height of bottomsheet.'
      }
    }
  },
  render: () => {
    const _Component = () => {
      const [show, toggleShow] = useState(false);

      return (
        <>
          <Button
            modifier="primary"
            variant="fill"
            size="md"
            onClick={() => toggleShow(true)}
          >
            Open Bottom Sheet
          </Button>
          {show && (
            <BottomSheet onClose={toggleShow} snapPoints="30%">
              <BottomSheet.Header title="Sample Title" />

              <BottomSheet.Content padding="16px">
                <ContentBottomSheet />
              </BottomSheet.Content>
            </BottomSheet>
          )}
        </>
      );
    };

    return <_Component />;
  }
};

export const SnapPoints: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "You can provide multiple value of `snapPoints` to adjust maximum height of bottomsheet by using drag the header. <br> Use empty string `''` to remove the inline max-height so it will reset to the default max height from theming."
      }
    }
  },
  render: () => {
    const _Component = () => {
      const [show, toggleShow] = useState(false);

      return (
        <>
          <Button
            modifier="primary"
            variant="fill"
            size="md"
            onClick={() => toggleShow(true)}
          >
            Open Bottom Sheet
          </Button>
          {show && (
            <BottomSheet
              onClose={toggleShow}
              showDragHandle
              snapPoints={['300px', '50%', '']}
            >
              <BottomSheet.Header title="Sample Title" />

              <BottomSheet.Content padding="16px">
                <ContentBottomSheet />
                <br />
                <ContentBottomSheet />
              </BottomSheet.Content>

              <BottomSheet.Footer>
                <Button modifier="primary" variant="fill" size="lg" block>
                  Save Data
                </Button>
              </BottomSheet.Footer>
            </BottomSheet>
          )}
        </>
      );
    };

    return <_Component />;
  }
};

export const DisableOverlay: Story = {
  render: () => {
    const _Component = () => {
      const [show, toggleShow] = useState(false);

      return (
        <>
          <Button
            modifier="primary"
            variant="fill"
            size="md"
            onClick={() => toggleShow(true)}
          >
            Open Bottom Sheet
          </Button>
          {show && (
            <BottomSheet onClose={toggleShow} overlayProps={{ disabled: true }}>
              <BottomSheet.Header title="Sample Title" />

              <BottomSheet.Content padding="16px">
                <ContentBottomSheet />
              </BottomSheet.Content>

              <BottomSheet.Footer>
                <Button modifier="primary" variant="fill" size="lg" block>
                  Save Data
                </Button>
              </BottomSheet.Footer>
            </BottomSheet>
          )}
        </>
      );
    };

    return <_Component />;
  }
};
