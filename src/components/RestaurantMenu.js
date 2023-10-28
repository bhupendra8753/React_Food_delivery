import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  /* const [resInfo, setResInfo] = useState(null); */

  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null)

  const resInfo = useRestaurantMenu(resId);

  // Created custom hook for this functionality
  /* useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  }; */

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian  */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
        key={category?.card?.card?.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
