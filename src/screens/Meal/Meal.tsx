import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from '../../components/Input';
import styles from './styles';
import { Button } from '../../components/Button';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { Circle } from '../../assets/Loader';
import { StackScreenProps } from '../../routes/types';
import {
  ArrowLeft,
  PencilSimpleLine,
  Trash,
  TrashSimple,
} from 'phosphor-react-native';

type ButtonProp = {
  active: boolean;
  backgroundColor: string;
  borderColor: string;
};

function Meal({ navigation, route }: StackScreenProps<'Meal'>): JSX.Element {
  const { name, description, date, time, isPartOfDiet } = route.params;

  const [data, setData] = useState({
    name,
    description,
    date,
    time,
    isPartOfDiet,
  });

  const [positiveButton, setPositiveButton] = useState<ButtonProp>({
    active: false,
    backgroundColor: Colors.grays.gray6,
    borderColor: Colors.grays.gray1,
  });

  const [negativeButton, setNegativeButton] = useState<ButtonProp>({
    active: false,
    backgroundColor: Colors.grays.gray6,
    borderColor: Colors.grays.gray1,
  });

  const handleRegister = (value: string): void => {
    if (value === 'positive') {
      setPositiveButton({
        active: true,
        backgroundColor: Colors.greens.greensLight,
        borderColor: Colors.greens.greensDark,
      });
      setNegativeButton({
        active: false,
        backgroundColor: Colors.grays.gray6,
        borderColor: Colors.grays.gray1,
      });
    } else {
      setNegativeButton({
        active: true,
        backgroundColor: Colors.reds.redLight,
        borderColor: Colors.reds.redDark,
      });
      setPositiveButton({
        active: false,
        backgroundColor: Colors.grays.gray6,
        borderColor: Colors.grays.gray1,
      });
    }
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleNewMeal = (): void => {
    navigation.navigate('Feedback', {
      partOfDiet: data.isPartOfDiet,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <ArrowLeft color={Colors.grays.gray2} size={24} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontFamily: Fonts.bold,
            }}
          >
            Refeição
          </Text>
        </View>

        <View style={styles.content}>
          <View>
            {/* <Input title="Nome" style={styles.inputText} /> */}
            <Text style={styles.title}>{data.name}</Text>
          </View>

          <View>
            {/* <Input
              title="Descrição"
              style={[
                styles.inputText,
                {
                  height: 120,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  verticalAlign: 'top',
                },
              ]}
              multiline
            /> */}
            <Text>{data.description}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              height: 70,
            }}
          >
            <View>
              {/* <Input
                title="Data"
                style={styles.inputDatetime}
                keyboardType="numeric"
              /> */}
              <Text style={styles.title}>Data e hora</Text>

              <Text>{data.date + ' às ' + data.time}</Text>
            </View>

            <View>
              {/* <Input
                title="Hora"
                style={styles.inputDatetime}
                keyboardType="numeric"
              /> */}
            </View>
          </View>

          <View>
            {/* <Text style={styles.title}>Está dentro da dieta?</Text> */}

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 20,
                height: 70,
              }}
            >
              <Button
                disabled={positiveButton.active}
                onPress={() => {
                  handleRegister('positive');
                }}
                title="Sim"
                titleStyle={{
                  fontSize: 14,
                  lineHeight: 18.2,
                  fontFamily: Fonts.bold,
                  color: Colors.grays.gray1,
                }}
                style={[styles.validateButtonContainer, positiveButton]}
              >
                <Circle color={Colors.greens.greensDark} />
              </Button>

              <Button
                disabled={negativeButton.active}
                onPress={() => {
                  handleRegister('negative');
                }}
                title="Não"
                titleStyle={{
                  fontSize: 14,
                  lineHeight: 18.2,
                  fontFamily: Fonts.bold,
                  color: Colors.grays.gray1,
                }}
                style={[styles.validateButtonContainer, negativeButton]}
              >
                <Circle color={Colors.reds.redDark} />
              </Button>
            </View> */}
            <View style={styles.tag}>
              <Circle
                color={
                  data.isPartOfDiet
                    ? Colors.greens.greensDark
                    : Colors.reds.redDark
                }
              />
              <Text>
                {data.isPartOfDiet ? 'dentro da dieta' : 'fora da dieta'}
              </Text>
            </View>
          </View>

          <Button
            // onPress={handleNewMeal}
            title="Editar refeição"
            titleStyle={{
              fontSize: 14,
              lineHeight: 18.2,
              fontFamily: Fonts.bold,
              color: Colors.white,
            }}
            style={styles.submitButtonContainer}
          >
            <PencilSimpleLine color={Colors.white} size={18} />
          </Button>

          <Button
            // onPress={handleNewMeal}
            title="Excluir refeição"
            titleStyle={{
              fontSize: 14,
              lineHeight: 18.2,
              fontFamily: Fonts.bold,
              color: Colors.grays.gray1,
            }}
            style={[
              styles.submitButtonContainer,
              {
                backgroundColor: Colors.white,
              },
            ]}
          >
            <Trash color={Colors.grays.gray1} size={18} />
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export { Meal };
