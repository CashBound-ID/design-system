import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { GenericHTMLProps } from "@/types/react";
import { cx } from "@/utils/css";
import { HTMLAttributes } from "react";
import { ICON_TYPE } from "./constant";
import * as styles from "./style.module.scss";

type BannerHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface BannerProps extends BannerHTMLProps {
  /**
   * Whether to show the status icon. Defaults to true
   */
  withIcon?: boolean;
  /**
   * Primary message text to display in the banner
   */
  message?: string;
  /**
   * Secondary descriptive text to display below the message
   */
  description?: string;
  /**
   * Width of the banner. Can be any valid CSS width value
   */
  width?: string | number;
  /**
   * Visual style variant of the banner
   */
  type: "success" | "neutral" | "warning" | "error";
}

const Banner = (props: BannerProps) => {
  const {
    withIcon = true,
    className,
    message,
    description,
    width = "auto",
    type = "neutral",
    ...res
  } = props;
  const { icon, color } = ICON_TYPE[type];

  return (
    <section
      {...res}
      className={cx(styles["banner"], className)}
      style={{ "--width": width }}
      data-type={type}
    >
      {withIcon && <Icon icon={icon} color={color} size={16} />}
      <div className={styles["banner-content"]}>
        {Boolean(message) && (
          <Typography
            className={styles["banner-message"]}
            modifier="body-md"
            tag="h1"
            fontWeight="medium"
          >
            {message}
          </Typography>
        )}
        <Typography
          className={styles["banner-description"]}
          modifier="body-md"
          tag="p"
        >
          {description}
        </Typography>
      </div>
    </section>
  );
};

export default Banner;
