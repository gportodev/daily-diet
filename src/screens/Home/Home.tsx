import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import { PencilSimpleLine } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import StatusTrue from '../../assets/svg/true.svg';
import StatusFalse from '../../assets/svg/false.svg';
import { Input } from '../../components/Input';

function Home(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
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
      />
    </View>
  );
}

export { Home };
