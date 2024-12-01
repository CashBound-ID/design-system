import { useDesignSystemProvider } from '@/context/DesignSystem';

import ButtonIcon from '@/components/ButtonIcon';
import Flex from '@/components/Flex';
import Section from '@/components/Shared/Section';
import SingleSwitch from '@/components/Shared/SingleSwitch';
import Typography from '@/components/Typography';

import type { Maybe } from '@/types/utils';

import * as styles from './style.module.scss';
import type { BottomSheetHeaderFnType, BottomSheetHeaderProps } from './types';

interface PrivateBottomSheetHeaderProps extends BottomSheetHeaderProps {
  onClose(): void;
  showDragHandle: boolean;
}

const BottomSheetHeader: BottomSheetHeaderFnType = (
  props: BottomSheetHeaderProps
) => {
  const {
    'aria-label': ariaLabel,
    cta,
    'data-testid': dataTestId,
    hideCloseButton,
    onClose,
    showDragHandle,
    title
  } = props as PrivateBottomSheetHeaderProps;
  const { color } = useDesignSystemProvider();

  let renderedSection: Maybe<string> = 'close-btn';
  if (cta) renderedSection = 'cta';
  if ((renderedSection !== 'cta' && hideCloseButton) || showDragHandle === true)
    renderedSection = undefined;

  return (
    <Flex
      className={styles['bottom-sheet-header-content']}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      align="center"
    >
      <Typography
        modifier="body-lg"
        fontWeight="bold"
        color={color.GRAYMAUVE1200}
      >
        {title}
      </Typography>

      {Boolean(renderedSection) && (
        <SingleSwitch match={renderedSection as string}>
          <Section name="cta">{cta}</Section>

          <Section name="close-btn">
            <ButtonIcon icon="close" variant="transparent" onClick={onClose} />
          </Section>
        </SingleSwitch>
      )}
    </Flex>
  );
};

BottomSheetHeader.COMPONENT_NAME = 'bottom-sheet-header';

export default BottomSheetHeader;
