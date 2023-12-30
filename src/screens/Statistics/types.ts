import { ViewStyle } from 'react-native';

type StatisticsProps = {
  number: string;
  text: string;
};

type Item = {
  number: string;
  description: string;
  style: ViewStyle;
};

export { StatisticsProps, Item };
