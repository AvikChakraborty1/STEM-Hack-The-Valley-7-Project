import { StyleSheet, Text, Image, View } from 'react-native'
import { ImageBackground } from 'react-native-web'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import ProgressCard from './ProgressCard'
import LeaderboardCard from './LeaderboardCard'

function LeaderboardPage(props) {
  var level = props.level ? props.level : 1

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
  
  const sky = require('../../assets/sky.png')

  return (
    <View style={{ flex: '1' }}>
      <View style={{ height: '80%' }}>
      <ImageBackground source={sky} style={styles.sky}>
        <LeaderboardCard style={styles.leaderboard} /> 
        <Image
          source={images[9]}
          style={{ width: '100%', minHeight: '100%', position: 'fixed', marginTop: '10px', resizeMode: 'contain' }}
        />
      </ImageBackground>
      </View>
      <View style={styles.ground}>
      <ProgressCard style={styles.leaderboard} /> 
      {/* <Text style={styles.name}> Maaneth De Silva </Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sky: {
    height: '110%',
    position: 'relative',
    alignItems: 'center',
    resizeMode: 'contain',
    resizeMode: 'stretch',
  },
  leaderboard: {
    color: 'white',
    fontSize: '30px',
    marginTop: '20px',
  },
  ground: {
    width: '100%',
    height: '20%',
    backgroundColor: '#431f02',
    alignItems: 'center',
  },
  name: {
    marginTop: '10px',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
})

export default LeaderboardPage
