"use client";
import styles from "./schedule.module.css";
import Image from "next/image";
import { useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";

export default function Content() {
  const [changeContent, setChangeContent] = useState(false);

  // const toggleContentChange = () => {
  //   setChangeContent(!changeContent);
  // };

  const ScheduleImage = ({
    src,
    alt,
    isActive,
  }: {
    src: string;
    alt: string;
    isActive: boolean;
  }) => {
    const imageClassName = isActive
      ? styles.activeScheduleImage
      : styles.inactiveScheduleImage;

    return (
      <Carousel.Slide>
        <Image
          width={450}
          height={800}
          className={imageClassName}
          alt={alt}
          src={src}
          priority
        />
      </Carousel.Slide>
    );
  };

  const ScheduleBox = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const scheduleImages = [
      { src: "/schedule-images/schedule-day1.png", alt: "Schedule - Day 1" },
      { src: "/schedule-images/schedule-day2.png", alt: "Schedule - Day 2" },
      { src: "/schedule-images/schedule-day3.png", alt: "Schedule - Day 3" },
      { src: "/schedule-images/schedule-day4.png", alt: "Schedule - Day 4" },
    ];

    // console.log("activeIndex", activeIndex);

    const handleArrowClick = (direction: string) => {
      const newIndex =
        direction === "left"
          ? (activeIndex - 1 + scheduleImages.length) % scheduleImages.length
          : (activeIndex + 1) % scheduleImages.length;

      setActiveIndex(newIndex);
      // console.log("newIndex", newIndex);

      if (direction === "left") {
        embla?.scrollPrev();
      } else if (direction === "right") {
        embla?.scrollNext();
      }
    };

    return (
      <div className={styles.container2}>
        <Carousel
          slideSize="content"
          // align="start"
          slideGap="lg"
          draggable={true}
          withControls={false}
          classNames={{
            root: styles.carouselRoot,
            viewport: styles.carouselViewport,
            slide: styles.carouselSlide,
            container: styles.carouselContainer,
          }}
          getEmblaApi={setEmbla}
          loop
          onSlideChange={(index) => setActiveIndex(index)}
        >
          {scheduleImages.map((image, index) => (
            <ScheduleImage
              key={index}
              {...image}
              isActive={index === activeIndex}
            />
          ))}
        </Carousel>

        {/* Arrow icons */}
        <div className={styles.arrowIconContainer}>
          <div>
            <Image
              width={28}
              height={28}
              className={styles.arrowCircleLeftIcon}
              alt="Arrow Circle Left"
              src="/icons/arrowCircleRight.svg"
              onClick={() => handleArrowClick("left")}
            />
          </div>

          <div>
            <Image
              width={28}
              height={28}
              className={styles.arrowCircleRightIcon}
              alt="Arrow Circle Right"
              src="/icons/arrowCircleRight.svg"
              onClick={() => handleArrowClick("right")}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.container1}>
            <div>
              <p className={styles.pageHeader}>SCHEDULE</p>
            </div>
            <div>
              <p className={styles.smallText}>Schedule is Final.</p>
            </div>
          </div>

          {/* Schedule Box */}
          <ScheduleBox />

          {/* Registration Button */}
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>Limited places available.</p>
              <p className={styles.text}>Register today.</p>
            </div>

            <div className={styles.buttonContainer}>
              <a
                // href="https://link.grii.eu/EREC2024"
                href="https://forms.gle/5nBNSFBUs6AUr8bz6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
