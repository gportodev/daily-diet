import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Happy, Sad } from '../../assets/Loader';
import { StackScreenProps } from '../../routes/types';
import { Fonts } from '../../constants/Fonts';
import { Button } from '../../components/Button';
import Colors from '../../constants/Colors';

function Feedback({
  navigation,
  route,
}: StackScreenProps<'Feedback'>): JSX.Element {
  const { partOfDiet } = route.params;

  const handleMessage = (): JSX.Element => {
    return (
      <View style={styles.header}>
        <Text
          style={[
            styles.headerTitle,
            {
              color: partOfDiet
                ? Colors.greens.greensDark
                : Colors.reds.redDark,
            },
          ]}
        >
          {partOfDiet ? 'Continue assim!' : 'Que pena!'}
        </Text>
        <Text style={styles.headerDescription}>
          {partOfDiet ? 'Você continua ' : 'Você '}
          <Text
            style={[
              styles.headerDescription,
              {
                fontFamily: Fonts.bold,
              },
            ]}
          >
            {partOfDiet ? 'dentro da dieta.' : 'saiu da dieta '}
          </Text>
          {partOfDiet
            ? ' Muito bem!'
            : 'dessa vez, mas continue se esforçando e não desista!'}
        </Text>
      </View>
    );
  };

  const handleImage = (): JSX.Element => {
    return partOfDiet ? <Happy /> : <Sad />;
  };

  return (
    <View style={styles.container}>
      {handleMessage()}

      {handleImage()}

      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Ir para a página inicial"
        titleStyle={styles.buttonTitle}
        style={styles.submitButtonContainer}
      />
    </View>
  );
}

export { Feedback };
