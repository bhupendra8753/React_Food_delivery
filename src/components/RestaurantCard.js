import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData?.info;

  const {deliveryTime} = resData?.info.sla

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-green-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard ===> RestauranrCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return  (
      <div>
        <label className="absolute bg-green-300 text-black m-2 p-2 rounded-lg">Rate Star</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;