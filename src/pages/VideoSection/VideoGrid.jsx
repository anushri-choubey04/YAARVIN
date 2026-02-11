import ProductGrid from "../../components/product/ProductGrid";
import VIDEO_PRODUCTS from "../../data/videoProducts";

export default function VideoGridPage() {
  return (
    <section className="bg-black min-h-screen">
      <ProductGrid
        heading="Rent Now"
        products={VIDEO_PRODUCTS}
        baseRoute="/video"
        showFilters={false}
      />
    </section>
  );
}
