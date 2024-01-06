import { ViewStyle } from 'react-native';

type StatisticsProps = {
  value: number;
  text: string;
};

type Item = {
  value: number;
  description: string;
  style: ViewStyle;
};

export { StatisticsProps, Item };
