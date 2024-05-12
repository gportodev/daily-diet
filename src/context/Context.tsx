import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

type MealProps = {
  children: ReactNode;
};

export type ItemProps = {
  id: string | Array<number | undefined> | undefined;
  name: string;
  date: string;
  time: string;
  description: string;
  isPartOfDiet: boolean;
};

export type ListProps = {
  day: string;
  meals: ItemProps[];
};

type MealContextList = {
  mealList: ListProps[];
  setMealList: Dispatch<SetStateAction<ListProps[]>>;
  mealsStatistics: number;
  allMeals: number;
  mealsInDiet: number;
  storeList: (list: ListProps[]) => Promise<void>;
};

const defaultValue: MealContextList = {
  mealList: [],
  setMealList: () => {},
  mealsStatistics: 0,
  allMeals: 0,
  mealsInDiet: 0,
  storeList: async () => {},
};

const MealContext = createContext(defaultValue);

function MealProvider({ children }: MealProps): JSX.Element {
  const [mealList, setMealList] = useState<ListProps[]>([]);
  const [mealsStatistics, setMealsStatistics] = useState(0);
  const [allMeals, setAllMeals] = useState(0);
  const [mealsInDiet, setMealsInDiet] = useState(0);

  const handleDietStatistics = useCallback(() => {
    let allMealsCounter = 0;
    let inDietMealsCounter = 0;

    mealList.forEach(item => {
      const dietItems = item.meals.filter(item => item.isPartOfDiet).length;

      allMealsCounter = allMealsCounter + item.meals.length;

      inDietMealsCounter = inDietMealsCounter + dietItems;
    });

    const statisticNumber =
      mealList.length > 0
        ? Number(((inDietMealsCounter * 100) / allMealsCounter).toFixed(2))
        : 0;

    setAllMeals(allMealsCounter);
    setMealsInDiet(inDietMealsCounter);
    setMealsStatistics(statisticNumber);
  }, [mealList]);

  const getList = async (): Promise<void> => {
    try {
      const jsonList = await AsyncStorage.getItem('list');

      if (jsonList !== null) {
        const convertedList = JSON.parse(jsonList);

        setMealList(convertedList);
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao buscar a lista!');
    }
  };

  const storeList = async (list: ListProps[]): Promise<void> => {
    try {
      const jsonList = JSON.stringify(list);

      await AsyncStorage.setItem('list', jsonList);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar a lista!');
    }
  };

  useEffect(() => {
    void getList();
  }, []);

  useEffect(() => {
    handleDietStatistics();
  }, [handleDietStatistics, mealList]);

  return (
    <MealContext.Provider
      value={{
        mealList,
        setMealList,
        mealsStatistics,
        allMeals,
        mealsInDiet,
        storeList,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

function useMeal(): MealContextList {
  const context = useContext(MealContext);

  return context;
}

export { MealProvider, useMeal };
