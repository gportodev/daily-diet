import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Statistics: {
    value: number;
    text: string;
  };
  New: undefined;
  Feedback: {
    partOfDiet: boolean;
  };
};

type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type NavigationProps = NavigationProp<RootStackParamList>;

type FeedbackProps = RouteProp<RootStackParamList, 'Feedback'>;

export { RootStackParamList, NavigationProps, FeedbackProps, StackScreenProps };
