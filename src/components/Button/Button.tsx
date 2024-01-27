import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import styles from './styles';

function Button({
  children,
  title,
  titleStyle,
  style,
  disabled,
  onPress,
}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled}
    >
      {children}

      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
}

export { Button };
