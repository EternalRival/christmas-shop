import clsx from 'clsx';
import { Icon } from '~/assets/icons/icon.enum';
import SVGIcon from '~/components/svg-icon';
import { button } from '~/utils/create-element';
import scrollWindowToTop from '~/utils/scroll-window-to-top';
import styles from './back-to-top-button.module.css';

export default class BackToTopButton {
  private readonly node: HTMLButtonElement;

  constructor() {
    this.node = button(
      { className: clsx(styles['floating-up-button'], styles['hidden']), onclick: scrollWindowToTop },
      [SVGIcon({ name: Icon.ARROW_UP })],
    );

    this.initAutoHiding();
  }

  public getNode() {
    return this.node;
  }

  private initAutoHiding() {
    window.addEventListener('scroll', () => {
      if ('hidden' in styles) {
        this.getNode().classList.toggle(styles['hidden'], window.scrollY < 1);
      }
    });
  }
}
