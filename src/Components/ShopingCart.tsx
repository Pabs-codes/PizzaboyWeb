// ShoppingCart.tsx
import React from 'react';
import { useCart } from './CartContext';
import './BodyTwo.css';

const ShoppingCart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const increase = (e) => {
    increaseQuantity(0);
    console.log(e);
  }

  return (
<div className="shopping-cart sticky-cart">
          <header className="cart-header">
        <i className="header-icon">📱</i>
        <div className="header-title">
          <h2>SHOPPING CART</h2>
        </div>
      </header>

      <div className='second'>
        <p>Pizza boy Leverkusen-Manfort</p>
        <p>0214 42200</p>
      </div>
      <div className="branch-info">
        <span>Further branch information</span>
        <i className="dropdown-icon">⬇️</i>
      </div>
      <div className="coupon-section">
        <span>Earn 1,500 points</span>
        <button className="redeem-button">Redeem</button>
      </div>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button className="quantity-button decrease" onClick={() => decreaseQuantity(index)}>-</button>
<button className="quantity-button increase" onClick={increase}>+</button>
<button className="quantity-button remove" onClick={() => removeFromCart(index)}>️ 🗑️</button>
          </div>
        ))}
      </div>
      <div className="total-section">
        <span>Total</span>
        <span>€{cart.reduce((total, item) => total + parseFloat(item.price.replace('€', '')) * item.quantity, 0).toFixed(2)}</span>
      </div>
      <button className="checkout-button">To checkout</button>
    </div>
  );
};

export default ShoppingCart;
