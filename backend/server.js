import { GraphQLServer, PubSub } from 'graphql-yoga';
import * as db from './db';
// import Message from './resolvers/Message';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
// import User from './resolvers/User';
// import ChatBox from './resolvers/ChatBox';
import Query from './resolvers/Query';
// import Comment from './resolvers/Comment';
// import { mongo } from 'mongoose';
import  { mongo } from "./mongo/mongo"

let onLineUserArray = [];
const setonLineUserArray = (newOnLineUserArray)=>{
  onLineUserArray = [...newOnLineUserArray];
}
export {onLineUserArray, setonLineUserArray};

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutation,
    Query,
    // ChatBox,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});
mongo();

server.start({ port: process.env.PORT | 5000 }, () => {
  console.log(`The server is up on port ${process.env.PORT | 5000}!`);
});
