import { useEffect } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { costForTwo, cuisines, avgRating, name, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="m-4 p-3 w-60 rounded-lg shadow-lg hover:bg-gray-200">
      <img
        className="rounded-lg h-36 w-64"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-base">{name}</h3>
      <h4 className="font-light pb-4 text-sm">{cuisines.join(", ")}</h4>
      <span className="flex justify-between font-light text-xs">
        <h4>{avgRating} Stars</h4>
        <h4>•</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>•</h4>
        <h4>{costForTwo}</h4>
      </span>
      {/* <h4 className="font-light text-sm">{avgRating} stars</h4>
      <h4 className="font-light text-sm">{costForTwo}</h4>
      <h4 className="font-light text-sm">{sla.deliveryTime} minutes</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;
    return (
      <div>
        <label className="absolute bg-black  bg-opacity-60 text-white font-bold text-xs text-left ml-7 m-3 p-2 rounded-lg">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
