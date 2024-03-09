import { TextStyle, type TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  title?: string;
  titleStyle?: TextStyle;
};

export { InputProps };
