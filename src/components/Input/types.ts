import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { TextStyle, type TextInputProps } from 'react-native';

type InputProps = TextInputProps &
  ControllerFieldState &
  ControllerRenderProps & {
    masked?: boolean;
    maskedType?: string;
    title?: string;
    titleStyle?: TextStyle;
  };

export { InputProps };
