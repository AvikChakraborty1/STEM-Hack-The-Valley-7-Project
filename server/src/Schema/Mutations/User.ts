import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString 
} from 'graphql';
import { UserType } from '../TypeDefs/User';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    },
    resolve(parent: any, args: any) {
        const { name, email } = args;
        return args;
    }
}