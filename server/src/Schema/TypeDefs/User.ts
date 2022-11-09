import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString 
} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        FirstName: { type: GraphQLID },
        LastName: { type: GraphQLString },
        Image: { type: GraphQLString },
        Email: { type: GraphQLString }
    })
}) 