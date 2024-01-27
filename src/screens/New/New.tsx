import React from 'react';
import { View } from 'react-native';
import { Input } from '../../components/Input';
import styles from './styles';

function New(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Input title="Nome" style={styles.inputText} />
        </View>

        <View>
          <Input title="Descrição" style={styles.inputText} />
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
            <Input title="Data" style={styles.inputDatetime} />
          </View>

          <View>
            <Input title="Hora" style={styles.inputDatetime} />
          </View>
        </View>
      </View>
    </View>
  );
}

export { New };
