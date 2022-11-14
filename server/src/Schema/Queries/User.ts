import { UserType } from "../TypeDefs/User"
import { 
    GraphQLList,
    GraphQLString
 } from 'graphql'

import { db } from '../index'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        let data: any[] = [];
        const users = await db.collection('Users/').get();
        users.forEach((user) => {
            data.push(user.data());
          });
        return data;
    }
}

export const GET_USER_BY_EMAIL = {
    type: new GraphQLList(UserType),
    args: {
        Email: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        let data: any[] = [];
        const users = await db.collection('Users/').where("Email", "==", args.Email).get();
        users.forEach((user) => {
            data.push(user.data());
          });
        return data;
    }
}