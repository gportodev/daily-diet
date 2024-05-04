import React, { useState, useMemo } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from '../../components/Input';
import styles from './styles';
import { Button } from '../../components/Button';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { Circle } from '../../assets/Loader';
import { StackScreenProps } from '../../routes/types';

import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native';
import { DeleteModal } from '../../components/DeleteModal';
import { ButtonProps } from '../../components/Button/types';
import { ListProps, useMeal } from '../../context/Context';
import { Loader } from '../../components/Loader/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Home/helpers';

function Meal({ navigation, route }: StackScreenProps<'Meal'>): JSX.Element {
  const { mealList, setMealList } = useMeal();
  const { id, name, description, date, time, isPartOfDiet } = route.params;
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [editable, setEditable] = useState(false);

  const methods = useForm({
    defaultValues: {
      id,
      name,
      description,
      date,
      time,
      isPartOfDiet,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const watchId = methods.watch('id');
  const watchName = methods.watch('name');
  const watchDate = methods.watch('date');
  const watchIsPartOfDiet = methods.watch('isPartOfDiet');

  const buttons: ButtonProps[] = [
    {
      title: 'Cancelar',
      onPress: () => {
        setModal(!modal);
      },
      titleStyle: {
        fontSize: 14,
        fontFamily: Fonts.bold,
        lineHeight: 18.2,
        color: Colors.grays.gray1,
      },
    },
    {
      title: 'Sim, excluir',
      onPress: handleDeleteMeal,
      titleStyle: {
        fontSize: 14,
        fontFamily: Fonts.bold,
        lineHeight: 18.2,
        color: Colors.white,
      },
      style: {
        backgroundColor: Colors.grays.gray2,
      },
    },
  ];

  const handleEdit = (): void => {
    setIsLoading(!isLoading);

    const findPreviousItemList = mealList.find(item => item.day === date);

    const dayListMeal = mealList.find(item => item.day === watchDate);

    if (!dayListMeal && findPreviousItemList) {
      console.log('CENÁRIO: Nova data');
      const filteredList = findPreviousItemList.meals.filter(
        item => item.id !== watchId,
      );

      const newPreviousList = {
        day: date,
        meals: filteredList,
      };

      const newDayListMeal: ListProps = {
        day: watchDate,
        meals: [methods.getValues()],
      };

      const arr = [...mealList];

      arr.push(newDayListMeal);

      const updatedList = arr.map(item => {
        if (item.day === date) {
          return newPreviousList;
        }

        return item;
      });

      const listWithMeals = updatedList.filter(item => item.meals.length > 0);

      setMealList(listWithMeals);
    } else {
      // update the item props changing the date to a existing one

      if (date !== watchDate && findPreviousItemList && dayListMeal) {
        const filteredList = findPreviousItemList.meals.filter(
          item => item.id !== watchId,
        );

        const newPreviousList = {
          day: date,
          meals: filteredList,
        };

        const editedItem = methods.getValues();

        dayListMeal.meals.push(editedItem);

        const updatedList = mealList.map(item => {
          if (item.day === date) {
            return newPreviousList;
          }

          return item;
        });

        const listWithMeals = updatedList.filter(item => item.meals.length > 0);

        setMealList(listWithMeals);
      } else if (dayListMeal) {
        // update item props but not the date
        const updateDayListMeal = dayListMeal.meals.map(item => {
          if (item.id === watchId) {
            const newMeal = methods.getValues();
            return newMeal;
          }
          return item;
        });

        const updatedList = mealList.map(item => {
          if (item.day === watchDate) {
            return {
              day: item.day,
              meals: updateDayListMeal,
            };
          }
          return item;
        });

        setMealList(updatedList);
      }
    }

    setTimeout(() => {
      setIsLoading(!isLoading);
      navigation.navigate(`Home`);
    }, 3000);
  };

  const handleDeleteMeal = (): void => {
    setIsLoading(!isLoading);

    const dayListMeal = mealList.find(item => {
      return item.day === watchDate;
    })?.meals;

    const newDayListMeal = dayListMeal?.filter(item => item.name !== watchName);

    if (newDayListMeal && newDayListMeal.length > 0) {
      const newMealList = mealList.map(item => {
        if (item.day === watchDate) {
          return {
            day: item.day,
            meals: newDayListMeal,
          };
        }

        return item;
      });

      setMealList(newMealList);
      setModal(!modal);

      setTimeout(() => {
        setIsLoading(!isLoading);
        navigation.navigate(`Home`);
      }, 3000);
    } else {
      const newMealList = mealList.filter(item => item.day !== watchDate);

      setMealList(newMealList);
      setModal(!modal);

      setTimeout(() => {
        setIsLoading(!isLoading);
        navigation.navigate(`Home`);
      }, 3000);
    }
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const renderHeader = (): JSX.Element => (
    <View style={styles.header}>
      <View
        style={{
          width: '100%',
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
          {editable ? 'Editar refeição' : 'Refeição'}
        </Text>
      </View>
    </View>
  );

  const isPartOfTheDietbuttons = [
    {
      title: 'Sim',
      active: watchIsPartOfDiet,
      iconColor: Colors.greens.greensDark,
      style: {
        backgroundColor: watchIsPartOfDiet
          ? Colors.greens.greensLight
          : Colors.grays.gray6,
        borderColor: watchIsPartOfDiet
          ? Colors.greens.greensDark
          : Colors.grays.gray1,
      },
    },
    {
      title: 'Não',
      active: !watchIsPartOfDiet,
      iconColor: Colors.reds.redDark,
      style: {
        backgroundColor: !watchIsPartOfDiet
          ? Colors.reds.redLight
          : Colors.grays.gray6,
        borderColor: !watchIsPartOfDiet
          ? Colors.reds.redDark
          : Colors.grays.gray1,
      },
    },
  ];

  const handleDiet = (button: string): void => {
    if (button === 'Sim') {
      methods.setValue('isPartOfDiet', true);
    } else {
      methods.setValue('isPartOfDiet', false);
    }
  };

  const isSubmitDisabled = useMemo(
    () => !methods.formState.isDirty || !methods.formState.isValid,
    [methods.formState.isDirty, methods.formState.isValid],
  );

  const renderContent = (): JSX.Element => (
    <View style={styles.content}>
      <FormProvider {...methods}>
        <View>
          {editable ? (
            <Controller
              name="name"
              render={({ field, fieldState }) => (
                <Input
                  editable={editable}
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
          ) : (
            <Text
              style={[
                styles.title,
                {
                  fontSize: 20,
                  lineHeight: 26,
                },
              ]}
            >
              {methods.getValues('name')}
            </Text>
          )}
          {methods.formState.errors.name && (
            <Text
              style={{
                color: Colors.reds.redDark,
              }}
            >
              {methods.formState.errors.name.message}
            </Text>
          )}
        </View>

        <View>
          {editable ? (
            <Controller
              name="description"
              render={({ field, fieldState }) => (
                <Input
                  editable={editable}
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
          ) : (
            <Text style={styles.info}>{methods.getValues('description')}</Text>
          )}
          {methods.formState.errors.description && (
            <Text
              style={{
                color: Colors.reds.redDark,
              }}
            >
              {methods.formState.errors.description.message}
            </Text>
          )}
        </View>

        <View>
          {editable ? (
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
                      editable={editable}
                      masked
                      maskedType="99/99/9999"
                      title="Data"
                      style={styles.inputDatetime}
                      {...{ ...field, ...fieldState }}
                    />
                  )}
                />
                {methods.formState.errors.date && (
                  <Text
                    style={{
                      color: Colors.reds.redDark,
                    }}
                  >
                    {methods.formState.errors.date.message}
                  </Text>
                )}
              </View>

              <View>
                <Controller
                  name="time"
                  render={({ field, fieldState }) => (
                    <Input
                      editable={editable}
                      masked
                      maskedType="99:99"
                      title="Hora"
                      style={styles.inputDatetime}
                      {...{ ...field, ...fieldState }}
                    />
                  )}
                />
                {methods.formState.errors.time && (
                  <Text
                    style={{
                      color: Colors.reds.redDark,
                    }}
                  >
                    {methods.formState.errors.time.message}
                  </Text>
                )}
              </View>
            </View>
          ) : (
            <>
              <Text style={styles.title}>Data e hora</Text>

              <Text>
                {methods.getValues('date') + ' às ' + methods.getValues('time')}
              </Text>
            </>
          )}
        </View>

        <View>
          {editable ? (
            <View>
              <Text style={styles.title}>Está dentro da dieta?</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 20,
                  height: 70,
                }}
              >
                {isPartOfTheDietbuttons.map(button => {
                  return (
                    <Button
                      key={button.title}
                      disabled={button.active}
                      onPress={() => {
                        handleDiet(button.title);
                      }}
                      title={button.title}
                      titleStyle={{
                        fontSize: 14,
                        lineHeight: 18.2,
                        fontFamily: Fonts.bold,
                        color: Colors.grays.gray1,
                      }}
                      style={[styles.validateButtonContainer, button.style]}
                    >
                      <Circle color={button.iconColor} />
                    </Button>
                  );
                })}
              </View>
            </View>
          ) : (
            <View style={styles.tag}>
              <Circle
                color={
                  watchIsPartOfDiet
                    ? Colors.greens.greensDark
                    : Colors.reds.redDark
                }
              />
              <Text>
                {watchIsPartOfDiet ? 'dentro da dieta' : 'fora da dieta'}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.buttonsWrap}>
          {editable ? (
            <>
              <Button
                onPress={handleEdit}
                title="Salvar alterações"
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

              <Button
                onPress={() => {
                  setEditable(false);
                }}
                title="Cancelar"
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
              />
            </>
          ) : (
            <>
              <Button
                onPress={() => {
                  setEditable(true);
                }}
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
                onPress={() => {
                  setModal(!modal);
                }}
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
            </>
          )}
        </View>
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
      <DeleteModal state={modal} setState={setModal} buttons={buttons} />
      <View
        style={[
          styles.container,
          {
            backgroundColor: editable
              ? Colors.grays.gray5
              : Colors.greens.greensLight,
            gap: editable ? -16 : -24,
          },
        ]}
      >
        {renderHeader()}

        {renderContent()}
      </View>
    </ScrollView>
  );
}

export { Meal };
