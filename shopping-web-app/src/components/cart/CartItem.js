import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './cartItem.css'


export default function CartItem({productId,imageUrl,
                                 name,price,removeFromCart,
                                 quantity,total,changeQty
                                }) {

    const handleInputChange = (e) => {
        changeQty(productId,e.target.value)
    }

	return(
		<div className='row card horizontal margin-bottom'>
			<div className='card-image '>
                <img src={imageUrl} className='cartProduct'/>
            </div>
            <div className='card-stacked'>
                <div className='cart-text-content'>
                    <h5>{name}</h5>
                    <h6>Price: {price}</h6>
                </div>
                <div className='cart-content'>
                    <h6>Quantity: </h6>
                    <div className='input-container'>
                        <input 
                            type='number' 
                            className='input' 
                            value={quantity}
                            onChange={(e)=>handleInputChange(e) }
                            min={1}  
                        />
                    </div>
                </div>
                <div className='cart-bottom-content'>
                    <h6>Total: {total}</h6>
                    <a className='btn-floating halfway-fab waves-effect waves-light red'
                        onClick={()=>removeFromCart(productId)}>
                        <i className='material-icons'>delete</i>
                    </a>
                </div>
            </div>

        </div>
	)
}