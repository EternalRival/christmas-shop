import { button } from '~/utils/create-element';
import SVGIcon from '../svg-icon';
import { Icon } from '~/assets/icons/icon.enum';
import styles from './back-to-top-button.module.css';
import scrollWindowToTop from '~/utils/scroll-window-to-top';
import clsx from 'clsx';

export default class BackToTopButton {
  private readonly node: HTMLButtonElement;

  constructor() {
    this.node = button(
      { className: clsx(styles['floating-up-button'], styles['hidden']), onclick: scrollWindowToTop },
      [SVGIcon({ name: Icon.ARROW_UP })],
    );

    this.initAutoHiding();
  }

  private initAutoHiding() {
    window.addEventListener('scroll', () => {
      if ('hidden' in styles) {
        this.node.classList.toggle(styles['hidden'], window.scrollY < 1);
      }
    });
  }

  public getNode() {
    return this.node;
  }
}
