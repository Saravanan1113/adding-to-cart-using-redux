import { uiActions } from "../../store/slice/ui-slice";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(uiActions);
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
