import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import type { CashboundIconType } from '@/types/icon';

import type { AdornmentType } from './types';

const Adornment = (props: AdornmentType) => {
  const { color, content, variant } = props;

  if (variant === 'icon') {
    return <Icon icon={content as CashboundIconType} color={color} size={20} />;
  }

  return (
    <Typography
      modifier="body-md"
      color={color}
      textAlign="center"
      style={{ width: 'auto' }}
    >
      {content}
    </Typography>
  );
};

export default Adornment;
