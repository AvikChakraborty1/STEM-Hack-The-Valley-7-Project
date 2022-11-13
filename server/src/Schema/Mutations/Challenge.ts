import { 
    GraphQLFloat,
    GraphQLInt,
    GraphQLID,
    GraphQLString, 
    GraphQLList
} from 'graphql';
import { db } from '..';
import { ChallengeType } from '../TypeDefs/Challenge';

export const CREATE_CHALLENGE = {
    type: ChallengeType,
    args: {
        Name: { type: GraphQLID },
        Description: { type: GraphQLString },
        Unit: { type: GraphQLString },
        EndGoal: { type: GraphQLFloat },
        NumParticipants: { type: GraphQLInt },
        Category: { type: GraphQLList(GraphQLString) }
    },
    async resolve(parent: any, args: any) {
        const res = await db.collection('Challenges').add(args)
        return args;
    }
}