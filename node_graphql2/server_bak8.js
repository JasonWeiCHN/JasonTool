var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//假设我们要实现个简单的 API，根据 id 在一些硬编码数据中查询某个用户数据。我们可以用 buildSchema 这么写

var schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`);

// 从 id 映射到 User 对象
var fakeDatabase = {
  'a': {
    id: 'a',
    name: 'alice',
  },
  'b': {
    id: 'b',
    name: 'bob',
  },
};

var root = {
  user: function ({id}) {
    return fakeDatabase[id];
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');