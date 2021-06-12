const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } = graphql


const productType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        price: {
            type: GraphQLFloat,
        },
        brand: {
            type: GraphQLString,
        },
        stock_count: {
            type: GraphQLInt,
        },
        logo: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        }
    }),
})

module.exports = {
    productType
}