
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.svg';


const Navbar = () => {

  const amount  = useSelector((store) => store.cart.amount)
  return (
    <nav>
      <div  className="nav-center">
        <h3>Redux Toolkit</h3>
        <div  className="nav-container">
        <FontAwesomeIcon className="icon" icon={faCartShopping} />
        <div  className="amount-container">
        <p className="total-amount">{amount}</p>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;