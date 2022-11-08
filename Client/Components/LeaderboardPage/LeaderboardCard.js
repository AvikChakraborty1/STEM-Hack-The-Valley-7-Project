import { StyleSheet, Text, Image, View } from 'react-native'

function LeaderboardCard() {
  var imageIcon = require('../../assets/peopleIcon.png')

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.label}>Leaderboard</Text>
        <Text style={styles.text}>
          1st - Random person 1
        </Text>
        <Text style={styles.text}>
          2nd - Random person 2
        </Text>
        <Text style={styles.text}>
          3rd - Random person 3
        </Text>
      </View>
    </View>
  )
}

// backgroundColor: '#E4EFCB',

const styles = StyleSheet.create({
  card: {
    width: '80%',
    paddingVertical: 20,
    backgroundColor: '#E4EFCB',
    alignItems: 'center',
    marginTop: 50,
  },
  cardContent: {
    width: '90%',
    marginVertical:10,
  },
  label: {
    marginTop: 5,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
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

export default LeaderboardCard;
