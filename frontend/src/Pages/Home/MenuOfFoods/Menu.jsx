import ErrorPage from "../../ErrorPage/ErrorPage";
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
  if (error) return <ErrorPage />;

  // console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">
      {data.foods.data.map((food) => (
        <MenuCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Menu;
