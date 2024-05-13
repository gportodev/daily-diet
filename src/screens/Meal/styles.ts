import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    height: 132,
  },
  content: {
    flex: 1,
    gap: 24,
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: Colors.grays.gray7,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  tag: {
    width: 144,
    height: 34,
    borderRadius: 100,
    backgroundColor: Colors.grays.gray6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grays.gray5,
    padding: 14,
  },
  inputDatetime: {
    width: (width - 68) / 2,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grays.gray5,
    padding: 14,
    gap: 8,
  },
  title: {
    fontSize: 14,
    lineHeight: 18.2,
    fontFamily: Fonts.bold,
  },
  info: {
    fontSize: 16,
    lineHeight: 20.8,
    fontFamily: Fonts.regular,
  },
  validateButtonContainer: {
    height: 50,
    width: (width - 68) / 2,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
  },
  submitButtonContainer: {
    width: '100%',
    height: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grays.gray1,
    borderRadius: 6,
    backgroundColor: Colors.grays.gray2,
  },
  buttonsWrap: {
    gap: 12,
    // paddingTop: '38%',
  },
});
