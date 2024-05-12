import React from 'react';
import styles from './styles';
import { ForkKnife } from 'phosphor-react-native';
import Colors from '../../constants/Colors';
import { View, Image } from 'react-native';
import { Logo } from '../../assets/Loader';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.wrapper}>
          <ForkKnife color={Colors.grays.gray1} weight="bold" size={37} />

          <Logo />
        </View>

        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/34238796?v=4',
          }}
        />
      </View>
    </View>
  );
}

export { Header };
