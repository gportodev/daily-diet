import { TextStyle, ViewStyle } from 'react-native';

type CardProps = {
  number: string;
  text: string;
  percent?: boolean;
  icon?: boolean;
  iconPosition?: 'left' | 'right';
  containerStyle?: ViewStyle;
  numberStyle?: TextStyle;
  textStyle?: TextStyle;
};

export { CardProps };
