import { StyleSheet, Text, Image, View } from 'react-native'

function ChallengeCard(props) {
  var imageIcon = require('../../assets/peopleIcon.png')

  const imageURL = props.imageURL ? props.imageURL: 'https://radseason.com/wp-content/uploads/2018/06/MTB-Events-in-the-US-1.jpg';
  const description = props.desc ? props.desc: 'description here';
  const name = props.name ? props.name: 'name';

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
          <Text style={styles.numberOfPeopleText}>54 </Text>
          <Image source={imageIcon} style={{ width: 20, height: 24 }} />
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
    alignItems: 'center',
    minHeight: '300px',
  },
  cardContent: {
    width: '90%',
    marginVertical:'10px',
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
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
})

export default ChallengeCard
