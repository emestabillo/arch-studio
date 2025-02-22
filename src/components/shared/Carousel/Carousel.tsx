"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { SwiperRef } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ImageWithOverlayText from "../../shared/ImageWithOverlayText/ImageWithOverlayText";
import styles from "./Carousel.module.scss";
import { ProjectProps } from "@/contentful/Project";
import LargeHeading from "@/components/ui/LargeHeading/LargeHeading";
import headingAnimation from "@/utils/animations/largeHeadingAnimation";

interface CarouselProps {
  carouselItems: ProjectProps[];
}

export default function Carousel({ carouselItems }: CarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    if (containerRef.current) {
      const animateHeading = headingAnimation(containerRef.current);
      return animateHeading;
    }
  }, []);

  return (
    <section className={`bottom-spacing ${styles.carouselSection}`}>
      <div className={`container ${styles.carouselWrapper}`} ref={containerRef}>
        <LargeHeading level={1} homeHeroHeading>
          Welcome
        </LargeHeading>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          fadeEffect={{ crossFade: true }}
          speed={1500}
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
            <SwiperSlide key={item.propertyName}>
              <ImageWithOverlayText
                variant="carouselItem"
                imageSrcDesktop={`https:${item.imageHeroDesktop?.src}`}
                imageSrcTablet={`https:${item.imageHeroDesktop?.src}`}
                imageSrcMobile={`https:${item.imageHeroDesktop?.src}`}
                heading={item.propertyName}
                paragraph={item.description}
                ctaText="see our portfolio"
                href="/portfolio"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.paginationCustom}></div>
      </div>
    </section>
  );
}
