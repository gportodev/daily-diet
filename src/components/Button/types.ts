import { TextStyle, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  titleStyle?: TextStyle;
};

export { ButtonProps };
