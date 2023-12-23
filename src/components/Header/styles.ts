import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
    gap: 4,
  },
  text: {
    fontFamily: Fonts.bold,
    color: Colors.grays.gray1,
    fontSize: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.grays.gray2,
  },
});
