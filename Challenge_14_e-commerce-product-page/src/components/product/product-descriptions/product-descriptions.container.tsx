import cart from "../../../assets/images/icon-cart-black.svg";
import ProductAddToCart from "./product-add-to-cart";
import ProductDescriptions from "./product-descriptions";
import ProductPrice from "./product-price";

export default function ProductDescriptionsContainer() {
  return (
    <section className="my-16 px-4 flex flex-col gap-3">
      <ProductDescriptions
        sneakerCompany="sneaker company"
        title="Fall Limited Edition Sneakers"
        description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
      />
      <ProductPrice price="125.00" discount="50%" originalPrice="250.00" />
      <ProductAddToCart />
      <button className="w-full flex text-black font-bold bg-primary-orange py-4 justify-center items-center gap-3 rounded-xl">
        <img
          src={cart}
          alt="Add to cart"
          className="text-black w-[18px] h-auto"
        />
        Add to cart
      </button>
    </section>
  );
}
