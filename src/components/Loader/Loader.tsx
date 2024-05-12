import React from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';

function Loader(): JSX.Element {
  return <ActivityIndicator size="large" color={Colors.greens.greensDark} />;
}

export { Loader };
