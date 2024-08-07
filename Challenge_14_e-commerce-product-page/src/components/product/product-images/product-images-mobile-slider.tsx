import product_1 from "../../../assets/images/image-product-1.jpg";
import product_2 from "../../../assets/images/image-product-2.jpg";
import product_3 from "../../../assets/images/image-product-3.jpg";
import product_4 from "../../../assets/images/image-product-4.jpg";

import previousChevron from "../../../assets/images/icon-next.svg";
import nextChevron from "../../../assets/images/icon-previous.svg";

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
  return (
    <div className="relative w-full h-full max-w-full ">
      {images.map((img) => (
        <figure className="w-full h-auto " key={img.id}>
          <img
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 w-full h-80 object-cover"
          />
        </figure>
      ))}
      <div className="absolute w-full flex justify-center items-center h-full">
        <button
          // onClick={goToPrevious}
          className="absolute flex justify-center  items-center left-2 top-1/2  w-[35px] h-[35px] bg-white rounded-full p-2 shadow-md"
        >
          <img
            src={nextChevron}
            alt="Click to next image"
            className="block self-center"
          />
        </button>
        <button
          // onClick={goToNext}
          className="absolute right-2 top-1/2 flex justify-center w-[35px] h-[35px]  items-center   bg-white rounded-full p-2 shadow-md"
        >
          <img
            src={previousChevron}
            alt="Click to previous image"
            className="block self-center"
          />
        </button>
      </div>
    </div>
  );
}
