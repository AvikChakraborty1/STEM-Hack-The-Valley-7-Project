import { StyleSheet, Text, Image, View } from 'react-native'

function ProgressCard(props) {
  var level = props.level ? props.level: 1;

  return (
    <View style={styles.card}>
      <View style={styles.horizontalLayout}>
        <View style={styles.cardContent}>
        <Text style={styles.label}>Challenge Name</Text>
        <Text style={styles.text}>
          Rank
        </Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '70%',
    paddingVertical: '10px',
    backgroundColor: '#f1f1f1',
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
