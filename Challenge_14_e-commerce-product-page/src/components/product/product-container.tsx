import ProductDescriptionsContainer from "./product-descriptions/product-descriptions.container";
import ProductImagesMobileSlider from "./product-images/product-images-mobile-slider";

export default function ProductContainer() {
  return (
    <>
      <ProductImagesMobileSlider />
      <ProductDescriptionsContainer />
    </>
  );
}
