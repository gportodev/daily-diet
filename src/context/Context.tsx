import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

import uuid from 'react-native-uuid';

type MealProps = {
  children: ReactNode;
};

export type ItemProps = {
  id: string | number[];
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
};

const defaultValue: MealContextList = {
  mealList: [],
  setMealList: () => {},
};

const MealContext = createContext(defaultValue);

function MealProvider({ children }: MealProps): JSX.Element {
  const [mealList, setMealList] = useState<ListProps[]>([
    {
      day: '13/08/2022',
      meals: [
        {
          id: uuid.v4(),
          name: 'Sanduíche',
          date: '13/08/2022',
          time: '20:00',
          description:
            'Sanduíche de pão integral com atum e salada de alface e tomate',
          isPartOfDiet: false,
        },
        {
          id: uuid.v4(),
          name: 'Vitamina de banana',
          date: '13/08/2022',
          time: '09:30',
          description: 'Vitamina de banana',
          isPartOfDiet: true,
        },
      ],
    },
    {
      day: '12/08/2022',
      meals: [
        {
          id: uuid.v4(),
          name: 'Whey',
          date: '12/08/2022',
          time: '16:00',
          description: 'Whey',
          isPartOfDiet: true,
        },
        {
          id: uuid.v4(),
          name: 'Salada cesar com frango',
          date: '12/08/2022',
          time: '12:30',
          description: 'Salada cesar com frango',
          isPartOfDiet: true,
        },
      ],
    },
    {
      day: '11/08/2022',
      meals: [
        {
          id: uuid.v4(),
          name: 'Whey',
          date: '11/08/2022',
          time: '16:00',
          description: 'Whey',
          isPartOfDiet: true,
        },
        {
          id: uuid.v4(),
          name: 'Salada cesar com frango',
          date: '11/08/2022',
          time: '12:30',
          description: 'Salada cesar com frango',
          isPartOfDiet: true,
        },
      ],
    },
  ]);

  return (
    <MealContext.Provider value={{ mealList, setMealList }}>
      {children}
    </MealContext.Provider>
  );
}

function useMeal(): MealContextList {
  const context = useContext(MealContext);

  return context;
}

export { MealProvider, useMeal };
