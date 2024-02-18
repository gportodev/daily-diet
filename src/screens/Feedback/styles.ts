import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  headerDescription: {
    color: Colors.grays.gray1,
    fontSize: 16,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
  buttonTitle: {
    fontSize: 14,
    lineHeight: 18.2,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  submitButtonContainer: {
    height: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grays.gray1,
    borderRadius: 6,
    backgroundColor: Colors.grays.gray2,
  },
});
