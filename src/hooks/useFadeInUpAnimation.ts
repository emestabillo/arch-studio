import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeInUpAnimation<T extends HTMLElement>(
  ref: RefObject<T>
) {
  const containerRef = useRef<HTMLElement>(null);
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
    timeline.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    return () => {
      timeline.kill();
    };
  }, [ref]);
  return containerRef;
}
