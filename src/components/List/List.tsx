import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Fonts } from '../../constants/Fonts';
import { Circle, Divider } from '../../assets/Loader';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/types';
import { MealProps } from '../../screens/Home/types';
import { useMeal } from '../../context/Context';

function List(): JSX.Element {
  const { mealList } = useMeal();

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
        data={mealList}
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
