"use client";

import { useEffect, useRef } from "react";

import type { ProjectVideo as ProjectVideoData } from "@/types/content";

type ProjectVideoProps = Readonly<{
  video: ProjectVideoData;
  autoplayWhenVisible?: boolean;
  className?: string;
}>;

export function ProjectVideo({
  video,
  autoplayWhenVisible = false,
  className = "",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;

    if (!element || !autoplayWhenVisible) {
      return;
    }

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const pause = () => element.pause();
    const playIfAllowed = () => {
      if (motionPreference.matches || document.hidden) {
        pause();
        return;
      }

      void element.play().catch(() => {
        // Native controls and the poster remain available if autoplay is blocked.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.55) {
          playIfAllowed();
        } else {
          pause();
        }
      },
      { threshold: [0, 0.55] },
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause();
      }
    };

    observer.observe(element);
    motionPreference.addEventListener("change", pause);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", pause);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      pause();
    };
  }, [autoplayWhenVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
      width={video.width}
      height={video.height}
      poster={video.poster}
      controls
      muted={autoplayWhenVisible}
      loop={autoplayWhenVisible}
      playsInline
      preload={autoplayWhenVisible ? "metadata" : "none"}
      aria-label={video.title}
    >
      <source src={video.src} type="video/mp4" />
      Your browser does not support embedded videos.
    </video>
  );
}
