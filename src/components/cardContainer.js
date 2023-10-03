import CartItem from "./cardItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";
import { openModal } from "../redux/features/modal/modalSlice";

const Cartcontainer = () => {
  const dispatch = useDispatch();
  const {cartItems,total, amount}  = useSelector ((store) => store.cart)

if (amount < 1) {
  return <section className="cart">
    <header>
      <h2> my bag</h2>
       <h4 className="empty-cart">is empty</h4>
    </header>
  </section>
}
  return  <section className='cart'>
  <header>
    <h2>Your bag</h2>
  </header>
  <div>
    { cartItems.map((item) => {
return <CartItem key={item.id} {...item} />;
    } )}
  </div>
  <footer>
    <hr />
  
      <div className="cart-total">
        <h4>total <span>${total.toFixed(2)}</span></h4>
      </div>
 <button className="btn clear-btn" onClick={() =>
dispatch(openModal())}>clear cart</button>
  </footer>
  </section>
};
export default Cartcontainer;  