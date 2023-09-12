import { useState,useEffect } from "react";
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const [items,setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=>{
        const numberOfCartItems = items.reduce((prev,curr) => {
            return prev=prev+Number(curr.quantity);
        },0);
        setTotalAmount(numberOfCartItems);  
    },[items,totalAmount])

    const addItemToCartHandler = (item) => {
        setItems((prevItems) => {
            let mapItems = new Map();
            mapItems.set(item.name,item);
            prevItems.forEach(element => {
                if(mapItems.has(element.name)){
                    let itemQuantity = Number(mapItems.get(element.name).quantity);
                    mapItems.set(element.name, {...mapItems.get(element.name), quantity: itemQuantity+Number(element.quantity)})
                }else{
                    mapItems.set(element.name, element);
                }
            });
            console.log("map iteration: ",[...mapItems.values()])
            return [...mapItems.values()];
        })
    };

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            console.log(id);
            const mappedItems = prevItems.map(val => {
                if(val.id === id){
                    console.log('find');
                    if(val.quantity>=1){
                        val.quantity--;
                    }
                }
                return val;
            })
            console.log(mappedItems);
            return mappedItems;
        })
    };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;