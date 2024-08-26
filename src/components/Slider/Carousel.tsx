import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@components/Slider/Carousel.module.scss";
import debounce from "@/utils/debounce";

type CarouselProps = {
  slides: string[];
};

const Carousel = ({ slides }: CarouselProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const containerEl = containerRef.current;
    const el = rootRef.current;

    containerEl?.addEventListener(
      "scroll",
      debounce(() => {
        const newIndex = Math.round(
          containerEl.scrollLeft / (el?.clientWidth ?? 0)
        );

        setActiveSlide(newIndex);
      }, 200)
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlideIndex);
      containerRef.current?.scrollTo({
        left: (rootRef.current?.clientWidth ?? 0) * nextSlideIndex,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeSlide, slides]);

  const goToSlide = (index: number) => {
    const containerEl = containerRef.current;
    const el = rootRef.current;

    setActiveSlide(index);

    containerEl?.scrollTo({
      left: (el?.clientWidth ?? 0) * index,
      behavior: "smooth",
    });
  };

  const handleClick = (index: number) => () => goToSlide(index);

  const cn = (...args: string[]) => args.filter(Boolean).join(" ");

  return (
    <>
      <Link href="/">
        <Image
          className="absolute z-10 right-[-86px] top-[79px] w-[149px] h-[204px] shadow-[0_24px_36px_0_#35315447]"
          src="/images/promo_01.png"
          alt="promo-01"
          width={149}
          height={204}
        />
      </Link>
      <Link href="/">
        <Image
          className="absolute z-10 right-[-181px] bottom-[70px] w-[158px] h-[273px] shadow-[0_24px_36px_0_#35315447]"
          src="/images/promo_02.png"
          alt="promo-02"
          width={158}
          height={273}
        />
      </Link>

      <div ref={rootRef} className={styles.carousel}>
        <div className={styles.wrapper}>
          <div ref={containerRef} className={styles.container}>
            {slides.map((slide) => (
              <div key={slide} className={styles.slide}>
                <Image
                  src={slide}
                  alt="slide"
                  loading="lazy"
                  width={1120}
                  height={702}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pagination}>
          {slides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              className={cn(
                styles.dot,
                activeSlide === index ? styles.active : ""
              )}
              onClick={handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
