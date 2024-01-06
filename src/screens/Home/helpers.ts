import Colors from '../../constants/Colors';

const getCardStatus = (value: number): string => {
  return value > 90 ? Colors.greens.greensLight : Colors.reds.redLight;
};

const getArrowStatus = (value: number): string => {
  return value > 90 ? Colors.greens.greensDark : Colors.reds.redDark;
};

export { getCardStatus, getArrowStatus };
