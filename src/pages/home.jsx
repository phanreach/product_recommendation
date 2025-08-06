import PromotionProduct from "../components/promotion-product";

function Home() {
  return (
<>
<div className="bg-white">
  <div className="pt-6">
    <h1>Popular Products</h1>

    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
      <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
      <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
    </div>
    </div>

</div>;
<PromotionProduct /> 
</>
  );
}

export default Home;
