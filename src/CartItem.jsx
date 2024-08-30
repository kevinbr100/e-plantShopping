import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementItem,decrementItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const {cart, totalQuantity} = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    cart.items.forEach((item) => {
        totalCost+=item.cost * item.quantity
    })

    return totalCost;
 
  };

  const handleContinueShopping = (e) => {
    e.onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
     alert('Functionality to be added for future reference');
  };

  const handleIncrementItem = (item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrementItem = (item) => {
    dispatch(decrementItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));  
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity
  };
  const getTotalQuantity = () => {
    return totalQuantity;
  };
console.log("test");
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrementItem(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrementItem(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="checkout-button" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


