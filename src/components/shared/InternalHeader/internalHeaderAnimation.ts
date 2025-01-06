import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";
import styles from "./InternalHeader.module.scss";
import headingAnimation from "@/animations/largeHeadingAnimation";

gsap.registerPlugin(ScrollTrigger);

export const createTimeline = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  if (containerRef.current) {
    const tl = gsap.timeline({
      delay: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
    headingAnimation(containerRef.current);
    tl.fromTo(
      containerRef.current?.querySelector(`.${styles.imageContainer}`),
      {
        clipPath: "inset(0 0 100% 0)",
      },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.65,
        ease: "power2.out",
        delay: 0.25,
      }
    )
      .fromTo(
        containerRef.current?.querySelectorAll("h2, p"),
        {
          "--translateY": 50,
          opacity: 0,
        },
        {
          opacity: 1,
          "--translateY": 0,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.6,
        },
        "<"
      )
      .to(
        containerRef.current?.querySelector(`.${styles.subtext}`),
        {
          "--myScale": 1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );
  }
};
