import ErrorPage from "../../ErrorPage/ErrorPage";
import { useEffect } from "react";
import useProductStore from "../../../Hooks/usProductStore";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, fetchProduct, loading, error } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // console.log(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage />;

  return (
    <>
      <div className="border-4 p-12">
        <h1 className="text-4xl font-bold text-center bg-primary p-5 rounded-lg mb-12">
          iPhone Collection (Crud operation with zustand)
        </h1>
        <div className="text-white grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 mb">
          <div>
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white text-black p-5 rounded-lg"
                >
                  <div className="">
                    <h3 className="text-xl font-semibold">
                      Name: {product.name}
                    </h3>
                    <p className="py-3">Description: {product.description}</p>
                    <p className="pb-5">Category: {product.category}</p>

                    <div className="flex justify-between items-center gap-4 pb-2 mt-3 mb-2">
                      <button className="btn  bg-green-700 hover:bg-green-800 text-white">
                        Edit Food
                      </button>
                      <button
                        className="btn  bg-red-500 hover:bg-red-600 
            text-white"
                      >
                        Delete Food
                      </button>
                    </div>

                    <img
                      className="w-80 h-96 rounded-xl "
                      src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
                      alt="product image"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <button className="btn btn-primary w-40 ">
              <Link to="/" className="text-lg font-semibold">
                Add A iPhone
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
