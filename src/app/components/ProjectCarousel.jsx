'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProjectCarousel = ({ images, title }) => {
  const slides = images?.length ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides.length) {
    return null;
  }

  const hasMultipleSlides = slides.length > 1;
  const previousSlide = () => setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  const nextSlide = () => setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-lg border border-black shadow-black bg-white dark:bg-darkHover dark:border-white dark:shadow-white">
        <div className="relative aspect-[16/9] w-full">
          <Image src={slides[activeIndex]} alt={`${title} documentation ${activeIndex + 1}`} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-contain bg-gray-50 dark:bg-darkTheme/50" priority />
        </div>

        {hasMultipleSlides && (
          <>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous project image"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white text-2xl leading-none shadow-[2px_2px_0_#000] transition hover:bg-lime-300 dark:border-white dark:bg-darkTheme dark:text-white dark:shadow-[2px_2px_0_#fff] dark:hover:bg-darkHover"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project image"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-white text-2xl leading-none shadow-[2px_2px_0_#000] transition hover:bg-lime-300 dark:border-white dark:bg-darkTheme dark:text-white dark:shadow-[2px_2px_0_#fff] dark:hover:bg-darkHover"
            >
              ›
            </button>
          </>
        )}
      </div>

      {hasMultipleSlides && (
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              className={`h-3 w-3 rounded-full border border-black transition dark:border-white ${activeIndex === index ? 'bg-lime-300 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]' : 'bg-white dark:bg-darkTheme'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
