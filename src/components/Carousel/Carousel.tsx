"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { SwiperRef } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageWithOverlayText from "../ImageWithOverlayText/ImageWithOverlayText";
import { carouselItems } from "@/data/carouselItems";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  const swiperRef = useRef<SwiperRef>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper as SwiperType | undefined;
    if (swiper && paginationRef.current) {
      swiper.params.pagination = {
        ...(swiper.params.pagination as object),
        el: paginationRef.current,
        clickable: true,
      };
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, []);

  return (
    <div className={`container ${styles.carouselWrapper}`}>
      <h1 className={styles.homeHeroHeading}>Welcome</h1>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        navigation
        pagination={{
          clickable: true,
          el: paginationRef.current,
          bulletClass: `swiper-pagination-bullet ${styles.bulletButton}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.activeButton}`,
        }}
        className="mySwiper"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.title}>
            <ImageWithOverlayText
              variant="carouselItem"
              imageSrcDesktop={item.imageSrcDesktop}
              imageSrcTablet={item.imageSrcTablet}
              imageSrcMobile={item.imageSrcMobile}
              heading={item.title}
              paragraph={item.description}
              ctaText="see our portfolio"
              href="/portfolio"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={paginationRef} className={styles.paginationCustom}></div>
    </div>
  );
}
