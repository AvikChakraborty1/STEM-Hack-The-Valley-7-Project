import { UserType } from "../TypeDefs/User"
import { GraphQLList } from 'graphql'

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