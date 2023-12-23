import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    paddingVertical: 14,
    paddingLeft: 12,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.grays.gray5,
    borderRadius: 6,
    gap: 12,
    marginBottom: 8,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: 8,
  },
  timeText: {
    fontFamily: Fonts.bold,
    fontSize: 12,
  },
  descriptionText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});
