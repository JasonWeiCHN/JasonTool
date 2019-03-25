import { makeExecutableSchema } from 'graphql-tools';

import Tags from './connectors';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

const TAGS_CHANGED_TOPIC = 'tags_changed'

//类型申明
const typeDefs = [`
  type Tag {
    id: Int
    label: String
    type: String
  }

  type TagsPage {
    tags: [Tag]
    hasMore: Boolean
  }
	
	type Asset {
		id: Int 
		user_id: Int
		tokenname: String
		totalasset: String
		available_balance: String
		frozen: String
		lock: String
		estimated: String
		withdraws_flag: Int
		deposits_flag: Int
		icon_url: String
	}
	
	type WalletHead {
		id: Int
		user_id: Int
		total_icc: String
		total_cny: String
	}
	
	type WalletHomeData {
		headdata: WalletHead
		tabledata: [Asset]
	}

  type Query {
    hello: String
    ping(message: String!): String
    tags(type: String!): [Tag]
    tagsPage(page: Int!, size: Int!): TagsPage
    randomTag: Tag
    lastTag: Tag
		assets: [Asset]
		walletHome(userid:Int!): WalletHomeData
  }

  type Mutation {
    addTag(type: String!, label: String!): Tag
  }

  type Subscription {
    tagAdded(type: String!): Tag
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`];

//解析器
const resolvers = {
  Query: {//查询
    hello(root, args, context) {
      return "Hello world!";
    },
    ping(root, { message }, context) {
      return `Answering ${message}`;
    },
    tags(root, { type }, context) {
      return Tags.getTags(type);
    },
    tagsPage(root, { page, size }, context) {
      return Tags.getTagsPage(page, size);
    },
    randomTag(root, args, context) {
      return Tags.getRandomTag();
    },
    lastTag(root, args, context) {
      return Tags.getLastTag();
    },
		assets(root, args, context) {
			return Tags.getAssets();
		},
		walletHome(root, { userid }, context) {
      return Tags.getWalletHomeData(userid);
    }
  },
  Mutation: {//变更
    addTag: async (root, { type, label }, context) => {
      console.log(`adding ${type} tag '${label}'`);
      const newTag = await Tags.addTag(type, label);
      pubsub.publish(TAGS_CHANGED_TOPIC, { tagAdded: newTag });
      return newTag;
    },
  },
  Subscription: {//订阅 即前台对后台的监控 某条数据变了，就把与此数据关联的查询，在前端刷新，即重新查
    tagAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(TAGS_CHANGED_TOPIC),
        (payload, variables) => payload.tagAdded.type === variables.type,
      ),
    }
  },
};

const jsSchema = makeExecutableSchema({ //生成 schema
  typeDefs,
  resolvers,
});

export default jsSchema;
