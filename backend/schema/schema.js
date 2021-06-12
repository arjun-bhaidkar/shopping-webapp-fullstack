const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString,GraphQLList,GraphQLInt } = graphql
const {productType} = require('../model/products');
const { products } = require('../data/data')
const { getProductDetails ,getAllProductDetails} = require('../datasrc/data');
const { json } = require('express');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      GetAllProducts: {
        type: new GraphQLList(productType),
        resolve: (parent, args, context)  => {
          return getAllProductDetails().then(res =>{
            return res;
          })
        },
      },
      GetProduct: {
        type: productType,
        args: {
          id : { type: GraphQLString },
        },
        resolve: (parent, args, context) => {
          return getProductDetails(args.id).then(res => {
            return res;
          });
        },
      },
    },
  }),
})
  
  module.exports = schema