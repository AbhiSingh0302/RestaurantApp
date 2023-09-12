import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    let totalPrice = cartCtx.items.reduce((pre, curr) => {
        const number = Number(pre) + Number(curr.price) * Number(curr.quantity);
        return number.toFixed(2);
    }, 0)

    const onSubtraction = (e) => {
        const itemId = e.target.parentElement.parentElement.id;
        cartCtx.removeItem(itemId);
    }

    const onAddition = (e) => {
        const itemId = e.target.parentElement.parentElement.id;
        const itemWithId = cartCtx.items.find(item => item.id === itemId);
        cartCtx.addItem({...itemWithId,quantity: 1});
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <li key={item.id} id={item.id}>
                    <div>
                        <div>
                            <span className={classes['item-name']}>{item.name}</span>
                        </div>
                        <div className={classes['price-quantity']}>
                            <span className={classes['item-price']}>${item.price}</span>
                            <span className={classes['item-quantity']}>&times;{item.quantity}</span>
                        </div>
                    </div>
                    <div>
                        <button className={classes['item-button']} onClick={onSubtraction}> - </button>
                        <button className={classes['item-button']} onClick={onAddition}> + </button>
                    </div>
                </li>
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