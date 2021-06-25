import React, { useContext } from 'react';
import './ProductDetails.css';
import 'materialize-css/dist/css/materialize.min.css'
import {ProductStoreContext} from '../productStoreContext/ProductStoreContext'
import { Link } from 'react-router-dom';

export default function ProductDetails() {
  const [products, setProducts, addToCart,productDetails] = useContext(ProductStoreContext)
  
  return (
    <div className='container row'>
            <div className='col s12 l6'>
                <img src={'../../'+productDetails.imageUrl} 
                     className='image' 
                     alt='product-image'>

                </img>
            </div>
            <div className='col s12 l6'>
              <div>
                <h2 className='detail-title'>{productDetails.productName}</h2>
              </div>
              <div>
                <span className='price-text'>Price: {productDetails.price}</span>
              </div>
              <div className='btn-container'>
                <Link to={{
                  pathname: '/'
                }}
                >
                  <button className='btn'>Go Back</button>
                </Link>
                { productDetails.inCart ?
                  <button className='btn' 
                  disabled>
                  Added to cart
                  </button>
                  :
                  <button className='btn' 
                          onClick={()=>addToCart(productDetails.id)}>
                          Add to cart
                  </button>
                }
              </div>
              <div className='description-container'>
                <h5>Description:</h5>
                <p className=''>
                  {productDetails.description}
                </p>
              </div>

            </div>
    </div>
  );
}

