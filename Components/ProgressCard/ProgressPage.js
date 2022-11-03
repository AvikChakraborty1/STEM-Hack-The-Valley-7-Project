import { StyleSheet, Pressable } from 'react-native'
import ProgressCard from './ProgressCard';

function ProgressPage(props) {
  const images = props.images
  const challengeList = props.challengeList;
  return (
    <>
        {
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
