import { ROUTER_PATHS } from '../const/router-paths';
import { PATH_NAMES } from '../const/path-names';

export const pathResolver = (pathname: string): void => {
  let route = ROUTER_PATHS[pathname] || ROUTER_PATHS[PATH_NAMES.notFound];

  route.template();
  document.title = route.title;
};

pathResolver(window.location.pathname);

window.addEventListener('popstate', (): void => {
  pathResolver(window.location.pathname);
});
