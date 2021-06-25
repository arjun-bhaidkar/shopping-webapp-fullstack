import React, {useContext} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { ProductStoreContext } from '../productStoreContext/ProductStoreContext'
import CartItem from './CartItem'
import CheckoutPage from '../CheckoutPage'
import {Link} from 'react-router-dom'


export default function Cart() {
	const [products,setProducts,
		addToCart,productDetails,
		updateProductDetails,
		removeFromCart,
		changeQty,
		totalAmount,
		clearCart] = useContext(ProductStoreContext)


		
	return(
		<div className='container'>
			{
				products && products.filter(
					(product)=> product.inCart===true).length>0 ?
				products && products.filter(
					(product)=> product.inCart===true)
					.map((product)=>
					<CartItem 
							key={product.id}
							productId={product.id}
							imageUrl={product.imageUrl}
							name={product.productName}
							price={product.price}
							removeFromCart={removeFromCart}
							quantity={product.quantity}
							total={product.total}
							changeQty={changeQty}
							
					/>
				)
				
				:
				<span className='flow-text blue-text'> No items in the cart</span>
			}
			{
			products && products.filter(
					(product)=> product.inCart===true).length>0 ?

					<div >
						<button className='btn red ' onClick={clearCart}>Clear Cart</button>
						<h5 className='flow-text  '>Total Amount: Rs.{totalAmount}</h5>
						<Link to={{pathname: '/checkout',component: {CheckoutPage}}}>
							<button className='btn'>Checkout</button>
						</Link>
					</div>
					: null
			}
        </div>
	)
}