import React, { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
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

  const [editable, setEditable] = useState(false);

  const methods = useForm({
    defaultValues: {
      name,
      description,
      date,
      time,
      isPartOfDiet,
    },
  });

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

  const renderContent = (): JSX.Element => (
    <View style={styles.content}>
      <FormProvider {...methods}>
        <View>
          {editable ? (
            <Controller
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  editable={editable}
                  title="Nome"
                  titleStyle={{
                    fontSize: 14,
                    lineHeight: 26,
                  }}
                  style={styles.inputText}
                  onChangeText={onChange}
                  value={value}
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
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      verticalAlign: 'top',
                      borderWidth: 1,
                      padding: 14,
                      opacity: 1,
                    },
                  ]}
                  {...{ ...field, ...fieldState }}
                />
              )}
            />
          ) : (
            <Text style={styles.info}>{methods.getValues('description')}</Text>
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
                  render={({ field: { onChange, value } }) => (
                    <Input
                      editable={editable}
                      title="Data"
                      style={styles.inputDatetime}
                      keyboardType="numeric"
                      onChangeText={onChange}
                      value={value}
                      maxLength={10}
                    />
                  )}
                />
              </View>

              <View>
                <Controller
                  name="time"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      editable={editable}
                      title="Hora"
                      style={styles.inputDatetime}
                      keyboardType="numeric"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
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
              </View>
            </View>
          ) : (
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
          )}
        </View>

        <View style={styles.buttonsWrap}>
          {editable ? (
            <>
              <Button
                onPress={() => {
                  setEditable(false);
                }}
                title="Salvar alterações"
                titleStyle={{
                  fontSize: 14,
                  lineHeight: 18.2,
                  fontFamily: Fonts.bold,
                  color: Colors.white,
                }}
                style={styles.submitButtonContainer}
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
            </>
          )}
        </View>
      </FormProvider>
    </View>
  );

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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.grays.gray7,
      }}
    >
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
