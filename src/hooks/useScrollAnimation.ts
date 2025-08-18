import { useEffect, useState } from "react";

interface ScrollAnimationConfig {
  startSection: string;
  endSection: string;
  startProgress: number;
  endProgress: number;
}

export function useScrollAnimation(config: ScrollAnimationConfig) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const startElement = document.getElementById(config.startSection);
      const endElement = document.getElementById(config.endSection);

      if (!startElement || !endElement) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      const startOffset = startElement.offsetTop;
      const endOffset = endElement.offsetTop;

      const totalDistance = endOffset - startOffset;
      const currentDistance = scrollY - startOffset;

      if (totalDistance <= 0) return;

      const rawProgress = Math.max(
        0,
        Math.min(1, currentDistance / totalDistance)
      );
      const mappedProgress =
        config.startProgress +
        (config.endProgress - config.startProgress) * rawProgress;

      setProgress(mappedProgress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateProgress);
  }, [config]);

  return progress;
}
