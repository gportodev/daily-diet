import React from 'react';
import { TextInput } from 'react-native';
import { type InputProps } from './types';

function Input({
  value,
  onChange,
  placeholder,
  ...rest
}: InputProps): JSX.Element {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export { Input };
