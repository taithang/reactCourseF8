import { forwardRef, useState } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Image.module.scss";

function Image(
  { src, alt, className, fallback: customFallback = images.noImage, ...props },
  ref
) {
  const [fallback, setFallBack] = useState("");

  function handleError() {
    setFallBack(customFallback);
  }

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
