import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function staggerAnimation(container: HTMLElement) {
  const cards = gsap.utils.toArray<HTMLUListElement>(container.children);
  const cardPerRow = 3; // desktop

  gsap.delayedCall(0.2, () => {
    cards.forEach((card, index) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 50,
        duration: 0.8,
        delay: (index % cardPerRow) * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
        },
      });
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
