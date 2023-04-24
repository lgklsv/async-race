import { hexSymbols } from '../const/hex-symbols';

export const generateRandomColor = (): string => {
  let hexColor = '';
  for (let i = 0; i < 6; i++) {
    hexColor += hexSymbols[Math.floor(Math.random() * hexSymbols.length)];
  }
  return `#${hexColor}`;
};
