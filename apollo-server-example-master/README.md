# apollo-server-example
A very simple Apollo GraphQL server

```
npm install
npm run dev
```

# Wei说明
主要文件是
connectors.js 工具类
schema.js 这是scheme 类型申明 解析器 都在这里
index.js 入口文件

引入关系
connectors.js>schema.js>index.js

所有文件都已追加注释
重点是 订阅的使用 Subscription，定义在 schema.js 中
订阅需要与后台建立长连接