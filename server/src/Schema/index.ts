import { GraphQLSchema, GraphQLObjectType} from 'graphql'
import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER } from './Mutations/User';
import * as admin from 'firebase-admin'
const stemKey = require('./stemKey.json');

admin.initializeApp({
    credential: admin.credential.cert(stemKey)
})
export const db = admin.firestore();

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});