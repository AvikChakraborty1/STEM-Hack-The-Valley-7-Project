import { GraphQLList } from 'graphql'
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