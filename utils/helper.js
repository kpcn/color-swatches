import { SPACES } from '@/lib/colors/constants';

export const getColors = async () => {
  const rest = await fetch('http://localhost:3000/api/v1/colors');
  return await rest.json();
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const roundingTwoDecimal = (num) => (Math.round(num * 100) / 100).toFixed(2);

export const formatColorDescription = (color) => {
  switch (color.type) {
    case SPACES.rgb:
      const { red, green, blue } = color;
      return `${color.type}(${red}, ${green}, ${blue})`;
    case SPACES.hsl:
      const { hue, saturation, lightness } = color;
      return `${color.type}(${roundingTwoDecimal(hue)}, ${roundingTwoDecimal(
        saturation
      )}, ${roundingTwoDecimal(lightness)})`;
    default:
      return '';
  }
};
