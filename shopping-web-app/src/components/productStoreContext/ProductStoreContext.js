import React, { useState, createContext, useEffect } from 'react'
import ProductDetails from '../productDetails/ProductDetails';
import productData from '../../data/Data'
import { GetProductData } from '../../service/service';

export const ProductStoreContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState();

    const [productDetails, setProductDetails] = useState();

    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        addTotal()
    }, [products]);


    useEffect(() => {
        var data = localStorage.getItem("ProductData");
        if(data && JSON.parse(data).length){
            let parserData = JSON.parse(data)
            setProducts(parserData);
            setProductDetails(parserData[0])
        } else {
            GetProductData().then(res => {
                localStorage.setItem("ProductData",JSON.stringify(res))
                setProducts(res)
                setProductDetails(res[0])
            })
        }
    }, [])

    const addTotal = () => {
        let total = 0;
        products && products.filter(
            (product) => product.inCart === true)
            .map((product) => total = parseInt(product.total) + total);
        console.log(total)
        setTotalAmount(total)

    }

    const updateProductDetails = (id) => {
        const product = products.find(product => product.id === id);
        setProductDetails(product);
        
    }

    const addToCart = (id) => {
        console.log('added to cart' + JSON.stringify({ id }))
        const productIndex = products.findIndex(product => product.id === id);
        let newArray = [...products];
        newArray[productIndex] = {
            ...newArray[productIndex],
            inCart: true
        }
        setProducts(newArray)
        setProductDetails(newArray[productIndex])
        localStorage.setItem("ProductData",JSON.stringify(newArray))
    }
    const removeFromCart = (id) => {
        console.log('added to cart' + JSON.stringify({ id }))
        const productIndex = products.findIndex(product => product.id === id);
        let newArray = [...products];
        newArray[productIndex] = {
            ...newArray[productIndex],
            inCart: false,
            quantity: 1
        }
        setProducts(newArray)
        setProductDetails(newArray[productIndex])
        localStorage.setItem("ProductData",JSON.stringify(newArray))

    }
    const changeQty = (id, qty) => {
        console.log('added to cart' + JSON.stringify({ id }))
        const productIndex = products.findIndex(product => product.id === id);
        let newArray = [...products];
        let totalNew = newArray[productIndex].price * qty
        newArray[productIndex] = {
            ...newArray[productIndex],
            quantity: qty,
            total: totalNew
        }
        setProducts(newArray)
        setProductDetails(newArray[productIndex])
        localStorage.setItem("ProductData",JSON.stringify(newArray))

    }

    const clearCart = () => {
        let newArray = [...products];
        newArray.forEach((item) => {
            item.inCart = false
            item.quantity = 1
        })
        setProducts(newArray)
        localStorage.setItem("ProductData",JSON.stringify(newArray))

    }

    return (
        <ProductStoreContext.Provider value={[products, setProducts,
            addToCart, productDetails,
            updateProductDetails,
            removeFromCart,
            changeQty,
            totalAmount,
            clearCart
        ]}>
            {props.children}
        </ProductStoreContext.Provider>
    )
}