import { UserType } from "../TypeDefs/User"
import { GraphQLList } from 'graphql'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return [];
    }
}