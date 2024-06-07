import Menu from "./MenuOfFoods/Menu";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <div className="md:flex lg:flex flex-none mt-32 text-white">
        <div className="w-full">
          <h3 className="text-xl font-bold">HELLO, I am</h3>
          <h1 className="text-5xl font-bold ">
            Mahdi <span className="text-orange-600">Hasan</span>
          </h1>

          <p className="py-8 text-5xl font-bold">This is my blog platform</p>
        </div>
      </div>
      <div className="mb-20">
        <Menu></Menu>
      </div>
      <div className="my-20">
        <Products />
      </div>
    </>
  );
};

export default Home;
