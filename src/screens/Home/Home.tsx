import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Plus } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

import { Header } from '../../components/Header';
import styles from './styles';
import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { useNavigation } from '@react-navigation/native';
import { useMeal } from '../../context/Context';
import { getArrowStatus, getCardStatus } from './helpers';
import { NavigationProps } from '../../routes/types';

function Home(): JSX.Element {
  const { mealsStatistics } = useMeal();
  const navigation = useNavigation<NavigationProps>();

  const handleNewMeal = (): void => {
    navigation.navigate('New');
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.grays.gray7,
      }}
    >
      <View style={styles.container}>
        <Header />

        <Card
          value={mealsStatistics}
          text={'das refeições dentro da dieta'}
          percent
          icon
          iconStyle={getArrowStatus(mealsStatistics)}
          iconPosition="right"
          containerStyle={{
            marginTop: 30,
            height: 102,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 16,
            paddingLeft: 16,
            gap: 2,
            backgroundColor: getCardStatus(mealsStatistics),
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
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 20.8,
              fontFamily: Fonts.regular,
              color: Colors.grays.gray1,
              paddingBottom: 8,
            }}
          >
            Refeições
          </Text>

          <Button
            onPress={handleNewMeal}
            title="Nova refeição"
            titleStyle={{
              fontSize: 14,
              lineHeight: 18.2,
              fontFamily: Fonts.bold,
              color: Colors.white,
            }}
            style={{
              width: '100%',
              height: 50,
              paddingVertical: 16,
              paddingHorizontal: 24,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: Colors.grays.gray1,
              borderRadius: 6,
              backgroundColor: Colors.grays.gray2,
            }}
          >
            <Plus color={Colors.white} size={18} />
          </Button>
        </View>

        <List />
      </View>
    </ScrollView>
  );
}

export { Home };
