import Colors from '../../constants/Colors';
import * as yup from 'yup';

const getCardStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensLight : Colors.reds.redLight;
};

const getArrowStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensDark : Colors.reds.redDark;
};

const schema = yup.object({
  name: yup
    .string()
    .required('Nome obrigatório')
    .matches(/[a-zA-Z]/, 'Nome inválido'),
  description: yup.string().min(20, 'Mínimo 20 caracteres'),
  date: yup
    .string()
    .required('Data obrigatória')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
      'Data inválida',
    ),
  time: yup
    .string()
    .required('Hora obrigatória')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Hora inválida'),
  isPartOfDiet: yup.boolean().required(),
});

export { getCardStatus, getArrowStatus, schema };
