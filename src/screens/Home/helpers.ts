import Colors from '../../constants/Colors';
import * as yup from 'yup';

const getCardStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensLight : Colors.reds.redLight;
};

const getArrowStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensDark : Colors.reds.redDark;
};

const schema = yup.object({
  name: yup.string().required('Nome vazio!'),
  description: yup.string().required('Descrição vazia!'),
  date: yup.string().required(),
  time: yup.string().required(),
  isPartOfDiet: yup.boolean().required(),
});

export { getCardStatus, getArrowStatus, schema };
