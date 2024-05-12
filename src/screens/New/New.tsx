import React, { useMemo, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Input } from '../../components/Input';
import styles from './styles';
import { Button } from '../../components/Button';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { Circle } from '../../assets/Loader';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/types';
import { ArrowLeft } from 'phosphor-react-native';
import { ItemProps, ListProps, useMeal } from '../../context/Context';
import { Loader } from '../../components/Loader/Loader';
import { schema } from '../Home/helpers';
import { ValidationMessage } from '../../components/ValidationMessage';
import uuid from 'react-native-uuid';

type ButtonProp = {
  active: boolean;
  backgroundColor: string;
  borderColor: string;
};

function New(): JSX.Element {
  const { mealList, setMealList, storeList } = useMeal();
  const [isLoading, setIsLoading] = useState(false);

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

  const methods = useForm<ItemProps>({
    defaultValues: {
      id: uuid.v4(),
      name: '',
      description: '',
      date: '',
      time: '',
      isPartOfDiet: false,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const watchDate = methods.watch('date');
  const watchIsPartOfDiet = methods.watch('isPartOfDiet');

  const navigation = useNavigation<NavigationProps>();

  const dietOptionSelected = positiveButton.active || negativeButton.active;

  const isSubmitDisabled = useMemo(
    () =>
      !methods.formState.isDirty ||
      !methods.formState.isValid ||
      !dietOptionSelected,
    [dietOptionSelected, methods.formState.isDirty, methods.formState.isValid],
  );

  const handleOption = (value: string): void => {
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
      methods.setValue('isPartOfDiet', true);
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
      methods.setValue('isPartOfDiet', false);
    }
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleNewMeal = async (): Promise<void> => {
    setIsLoading(!isLoading);

    try {
      const dayListMeal = mealList.find(item => {
        return item.day === watchDate;
      });

      if (dayListMeal) {
        // add new item to an existing list meal

        const newMeal = methods.getValues();

        dayListMeal.meals.push(newMeal);

        const arr = [...mealList];

        setMealList(arr);

        await storeList(arr);
      } else {
        // add item to a new list meal

        const newDayListMeal: ListProps = {
          day: watchDate,
          meals: [methods.getValues()],
        };

        const arr = [...mealList];

        arr.push(newDayListMeal);

        setMealList(arr);
        await storeList(arr);
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar a lista!');
    } finally {
      setTimeout(() => {
        setIsLoading(!isLoading);
        navigation.navigate(`Feedback`, { partOfDiet: watchIsPartOfDiet });
      }, 3000);
    }
  };

  const renderHeader = (): JSX.Element => (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          gap: 103,
          paddingLeft: 24,
        }}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft color={Colors.grays.gray2} size={24} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            lineHeight: 23.4,
            fontFamily: Fonts.bold,
          }}
        >
          Nova refeição
        </Text>
      </View>
    </View>
  );

  const renderContent = (): JSX.Element => (
    <View style={styles.content}>
      <FormProvider {...methods}>
        <View>
          <Controller
            name="name"
            render={({ field, fieldState }) => (
              <Input
                title="Nome"
                titleStyle={{
                  fontSize: 14,
                  lineHeight: 26,
                }}
                style={styles.inputText}
                {...{ ...field, ...fieldState }}
              />
            )}
          />
          <ValidationMessage error={methods.formState.errors.name} />
        </View>

        <View>
          <Controller
            name="description"
            render={({ field, fieldState }) => (
              <Input
                title="Descrição"
                style={[
                  styles.inputText,
                  {
                    height: 120,
                    verticalAlign: 'top',
                  },
                ]}
                multiline
                maxLength={150}
                {...{ ...field, ...fieldState }}
              />
            )}
          />
          <ValidationMessage error={methods.formState.errors.description} />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 20,
              height: 70,
            }}
          >
            <View>
              <Controller
                name="date"
                render={({ field, fieldState }) => (
                  <Input
                    masked
                    maskedType="99/99/9999"
                    title="Data"
                    style={styles.inputDatetime}
                    {...{ ...field, ...fieldState }}
                  />
                )}
              />
              <ValidationMessage error={methods.formState.errors.date} />
            </View>

            <View>
              <Controller
                name="time"
                render={({ field, fieldState }) => (
                  <Input
                    masked
                    maskedType="99:99"
                    title="Hora"
                    style={styles.inputDatetime}
                    {...{ ...field, ...fieldState }}
                  />
                )}
              />
              <ValidationMessage error={methods.formState.errors.time} />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Está dentro da dieta?</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button
              disabled={positiveButton.active}
              onPress={() => {
                handleOption('positive');
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
                handleOption('negative');
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
          </View>
        </View>

        <Button
          onPress={handleNewMeal}
          title="Cadastrar refeição"
          titleStyle={{
            fontSize: 14,
            lineHeight: 18.2,
            fontFamily: Fonts.bold,
            color: Colors.white,
          }}
          style={[
            styles.submitButtonContainer,
            {
              opacity: isSubmitDisabled ? 0.5 : 1,
            },
          ]}
          disabled={isSubmitDisabled}
        />
      </FormProvider>
    </View>
  );

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Loader />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.grays.gray7,
      }}
    >
      <View style={styles.container}>
        {renderHeader()}

        {renderContent()}
      </View>
    </ScrollView>
  );
}

export { New };
