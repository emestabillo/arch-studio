import { gsap } from "gsap";

export default function fadeInAnimation(
  containerRef: React.RefObject<HTMLDivElement>,
  delay: number = 1
) {
  if (containerRef.current) {
    gsap.to(containerRef.current, {
      autoAlpha: 1,
      delay: delay,
      ease: "power1.in",
    });
  }
}
