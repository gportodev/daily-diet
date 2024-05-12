import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000025',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalView: {
    backgroundColor: Colors.white,
    width: '100%',
    height: 192,
    paddingHorizontal: 24,
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontFamily: Fonts.bold,
    color: Colors.grays.gray2,
    fontSize: 18,
    lineHeight: 23.4,
    textAlign: 'center',
    width: 279,
  },
  buttonsView: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  button: {
    width: (width - 96 - 12) / 2,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grays.gray1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
