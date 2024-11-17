import clsx from 'clsx';
import { button } from '~/core/utils/create-element';
import scrollWindowToTop from '~/core/utils/scroll-window-to-top';
import styles from './back-to-top-button.module.css';

const SCROLL_THRESHOLD = 300;

export default class BackToTopButton {
  private readonly node: HTMLButtonElement;

  constructor({ icon }: { icon: Node }) {
    this.node = button({ className: clsx(styles.floatingUpButton, styles.hidden), onclick: scrollWindowToTop }, [icon]);

    this.initAutoHiding();
  }

  public getNode() {
    return this.node;
  }

  private initAutoHiding() {
    window.addEventListener('scroll', () => {
      if ('hidden' in styles) {
        this.getNode().classList.toggle(styles.hidden, window.scrollY < SCROLL_THRESHOLD);
      }
    });
  }
}
