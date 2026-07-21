import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaPlay, FaPause } from "react-icons/fa";

export default function ImageSlider({ images = [], titles = [], onExpandImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  // Auto-play interval (3.5 seconds)
  useEffect(() => {
    if (!isAutoplay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoplay, images.length]);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-black/70 shadow-2xl group/slider "
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar Info Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <span className="px-3 py-1 text-[11px] font-semibold tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-md">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsAutoplay(!isAutoplay);
          }}
          className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 transition"
          title={isAutoplay ? "Pause Slideshow" : "Play Slideshow"}
        >
          {isAutoplay ? <FaPause size={10} /> : <FaPlay size={10} />}
        </button>
      </div>

      {/* Expand Fullscreen Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (onExpandImage) onExpandImage(images[currentIndex]);
        }}
        className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white backdrop-blur-md transition shadow-lg flex items-center gap-1.5 text-xs font-medium"
        title="Expand Image"
      >
        <FaExpand size={12} />
        <span className="hidden sm:inline">View Full</span>
      </button>

      {/* Main Image Slides Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/90">
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              idx === currentIndex
                ? "opacity-100 scale-100 z-10 pointer-events-auto"
                : "opacity-0 scale-95 z-0 pointer-events-none"
            }`}
          >
            <img
              src={imgSrc}
              alt={titles[idx] || `Hackathon Slide ${idx + 1}`}
              className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() => onExpandImage && onExpandImage(imgSrc)}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* Slide Title / Caption */}
        {titles[currentIndex] && (
          <div className="absolute bottom-3 left-4 right-16 z-20 pointer-events-none">
            <p className="text-xs sm:text-sm font-semibold text-white/95 truncate shadow-sm">
              📷 {titles[currentIndex]}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-purple-600/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer transform opacity-80 group-hover/slider:opacity-100 hover:scale-110 active:scale-95"
            title="Previous Image"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-purple-600/90 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all  cursor-pointertransform opacity-80 group-hover/slider:opacity-100 hover:scale-110 active:scale-95"
            title="Next Image"
          >
            <FaChevronRight size={14} />
          </button>
        </>
      )}

      {/* Bottom Indicator Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 bg-gradient-to-r from-sky-400 to-purple-500"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
