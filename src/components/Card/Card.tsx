import React from 'react';
import { CardProps } from './types';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import styles from './styles';

function Card({
  number,
  text,
  percent,
  icon,
  containerStyle,
  numberStyle,
  textStyle,
}: CardProps): JSX.Element {
  return (
    <View style={containerStyle}>
      {icon && (
        <TouchableOpacity
          onPress={() => {
            console.log('apertou');
          }}
          style={styles.iconStyle}
        >
          <ArrowUpRight color={Colors.greens.greensDark} size={24} />
        </TouchableOpacity>
      )}

      <View style={styles.wrapper}>
        <Text style={numberStyle}>{number + (percent ? '%' : '')}</Text>
        <Text style={textStyle}>{text}</Text>
      </View>
    </View>
  );
}

export { Card };
