import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

type MealProps = {
  children: ReactNode;
};

type ItemProps = {
  name: string;
  date: string;
  time: string;
  description: string;
  isPartOfDiet: boolean;
};

type ListProps = {
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
      day: '12/08/2022',
      meals: [
        {
          name: 'Sanduíche',
          date: '12/08/2022',
          time: '20:00',
          description:
            'Sanduíche de pão integral com atum e salada de alface e tomate',
          isPartOfDiet: false,
        },
        {
          name: 'Vitamina de banana',
          date: '12/08/2022',
          time: '09:30',
          description: 'Vitamina de banana',
          isPartOfDiet: true,
        },
      ],
    },
    {
      day: '13/08/2022',
      meals: [
        {
          name: 'Whey',
          date: '13/08/2022',
          time: '16:00',
          description: 'Whey',
          isPartOfDiet: true,
        },
        {
          name: 'Salada cesar com frango',
          date: '13/08/2022',
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
