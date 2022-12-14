import { StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react';
import LeaderboardPage from '../LeaderboardPage/LeaderboardPage';
import ProgressCard from './ProgressCard';


function ProgressPage(props) {
  const images = props.images
  const challengeList = props.challengeList;
  const [challengeSelected, setChallengeSelected] = useState(null)

  const onChallengedPressed = (item) => {
    setChallengeSelected(item)
  }

  return (
    <>
        {
            challengeSelected ? (
                <>
                <View style={styles.scroller}>
                    <Pressable
                      onPress={() => onChallengedPressed(null)}
                      style={styles.container}
                    >
                      <LeaderboardPage info={challengeSelected} />
                    </Pressable>
                </View>
                </>
              )
              :
        challengeList.map((item) => {
            // onPress={() => onChallengedPressed(item)}>
            return (

            <Pressable > 
                <ProgressCard
                  rank={item.rank}
                  name={item.name}
                  images={images}
                  level={parseInt((item.progress / item.endValue) * 10, 10)}
                />
              </Pressable>
            )
          })
        }
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 500,
    justifyContent: 'left',
    height: 110,
  },
  cardContent: {
    width: '45%',
  },
  label: {
    marginTop: 20,
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    marginTop: 20,
    color: '#000000',
    fontSize: 20,
    fontWeight: '300',
  },
  numberOfPeopleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalLayout: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
})

export default ProgressPage
