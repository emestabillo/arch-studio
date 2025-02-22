import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scaleAnimation = (
  sectionRef: React.RefObject<HTMLDivElement>,
  imageRef: React.RefObject<HTMLDivElement>
) => {
  if (sectionRef.current && imageRef.current) {
    gsap.to(imageRef.current, {
      scale: 1.25,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  }
};
