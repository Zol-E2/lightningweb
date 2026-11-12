"use client";

import { useEffect, useRef, type ImgHTMLAttributes } from "react";

/**
 * Plain <img> that shows a shimmering skeleton until the picture has loaded.
 * Sets data-loaded on the element (also when it was already cached).
 */
export default function Img({
  className = "",
  alt = "",
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el?.complete && el.naturalWidth) el.dataset.loaded = "1";
  }, []);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={`ld ${className}`}
      alt={alt}
      decoding="async"
      onLoad={(e) => {
        e.currentTarget.dataset.loaded = "1";
      }}
      {...rest}
    />
  );
}
