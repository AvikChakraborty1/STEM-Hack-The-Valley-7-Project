import { StyleSheet, Text, Image, View } from 'react-native'

function ProgressCard(props) {
  var level = props.level ? props.level: 1;
  var name = props.name ? props.name: 'Name';
  var rank = props.rank ? props.rank: '0';

  
  const images = props.images;
  return (
    <View style={styles.card}>
      <View style={styles.horizontalLayout}>
        <Image
          source={images[level]}
          style={{ width: 120, height: 85, resizeMode: 'contain', }}
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

export default ProgressCard
