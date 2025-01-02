import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function headingAnimation(container: HTMLElement) {
  const selector = gsap.utils.selector(container);
  const h1Element = selector("h1");

  if (h1Element.length > 0) {
    gsap.fromTo(
      h1Element[0], // Access the first (and presumably only) h1 element
      {
        clipPath: "inset(0 100% 0 0)",
        autoAlpha: 0,
      },
      {
        clipPath: "inset(-2rem 0% 0 0)",
        autoAlpha: 1,
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: h1Element[0],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
}
