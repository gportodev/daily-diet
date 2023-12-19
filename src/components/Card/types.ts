import { TextStyle, ViewStyle } from 'react-native';

type CardProps = {
  number: string;
  text: string;
  percent?: boolean;
  icon?: boolean;
  containerStyle?: ViewStyle;
  numberStyle?: TextStyle;
  textStyle?: TextStyle;
};

export { CardProps };
