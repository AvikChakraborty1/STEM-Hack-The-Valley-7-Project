import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString 
} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        Image: { type: GraphQLString },
        Email: { type: GraphQLID }
    })
}) 