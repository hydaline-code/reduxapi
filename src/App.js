
import Navbar from './components/Navbar';
import Cartcontainer from './components/cardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './redux/features/cart/cartSlice';
import Modal from './components/modal';
import './App.css';
import { useEffect } from 'react';

function App() {
  const {cartItems} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
       <main>

        { isOpen && <Modal /> }
       <Navbar />
      <Cartcontainer />
       </main>
  
  );
}

export default App;
