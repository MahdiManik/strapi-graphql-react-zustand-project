import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuCard = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { category, name, price, recipe, image } = food?.attributes || {};
  console.log(image.data);

  return (
    <>
      <div className="card md:mb-72 mb-8 font-montserrat mt-20">
        <figure className="relative">
          <div className="group md:w-96 md:h-80 rounded-lg overflow-hidden relative">
            {image &&
              image.data &&
              image.data.map((img) => (
                <img
                  key={img.id} // Add a unique key for each image
                  src={`http://localhost:1337${img.attributes.url}`} // Prepend the base URL of the Strapi backend
                  className="w-full h-full object-cover mr-20"
                  alt={name} // Use the name as alt text
                />
              ))}
            <div className="md:absolute inset-0 bg-gradient-to-b from-transparent to-[#257830] opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>
          </div>
        </figure>
        <div className="card-body md:absolute text-start md:w-[300px] md:h-[390px] rounded-xl shadow-xl p-10 bg-white top-0 px-5 md:mt-72 ">
          <Link
            to={"/"}
            className="card-title font-bold hover:text-blue-800 pb-4"
          >
            {name}
          </Link>
          <p className="pb-2">{recipe}...</p>
          <div className="flex justify-between items-center gap-4 pb-2">
            <p className="w-7 h-8 shadow-xl text-center border-2">{price}</p>
            <p className="w-7 h-8 shadow-xl text-center border-2">{category}</p>
          </div>
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

          <div className="mb-6">
            <Link
              to={"/"}
              className="bg-white btn btn-outline text-md font-bold border-2 rounded-md  flex justify-center items-center hover:text-white hover:bg-[#257830] h-12 gap-4 w-[150px]"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
