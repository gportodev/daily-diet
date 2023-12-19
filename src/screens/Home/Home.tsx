import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import { PencilSimpleLine } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import StatusTrue from '../../assets/svg/true.svg';
import StatusFalse from '../../assets/svg/false.svg';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import styles from './styles';
import { Card } from '../../components/Card';

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header />

      <Card
        number={'90.86'}
        text={'das refeições dentro da dieta'}
        percent
        icon
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
          backgroundColor: Colors.greens.greensLight,
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

      {/* <Button
        title="Label"
        titleStyle={{
          fontSize: 14,
          lineHeight: 18.2,
          fontFamily: Fonts.bold,
          color: Colors.grays.gray1,
        }}
        style={{
          width: 114,
          height: 50,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Colors.grays.gray1,
          borderRadius: 6,
        }}
      >
        <PencilSimpleLine color={Colors.grays.gray1} size={18} />
      </Button>

      <Button
        title="Sim"
        titleStyle={{
          fontSize: 14,
          lineHeight: 18.2,
          fontFamily: Fonts.bold,
          color: Colors.grays.gray1,
        }}
        style={{
          height: 50,
          width: 159.5,
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Colors.grays.gray1,
          borderRadius: 6,
        }}
      >
        <StatusTrue />
      </Button>
      <Button
        title="Não"
        titleStyle={{
          fontSize: 14,
          lineHeight: 18.2,
          fontFamily: Fonts.bold,
          color: Colors.grays.gray1,
        }}
        style={{
          height: 50,
          width: 159.5,
          gap: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Colors.grays.gray1,
          borderRadius: 6,
        }}
      >
        <StatusFalse />
      </Button>

      <Input
        style={{
          width: 406,
          height: 48,
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Colors.grays.gray5,
          padding: 14,
          gap: 8,
        }}
      /> */}
    </View>
  );
}

export { Home };
