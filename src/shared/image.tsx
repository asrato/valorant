import { useState, type ImgHTMLAttributes } from "react";
import Spinner from "./spinner";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
};

/**
 * Renders an image with a loading spinner overlay. Usefull for heavy media files.
 *
 * This component wraps an `<img>` element and displays a spinner while the image is loading.
 * Once the image has loaded, the spinner disappears and the image appears.
 *
 * @example
 * ```tsx
 * <Image
 *   src="example.jpg"
 *   alt="Example"
 *   containerClassName="w-32 h-32"
 *   className="rounded"
 * />
 * ```
 */
export default function Image(props: ImageProps) {
  const { className, containerClassName, ...rest } = props;
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      <img
        onLoad={() => setLoading(false)}
        className={`${loading ? "opacity-0" : "opacity-100"} ${className}`}
        {...rest}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
