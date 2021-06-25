import axios from "axios";
import React from "react";

const URL_PREFIX = "localhost:3005/api";
const PROTOCOL = "http";
const header = {
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Cache-Control': 'no-cache'
    }
}
export const GetProductData = () => {
    return new Promise((resolve, reject) => {
        let url = `${PROTOCOL}://${URL_PREFIX}`;
        let query = `
        {
            GetAllProducts {
                id,
                productName,
                brandName,
                weight,
                imageUrl,
                price,
                quantity,
                stock,
                total,
                inCart,
                description

              }
        }  
      `;
        axios.post(url, { query: query }, header).then(
            response => resolve (response.data.data.GetAllProducts)
        ).catch(err => console.log(err));
    })


}