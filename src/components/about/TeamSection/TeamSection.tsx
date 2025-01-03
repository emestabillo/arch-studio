"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "./TeamSection.module.scss";
import TeamCard from "../TeamCard/TeamCard";
import { teamMembers } from "@/data/team";
import { fadeInUpAnimation } from "@/animations/fadeInUpAnimation";

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      fadeInUpAnimation(containerRef);
    },
    { scope: containerRef }
  );
  return (
    <section
      className={`container top-spacing bottom-spacing ${styles.teamSection}`}
      ref={containerRef}
    >
      <div className={styles.headingContainer}>
        <h2 className={`shortHeading ${styles.heading}`}>The Leaders</h2>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            title={member.title}
            linkedInLink={member.linkedIn}
            twitterLink={member.twitter}
            imgSrc={member.image}
          />
        ))}
      </div>
    </section>
  );
}
