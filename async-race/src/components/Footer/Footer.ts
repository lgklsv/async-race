import { createElem } from '../../utils/create-element';
import { createLink } from '../../utils/create-link-element';
import styles from './Footer.module.scss';

export const renderFooter = (): HTMLElement => {
  const footer: HTMLElement = createElem('footer', styles['footer']);
  const footerContainer: HTMLElement = createElem('div', 'footer__container');

  // credentials (top)
  const footerCredentials: HTMLElement = createElem('div', 'footer__credentials');
  footerCredentials.innerHTML = 'async race engineered by ';

  const footerGitLink: HTMLElement = createLink(
    'https://github.com/lgklsv',
    'footer__link',
    true,
    'lgklsv'
  );

  footerCredentials.append(footerGitLink);

  // copyright (bottom)
  const footerCopyright: HTMLElement = createElem('div', 'footer__copyright');

  const rsSchoolLink: HTMLElement = createLink('https://rs.school/js/', 'rsSchoolLink', true, '');

  const copyrightText: HTMLElement = createElem('p', 'footer__text');
  copyrightText.innerHTML = '© 2022 Async race. All rights reserved.';

  footerCopyright.append(rsSchoolLink, copyrightText);

  footerContainer.append(footerCredentials, footerCopyright);
  footer.append(footerContainer);
  return footer;
};
