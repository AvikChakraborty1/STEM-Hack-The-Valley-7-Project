import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString, 
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

export const ChallengeType = new GraphQLObjectType({
    name: "Challenge",
    fields: () => ({
        Name: { type: GraphQLID },
        Description: { type: GraphQLString },
        Unit: { type: GraphQLString },
        EndGoal: { type: GraphQLFloat },
        NumParticipants: { type: GraphQLInt },
        Category: { type: GraphQLList(GraphQLString) }
    })
}) 