import { useDesignSystemProvider } from '@/context/DesignSystem';

import ButtonIcon from '@/components/ButtonIcon';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import type { NavigationTitleFnType, NavigationTitleProps } from './types';

const NavigationTitle: NavigationTitleFnType = (
  props: NavigationTitleProps
) => {
  const { navigationIcon = 'arrow-left', onClickNavigationIcon, text } = props;
  const { color } = useDesignSystemProvider();

  return (
    <Flex align="center" gap={4}>
      <ButtonIcon
        icon={navigationIcon}
        variant="transparent"
        size="md"
        onClick={onClickNavigationIcon}
      />

      <Typography
        modifier="heading-sm"
        fontWeight="bold"
        color={color.GRAYMAUVE1200}
      >
        {text}
      </Typography>
    </Flex>
  );
};

NavigationTitle.COMPONENT_NAME = 'navigation-header-title';

export default NavigationTitle;
