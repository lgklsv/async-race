import { createElem } from "../../../../../../utils/create-element";
import { renderButton } from "../../../../../Button/Button";
import styles from './CarControlBtns.module.scss';

export const renderCarControlBtns = (): HTMLElement => {
  const carControlBtnsContainer: HTMLElement = createElem('div', styles['controls__car-control']);
  const raceBtn: HTMLElement = renderButton('race', 'race');
  const resetBtn: HTMLElement = renderButton('reset');
  const generateCarsBtn: HTMLElement = renderButton('generate cars', 'generate-cars');

  carControlBtnsContainer.append(raceBtn, resetBtn, generateCarsBtn);


  return carControlBtnsContainer;
} 
