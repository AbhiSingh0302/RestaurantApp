import { useContext } from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        cartCtx.addItem({...props.item,quantity: document.getElementById('amount'+props.item.id).value})
        console.log(props.item)
    }

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount'+props.item.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button onClick={addToCart}>+ Add</button>
    </form>
}

export default MealItemForm;