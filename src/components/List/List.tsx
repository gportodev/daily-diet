import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import { Fonts } from '../../constants/Fonts';
import { Circle, Divider } from '../../assets/Loader';
import Colors from '../../constants/Colors';

function List(): JSX.Element {
  // const data = [
  //   {
  //     time: '20:00',
  //     description: 'Xtudo',
  //     isPartOfDiet: false,
  //   },
  //   {
  //     time: '16:00',
  //     description: 'Whey',
  //     isPartOfDiet: true,
  //   },
  //   {
  //     time: '12:30',
  //     description: 'Salada cesar com frango',
  //     isPartOfDiet: true,
  //   },
  //   {
  //     time: '09:30',
  //     description: 'Vitamina de banana',
  //     isPartOfDiet: true,
  //   },
  // ];

  const arr = [
    {
      time: '20:00',
      description: 'Xtudo',
      isPartOfDiet: false,
    },
    {
      time: '16:00',
      description: 'Whey',
      isPartOfDiet: true,
    },
    {
      time: '12:30',
      description: 'Salada cesar com frango',
      isPartOfDiet: true,
    },
    {
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
                <View style={styles.container}>
                  <View style={styles.wrap}>
                    <Text style={styles.timeText}>{item.time}</Text>

                    <Divider style={styles.divider} />

                    <Text style={styles.descriptionText}>
                      {item.description}
                    </Text>
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
                </View>
              )}
            />
          </>
        )}
      />
    </>
  );
}

export { List };
