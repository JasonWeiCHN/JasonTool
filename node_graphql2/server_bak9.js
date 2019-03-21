var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

//当我们使用这种方式构建 API 时，根解析器是构建在 Query 和 Mutation 类型， 而不是 root 对象上的。

// Maps id to User object
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

// 定义 User 类型
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }
});

// 定义 Query 类型
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // `args` 描述了 `user` 查询接受的参数
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: function (_, {id}) {
        return fakeDatabase[id];
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');