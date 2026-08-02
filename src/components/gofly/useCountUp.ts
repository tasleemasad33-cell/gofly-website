import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 500) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          animate();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);

    const started = startedRef.current;
    return () => {
      io.disconnect();
      if (started) startedRef.current = true;
    };
  }, [target, duration]);

  return { ref, value };
}
