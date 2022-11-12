import { 
    GraphQLList,
    GraphQLString
} from 'graphql'
import { db } from '../index'
import { ChallengeType } from "../TypeDefs/Challenge";

export const GET_ALL_CHALLENGES = {
    type: new GraphQLList(ChallengeType),
    async resolve() {
        let data: any[] = [];
        const challenges = await db.collection('Challenges/').get();
        challenges.forEach((challenge) => {
            data.push(challenge.data());
          });
        return data;
    }
}

export const GET_CHALLENGE_BY_CATEGORY = {
    type: new GraphQLList(ChallengeType),
    args: {
        Filter: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        let data: any[] = [];
        const challenges = await db.collection('Challenges/').where("Category", "array-contains", args.Filter).get()
        challenges.forEach((challenge) => {
            data.push(challenge.data());
          });
        return data;
    }
}