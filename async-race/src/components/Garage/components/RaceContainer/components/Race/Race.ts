import { createElem } from '../../../../../../utils/create-element';
import { renderButton } from '../../../../../Button/Button';
import styles from './Race.module.scss';
import { removeHandler } from './RaceHandlers/removeHandler';
import { selectHandler } from './RaceHandlers/selectHandler';
import { raceHandler } from './RaceHandlers/raceHandler';

export const renderRace = (name: string, color: string, id: number): HTMLElement => {
  const raceContainer: HTMLElement = createElem('div', styles['race']);

  const btnsTop: HTMLElement = createElem('div', 'race__car-controls');
  const selectBtn: HTMLElement = renderButton('select', '', ['slim', 'select']);
  selectBtn.id = id.toString();

  selectBtn.onclick = selectHandler;

  const removeBtn: HTMLElement = renderButton('remove', '', ['slim', 'select']);
  removeBtn.id = id.toString();

  removeBtn.onclick = removeHandler;

  const carName: HTMLElement = createElem('p', 'race__car-name');
  carName.innerHTML = name;
  btnsTop.append(selectBtn, removeBtn, carName);

  const btnsBottom: HTMLElement = createElem('div', 'race__car-controls');
  const driveBtn: HTMLElement = renderButton('drive', '', ['race', 'slim', 'select']);
  driveBtn.id = id.toString();

  driveBtn.onclick = raceHandler;

  const restartBtn: HTMLElement = renderButton('restart', '', ['slim', 'select']);
  btnsBottom.append(driveBtn, restartBtn);

  const car: HTMLElement = createElem('div', 'race__car');
  car.id = id.toString();
  car.innerHTML = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path fill="${color}" d="M5183.7,1536.2c-370.7-36.4-681.8-89.4-698.3-115.8c-9.9-16.5,3.3-29.8,26.5-29.8c66.2,0-62.9-79.4-675.2-413.7l-572.6-314.4h-324.3c-360.8,0-671.9-39.7-1065.7-135.7c-393.8-99.3-479.9-129.1-479.9-178.7c0-39.7-192-115.8-513-201.9c-53-13.2-56.3-9.9-16.5,16.5C990.3,252,814.9,179.2,483.9,7.1L119.9-181.5l-9.9-301.2L100-787.2l129.1-49.6C417.7-913,695.7-956,1149.2-979.2l410.4-23.1l-53,155.5C1433.8-635,1457-264.3,1553-79c92.7,185.3,370.7,426.9,559.4,489.8c476.6,162.2,986.3-49.6,1208-499.7c89.4-182,105.9-251.5,102.6-436.9c0-119.1-19.8-261.4-39.7-314.4c-19.9-52.9-33.1-99.3-29.8-102.6c9.9-6.6,4074.2,69.5,4087.5,79.4c3.3,0-10,59.6-29.8,125.8c-79.4,287.9,59.5,731.4,291.2,933.3c225.1,198.6,367.4,251.5,675.2,251.5c231.7,0,307.8-13.2,430.3-79.4c201.9-105.9,354.2-251.5,456.8-450.1c72.8-139,86-208.5,89.3-436.9v-271.4l82.7,19.9c148.9,36.4,347.5,132.4,397.2,192c72.9,89.4,92.7,873.7,23.2,979.7c-29.8,43-76.2,205.2-109.2,357.4c-33.1,158.9-79.4,281.3-105.9,291.3c-23.2,9.9-105.9,0-178.7-26.5c-175.4-56.3-549.4-9.9-1592,205.2c-1287.5,268.1-1456.3,291.3-2025.6,307.8C5554.4,1542.8,5256.5,1542.8,5183.7,1536.2z M6424.8,1294.6c360.8-92.7,628.8-198.6,628.8-251.5c0-96-1482.7-364.1-2459.1-443.5c-493.2-43-1082.3-46.3-1082.3-9.9c3.3,43,307.8,248.2,609,407.1c324.4,168.8,741.4,311.1,1062.4,360.8C5484.9,1403.8,6136.9,1370.7,6424.8,1294.6z M1298.1-347c-132.4-152.3-129.1-182,16.5-182c148.9,0,139-79.4-13.2-92.7c-148.9-16.6-195.3-86.1-99.3-152.3c72.8-52.9,72.8-52.9-66.2-52.9c-76.1,0-139,16.5-139,33.1c0,69.5,231.7,493.1,288,526.2C1397.4-201.4,1400.7-231.2,1298.1-347z M454.1-578.7c129.1-205.2,122.5-264.8-29.8-235c-135.7,26.5-182,72.8-208.5,205.2C166.2-343.7,292-327.2,454.1-578.7z"/><path d="M963.8,232.1c-26.5-16.5-33.1-33.1-16.5-33.1c19.9,0,56.3,16.5,82.7,33.1c26.5,16.5,36.4,33.1,16.5,33.1C1030,265.2,990.3,248.7,963.8,232.1z"/><path d="M2105.7,202.4C1827.7,73.3,1649-211.3,1649-529.1c0-837.4,1115.4-1092.2,1509.2-347.5c89.4,172.1,96,509.7,13.3,681.8c-79.4,162.2-244.9,324.3-403.8,397.2C2592.2,285.1,2281.1,281.8,2105.7,202.4z M2641.9-2.8c321-119.1,450.1-539.5,261.5-827.4c-231.7-347.5-764.5-321-949.9,46.3c-89.4,172.1-76.1,430.3,33.1,582.5C2128.9-2.8,2413.5,83.2,2641.9-2.8z"/><path d="M8020.1,179.2c-479.9-238.3-585.9-844-215.1-1241.1c479.9-513,1317.2-218.4,1360.3,479.9C9205,50.1,8586.1,460.5,8020.1,179.2z M8642.3-42.5c165.5-86.1,297.9-297.9,297.9-476.6c0-350.8-367.4-642.1-695-542.8c-400.5,119.2-552.7,585.8-287.9,887C8149.2,43.5,8394.1,89.8,8642.3-42.5z"/></g></g>
  </svg>`;

  const finish: HTMLElement = createElem('div', 'race__finish');
  raceContainer.append(btnsTop, btnsBottom, car, finish);

  return raceContainer;
};
