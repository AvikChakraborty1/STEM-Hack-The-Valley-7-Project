import { GraphQLSchema, GraphQLObjectType} from 'graphql'
import { GET_ALL_USERS, GET_USER_BY_EMAIL } from './Queries/User';
import { CREATE_USER } from './Mutations/User';
import * as admin from 'firebase-admin'
import { GET_ALL_CHALLENGES, GET_CHALLENGE_BY_CATEGORY } from './Queries/Challenge';
import { CREATE_CHALLENGE } from './Mutations/Challenge';
const stemKey = require('./stemKey.json');

admin.initializeApp({
    credential: admin.credential.cert(stemKey)
})
export const db = admin.firestore();

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getUserByEmail: GET_USER_BY_EMAIL,
        getAllChallenges: GET_ALL_CHALLENGES,
        getChallengeByCat: GET_CHALLENGE_BY_CATEGORY
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        createChallenge: CREATE_CHALLENGE
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});