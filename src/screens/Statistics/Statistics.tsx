import React from 'react';
import { View, Text } from 'react-native';
import { Item, StatisticsProps } from './types';
import { Card } from '../../components/Card';
import { useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { getArrowStatus, getCardStatus } from '../Home/helpers';

function Statistics(): JSX.Element {
  const route = useRoute();

  const { value, text } = route.params as StatisticsProps;

  const list = [
    {
      value: 22,
      description: 'melhor sequência de pratos dentro da dieta',
      style: {
        height: 89,
        backgroundColor: Colors.grays.gray6,
        padding: 16,
        borderRadius: 8,
      },
    },
    {
      value: 109,
      description: 'refeições registradas',
      style: {
        height: 89,
        backgroundColor: Colors.grays.gray6,
        padding: 16,
        borderRadius: 8,
      },
    },
  ];

  const subList: Item[] = [
    {
      value: 99,
      description: 'refeições dentro da dieta',
      style: {
        width: '48%',
        justifyContent: 'center',
        height: 107,
        backgroundColor: Colors.greens.greensLight,
        padding: 16,
        borderRadius: 8,
      },
    },
    {
      value: 10,
      description: 'refeições fora da dieta',
      style: {
        width: '48%',
        justifyContent: 'center',
        height: 107,
        backgroundColor: Colors.reds.redLight,
        padding: 16,
        borderRadius: 8,
      },
    },
  ];

  return (
    <View
      style={{
        backgroundColor: Colors.greens.greensLight,
      }}
    >
      <Card
        value={value}
        text={text}
        percent
        icon
        iconStyle={getArrowStatus(value)}
        iconPosition="left"
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
          borderRadius: 8,
          backgroundColor: getCardStatus(value),
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
          paddingHorizontal: 24,
          paddingTop: 33,
          backgroundColor: Colors.grays.gray7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18.2,
            fontFamily: Fonts.bold,
            color: Colors.grays.gray1,
            paddingBottom: 23,
            alignSelf: 'center',
          }}
        >
          Estatísticas gerais
        </Text>

        <View
          style={{
            flexDirection: 'column',
            gap: 12,
            justifyContent: 'space-between',
          }}
        >
          {list.map(item => {
            return (
              <Card
                key={item.value}
                value={item.value}
                text={item.description}
                containerStyle={item.style}
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
            );
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        >
          {subList.map(item => {
            return (
              <Card
                key={item.value}
                value={item.value}
                text={item.description}
                containerStyle={item.style}
                numberStyle={{
                  color: Colors.grays.gray1,
                  fontFamily: Fonts.bold,
                  fontSize: 24,
                  lineHeight: 31.2,
                  textAlign: 'center',
                }}
                textStyle={{
                  color: Colors.grays.gray1,
                  fontFamily: Fonts.regular,
                  fontSize: 14,
                  lineHeight: 18.2,
                  textAlign: 'center',
                  width: 125.5,
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

export { Statistics };
