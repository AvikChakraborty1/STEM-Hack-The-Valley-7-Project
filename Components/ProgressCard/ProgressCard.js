import { StyleSheet, Text, Image, View } from 'react-native'

function ProgressCard(props) {
  var level = props.level ? props.level: 1;
  var name = props.name ? props.name: 'Name';
  var rank = props.rank ? props.rank: '0';

  
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
    <View style={styles.card}>
      <View style={styles.horizontalLayout}>
        <Image
          source={images[level]}
          style={{ width: '30%', resizeMode: 'contain', }}
        />
        <View style={styles.cardContent}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.text}>
          Rank: {rank}
        </Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: '10px',
    backgroundColor: '#ffffff',
    justifyContent: 'left',
  },
  cardContent: {
    width: '100%',
  },
  label: {
    marginTop: '10px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: 'Bold',
  },
  text: {
    marginTop: '10px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: 'Lighter',
  },
  numberOfPeopleText: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  horizontalLayout: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
})

export default ProgressCard
