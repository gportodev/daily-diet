import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Statistics: {
    number: string;
    text: string;
  };
  New: undefined;
  Feedback: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;

export { RootStackParamList, NavigationProps };
