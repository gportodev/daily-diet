import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Fonts } from '../../constants/Fonts';
import { Circle, Divider } from '../../assets/Loader';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/types';
import { MealProps } from '../../screens/Home/types';

function List(): JSX.Element {
  const arr = [
    {
      name: 'Sanduíche',
      date: '12/08/2022',
      time: '20:00',
      description:
        'Sanduíche de pão integral com atum e salada de alface e tomate',
      isPartOfDiet: false,
    },
    {
      name: 'Whey',
      date: '12/08/2022',
      time: '16:00',
      description: 'Whey',
      isPartOfDiet: true,
    },
    {
      name: 'Salada cesar com frango',
      date: '12/08/2022',
      time: '12:30',
      description: 'Salada cesar com frango',
      isPartOfDiet: true,
    },
    {
      name: 'Vitamina de banana',
      date: '12/08/2022',
      time: '09:30',
      description: 'Vitamina de banana',
      isPartOfDiet: true,
    },
  ];

  const data = [
    {
      day: '12.08.22',
      meals: arr,
    },
    {
      day: '13.08.22',
      meals: arr,
    },
  ];

  const navigation = useNavigation<NavigationProps>();

  const handleMeal = (item: MealProps): void => {
    const { name, description, date, time, isPartOfDiet } = item;

    navigation.navigate('Meal', {
      name,
      description,
      date,
      time,
      isPartOfDiet,
    });
  };

  return (
    <>
      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <>
            <View
              style={{
                paddingTop: 32,
                paddingBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: Fonts.bold,
                  lineHeight: 23.4,
                }}
              >
                {item.day}
              </Text>
            </View>

            <FlatList
              data={item.meals}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    handleMeal(item);
                  }}
                  style={styles.container}
                >
                  <View style={styles.wrap}>
                    <Text style={styles.timeText}>{item.time}</Text>

                    <Divider style={styles.divider} />

                    <Text style={styles.descriptionText}>{item.name}</Text>
                  </View>

                  <Circle
                    width={14}
                    height={14}
                    color={
                      item.isPartOfDiet
                        ? Colors.greens.greensMid
                        : Colors.reds.redMid
                    }
                  />
                </TouchableOpacity>
              )}
            />
          </>
        )}
      />
    </>
  );
}

export { List };
