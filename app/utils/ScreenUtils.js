import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const DESIGN_WIDTH = 360;
const DESIGN_HEIGHT = 640;

export const viewPortCalc = (px, design, screen) => {
  return Math.ceil((px * screen) / design);
};

export const vw = px => {
  return viewPortCalc(px, DESIGN_WIDTH, SCREEN_WIDTH);
};

export const vh = px => {
  return viewPortCalc(px, DESIGN_HEIGHT, SCREEN_HEIGHT);
};

export function fontScale(sWidth, dWidth) {
  return sWidth / dWidth;
}

export const toDp = px => {
  return (px * SCREEN_WIDTH) / 380;
};

export const getWidthRatio = () => {
  return SCREEN_WIDTH / 380;
};

export const getDeviceWidth = () => {
  return SCREEN_WIDTH;
};

const pixelRatio = fontScale(SCREEN_WIDTH, DESIGN_WIDTH);
