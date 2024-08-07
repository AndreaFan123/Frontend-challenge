import minus from "../../../assets/images/icon-minus.svg";
import plus from "../../../assets/images/icon-plus.svg";

export default function ProductAddToCart() {
  return (
    <div className="relative w-full mb-2">
      <button className="absolute top-1/2 left-4 z-30">
        <img src={minus} alt="Click to decrement item" />
      </button>
      <input
        type="number"
        placeholder="0"
        className="w-full placeholder:text-black placeholder:font-semibold py-4 rounded-xl bg-grayish-blue/20 text-center"
      />
      <button className="absolute top-1/2 right-4 z-30">
        <img src={plus} alt="Click to increment item" />
      </button>
    </div>
  );
}
