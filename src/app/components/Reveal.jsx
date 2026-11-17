"use client";

import { useEffect, useRef } from "react";

/**
 * Fades + slides its children in the first time they scroll into view.
 *
 * - No extra dependency: IntersectionObserver + CSS transitions (see .reveal in globals.css).
 * - Content stays visible if JavaScript is off or the user prefers reduced motion
 *   (handled in the CSS, not here).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Very old browsers: just show the content.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
