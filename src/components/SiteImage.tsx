import type { ImageMetadata } from "astro";
import type { CSSProperties, ImgHTMLAttributes } from "react";

export type StaticImageData = ImageMetadata;

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
  src: ImageMetadata;
  fill?: boolean;
  preload?: boolean;
};

const fillStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};

export default function SiteImage({ src, fill, preload, style, ...attributes }: Props) {
  return (
    <img
      {...attributes}
      src={src.src}
      width={src.width}
      height={src.height}
      loading={preload ? "eager" : "lazy"}
      decoding="async"
      style={fill ? { ...fillStyle, ...style } : style}
    />
  );
}
