import { SPACES } from './constants';
import { rgbToHex, rgbToHsl } from './converter';

const randomRangedNumber = () => Math.floor(Math.random() * 256);

const randomRgb = () => ({
  red: randomRangedNumber(),
  green: randomRangedNumber(),
  blue: randomRangedNumber(),
});

const generateColorSpace = (type, rgb) => {
  const { red, green, blue } = rgb;
  const hex = rgbToHex(red, green, blue);
  switch (type) {
    case SPACES.rgb:
      return { ...rgb, type: SPACES.rgb, hex };
    case SPACES.hsl:
      return { ...rgbToHsl(red, green, blue), type: SPACES.hsl, hex };
    default:
      break;
  }
};

const getRandomType = (spaces) => {
  const values = Object.values(spaces);
  return values[Math.floor(Math.random() * values.length)];
};

// TODO: need to refactor for fine grain randomness
export const generateColorSet = () => {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    const rgb = randomRgb();
    const type = getRandomType(SPACES);
    const colorSpace = generateColorSpace(type, rgb);
    colors.push(colorSpace);
  }
  return colors;
};
