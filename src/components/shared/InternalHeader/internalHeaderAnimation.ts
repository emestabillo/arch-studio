import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject } from "react";
import styles from "./InternalHeader.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const createTimeline = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  if (containerRef.current) {
    if (containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          // invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        containerRef.current?.querySelector("h1"),
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(-2rem 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        }
      )
        .fromTo(
          containerRef.current?.querySelector(`.${styles.imageContainer}`),
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        )
        .fromTo(
          containerRef.current?.querySelectorAll("h2, p"),
          {
            opacity: 0,
          },
          {
            opacity: 1,
            "--translateY": 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.85"
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
  }
};
