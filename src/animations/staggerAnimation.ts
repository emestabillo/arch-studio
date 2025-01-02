import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function staggerAnimation(container: HTMLElement) {
  const cards = gsap.utils.toArray<HTMLUListElement>(container.children);
  const cardPerRow = 3; // desktop

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: (index % cardPerRow) * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
