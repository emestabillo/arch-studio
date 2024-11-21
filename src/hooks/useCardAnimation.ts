import { RefObject, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardAnimation = (containerRef: RefObject<HTMLUListElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = gsap.utils.toArray<HTMLElement>(container.children);

    const cardPerRow = 3; //desktop

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
  }, [containerRef]);
};

export default useCardAnimation;
