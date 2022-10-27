import { StyleSheet, Text, Image, View } from 'react-native'

function ChallengeCard(props) {
  var imageIcon = require('../../assets/peopleIcon.png')

  const imageURL = props.imageURL ? props.imageURL: 'https://radseason.com/wp-content/uploads/2018/06/MTB-Events-in-the-US-1.jpg';
  const description = props.desc ? props.desc: 'description here';
  const name = props.name ? props.name: 'name';
  const numParticipants = props.numParticipants ? props.numParticipants: 0;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={{ width: '100%', height: 170 }}
        />
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.text}>
          {description}
        </Text>
        <View style={styles.horizontalLayout}>
          <Text style={styles.numberOfPeopleText}>{ numParticipants } </Text>
          <Image source={imageIcon} style={{ width: 20, height: 24, resizeMode: 'contain' }} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    height: 300,
  },
  cardContent: {
    width: '90%',
    marginBottom: 30,
  },
  label: {
    marginTop: 10,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'Lighter',
  },
  numberOfPeopleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalLayout: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
}) 

export default ChallengeCard
