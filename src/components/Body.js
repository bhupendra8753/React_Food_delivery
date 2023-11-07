import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_DATA_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestauranrCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  //console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DATA_API);

    const json = await data.json();
    //console.log(json);

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! PLease check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black rounded-md p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1.5 bg-green-200 m-4 rounded-md"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              //console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1.5 bg-violet-300 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              //console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName</label>
          <input className="border border-black rounded-lg p-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RestauranrCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
