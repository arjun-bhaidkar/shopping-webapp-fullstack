const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js')
const app = express()
var cors = require('cors')
app.use(cors());

app.use(
    '/api',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
)

app.listen(3005, () => {
  console.log('App listening on port 3005')
})