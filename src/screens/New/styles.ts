import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grays.gray5,
    paddingTop: 100,
  },
  content: {
    flex: 1,
    gap: 24,
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
});
