import product_1 from "../../../assets/images/image-product-1.jpg";
import product_2 from "../../../assets/images/image-product-2.jpg";
import product_3 from "../../../assets/images/image-product-3.jpg";
import product_4 from "../../../assets/images/image-product-4.jpg";

import previousChevron from "../../../assets/images/icon-next.svg";
import nextChevron from "../../../assets/images/icon-previous.svg";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: product_1,
    alt: "Product 1",
  },
  {
    id: 2,
    src: product_2,
    alt: "Product 2",
  },
  {
    id: 3,
    src: product_3,
    alt: "Product 3",
  },
  {
    id: 4,
    src: product_4,
    alt: "Product 4",
  },
];

export default function ProductImagesMobileSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex - 1
    );

    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    }
  };
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };
  return (
    <div className="relative w-full h-80">
      <figure className="w-full h-auto">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
      </figure>

      <button
        onClick={goToPreviousImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full p-2 shadow-md"
      >
        <img
          src={nextChevron}
          alt="Click to previous image"
          className="block w-[11px] h-auto self-center"
        />
      </button>
      <button
        onClick={goToNextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full p-2 shadow-md"
      >
        <img
          src={previousChevron}
          alt="Click to next image"
          className="block w-[11px] h-auto self-center"
        />
      </button>
    </div>
  );
}
