"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cx, prefersReducedMotion } from "@/lib/motion";
import styles from "./Hero.module.css";

type Source = { src: string; type: string; media?: string };

type Props = {
  poster: StaticImageData;
  alt: string;
  sources: Source[];
};

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

/**
 * Background hero video.
 * - The poster (a real frame of the clip) is server-rendered and preloaded, so the hero paints instantly.
 * - Video sources are attached only after hydration, so they never block first paint.
 * - Skipped entirely for reduced-motion and Save-Data users: they keep the still poster.
 * - Crossfades in once the first frame is ready.
 */
export function HeroVideo({ poster, alt, sources }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;
    if (prefersReducedMotion() || saveData) return;
    const id = requestAnimationFrame(() => setEnabled(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;
    video.load();
    video.play().catch(() => {
      /* Autoplay refused (e.g. low-power mode): the poster stays visible. */
    });
  }, [enabled]);

  return (
    <div className={styles.frame}>
      <Image
        src={poster}
        alt={alt}
        fill
        preload
        sizes="100vw"
        placeholder="blur"
        className={styles.image}
      />
      {enabled && (
        <video
          ref={videoRef}
          className={cx(styles.video, ready && styles.videoReady)}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setReady(true)}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} media={s.media} />
          ))}
        </video>
      )}
    </div>
  );
}
