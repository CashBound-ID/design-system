import { type PropsWithChildren, useCallback } from 'react';

import Card from '@/components/Card';
import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Snackbar from '@/components/Snackbar';
import Typography from '@/components/Typography';

import { BLUE900, GRAYMAUVE1000, GREENCASH700 } from '@/constant/theme';

import * as styles from './style.module.scss';

interface CardShowcaseUIProps {
  label: string;
  sourceCode: string;
}

const CardShowcaseUI = (props: PropsWithChildren<CardShowcaseUIProps>) => {
  const { children, label, sourceCode } = props;
  const { open } = Snackbar.useSnackbar();

  const handleOnClick = useCallback(() => {
    navigator.clipboard
      .writeText(sourceCode)
      .then(() => {
        open({
          autoClose: 1000,
          icon: 'check',
          iconColor: GREENCASH700,
          message: 'Success copied source code!'
        });
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }, [open, sourceCode]);

  return (
    <Card
      className={styles['card-showcase-ui']}
      shadowOnInteract="lg"
      padding="0"
      shadow="element"
      onClick={handleOnClick}
    >
      <Flex vertical align="center" justify="center">
        <section className={styles['card-showcase-ui__overview']}>
          {children}

          <section className={styles['card-showcase-ui__icon-btn']}>
            <Icon size={20} icon="add" color={BLUE900} />
          </section>
        </section>
        <section className={styles['card-showcase-ui__description']}>
          <Typography
            ellipsis
            color={GRAYMAUVE1000}
            modifier="body-md"
            margin="0"
            dangerouslySetInnerHTML={{ __html: label }}
          />
        </section>
      </Flex>
    </Card>
  );
};

export default CardShowcaseUI;
