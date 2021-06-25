import React from 'react';
import './productItem.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from 'react-router-dom';
import ProductDetails from '../productDetails/ProductDetails';
import '../../../node_modules/react-grid-layout/css/styles.css';

export default function ProductItem({productId,productName, price, inCart,addToCart,imageUrl,updateProductDetails}) {

  return (
    <div className='card' key={productId}>
            <div className='card-image image-card'>
                <Link to={{
                pathname: '/productDetails/'+{productName}.productName,
                component: {ProductDetails}
                }}
                onClick={()=>updateProductDetails(productId)}
                >
                  <img src={imageUrl}
                      className='image' 
                      alt='product'>

                  </img>
                </Link>
                <a className='btn-floating halfway-fab waves-effect waves-light teal'
                onClick={()=> addToCart(productId)}>
                  <i className='material-icons'>{inCart?'done':'shopping_cart'}</i>
                </a>
            </div>
            <div className='bottom-container'>
                <div className='productName-container'>
                  <span>{productName}</span>
                </div>
                <div className='bottom-card-content'>
                  <span className='purple-text'>RS.{price}</span>
                  {/* {
                    inCart ? 
                    <button 
                        className='btn btn-small 
                                   waves-effect 
                                   waves-light 
                                   disabled'
                    >
                    Added</button>
                    :
                    <button 
                        className='btn 
                                   btn-small 
                                   waves-effect 
                                   waves-light 
                                   '
                        onClick={()=> addToCart(productId)}>
                    Add</button>
                  } */}
                </div>
            </div>
    </div>
      );
}

