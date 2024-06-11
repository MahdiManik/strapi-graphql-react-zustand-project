import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import { useQuery, gql } from "@apollo/client";

const FOODS = gql`
  query {
    foods {
      data {
        id
        attributes {
          name
          recipe
          category
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Menu = () => {
  const { loading, error, data } = useQuery(FOODS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;

  // console.log(data);

  return (
    <div className="border-4 p-12">
      <h1 className="text-4xl font-bold text-center bg-primary p-5 rounded-lg mb-12">
        Foods Collection (Crud operation with graphql)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6 ">
        {data.foods.data.map((food) => (
          <MenuCard key={food.id} food={food} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <button className="btn btn-primary w-40 mt-12">
          <Link to="/" className="text-lg font-semibold">
            Add A Food
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
