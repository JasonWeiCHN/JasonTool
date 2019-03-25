import { makeExecutableSchema } from 'graphql-tools';

import Tags from './connectors';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();

const TAGS_CHANGED_TOPIC = 'tags_changed'
const WALLET_TABLE_CHANGED_TOPIC = 'wallet_table_changed'
const WALLET_HEADER_CHANGED_TOPIC = 'wallet_header_changed'

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
		walletHome(user_id:Int!): WalletHomeData
  }

  type Mutation {
    addTag(type: String!, label: String!): Tag,
		addWalletTable(
			user_id:Int!,
			tokenname: String!,
			totalasset: String!,
			available_balance: String!,
			frozen: String!,
			lock: String!,
			estimated: String!,
			withdraws_flag: Int,
			deposits_flag: Int,
			icon_url: String!,
		): Asset,
		updateWalletHeader(
			user_id: Int
			total_cny: String
		): WalletHead,
  }

  type Subscription {
    tagAdded(type: String!): Tag,
		walletTableAdded(user_id:Int!): Asset,
		walletHeadChanged(user_id:Int!): WalletHead,
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
		walletHome(root, { user_id }, context) {
      return Tags.getWalletHomeData(user_id);
    }
  },
  Mutation: {//变更
    addTag: async (root, { type, label }, context) => {
      console.log(`adding ${type} tag '${label}'`);
      const newTag = await Tags.addTag(type, label);
      pubsub.publish(TAGS_CHANGED_TOPIC, { tagAdded: newTag });
      return newTag;
    },
		//测试使用 向资产大厅列表里追加一条数据
		//mutation{addWalletTable(user_id:1001,tokenname:"PPK",totalasset:"10086.00",available_balance:"10086.00",frozen:"0.00",lock:"0.00",estimated:"10086000.00",withdraws_flag:0,deposits_flag:0,icon_url:"imgs/PPK.png"){id}}
		addWalletTable: async (root, { user_id,tokenname,totalasset,available_balance,frozen,lock,estimated,withdraws_flag,deposits_flag,icon_url }, context) => { //添加资产列表数据
		  console.log(`adding ${totalasset} tabledata '${tokenname}'`);
		  const newTableData = await Tags.addWalletTable(user_id,tokenname,totalasset,available_balance,frozen,lock,estimated,withdraws_flag,deposits_flag,icon_url);
		  pubsub.publish(WALLET_TABLE_CHANGED_TOPIC, { walletTableAdded: newTableData });
		  return newTableData;
		},
		//测试使用 修改资产总额
		//mutation{updateWalletHeader(user_id:1001,total_cny:"999.999"){id,user_id,total_icc,total_cny}}
		updateWalletHeader: async (root, { user_id, total_cny }, context) => {
      console.log(`adding ${user_id} changeHead '${total_cny}'`);
      const newTableHeader = await Tags.updateWalletHeader( user_id, total_cny );
      pubsub.publish(WALLET_HEADER_CHANGED_TOPIC, { walletHeadChanged: newTableHeader });
      return newTableHeader;
    },
  },
  Subscription: {//订阅 即前台对后台的监控 某条数据变了，就把与此数据关联的查询，在前端刷新，即重新查
    tagAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(TAGS_CHANGED_TOPIC),
        (payload, variables) => payload.tagAdded.type === variables.type,
      ),
    },
		walletTableAdded:{
      subscribe: withFilter(
				() => pubsub.asyncIterator(WALLET_TABLE_CHANGED_TOPIC),
				(payload, variables) => payload.walletTableAdded.user_id === variables.user_id,
			),
    }, 
		walletHeadChanged:{
      subscribe: withFilter(
				() => pubsub.asyncIterator(WALLET_HEADER_CHANGED_TOPIC),
				(payload, variables) => payload.walletHeadChanged.user_id === variables.user_id,
			),
    }, 
  },
};

const jsSchema = makeExecutableSchema({ //生成 schema
  typeDefs,
  resolvers,
});

export default jsSchema;
