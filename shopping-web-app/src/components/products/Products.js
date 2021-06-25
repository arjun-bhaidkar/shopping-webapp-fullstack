import React, { useContext, useState } from 'react';
import './Products.css';
import 'materialize-css/dist/css/materialize.min.css'
import ProductItem from '../productItem/ProductItem';
import ProductDetails from '../productDetails/ProductDetails';
import { Link } from 'react-router-dom';

import { ProductStoreContext } from '../productStoreContext/ProductStoreContext'
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../../node_modules/react-grid-layout/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


function Products() {
  const [products, setProducts, addToCart, productDetails, updateProductDetails] = useContext(ProductStoreContext)

  const layoutProps = {
    className: "layout",
    currentBreakpoint: "lg",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    useCSSTransform: false,
    preventCollision: false,
    isResizable: true,
    isDraggable: true
  };


  const [initialLayout, setInitialLayout] = useState({
    lg:
      JSON.parse(localStorage.getItem("DashboardLayout")) ? JSON.parse(localStorage.getItem("DashboardLayout")) : 
      [
        { "x": 0, "y": 0, "w": 2, "h": 8, "i": "1", "static": false },
        { "x": 2, "y": 0, "w": 2, "h": 8, "i": "2", "static": false },
        { "x": 4, "y": 0, "w": 2, "h": 8, "i": "3", "static": false },
        { "x": 6, "y": 0, "w": 2, "h": 8, "i": "4", "static": false },
        { "x": 8, "y": 0, "w": 2, "h": 8, "i": "5", "static": false },
        { "x": 0, "y": 8, "w": 2, "h": 8, "i": "6", "static": false },
        { "x": 2, "y": 8, "w": 2, "h": 8, "i": "7", "static": false },
        { "x": 4, "y": 8, "w": 2, "h": 8, "i": "8", "static": false },
        { "x": 6, "y": 8, "w": 2, "h": 8, "i": "9", "static": false },
        { "x": 8, "y": 8, "w": 2, "h": 8, "i": "10", "static": false }
      ]
  });

  const generateDOM = () => {
    return products && initialLayout.lg.map((item, i) => {
      var productData = products.filter(c => c.id.trim() == item.i)[0];

      return (
        <div className='card' key={item.i}>
          <div className='card-image image-card'>

            <img src={productData.imageUrl}
              className='image'
              alt='product'>

            </img>
            <a className='btn-floating halfway-fab waves-effect waves-light teal'
              onClick={() => addToCart(productData.id)}>
              <i className='material-icons'>{productData.inCart ? 'done' : 'shopping_cart'}</i>
            </a>
          </div>
          <div className='bottom-container'>
            <Link to={{
              pathname: '/productDetails/' + productData.productName,
              component: { ProductDetails }
            }}
              onClick={() => updateProductDetails(productData.id)}
            >
              <div className='productName-container'>
                <span>{productData.productName}</span>
              </div>
            </Link>
            <div className='bottom-card-content'>
              <span className='purple-text'>RS.{productData.price}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  const onLayoutChange = (layout, layouts) => {
    localStorage.setItem("DashboardLayout", JSON.stringify(layout));
  }

  return (
    // <div className="Products">
    //   <div className='container row'>
    //       {
    //         products.map((product) => (
    //           <div className='col s6 m4 l3'>
    //             <ProductItem 
    //               key={product.id}
    //               productId={product.id}
    //               productName={product.productName}
    //               price={product.price}
    //               inCart={product.inCart}
    //               addToCart={addToCart}
    //               imageUrl={product.imageUrl}
    //               updateProductDetails={updateProductDetails}
    //             />
    //           </div>
    //         ))
    //       }
    //     </div>
    // </div>
    <div className="container">
      <ResponsiveReactGridLayout
        {...layoutProps}
        layouts={products ? initialLayout : {lg:[]}}
        rowHeight={30}
        measureBeforeMount={false}
        onLayoutChange={onLayoutChange}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>

    </div>
  );
}

export default Products;
