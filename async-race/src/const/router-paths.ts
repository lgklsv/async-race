import { projectName } from './project-name';
import { garage } from '../pages/garage';
import { winners } from '../pages/winners';
import { PATH_NAMES } from './path-names';
import { notFound } from '../pages/404';

export const ROUTER_PATHS: Paths = {
  [PATH_NAMES.app]: {
    template: garage,
    title: `${projectName}`,
  },
  [PATH_NAMES.winners]: {
    template: winners,
    title: `winners | ${projectName}`,
  },
  [PATH_NAMES.notFound]: {
    template: notFound,
    title: `404 | ${projectName}`,
  },
};
