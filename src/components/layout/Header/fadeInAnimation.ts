import { gsap } from "gsap";

export default function fadeInAnimation(
  navRef: React.RefObject<HTMLDivElement>,
  delay: number = 1
) {
  if (navRef.current) {
    gsap.fromTo(
      navRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        delay: delay,
        ease: "power1.in",
      }
    );
  }
}
