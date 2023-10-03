import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../redux/features/cart/cartSlice";


const CartItem = ({ id, img, title, price, amount}) => {
  const dispatch = useDispatch();
   return  ( 
   <article className="cart-item">
   <img src={img} alt={title} />
   <div>
      <h4>{title}</h4>
      <h4 className="item-price">${price}</h4>
      <button className="remove-btn" onClick={()=> dispatch(removeItem(id))}>remove</button>
   </div>
   <div>
    <button className="amount-btn">
    <FontAwesomeIcon className="icon" onClick={()=>{
      dispatch((increase({id})))
    }} icon={faChevronUp} />
    </button>
    <p className="amount">{amount}</p>
    <buttton className="amount-btn">
    <FontAwesomeIcon className="icon" onClick={()=>{
      if (amount ===0) {
        dispatch(removeItem(id))
        return;
      }
      dispatch((decrease({id})))
    }}  icon={faChevronDown} />
    </buttton>

   </div>
   </article>
)};
export default CartItem;  