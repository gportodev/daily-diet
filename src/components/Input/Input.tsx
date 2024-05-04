import React, { forwardRef } from 'react';
import { Text, TextInput } from 'react-native';
import { type InputProps } from './types';
import styles from './styles';
import { MaskedTextInput } from 'react-native-mask-text';

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    value,
    onChange,
    placeholder,
    title,
    titleStyle,
    masked,
    maskedType,
    ...rest
  } = props;

  return (
    <>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {masked && (
        <MaskedTextInput
          {...rest}
          mask={maskedType}
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
        />
      )}

      {!masked && (
        <TextInput
          {...rest}
          ref={ref}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
});

Input.displayName = 'Input';

export { Input };
