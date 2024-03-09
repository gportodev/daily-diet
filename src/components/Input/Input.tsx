import React from 'react';
import { Text, TextInput } from 'react-native';
import { type InputProps } from './types';
import styles from './styles';

function Input({
  value,
  onChange,
  placeholder,
  title,
  titleStyle,
  ...rest
}: InputProps): JSX.Element {
  return (
    <>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}

export { Input };
