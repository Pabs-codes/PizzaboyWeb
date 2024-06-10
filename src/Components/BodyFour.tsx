import React, { useState } from "react";
import "./BodyTwo.css";
import Topimg from "./OtherMedia/banner_720x360_plus_pannacotta (1).png";
import ShoppingCart from "./ShopingCart";
import { CartProvider, useCart } from "./CartContext";
import { Button } from "@mui/material";
import WindowA from "./PopUps/WindowA";

const MenuItem: React.FC<{
  name: string;
  description: string;
  price: string;
  price2: string;
  price3: string;
  onClick: () => void;
}> = ({ name, description, price, onClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price , price2 , price3 });
    onClick();
  };

  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCart}>{price}</button>
      <button onClick={handleAddToCart}>{price2}</button>
      <button onClick={handleAddToCart}>{price3}</button>
    </div>
  );
};

const BodyFour = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleOpenPopup = (pizza) => {
    setSelectedPizza(pizza);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedPizza(null);
  };

  return (
    <div className="body-container">
      

      <h1 className="delclass"> Delicious pan-fried dishes </h1>
      <MenuItem
        name="PIZZA EL GREGO"
        description="Fried potatoes, fresh vegetables, lemongrass, ginger, coconut milk, in spicy red curry sauce, with rice"
        price="€9.90"
        price2="€9.90"
        price3="€9.90"
        onClick={() => handleOpenPopup({ name: "PIZZA EL GREGO", description: "Fried potatoes, fresh vegetables, lemongrass, ginger, coconut milk, in spicy red curry sauce, with rice" })}
      />
         <h1 className="delclass"> Freshly baked pizza </h1>
      <MenuItem
        name="PIZZA VEGETARIAN HOLLANDAISE"
        description="Fried chicken breast fillet, fresh vegetables, lemongrass, ginger, natural yogurt, with rice"
        price="€11.90"
         price2="€9.90"
        price3="€9.90"
        onClick={() => handleOpenPopup({ name: "PIZZA VEGETARIAN HOLLANDAISE", description: "Fried chicken breast fillet, fresh vegetables, lemongrass, ginger, natural yogurt, with rice" })}
      />
         <h1 className="delclass"> Crisp fresh salads </h1>
      <MenuItem
        name="PIZZA CHICKEN INDIA"
        description="Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice"
        price="€12.90"
         price2="€9.90"
        price3="€9.90"
        onClick={() => handleOpenPopup({ name: "PIZZA CHICKEN INDIA", description: "Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice" })}
      />

      <WindowA open={popupOpen} handleClose={handleClosePopup} pizza={selectedPizza} />
    </div>
  );
};

export default BodyFour;
