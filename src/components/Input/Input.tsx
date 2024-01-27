import React from 'react';
import { Text, TextInput } from 'react-native';
import { type InputProps } from './types';
import styles from './styles';

function Input({
  value,
  onChange,
  placeholder,
  title,
  ...rest
}: InputProps): JSX.Element {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
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
