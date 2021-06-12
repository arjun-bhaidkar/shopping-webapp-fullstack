const sql = require('mssql/msnodesqlv8');

const {dbconfig}= require('../config/config')

const pool = new sql.ConnectionPool(dbconfig);

function getAllProductDetails() {
    return new Promise((resolve, reject) => {
        pool.connect(err => {
            if (err) {
                console.error(err);
                console.trace();
                reject(err);
            }
            if (pool.connected) {
                console.log("DB connected");
                const request = pool.request();
                //request.input('userId', sql.Int, userId);

                console.log("Executing sp_GetAllProducts");
                request.execute('sp_GetAllProducts', (err, result) => {
                    if (err) {
                        console.error(err);
                        console.trace();
                        reject(err);
                    }
                    else {
                        console.log("Successfully executed sp_GetAllProducts");
                        resolve(result.recordset);
                    }
                });
            };
        });
    });
};

function getProductDetails(id) {
    return new Promise((resolve, reject) => {
        pool.connect(err => {
            if (err) {
                console.error(err);
                console.trace();
                reject(err);
            }
            if (pool.connected) {
                console.log("DB connected");
                const request = pool.request();
                request.input('id', sql.VarChar(10), id);

                console.log("Executing sp_GetProductUsingId");
                request.execute('sp_GetProductUsingId', (err, result) => {
                    if (err) {
                        console.error(err);
                        console.trace();
                        reject(err);
                    }
                    else {
                        console.log("Successfully executed sp_GetProductUsingId");
                        resolve(result.recordset[0]);
                    }
                });
            };
        });
    });
};

const dataAccess = {
    getProductDetails,
    getAllProductDetails
}

module.exports = dataAccess;