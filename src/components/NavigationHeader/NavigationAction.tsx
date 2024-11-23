import Button from '@/components/Button';

import type { NavigationActionFnType, NavigationActionProps } from './types';

const NavigationAction: NavigationActionFnType = (
  props: NavigationActionProps
) => {
  const { onClick, text } = props;

  return (
    <Button modifier="primary" variant="text" size="md" onClick={onClick}>
      {text}
    </Button>
  );
};

NavigationAction.COMPONENT_NAME = 'navigation-header-action';

export default NavigationAction;
