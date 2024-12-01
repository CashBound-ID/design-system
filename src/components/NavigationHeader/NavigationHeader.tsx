import type { PropsWithChildren } from 'react';

import Flex from '@/components/Flex';
import MultiSwitch from '@/components/Shared/MultiSwitch';
import SingleSwitch from '@/components/Shared/SingleSwitch';

import NavigationAction from './NavigationAction';
import NavigationCTA from './NavigationCTA';
import NavigationTitle from './NavigationTitle';
import * as styles from './style.module.scss';
import type { NavigationHeaderFnType, NavigationHeaderProps } from './types';

const ELIGIBLE_ELEMENTS = ['navigation-header-cta', 'navigation-header-action'];

const NavigationHeader: NavigationHeaderFnType = (
  props: PropsWithChildren<NavigationHeaderProps>
) => {
  const { children, color = 'transparent', position = 'default' } = props;

  return (
    <>
      <section
        className={styles['navigation-header']}
        data-position={position}
        style={{ backgroundColor: color }}
      >
        <Flex flex="1">
          <SingleSwitch match="navigation-header-title">
            {children}
          </SingleSwitch>
        </Flex>

        <MultiSwitch matchs={ELIGIBLE_ELEMENTS}>{children}</MultiSwitch>
      </section>

      {position === 'sticky' && (
        <section className={styles['navigation-header-placeholder']} />
      )}
    </>
  );
};

NavigationHeader.Action = NavigationAction;

NavigationHeader.CTA = NavigationCTA;

NavigationHeader.Title = NavigationTitle;

export default NavigationHeader;
