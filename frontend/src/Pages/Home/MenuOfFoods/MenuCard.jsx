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
        <div className="card-body md:absolute text-start md:w-[350px] md:h-[345px] rounded-xl shadow-xl p-10 bg-white top-0 px-5 md:mt-72 ">
          <Link
            to={"/"}
            className="card-title font-bold hover:text-green-800 justify-center pb-4"
          >
            {name}
          </Link>
          <p className="pb-4">{recipe}...</p>
          <div className="flex justify-between items-center gap-4 pb-4">
            <p className="btn btn-sm w-4 bg-gray-400">{price}</p>
            <p className="btn btn-sm w-4 bg-gray-400">{category}</p>
          </div>

          <div className="mb-6">
            <Link
              to={"/"}
              className="bg-white btn btn-outline text-md font-bold border-2 rounded-md  flex justify-center items-center hover:text-white hover:bg-[#257830] h-14 gap-4 w-[200px]"
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
