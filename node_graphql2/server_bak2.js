var { graphql, buildSchema } = require('graphql');

// 使用 GraphQL schema language 构建一个 schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var schema2 = buildSchema(`
  type Query {
    hello2: String
  }
`);

// 根节点为每个 API 入口端点提供一个 resolver 函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
  hello2: () => {
    return 'Hello world 江湖行!';
  },
};

// 运行 GraphQL query '{ hello }' ，输出响应
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

graphql(schema2, '{ hello2 }', root).then((response) => {
  console.log(response);
});