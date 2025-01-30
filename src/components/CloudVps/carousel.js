
export const handleSlide = (direction, setCurrentSlide, currentSlide, length) => {
  setCurrentSlide((prevSlide) => (prevSlide + direction + length) % length);
};