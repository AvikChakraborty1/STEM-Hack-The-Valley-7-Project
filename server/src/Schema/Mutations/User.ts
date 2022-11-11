import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString 
} from 'graphql';
import { db } from '..';
import { UserType } from '../TypeDefs/User';

export const CREATE_USER = {
    type: UserType,
    args: {
        FirstName: { type: GraphQLID },
        LastName: { type: GraphQLString },
        Image: { type: GraphQLString },
        Email: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const res = await db.collection('Users').add(args)
        return args;
    }
}