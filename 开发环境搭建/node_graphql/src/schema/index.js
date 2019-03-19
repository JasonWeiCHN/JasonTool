import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt
} from 'graphql'

// 我们要用的模拟数据
const data = require('../../data/data.json')

const User = new GraphQLObjectType({
    name: 'User',
    description: 'User对象',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
		ping: {
		    name: 'ping query',
		    description: 'ping query demo',
		    type: GraphQLString,
			args: {
			    message: {
			        type: GraphQLString
			    }
			},
		    resolve(parentValue, args, request) {
		        return 'Answering ' + args.message;
		    }
		},
		hello: {
            name: 'a hello world query',
            description: 'a hello world demo',
            type: GraphQLString,
            resolve(parentValue, args, request) {
                return '圣童降临2';
            }
        },
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (_, args) {
                return data[args.id];
            }
        },
		userall: {
		    type: GraphQLObject,
		    resolve: function (_, args) {
		        return data;
		    }
		}
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;