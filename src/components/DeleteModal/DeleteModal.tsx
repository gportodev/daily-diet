import React from 'react';
import { Modal, View, Text } from 'react-native';
import styles from './styles';
import { Button } from '../Button';
import { ButtonProps } from '../Button/types';

type DeleteModalProps = {
  state: boolean;
  setState: (value: boolean) => void;
  buttons: ButtonProps[];
};

function DeleteModal({
  state,
  setState,
  buttons,
}: DeleteModalProps): JSX.Element {
  return (
    <Modal visible={state} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Text style={styles.title}>
              Deseja realmente excluir o registro da refeição?
            </Text>
          </View>

          <View style={styles.buttonsView}>
            {buttons.map(button => {
              return (
                <Button
                  key={button.title}
                  title={button.title}
                  titleStyle={button.titleStyle}
                  onPress={button.onPress}
                  style={[button.style, styles.button]}
                />
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export { DeleteModal };
