import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import * as styles from './style.module.scss';
import type { TextfieldAdditionalProps } from './types';

const TextfieldAdditionalElement = (props: TextfieldAdditionalProps) => {
  const { icon, kind, text } = props;
  const { color } = useDesignSystemProvider();

  const isElementAvailable = Boolean(text || icon);

  if (isElementAvailable) {
    return (
      <section
        className={styles['textfield__additional-element']}
        data-with-icon={Boolean(icon)}
        data-with-text={Boolean(text)}
        data-kind={kind}
      >
        {icon && <Icon icon={icon} color={color.GRAYMAUVE1100} size={20} />}
        {text && (
          <Typography
            modifier="body-md"
            fontWeight="bold"
            color={color.GRAYMAUVE1100}
          >
            {text}
          </Typography>
        )}
      </section>
    );
  }

  return null;
};

export default TextfieldAdditionalElement;
