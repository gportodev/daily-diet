import React from 'react';
import { CardProps } from './types';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/types';

function Card({
  number,
  text,
  percent,
  icon,
  iconPosition,
  containerStyle,
  numberStyle,
  textStyle,
}: CardProps): JSX.Element {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigation = (): void => {
    const params = {
      number,
      text,
    };

    navigation.navigate('Statistics', params);
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  return (
    <View style={containerStyle}>
      {icon && iconPosition === 'left' && (
        <TouchableOpacity onPress={handleGoBack} style={styles.iconLeftStyle}>
          <ArrowLeft color={Colors.greens.greensDark} size={24} />
        </TouchableOpacity>
      )}

      {icon && iconPosition === 'right' && (
        <TouchableOpacity
          onPress={handleNavigation}
          style={styles.iconRightStyle}
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
