import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ProductStoreContext } from './productStoreContext/ProductStoreContext'


export default function CheckoutPage(){
    const [products,setProducts,
		addToCart,productDetails,
		updateProductDetails,
		removeFromCart,
		changeQty,
		totalAmount,
		clearCart] = useContext(ProductStoreContext)
    return(
        <div>
            <h2 className='flow-text green-text'>Your order has been placed</h2>
            <Link to={{pathname: '/'}}>
                <button className='btn' onClick={clearCart}>continue Shopping</button>
            </Link>
        </div>
    )
}