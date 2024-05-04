import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FieldError } from 'react-hook-form';

function ValidationMessage({
  error,
}: {
  error: FieldError | undefined;
}): JSX.Element {
  return (
    <View>{error && <Text style={styles.text}>{error.message}</Text>}</View>
  );
}

export { ValidationMessage };
