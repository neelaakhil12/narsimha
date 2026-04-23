import { useState, useEffect } from "react";

export function useScrollVisibility(threshold = 50, delay = 150) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Hide while scrolling
      setIsVisible(false);

      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Show after scroll stops
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  return isVisible;
}
