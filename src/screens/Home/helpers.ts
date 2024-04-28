import Colors from '../../constants/Colors';

const getCardStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensLight : Colors.reds.redLight;
};

const getArrowStatus = (value: number): string => {
  return value >= 60 ? Colors.greens.greensDark : Colors.reds.redDark;
};

export { getCardStatus, getArrowStatus };
