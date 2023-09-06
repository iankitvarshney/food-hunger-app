import { IMG_CDN_URL } from "../constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ id, name, imageId, price }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  // if (quantity === 0) {
  //   dispatch(removeItem(id));
  // }

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      dispatch(removeItem(id));
      return;
    }

    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="food-item">
      <div className="food-image">
        <img src={IMG_CDN_URL + imageId} />
      </div>
      <div className="food-details">
        <h2>{name}</h2>
        <h4>Rs. {price / 100}</h4>
      </div>
      <div className="food-quantity">
        <button
          onClick={() => {
            handleDecreaseQuantity();
          }}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => {
            handleIncreaseQuantity();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;