import { useEffect } from "react";
import useProductStore from "../../../Hooks/usProductStore";

const Products = () => {
  const { products, fetchProduct, loading, error } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(products);
  return (
    <div className="border-4 p-12">
      <h1 className="text-4xl font-bold bg-yellow-500 p-5 rounded-lg">
        IPhone Collection (Crud operation with zustand)
      </h1>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h3 className="text-xl font-semibold">Name: {product.name}</h3>
              <p className="py-3">Description: {product.description}</p>
              <p className="pb-5">Category: {product.category}</p>

              <img
                className="w-80 h-96 rounded-xl "
                src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
                alt="product image"
              />
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
