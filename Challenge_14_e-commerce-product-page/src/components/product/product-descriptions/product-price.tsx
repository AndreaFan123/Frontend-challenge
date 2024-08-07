type ProductPriceProps = {
  price: string;
  discount: string;
  originalPrice: string;
};

export default function ProductPrice({
  price,
  discount,
  originalPrice,
}: ProductPriceProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <span className="heading">${price}</span>
        <span className="text-white bg-black py-1 px-3 text-sm rounded-md">
          {discount}
        </span>
      </div>
      <span className="text-dark-grayish-blue text-sm font-semibold">
        ${originalPrice}
      </span>
    </div>
  );
}
