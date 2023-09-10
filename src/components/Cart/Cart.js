import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const items = useContext(CartContext).items;
    const totalPrice = items.reduce((pre,curr) => {
        const number = Number(pre) + Number(curr.price)*Number(curr.quantity);
        return number.toFixed(2);
    },0)
    const cartItems = (
        <ul className={classes['cart-items']}>
            {items.map(item => (
                <li key={item.id}>Item: {item.name}, Price: {item.price}, Quantity: {item.quantity}</li>
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart