const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType,GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLFloat } = graphql


const productType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        productName: {
            type: GraphQLString,
        },
        brandName: {
            type: GraphQLString,
        },
        weight: {
            type: GraphQLString,
        },
        imageUrl: {
            type: GraphQLString,
        },
        price: {
            type: GraphQLString,
        },
        quantity: {
            type: GraphQLInt,
        },
        stock: {
            type: GraphQLInt,
        },
        total: {
            type: GraphQLString,
        },
        inCart: {
            type: GraphQLBoolean,
        },
        description: {
            type: GraphQLString,
        }
    }),
})

module.exports = {
    productType
}