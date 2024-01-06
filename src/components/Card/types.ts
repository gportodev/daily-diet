import { TextStyle, ViewStyle } from 'react-native';

type CardProps = {
  value: number;
  text: string;
  percent?: boolean;
  icon?: boolean;
  iconStyle?: string;
  iconPosition?: 'left' | 'right';
  containerStyle?: ViewStyle;
  numberStyle?: TextStyle;
  textStyle?: TextStyle;
};

export { CardProps };
