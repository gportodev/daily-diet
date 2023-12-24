import React from 'react';
import { View, Text } from 'react-native';
import { StatisticsProps } from './types';
import { Card } from '../../components/Card';
import { useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

function Statistics(): JSX.Element {
  const route = useRoute();

  const { number, text } = route.params as StatisticsProps;

  return (
    <View>
      <Card
        number={number}
        text={text}
        percent
        icon
        containerStyle={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
          paddingRight: 16,
          paddingLeft: 16,
          gap: 2,
          backgroundColor: Colors.greens.greensLight,
          borderRadius: 8,
        }}
        numberStyle={{
          color: Colors.grays.gray1,
          fontFamily: Fonts.bold,
          fontSize: 32,
          lineHeight: 41.6,
        }}
        textStyle={{
          color: Colors.grays.gray1,
          fontFamily: Fonts.regular,
          fontSize: 14,
          lineHeight: 18.2,
        }}
      />

      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingTop: 33,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18.2,
            fontFamily: Fonts.bold,
            color: Colors.grays.gray1,
            paddingBottom: 23,
          }}
        >
          Estatísticas gerais
        </Text>

        <Card
          number={number}
          text={text}
          percent
          icon
          containerStyle={{
            height: 89,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 16,
            paddingLeft: 16,
            gap: 2,
            backgroundColor: Colors.greens.greensLight,
            borderRadius: 8,
          }}
          numberStyle={{
            color: Colors.grays.gray1,
            fontFamily: Fonts.bold,
            fontSize: 32,
            lineHeight: 41.6,
          }}
          textStyle={{
            color: Colors.grays.gray1,
            fontFamily: Fonts.regular,
            fontSize: 14,
            lineHeight: 18.2,
          }}
        />
      </View>
    </View>
  );
}

export { Statistics };
