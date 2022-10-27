import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import ProgressCard from './ProgressCard'
import LeaderboardCard from './LeaderboardCard'
import NavigationBar from '../NavigationBar/NavigationBar'

function LeaderboardPage(props) {
  var level =
    props.info.endValue && props.info.progress
      ? parseInt((props.info.progress / props.info.endValue) * 10, 10)
      : 1
  var progress = props.info.progress ? props.info.progress : 0
  var name = props.info.name ? props.info.name : 'Challenge name'

  const sky = require('../../assets/sky.png')

  const images = {
    1: require('../../assets/Tree/1.png'),
    2: require('../../assets/Tree/2.png'),
    3: require('../../assets/Tree/3.png'),
    4: require('../../assets/Tree/4.png'),
    5: require('../../assets/Tree/5.png'),
    6: require('../../assets/Tree/6.png'),
    7: require('../../assets/Tree/7.png'),
    8: require('../../assets/Tree/8.png'),
    9: require('../../assets/Tree/9.png'),
    10: require('../../assets/Tree/10.png'),
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={sky} resizeMode="cover" style={styles.sky}>
          <LeaderboardCard />

          <Image
            source={images[level]}
            style={{
              width: '100%',
              height: '62%',
              marginTop: 10,
              resizeMode: 'contain',
            }}
          />
        </ImageBackground>
      </View>

      <View style={styles.ground}>
        <View style={styles.bottomText}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
          <Text style={{ fontWeight: 'lighter', fontSize: 20 }}>
            Progress: {progress}
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  sky: {
    resizeMode: 'stetch',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bottomText: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#E4EFCB',
    color: 'black',
    fontSize: 30,
    paddingVertical: 5,
    width: '70%',
  },
  ground: {
    height: '15%',
    width: '100%',
    backgroundColor: '#431f02',
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default LeaderboardPage
