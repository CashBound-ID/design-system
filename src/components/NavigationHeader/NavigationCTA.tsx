import ButtonIcon from '@/components/ButtonIcon';

import type { NavigationCTAFnType, NavigationCTAProps } from './types';

const NavigationCTA: NavigationCTAFnType = (props: NavigationCTAProps) => {
  const { icon, onClick } = props;

  return (
    <ButtonIcon variant="transparent" size="md" icon={icon} onClick={onClick} />
  );
};

NavigationCTA.COMPONENT_NAME = 'navigation-header-cta';

export default NavigationCTA;
