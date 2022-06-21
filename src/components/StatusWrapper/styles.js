import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 10
  },
  statusTabContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%'
  },
  statusTab: {
    height: 3,
    // backgroundColor: '#fff',
    backgroundColor: '#bbbbbb',
    flex: 1
  },
  controller: {
    position: 'absolute',
    width: width /2,
    height: height * 0.90,
    bottom: 0
  },
  imageContainer: {backgroundColor: '#222', flex: 1},
  imageStyle: {
    width: '100%',
    height: height / 1.2,
    maxHeight: height / 1.2,
  }
});

export default styles;